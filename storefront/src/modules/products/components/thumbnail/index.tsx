import { clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  isPriority?: boolean
  "data-testid"?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  isPriority,
  "data-testid": dataTestid,
}) => {
  const initialImage = thumbnail || images?.[0]?.url
  const hoverImage = images?.[1]?.url

  return (
    <div
      className={clx(
        "relative w-full overflow-hidden bg-kefi-paper/20 group-hover:opacity-100 transition-opacity ease-in-out duration-300",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[4/5]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
    >
      <ImageOrPlaceholder
        image={initialImage}
        size={size}
        isPriority={isPriority}
      />
      {hoverImage && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-10">
          <Image
            src={hoverImage}
            alt="Thumbnail Hover"
            className="object-cover object-center"
            draggable={false}
            quality={75}
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            fill
          />
        </div>
      )}
    </div>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
  isPriority,
}: Pick<ThumbnailProps, "size" | "isPriority"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center transition-transform duration-1000 group-hover:scale-105"
      draggable={false}
      quality={75}
      priority={isPriority}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-gray-100">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
