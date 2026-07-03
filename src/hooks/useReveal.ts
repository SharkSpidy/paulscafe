import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref and toggles
 * the `.is-visible` class (see .reveal in index.css) once the element
 * scrolls into view. Kept dependency-free and cheap so it can be used
 * on every section and gallery tile without jank.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
