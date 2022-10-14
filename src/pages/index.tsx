import { GetStaticProps } from 'next'

import Link from '../components/NextLink/NextLink'
import api from '../service/api.js'
import { Container, H1 } from '../styles/StylesPages/styledHome'

export const getStaticProps: GetStaticProps = async () => {
  const teste = await api.get('/')

  return { props: { value: teste.data }, revalidate: 5 }
}

export default function home({ value }) {
  return (
    <Container>
      {value.map(teste => (
        <div key={teste.question}>
          <h1>{teste.question}</h1>
          <p>{teste.answer}</p>
        </div>
      ))}
      <Link href="/teste">Hello</Link>
    </Container>
  )
}
