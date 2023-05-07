import React, { useCallback, useRef } from 'react'
import type IInfinitiveScroll from '../domian/infinitiveScroll'

let isLoading = false

export default function InfinitiveScroll ({ next, children, className }: IInfinitiveScroll<JSX.Element>): JSX.Element {
  const divScroll = useRef(null)

  const handleScroll = useCallback((): void => {
    if (divScroll.current === null || isLoading) return
    const { scrollTop, scrollHeight, clientHeight } = divScroll.current
    if (parseInt(scrollTop) + parseInt(clientHeight) < scrollHeight - 100) return
    isLoading = true
    next()
      .then((): void => {
        isLoading = false
      })
      .catch((): void => {
        isLoading = false
      })
  }, [])

  return (
    <div ref={divScroll} onScroll={handleScroll} className={className} >
      {
        children
      }
    </div>
  )
}
