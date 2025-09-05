"use client"
import React, { useEffect, useState } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

export type PortfolioBackgroundProps = {
	variant?: "subtle-grid" | "radial-noise" | "particles"
	accent?: "emerald" | "green" | "lime"
	intensity?: number
	children?: React.ReactNode
	className?: string
}

const ACCENT_HEX: Record<NonNullable<PortfolioBackgroundProps["accent"]>, string> = {
	emerald: "#10b981",
	green: "#22c55e",
	lime: "#84cc16",
}

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ")
}

function hexToRgba(hex: string, alpha = 1) {
	if (!hex) return `rgba(0,0,0,${alpha})`
	let h = hex.replace("#", "")
	if (h.length === 3) h = h.split("").map((c) => c + c).join("")
	if (h.length !== 6) return `rgba(0,0,0,${alpha})`
	const r = parseInt(h.slice(0, 2), 16)
	const g = parseInt(h.slice(2, 4), 16)
	const b = parseInt(h.slice(4, 6), 16)
	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function PortfolioBackground({
	variant = "subtle-grid",
	accent = "emerald",
	intensity = 0.6,
	children,
	className,
}: PortfolioBackgroundProps) {
	const color = ACCENT_HEX[accent] ?? ACCENT_HEX.emerald
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

	return (
		<div suppressHydrationWarning className={cn("relative isolate min-h-screen w-full bg-black text-white overflow-hidden", className)}>
			{isMounted && (
				<>
					{variant === "particles" ? (
						<ParticlesLayer color={color} density={Math.round(60 + 80 * (intensity ?? 0.6))} />
					) : variant === "radial-noise" ? (
						<RadialNoiseLayer color={color} intensity={intensity ?? 0.6} />
					) : (
						<SubtleGridLayer color={color} intensity={intensity ?? 0.6} />
					)}

					<GreenHalos color={color} intensity={intensity ?? 0.6} />
				</>
			)}

			<div className="relative z-10">{children}</div>

			<div
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					background:
						"radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)",
				}}
			/>
		</div>
	)
}

function SubtleGridLayer({ color, intensity }: { color: string; intensity: number }) {
	const dot = hexToRgba(color, 0.06 * intensity)

	return (
		<div aria-hidden="true" className="absolute inset-0 z-0">
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						`linear-gradient(to right, ${dot} 1px, transparent 1px),` +
						`linear-gradient(to bottom, ${dot} 1px, transparent 1px)`,
					backgroundSize: `48px 48px, 48px 48px`,
					backgroundPosition: `-1px -1px, -1px -1px`,
				}}
			/>
			<div
				className="absolute inset-x-0 top-0 h-24"
				style={{ background: `linear-gradient(to bottom, ${hexToRgba(color, 0.25 * intensity)}, transparent)` }}
			/>
			<div
				className="absolute inset-x-0 bottom-0 h-24"
				style={{ background: `linear-gradient(to top, ${hexToRgba(color, 0.15 * intensity)}, transparent)` }}
			/>
		</div>
	)
}

function RadialNoiseLayer({ color, intensity }: { color: string; intensity: number }) {
	const noiseOpacity = 0.04 + (intensity ?? 0.6) * 0.06

	return (
		<div aria-hidden="true" className="absolute inset-0 z-0">
			<div
				className="absolute inset-0"
				style={{
					background:
						`radial-gradient(1200px 800px at 30% 20%, ${hexToRgba(color, 0.12 * intensity)}, transparent 60%),` +
						`radial-gradient(1000px 700px at 70% 70%, ${hexToRgba(color, 0.10 * intensity)}, transparent 65%)`,
				}}
			/>
			<svg className="absolute inset-0 w-full h-full mix-blend-soft-light" xmlns="http://www.w3.org/2000/svg">
				<filter id="f" x="0" y="0">
					<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<rect width="100%" height="100%" filter="url(#f)" opacity={noiseOpacity} fill="white" />
			</svg>
		</div>
	)
}

function GreenHalos({ color, intensity }: { color: string; intensity: number }) {
	const halo = (size: number, left: string, top: string, o: number) => (
		<div
			key={`${left}-${top}-${size}`}
			className="pointer-events-none absolute rounded-full blur-3xl"
			style={{
				width: size,
				height: size,
				left,
				top,
				background: `radial-gradient(circle at center, ${hexToRgba(color, 0.25 * intensity)}, transparent 60%)`,
				opacity: o,
			}}
		/>
	)

	return (
		<div aria-hidden="true" className="absolute inset-0 z-0">
			{halo(420, "-60px", "-80px", 0.9)}
			{halo(360, "75%", "10%", 0.6)}
			{halo(520, "40%", "70%", 0.5)}
		</div>
	)
}

function ParticlesLayer({ color, density }: { color: string; density: number }) {
	return (
		<div aria-hidden="true" className="absolute inset-0 z-0">
			<Particles
				id="tsparticles"
				init={async (engine: Engine) => {
					try {
						await loadSlim(engine)
					} catch (e) {
						console.warn("tsparticles loadSlim failed", e)
					}
				}}
				className="h-full w-full"
				options={{
					background: { color: { value: "#000000" } },
					fpsLimit: 60,
					particles: {
						number: { value: density, density: { enable: true, area: 800 } },
						color: { value: color },
						links: { enable: true, color, distance: 120, opacity: 0.25, width: 1 },
						move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
						opacity: { value: { min: 0.15, max: 0.45 } },
						size: { value: { min: 0.5, max: 2 } },
					},
					interactivity: {
						events: { onHover: { enable: true, mode: "repulse" }, resize: true },
						modes: { repulse: { distance: 120, duration: 0.3 } },
					},
					detectRetina: true,
				}}
			/>
		</div>
	)
}


