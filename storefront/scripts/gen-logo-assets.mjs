import sharp from "sharp"
import { writeFileSync } from "node:fs"
import { join } from "node:path"

const SRC = process.env.SRC
const PUB = process.env.PUB
const CREAM = { r: 0xff, g: 0xfc, b: 0xf8, alpha: 1 }

// Trim transparent borders + add proportional transparent padding
async function trimWithPadding(buf, padRatio = 0.04) {
  const trimmed = await sharp(buf).trim().toBuffer()
  const m = await sharp(trimmed).metadata()
  const pad = Math.round(Math.max(m.width, m.height) * padRatio)
  return sharp(trimmed)
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()
}

// Wrap a PNG buffer in a single-image .ico container (PNG-encoded entry)
function pngToIco(pngBuf, size) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(1, 4) // count
  const entry = Buffer.alloc(16)
  entry.writeUInt8(size >= 256 ? 0 : size, 0) // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1) // height
  entry.writeUInt8(0, 2) // colors
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // planes
  entry.writeUInt16LE(32, 6) // bpp
  entry.writeUInt32LE(pngBuf.length, 8) // size of data
  entry.writeUInt32LE(22, 12) // offset
  return Buffer.concat([header, entry, pngBuf])
}

const run = async () => {
  const raw = await sharp(SRC).ensureAlpha().toBuffer()

  // 1. Full logo (icon + wordmark), trimmed + padding
  const fullLogo = await trimWithPadding(raw, 0.05)
  writeFileSync(join(PUB, "logo.png"), fullLogo)

  // 2. Candle mark only — icon band y:267..734, then trim + padding
  const markBand = await sharp(SRC)
    .ensureAlpha()
    .extract({ left: 0, top: 267, width: 1563, height: 734 - 267 + 1 })
    .toBuffer()
  const mark = await trimWithPadding(markBand, 0.08)
  writeFileSync(join(PUB, "logo-mark.png"), mark)

  // 2b. Horizontal lockup — candle mark + handwritten wordmark side by side
  const wordBandRaw = await sharp(SRC)
    .ensureAlpha()
    .extract({ left: 0, top: 782, width: 1563, height: 1148 - 782 + 1 })
    .toBuffer()
  const wordBand = await sharp(wordBandRaw).trim().toBuffer()
  const candleTrim = await sharp(markBand).trim().toBuffer()
  // Word-forward lockup: wordmark is the dominant element, candle only
  // slightly taller so the text reads large at small nav heights.
  const WORD_H = 300
  const CANDLE_H = Math.round(WORD_H * 1.15)
  const candleH = await sharp(candleTrim).resize({ height: CANDLE_H }).toBuffer()
  const wordH = await sharp(wordBand).resize({ height: WORD_H }).toBuffer()
  const cm = await sharp(candleH).metadata()
  const wm = await sharp(wordH).metadata()
  const gap = 28
  const pad = 14
  const contentH = Math.max(cm.height, wm.height)
  const lockW = cm.width + gap + wm.width + pad * 2
  const lockH = contentH + pad * 2
  const lockup = await sharp({
    create: { width: lockW, height: lockH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([
      { input: candleH, left: pad, top: pad + Math.round((contentH - cm.height) / 2) },
      { input: wordH, left: pad + cm.width + gap, top: pad + Math.round((contentH - wm.height) / 2) },
    ])
    .png()
    .toBuffer()
  writeFileSync(join(PUB, "logo-horizontal.png"), lockup)

  // 3. OG image 1200x630, cream bg, centered full logo
  const logoForOg = await sharp(fullLogo)
    .resize({ width: 760, height: 470, fit: "inside", withoutEnlargement: true })
    .toBuffer()
  const ogm = await sharp(logoForOg).metadata()
  const og = await sharp({
    create: { width: 1200, height: 630, channels: 4, background: CREAM },
  })
    .composite([
      {
        input: logoForOg,
        left: Math.round((1200 - ogm.width) / 2),
        top: Math.round((630 - ogm.height) / 2),
      },
    ])
    .png()
    .toBuffer()
  writeFileSync(join(PUB, "og-image.png"), og)

  // 4. Favicon — maroon mark on cream 256x256 square
  const markForFav = await sharp(mark)
    .resize({ width: 188, height: 188, fit: "inside" })
    .toBuffer()
  const fm = await sharp(markForFav).metadata()
  const favPng = await sharp({
    create: { width: 256, height: 256, channels: 4, background: CREAM },
  })
    .composite([
      {
        input: markForFav,
        left: Math.round((256 - fm.width) / 2),
        top: Math.round((256 - fm.height) / 2),
      },
    ])
    .png()
    .toBuffer()
  writeFileSync(join(PUB, "favicon.ico"), pngToIco(favPng, 256))

  // Apple touch icon — maroon mark on cream 180x180 (iOS shows it as-is)
  const markForApple = await sharp(mark)
    .resize({ width: 130, height: 130, fit: "inside" })
    .toBuffer()
  const am = await sharp(markForApple).metadata()
  const appleIcon = await sharp({
    create: { width: 180, height: 180, channels: 4, background: CREAM },
  })
    .composite([
      {
        input: markForApple,
        left: Math.round((180 - am.width) / 2),
        top: Math.round((180 - am.height) / 2),
      },
    ])
    .png()
    .toBuffer()
  writeFileSync(join(PUB, "apple-icon.png"), appleIcon)

  // report sizes
  for (const f of ["logo.png", "logo-mark.png", "logo-horizontal.png", "og-image.png", "favicon.ico", "apple-icon.png"]) {
    const meta = await sharp(join(PUB, f)).metadata().catch(() => null)
    console.log(f, meta ? `${meta.width}x${meta.height}` : "(ico)")
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
