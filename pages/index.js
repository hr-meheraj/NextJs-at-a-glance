import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import nextImage from '../assets/next.png'
export default function Home() {
  return (
    <div>
      <h2>Welcome to NextJs </h2>
      <h4>Navigate to : <Link href="/me">Me</Link></h4> 
      <h4>Go to Post page : <Link href="posts">Posts </Link></h4>
      <h4>Go to Dynamic Page : <Link href="dynamic">Dynamic </Link></h4>
      <Image 
        src={nextImage}
        alt="Picture of the author"
        style={{backgroundColor : 'white', borderRadius : '20px', padding : "20px"}}
        width={500}
        height={300}
      />
    </div>
  )
}
