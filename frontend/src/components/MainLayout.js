import React from 'react'
import { Header } from './Header'

export const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
    </div>
  )
}
