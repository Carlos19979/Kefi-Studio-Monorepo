"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HttpTypes } from "@medusajs/types"

import { LocalizedClientLink } from "@modules/common"
import CountrySelect from "../country-select"
import { useToggleState } from "@medusajs/ui"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

const SideMenu = ({
  regions,
  dict,
}: {
  regions: HttpTypes.StoreRegion[] | null
  dict: any
}) => {
  const [open, setOpen] = useState(false)
  const toggleState = useToggleState()

  const sideMenuItems = {
    [dict.nav.home]: "/",
    [dict.nav.shop]: "/store",
    [dict.nav.about]: "/about",
    [dict.nav.contact]: "/contact",
    [dict.nav.search]: "/search",
    [dict.nav.account]: "/account",
    [dict.nav.cart]: "/cart",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          data-testid="nav-menu-button"
          className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-kefi-maroon"
        >
          {dict.nav.menu}
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[85vw] sm:w-2/5 lg:w-1/3 2xl:w-1/4 bg-kefi-maroon backdrop-blur-2xl border-kefi-border/20 text-kefi-cream p-0"
      >
        <div
          data-testid="nav-menu-popup"
          className="flex flex-col h-full justify-between p-6 pt-12"
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
          <motion.ul
            className="flex flex-col gap-6 items-start justify-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Object.entries(sideMenuItems).map(([name, href]) => {
              return (
                <motion.li key={name} variants={itemVariants}>
                  <LocalizedClientLink
                    href={href}
                    className="text-2xl sm:text-3xl leading-10 hover:text-ui-fg-disabled transition-colors"
                    onClick={() => setOpen(false)}
                    data-testid={`${name.toLowerCase()}-link`}
                  >
                    {name}
                  </LocalizedClientLink>
                </motion.li>
              )
            })}
          </motion.ul>
          <div className="flex flex-col gap-y-6">
            <div
              className="flex justify-between items-center"
              onMouseEnter={toggleState.open}
              onMouseLeave={toggleState.close}
            >
            </div>
            <p className="text-kefi-cream/60 text-xs">
              © {new Date().getFullYear()} Kefi Studio. All rights reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideMenu
