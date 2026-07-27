"use client"

import { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type CountNode = HTMLElement & {
  dataset: DOMStringMap & {
    countValue?: string
    countSuffix?: string
  }
}

function drawIcon(icon: Element, timeline: gsap.core.Timeline, position: string | number) {
  const paths = Array.from(icon.querySelectorAll<SVGGeometryElement>("path, circle, rect"))

  paths.forEach((path) => {
    const length = typeof path.getTotalLength === "function" ? path.getTotalLength() : 80
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    timeline.to(path, { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" }, position)
  })
}

export default function LandingMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "expo.out" } })

      heroTimeline
        .from("[data-hero='eyebrow']", { y: 18, autoAlpha: 0, duration: 0.55 })
        .from("[data-hero='title']", {
          y: 54,
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          duration: 0.9,
        }, 0.08)
        .from("[data-hero='intro']", { y: 24, autoAlpha: 0, duration: 0.65 }, 0.28)
        .from("[data-hero='actions']", {
          y: 16,
          autoAlpha: 0,
          duration: 0.55,
        }, 0.42)
        .from("[data-hero='note']", { y: 14, autoAlpha: 0, duration: 0.5 }, 0.54)
        .from("[data-hero='visual']", {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.05,
        }, 0.04)
        .from("[data-hero='visual'] img", { scale: 1.13, duration: 1.25 }, 0.04)
        .from("[data-hero='caption'] > *", {
          y: 18,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.08,
        }, 0.68)

      gsap.to(".rx-scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      })

      const proofTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-proof", start: "top 82%", toggleActions: "play none none none" },
      })
      proofTimeline
        .from(".rx-proof-label > *", { x: -24, autoAlpha: 0.25, duration: 0.65, stagger: 0.08, ease: "expo.out" })
        .from(".rx-stat-strip > div", { y: 28, autoAlpha: 0.25, duration: 0.6, stagger: 0.09, ease: "expo.out" }, 0.12)

      document.querySelectorAll<CountNode>("[data-count-value]").forEach((node) => {
        const target = Number(node.dataset.countValue ?? 0)
        const suffix = node.dataset.countSuffix ?? ""
        const formatter = new Intl.NumberFormat("en-NG")

        ScrollTrigger.create({
          trigger: node,
          start: "top 88%",
          once: true,
          onEnter: () => {
            const counter = { value: Math.max(0, target * 0.18) }
            gsap.to(counter, {
              value: target,
              duration: 1.15,
              ease: "power3.out",
              onUpdate: () => {
                node.textContent = `${formatter.format(Math.round(counter.value))}${suffix}`
              },
            })
          },
        })
      })

      const processTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-process", start: "top 74%", toggleActions: "play none none none" },
      })
      processTimeline
        .from("[data-motion='process-heading'] > *", { y: 28, autoAlpha: 0.3, duration: 0.7, stagger: 0.08, ease: "expo.out" })
        .from("[data-motion='process-photo']", { clipPath: "inset(0 100% 0 0)", duration: 0.9, ease: "expo.inOut" }, 0.12)
        .from("[data-motion='process-step']", { x: 34, autoAlpha: 0.25, duration: 0.62, stagger: 0.11, ease: "expo.out" }, 0.24)

      const featureIntroTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-feature-intro", start: "top 78%", toggleActions: "play none none none" },
      })
      featureIntroTimeline.from(".rx-feature-intro > *", {
        y: 30,
        autoAlpha: 0.25,
        duration: 0.72,
        stagger: 0.09,
        ease: "expo.out",
      })

      const createTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-feature-story-compose", start: "top 72%", toggleActions: "play none none none" },
      })
      createTimeline
        .from(".rx-feature-story-compose .rx-feature-icon", { rotate: -18, scale: 0.75, autoAlpha: 0.3, duration: 0.65, ease: "expo.out" })
        .from(".rx-feature-story-compose .rx-feature-copy h3, .rx-feature-story-compose .rx-feature-copy > p:not(.rx-eyebrow), .rx-feature-story-compose li", {
          y: 24,
          autoAlpha: 0.25,
          duration: 0.58,
          stagger: 0.07,
          ease: "expo.out",
        }, 0.1)
        .from(".rx-compose-surface", { x: 76, rotateY: -5, autoAlpha: 0.2, duration: 0.9, ease: "expo.out" }, 0.08)
        .from(".rx-compose-canvas > *", { y: 22, autoAlpha: 0, duration: 0.55, stagger: 0.08, ease: "expo.out" }, 0.38)

      const scheduleTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-feature-story-schedule", start: "top 72%", toggleActions: "play none none none" },
      })
      scheduleTimeline
        .from("[data-motion='schedule-photo']", { clipPath: "inset(0 0 0 100%)", duration: 0.95, ease: "expo.inOut" })
        .from(".rx-feature-story-schedule .rx-feature-icon", { rotate: 16, scale: 0.75, autoAlpha: 0.3, duration: 0.65, ease: "expo.out" }, 0.14)
        .from(".rx-feature-story-schedule .rx-feature-copy > *:not(.rx-feature-icon)", {
          x: 28,
          autoAlpha: 0.25,
          duration: 0.65,
          stagger: 0.08,
          ease: "expo.out",
        }, 0.2)

      const whatsappTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-whatsapp-band", start: "top 78%", toggleActions: "play none none none" },
      })
      whatsappTimeline
        .from(".rx-whatsapp-band > div:not(.rx-whatsapp-mark), .rx-whatsapp-band > p", {
          y: 28,
          autoAlpha: 0.25,
          duration: 0.7,
          stagger: 0.1,
          ease: "expo.out",
        })
        .from(".rx-whatsapp-mark", { scale: 0.72, rotate: -12, autoAlpha: 0.35, duration: 0.7, ease: "expo.out" }, 0.04)

      const whatsappIcon = document.querySelector(".rx-whatsapp-mark svg")
      if (whatsappIcon) drawIcon(whatsappIcon, whatsappTimeline, 0.12)

      gsap.from(".rx-capability-ledger article", {
        y: 34,
        autoAlpha: 0.25,
        duration: 0.7,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".rx-capability-ledger", start: "top 78%", toggleActions: "play none none none" },
      })

      const pricingTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-pricing", start: "top 72%", toggleActions: "play none none none" },
      })
      pricingTimeline
        .from(".rx-pricing > div", { y: 36, autoAlpha: 0.25, duration: 0.72, stagger: 0.11, ease: "expo.out" })
        .from(".rx-price strong", { scale: 0.82, transformOrigin: "left bottom", duration: 0.65, ease: "expo.out" }, 0.24)

      gsap.from(".rx-difference-list article", {
        x: 36,
        autoAlpha: 0.25,
        duration: 0.68,
        stagger: 0.11,
        ease: "expo.out",
        scrollTrigger: { trigger: ".rx-difference", start: "top 72%", toggleActions: "play none none none" },
      })

      const ctaTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".rx-final-cta", start: "top 70%", toggleActions: "play none none none" },
      })
      ctaTimeline
        .from(".rx-final-cta .rx-eyebrow", { y: 18, autoAlpha: 0.25, duration: 0.55, ease: "expo.out" })
        .from(".rx-final-cta h2", { y: 46, clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "expo.out" }, 0.06)
        .from(".rx-final-cta-actions > *", { y: 18, autoAlpha: 0.25, duration: 0.55, stagger: 0.08, ease: "expo.out" }, 0.3)

      gsap.from(".rx-footer-mast", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1,
        ease: "expo.inOut",
        scrollTrigger: { trigger: ".rx-footer", start: "top 82%", toggleActions: "play none none none" },
      })

      const desktopMotion = gsap.matchMedia()
      desktopMotion.add("(min-width: 769px) and (hover: hover) and (pointer: fine)", () => {
        const parallaxImages = [
          [".rx-hero-visual", ".rx-hero-visual img", 11],
          [".rx-process-photo", ".rx-process-photo img", 9],
          [".rx-feature-image", ".rx-feature-image img", 8],
        ] as const

        parallaxImages.forEach(([trigger, image, amount]) => {
          gsap.set(image, { scale: 1.09 })
          gsap.fromTo(image, { yPercent: -amount / 2 }, {
            yPercent: amount / 2,
            ease: "none",
            scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 0.8 },
          })
        })
      })

      document.fonts.ready.then(() => ScrollTrigger.refresh())
    }, document.body)

    return () => context.revert()
  }, [])

  return <div className="rx-scroll-progress" aria-hidden="true" />
}
