import NextLink from 'next/link'

import { A } from './styled'

type Props = {
  children: string | number
  href: string
}

const Link = function button(props: Props) {
  return (
    <NextLink href={props.href}>
      <A href={props.href}>{props.children}</A>
    </NextLink>
  )
}

export default Link
