import Link from 'next/link'
import { styled } from '../stitches.config'

const Box = styled('div',{
  padding: 100
})

export default function Home({ greetings }) {
  return (
    <Box>
      <div>Index page, hello {greetings}!</div>
      <Link href='/heavy'><a>Go to heavy styled page</a></Link>
    </Box>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      greetings: 'world'
    }
  }
}