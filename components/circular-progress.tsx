"use client"

import { useEffect, useState } from "react"

interface CircularProgressProps {
  percentage: number
  size?: number
  strokeWidth?: number
  circleColor?: string
  progressColor?: string
  progressColorDark?: string
  textColor?: string
}

export default function CircularProgress({
  percentage,
  size = 100,
  strokeWidth = 6,
  circleColor = "rgba(200, 180, 140, 0.2)",
  progressColor = "rgb(200, 180, 140)", // Color dorado para modo claro
  progressColorDark = "rgb(255, 255, 255)", // Color blanco para modo oscuro
  textColor = "currentColor",
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Detectar modo oscuro
  useEffect(() => {
    // Verificar inicialmente
    setIsDarkMode(document.documentElement.classList.contains("dark"))

    // Configurar un observador para detectar cambios en la clase 'dark'
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Usar el color apropiado según el modo
  const currentProgressColor = isDarkMode ? progressColorDark : progressColor
  const currentCircleColor = isDarkMode ? "rgba(255, 255, 255, 0.2)" : circleColor

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={currentCircleColor}
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={currentProgressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>

      {/* Percentage text */}
      <div className="absolute flex items-center justify-center text-xl font-bold" style={{ color: textColor }}>
        {progress}%
      </div>
    </div>
  )
}

