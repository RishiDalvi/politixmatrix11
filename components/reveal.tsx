"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "zoom-in"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "scale-in"

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: RevealVariant
  durationMs?: number
  delayMs?: number
  once?: boolean
  as?: keyof JSX.IntrinsicElements
}

const initialClasses: Record<RevealVariant, string> = {
  "fade-up": "opacity-0 translate-y-6",
  "fade-in": "opacity-0",
  "zoom-in": "opacity-0 scale-95",
  "slide-left": "opacity-0 -translate-x-6",
  "slide-right": "opacity-0 translate-x-6",
  "slide-up": "opacity-0 translate-y-6",
  "scale-in": "opacity-0 scale-95",
}

const activeClasses = "opacity-100 translate-y-0 translate-x-0 scale-100"

export function Reveal({
  variant = "fade-up",
  durationMs = 600,
  delayMs = 0,
  once = true,
  as = "div",
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current as HTMLElement | null
    if (!el) return

    // Apply initial hidden state
    el.style.transition = `opacity ${durationMs}ms cubic-bezier(0.2, 0.8, 0.2, 1), transform ${durationMs}ms cubic-bezier(0.2, 0.8, 0.2, 1)`
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`

    const initial = initialClasses[variant]
    initial
      .split(" ")
      .filter(Boolean)
      .forEach((c) => el.classList.add(c))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Activate
            activeClasses
              .split(" ")
              .filter(Boolean)
              .forEach((c) => el.classList.add(c))
            // Remove initial transforms to let transition play
            initial
              .split(" ")
              .filter(Boolean)
              .forEach((c) => el.classList.remove(c))

            if (once) io.unobserve(entry.target)
          } else if (!once) {
            // Reset when leaving viewport if not once
            initial
              .split(" ")
              .filter(Boolean)
              .forEach((c) => el.classList.add(c))
            activeClasses
              .split(" ")
              .filter(Boolean)
              .forEach((c) => el.classList.remove(c))
          }
        })
      },
      { threshold: 0.12 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [variant, durationMs, delayMs, once])

  const Component = as as any

  return (
    <Component ref={ref} className={cn("will-change-[opacity,transform]", className)} {...rest}>
      {children}
    </Component>
  )
}

export function RevealStagger({
  items,
  render,
  baseDelayMs = 0,
  stepDelayMs = 80,
  variant = "fade-up",
  className,
}: {
  items: any[]
  render: (item: any, idx: number) => React.ReactNode
  baseDelayMs?: number
  stepDelayMs?: number
  variant?: RevealVariant
  className?: string
}) {
  return (
    <div className={className}>
      {items.map((item, idx) => (
        <Reveal key={idx} delayMs={baseDelayMs + idx * stepDelayMs} variant={variant}>
          {render(item, idx)}
        </Reveal>
      ))}
    </div>
  )
}
