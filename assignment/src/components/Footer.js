import styles from '@/styles/Footer.module.css'
import { useRouter } from 'next/router'

export default function Footer () {
  const router = useRouter();
  return (
    <>
    <footer class={styles.foot}>
      <ul class={styles.footer_items}>
        <li onClick={()=>router.push('/')}>Home</li>
        <li onClick={()=>router.push('/About/About')}>About</li>
        <li onClick={()=>router.push('/Contact/Contact')}>Contact</li>
      </ul>
      <h6 class={styles.copyright }>&copy; All rights reserved</h6>
    </footer>
    </>
  )
}
