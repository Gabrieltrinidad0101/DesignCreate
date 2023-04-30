import React, { useCallback, useEffect, useRef, useState } from 'react'
import type Prop from '../../../share/domian/prop'
import type IInfinitiveScroll from '../domian/infinitiveScroll'
export default function InfinitiveScroll ({ Prop: infinitiveScroll }: Prop<IInfinitiveScroll<JSX.Element>>): JSX.Element {
  const [isFeching, setIsFeching] = useState<boolean>()

  const divScroll = useRef(null)

  const handleScroll = useCallback((): void => {
    if (divScroll.current === null) return
    const { scrollTop, scrollHeight, clientHeight } = divScroll.current
    if (parseInt(scrollTop) + parseInt(clientHeight) < scrollHeight - 50) return
    setIsFeching(true)
  }, [])

  useEffect((): void => {
    infinitiveScroll.next()
      .then(() => {
        setIsFeching(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [isFeching])

  return (
    <div ref={divScroll} onScroll={handleScroll} className={infinitiveScroll.className} >
      {
        infinitiveScroll.children
      }
    </div>
  )
}
