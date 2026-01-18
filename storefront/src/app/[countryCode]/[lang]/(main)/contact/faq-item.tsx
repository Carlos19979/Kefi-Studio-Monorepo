"use client"

import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownMini } from "@medusajs/icons"

interface FAQItemProps {
    question: string
    answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <div className="border-b border-kefi-brown/10 last:border-0">
                    <Disclosure.Button className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-kefi-maroon group">
                        <span className="text-lg md:text-xl font-serif text-kefi-brown pr-8">
                            {question}
                        </span>
                        <ChevronDownMini
                            className={`size-6 text-kefi-maroon transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""
                                }`}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-200 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="pb-6 text-kefi-taupe leading-relaxed text-base md:text-lg font-light">
                            {answer}
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    )
}
