import { useEffect } from 'react'

function useLazyLoadBgImg(selector: string, rootMargin = 0) {
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { rootMargin: `${rootMargin}px` })

    function handleIntersection(entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.src)
          observer.unobserve(entry.target)
        }
      })
    }

    const elements = document.querySelectorAll(selector)
    elements.forEach((photo) => observer.observe(photo))
  }, [selector, rootMargin])
}

export default useLazyLoadBgImg
