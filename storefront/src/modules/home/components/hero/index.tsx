"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { LocalizedClientLink } from "@modules/common"
import heroImg from "../../../../../public/images/homepage-hero.png"
import { useRef } from "react"

const Hero = ({ dict }: { dict: any }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effect - image scales slightly as you scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section ref={ref} className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="relative w-full h-[85vh] rounded-none overflow-hidden flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-16 lg:p-20">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            scale: imageScale,
            y: imageY,
          }}
        >
          <Image
            src={heroImg}
            alt="Kefi Studio Hero"
            fill
            priority

            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-[2]"></div>

        {/* Content with Stagger Animation */}
        <motion.div
          className="relative z-10 max-w-5xl flex flex-col gap-6 sm:gap-8 md:gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="text-white/80 font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] md:text-sm"
          >
            {dict.title}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-white font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-tight drop-shadow-2xl"
          >
            {dict.subtitle.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="italic font-normal text-kefi-cream/90">
              {dict.subtitle.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="pt-8 sm:pt-12 md:pt-16">
            <LocalizedClientLink href="/store">
              <motion.button
                className="group inline-flex items-center justify-center h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-14 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-kefi-maroon text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-700 border border-white/30 hover:border-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{dict.description.split(',')[0]}</span>
              </motion.button>
            </LocalizedClientLink>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}

      </div>
    </section>
  )
}

export default Hero
