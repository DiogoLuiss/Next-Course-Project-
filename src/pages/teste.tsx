import { useEffect, useState } from 'react'

import Link from '../components/NextLink/NextLink'
import api from '../service/api.js'
import { Container, H1 } from '../styles/StylesPages/styledHome'

export default function home() {
  const [teste, setTeste] = useState([])

  useEffect(() => {
    ;(async () => {
      const teste = await api.get('/')

      setTeste(teste.data)
    })()
  }, [])

  return (
    <Container>
      <H1>Hellor world2</H1>
      {teste.map(teste => (
        <div key={teste.question}>
          <h1>{teste.question}</h1>
          <p>{teste.answer}</p>
        </div>
      ))}
      <Link href="/">Hello2</Link>
    </Container>
  )
}
