import styles from '@/styles/Navbar.module.css'
import { useRouter } from 'next/router'




export default function (){
  const router = useRouter();
    return (
        <>
        <nav className={styles.navbar}>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/building-2816550-2338428.png?f=avif&w=256"
          alt="bg_about_page"
          loading="lazy"
        />
        <ul className={styles.navbar_items }>
          <li onClick={()=>router.push('/')}>Home</li>
          <li onClick={()=>router.push('/About/About')}>About</li>
          <li onClick={()=>router.push('/Contact/Contact')}>
            Contact
          </li>
          <li onClick={()=>router.push('/Services/Services')}>
            Services
          </li>
          <li onClick={()=>router.push('/Gallery/Gallery')}>
            Gallery
          </li>
        </ul>
      </nav>
        </>
        
  )
}  

