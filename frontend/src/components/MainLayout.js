import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './Header'

export const MainLayout = ({children}) => {
  return (
    <div>
      <Header  />
      <Container>
      <div className="main">{children}</div>
      </Container>
    </div>
  )
}
