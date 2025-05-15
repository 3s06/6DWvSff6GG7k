"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  initialY: number
  initialX: number
  followsMouse: boolean
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const scrollY = useRef(0)
  const lastScrollY = useRef(0)
  const scrollSpeed = useRef(0)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>()

  // Initialize particles
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Create particles when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const particleCount = Math.floor((dimensions.width * dimensions.height) / 8000)
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height * 3

      // About 15% of particles will follow the mouse
      const followsMouse = Math.random() < 0.15

      newParticles.push({
        x,
        y,
        initialX: x,
        initialY: y,
        size: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 0.5 - 0.25,
        followsMouse,
      })
    }

    setParticles(newParticles)
  }, [dimensions])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll speed
      scrollSpeed.current = window.scrollY - lastScrollY.current
      lastScrollY.current = window.scrollY
      scrollY.current = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"

      // Gradually reduce scroll speed for smooth effect
      scrollSpeed.current *= 0.95

      particles.forEach((particle, index) => {
        let newX = particle.x
        let newY = particle.y

        // Base movement
        newX += particle.speedX

        // Apply scroll effect - particles move in the direction of scroll
        const scrollEffect = scrollSpeed.current * 0.05
        newY += scrollEffect + particle.speedY

        // Mouse following effect for selected particles
        if (particle.followsMouse) {
          const dx = mousePosition.current.x - newX
          const dy = mousePosition.current.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only follow if mouse is within a certain range
          if (distance < 200) {
            // Strength of attraction decreases with distance
            const strength = (1 - distance / 200) * 0.05
            newX += dx * strength
            newY += dy * strength
          }
        }

        // Wrap around screen edges
        if (newX < 0) newX = dimensions.width
        if (newX > dimensions.width) newX = 0

        // Wrap vertically but with a larger range
        const totalHeight = dimensions.height * 3
        if (newY < 0) newY = totalHeight
        if (newY > totalHeight) newY = 0

        // Update particle position
        particles[index] = {
          ...particle,
          x: newX,
          y: newY,
        }

        // Only draw particles that are within the viewport
        const visibleY = (newY - scrollY.current * 0.5) % totalHeight
        const wrappedY = visibleY < 0 ? dimensions.height + visibleY : visibleY % dimensions.height

        if (wrappedY >= 0 && wrappedY <= dimensions.height) {
          ctx.beginPath()

          // Make mouse-following particles slightly larger and more opaque
          if (particle.followsMouse) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
            ctx.arc(newX, wrappedY, particle.size * 1.2, 0, Math.PI * 2)
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
            ctx.arc(newX, wrappedY, particle.size, 0, Math.PI * 2)
          }

          ctx.fill()
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [particles, dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0  pointer-events-none z-0"
    />
  )
}
