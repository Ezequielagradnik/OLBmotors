"use client"

import * as React from "react"
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  expanded: string | null
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>
} | null>(null)

export const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single\" | \"multiple"
    collapsible?: boolean
  }
>(({ children, ...props }, ref) => {
  const [expanded, setExpanded] = React.useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div ref={ref} className={cn("space-y-2")} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion")
  }

  // Remove the unused variable
  // Remove the unused expression

  return (
      <div
        ref={ref}
        className={cn("border-b border-[#9b8b6f]/20")}
        {...props}
      >
        {children}
      </div>
    )
})
AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion")
  }

  const isExpanded = context.expanded === value

  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-lg font-medium transition-all hover:underline",
        className
      )}
      onClick={() => context.setExpanded(isExpanded ? null : value)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isExpanded ? "rotate-180" : ""
        )}
      />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ children, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion")
  }

  const isExpanded = context.expanded === value

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isExpanded ? "max-h-96 py-4" : "max-h-0"
      )}
      {...props}
    >
      {children}
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

