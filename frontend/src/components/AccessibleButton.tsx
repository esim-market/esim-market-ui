import { useRef, type ReactNode } from 'react'
import { useButton } from 'react-aria'

interface AccessibleButtonProps {
  children: ReactNode
  onPress: () => void
}

export function AccessibleButton({ children, onPress }: AccessibleButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps, isPressed } = useButton({ onPress }, ref)

  return (
    <button
      {...buttonProps}
      ref={ref}
      className="button"
      data-pressed={isPressed || undefined}
    >
      {children}
    </button>
  )
}
