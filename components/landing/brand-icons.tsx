import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

const shared = {
  fill: "none",
  viewBox: "0 0 48 48",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M14 34 34 14M20 14h14v14" />
    </svg>
  )
}

export function ConnectIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M18 13h-3a9 9 0 0 0 0 18h3M30 13h3a9 9 0 0 1 0 18h-3M17 24h14" />
      <circle cx="24" cy="24" r="4" />
      <path d="M24 9v5M24 34v5" />
    </svg>
  )
}

export function ComposeIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M11 12.5h18l8 8V36a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V12.5Z" />
      <path d="M29 12.5v8h8M16 28h16M16 33h10" />
      <path d="M16 8v8M12 12h8" />
    </svg>
  )
}

export function ScheduleIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="9" y="12" width="30" height="27" rx="3" />
      <path d="M9 20h30M17 8v8M31 8v8" />
      <path d="m18 29 4 4 8-9" />
    </svg>
  )
}

export function ChatFlowIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M9 11h30v22H22l-9 7v-7H9V11Z" />
      <path d="M17 19h14M17 25h9" />
      <path d="m31 28 2 2 4-5" />
    </svg>
  )
}

export function CatalogIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M10 15h28v25H10zM16 15V9h16v6" />
      <path d="M16 22h8v8h-8zM29 23h4M29 28h4M16 35h17" />
    </svg>
  )
}

export function VoiceIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M11 28h6l10 8V12l-10 8h-6v8Z" />
      <path d="M33 18c2 1.5 3 3.5 3 6s-1 4.5-3 6M37 14c3.3 2.5 5 5.8 5 10s-1.7 7.5-5 10" />
    </svg>
  )
}

export function CreditIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="24" cy="24" r="15" />
      <path d="M28.5 18.5c-1.1-1.2-2.7-1.8-4.5-1.8-2.8 0-5 1.5-5 3.8 0 5.7 10 2.2 10 7.1 0 2.3-2.2 3.8-5 3.8-2 0-3.8-.7-5-2M24 13v4M24 31v4" />
    </svg>
  )
}

export function PulseIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M7 25h8l4-12 8 23 5-14 3 3h6" />
      <circle cx="9" cy="11" r="3" />
      <circle cx="39" cy="37" r="3" />
    </svg>
  )
}
