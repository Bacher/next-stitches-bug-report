import Link from 'next/link';
import { styled } from '../stitches.config'

const Box = styled('div', {
  padding: 80
})

const P1 = styled('div', {
  background: 'url("/some-big-url-here-pepepepeppddsfdfsfsdfsfsfsfklsdfnhjhsdbgsjkbgsjhgbsjgbdjgdfgfdggdf.jpg")',
})
const P2 = styled('div', {
  background: 'url("/some-big-url-here-pepepepeppddsfdfsfsdfliggdasfnsjkfgsba222222222222222.jpg")',
})
const P3 = styled('div', {
  background: 'url("/some-big-url-here-pepepepeppddsfdfsfsdfliggdasfnsjkfgsba33333333333333333.jpg")',
})
const P4 = styled('div', {
  background: 'url("/some-big-url-here-pepepepeppddsfdfsfsdfliggdasfnsjkfgsba4444444.jpg")',
})
const P5 = styled('div', {
  background: 'url("/some-big-url-here-pepepepeppddsfdfsfsdfliggdasfnsjkfgsba5555555555555555555555.jpg")',
})

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <div>Page with heavy styles, try to go back and look at styles comes with SSR</div>
      <P1 />
      <P2 />
      <P3 />
      <P4 />
      <P5 />
      <Link href='/'><a>Go back to home</a></Link>
    </Box>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      someData: 'test'
    }
  }
}