import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <Script
        integrity='sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
        src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.j'
      ></Script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
