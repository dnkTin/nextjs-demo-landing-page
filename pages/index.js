import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quasi est itaque, cum aliquid eum similique illo quis debitis excepturi obcaecati vero rerum possimus consequuntur laborum minus aspernatur. Sit, et.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quasi est itaque, cum aliquid eum similique illo quis debitis excepturi obcaecati vero rerum possimus consequuntur laborum minus aspernatur. Sit, et.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quasi est itaque, cum aliquid eum similique illo quis debitis excepturi obcaecati vero rerum possimus consequuntur laborum minus aspernatur. Sit, et.</p>
      <Link href="/ninjas"><a>See Ninjas</a></Link>
    </div>
  )
}
