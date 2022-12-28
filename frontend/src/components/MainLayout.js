import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './Header'

export const MainLayout = ({children, isLoggedin}) => {
  return (
    <div>
      <Header isLoggedin={isLoggedin} />
      <Container>
      <div className="main">{children}</div>
      </Container>
    </div>
  )
}
