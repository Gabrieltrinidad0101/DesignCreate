import React, { Children } from 'react'
import type IDashboard from '../domian/Dashboard'
import DashboardCss from './Dashboard.module.css'

export default function Dashboard ({ Header, Menu, Body }: IDashboard<JSX.Element>): JSX.Element {
  return (
    <>
      <div className={DashboardCss.container}>
        <div className={DashboardCss.header}>
          <Header/>
        </div>
        <div className={DashboardCss.menu}>
          <Menu/>
        </div>
        <div className={DashboardCss.main}>
          <Body/>
        </div>
      </div>
    </>
  )
}
