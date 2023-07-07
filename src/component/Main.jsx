import React from 'react'
import { Container } from 'react-bootstrap'
import Pizza from './Pizza'

function Main({data, orderAdd}) {
  return (
    <main className='my-3 py-5'>
        <Container>
            <Pizza data={data} orderAdd={orderAdd} />
        </Container>
    </main>
  )
}

export default Main