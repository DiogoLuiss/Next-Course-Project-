import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import data from '../../testData/data.js'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map(data => {
    return { params: { id: data.id } }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  const post = data.find(currentPost => {
    if (currentPost.id === id) {
      return true
    }
    return false
  })

  return {
    props: {
      value: post
    }
  }
}

type Props = {
  value: {
    title: string
    content: string
    date: string
  }
}

export default function Users(props: Props) {
  console.log(props)

  return (
    <div>
      <h1> {props.value.title}</h1>
      <h2>{props.value.date} </h2>
      <p>{props.value.content}</p>
    </div>
  )
}
