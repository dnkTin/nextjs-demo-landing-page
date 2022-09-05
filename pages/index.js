import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quasi est itaque, cum aliquid eum similique illo quis debitis excepturi obcaecati vero rerum possimus consequuntur laborum minus aspernatur. Sit, et.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quasi est itaque, cum aliquid eum similique illo quis debitis excepturi obcaecati vero rerum possimus consequuntur laborum minus aspernatur. Sit, et.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quasi est itaque, cum aliquid eum similique illo quis debitis excepturi obcaecati vero rerum possimus consequuntur laborum minus aspernatur. Sit, et.</p>
      <Link href="/ninjas"><button className={styles.btn}>See Ninjas</button></Link>
    </div>
  )
}
