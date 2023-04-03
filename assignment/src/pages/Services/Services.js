import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Services.module.css";
import Image from "next/image"
export default function Services  ()  {
  return ( 
    <>
    <Navbar/>
    <div className={styles.services_section}>
      <div className={styles.services_content}>
        <h1>Our Services</h1>
      </div>
    </div>
    <div className={styles.feature_data}>
      <div className={styles.feature_cards}>
        <Image src={"/service.png"} height={25} width={60}  alt="architecture" />
        <h3>Creative Plan & Design</h3>
        <p>
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/service3.png"} height={25} width={60} alt="tools" />
        <h3>Talented Peoples</h3>
        <p>
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/service4.png"} height={25} width={60} alt="helmet" />
        <h3>Modern Tools</h3>
        <p>
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/service5.png"} height={25} width={60} alt="architecture" />
        <h3>Creative Plan & Design</h3>
        <p>
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/services2.jpg"} height={25} width={60} alt="architecture" />
        <h3>Creative Plan & Design</h3>
        <p>
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/services6.jpg"} height={25} width={60} alt="architecture" />
        <h3>Creative Plan & Design</h3>
        <p>
          There are many variations of passages of lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
    </div>
    <div className={styles.button_to_top}>
      <a href="#">Top</a>
    </div>
    <Footer/>
    </>
  )
}
