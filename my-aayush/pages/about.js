// THREE WAYS TO WRITE IT

import Button from '@/components/Button'

// SINGLE LINE EXPORT
export default function About() {
  return (
    <>
      <h1>About Us Page</h1>
      <Button />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
// FUNCTION KEYWORD
// function About() {
//   return (
//     <>
//       <h1>About Us Page</h1>
//     </>
//   )
// }

// export default About

// ARROW FUNCTION
// const Arrow = () => {
//   return (
//     <>
//       <h1>About Us Page</h1>
//     </>
//   )
// }

// export default Arrow
