import React from 'react'
import HomeCss from '../Home.module.css'

export default function Search (): JSX.Element {
  return (
      <input type="text" placeholder='Search' className={HomeCss.search} />
  )
}
