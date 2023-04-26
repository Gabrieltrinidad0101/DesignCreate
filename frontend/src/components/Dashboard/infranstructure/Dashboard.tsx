import React, { useContext, useState } from 'react'
import type IDashboard from '../domian/Dashboard'
import DashboardCss from './Dashboard.module.css'
import { type IDashboardState, type IDashboardContext } from '../domian/Dashboard'

const initialState: IDashboardState = {
  miniMenu: false
}

const AuthContext = React.createContext<IDashboardContext>({
  setDashboardState: () => {},
  dashboardState: initialState
})

export default function Dashboard ({ header, menu, main }: IDashboard<JSX.Element>): JSX.Element {
  const [dashboardState, setDashboardState] = useState<IDashboardState>(initialState)

  const changeDashboard = (_dashboardState: IDashboardState): void => {
    setDashboardState({ ...dashboardState, ..._dashboardState })
  }

  return (
    <AuthContext.Provider value={{
      setDashboardState: changeDashboard,
      dashboardState
    }}>
      <div className={`${DashboardCss.container} ${dashboardState.miniMenu ? DashboardCss.miniMenu : ''}`}>
        <div className={DashboardCss.header}>
          {header}
        </div>
        <div className={DashboardCss.menu} >
          {menu}
        </div>
        <div className={DashboardCss.main} >
          {main}
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export const useDashboardContext = (): IDashboardContext => {
  return useContext<IDashboardContext>(AuthContext)
}
