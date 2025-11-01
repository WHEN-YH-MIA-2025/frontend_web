'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useCallback, useEffect, useState } from 'react'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const onToggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    toggleTheme()
    toast(next === 'dark' ? 'Switched to Dark mode' : 'Switched to Light mode', {
      icon:
        next === 'dark' ? (
          <Moon className="h-4 w-4 text-brand-500" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        ),
      duration: 800,
    })
  }, [theme, toggleTheme])

  if (!mounted) return null // ✅ prevent mismatch

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-2 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted"
    >
      {theme === 'dark' ? (
        <>
          <Sun className="h-4 w-4" />
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
        </>
      )}
    </button>
  )
}
