import React from 'react'
import styles from "@/styles/Gallary.module.css";
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function  Gallary ()  {
  return (
    <>
    <Navbar/>
    <div className={styles.gallery_section}>
    <div className={styles.gallery_content}>
      <h1>Gallery</h1>
    </div>
  </div>
  <div className={styles.gallery}>
    <h2>Images</h2>
    <div className={styles.feature_data}>
      <div className={styles.feature_cards}>
        <Image src={"/service.png"} height={25} width={60}  alt="architecture" />
        <p>Creative Plan & Design</p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/service3.png"} height={25} width={60}  alt="tools" />
        <p>Talented Peoples</p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/service4.png"} height={25} width={60} alt="helmet" />
        <p>Modern Tools</p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/service5.png"} height={25} width={60} alt="architecture" />
        <p>Creative Plan & Design</p>
      </div>
      <div className={styles.feature_cards}>
        <Image src={"/services2.jpg"} height={25} width={60} alt="architecture" />  
        <p>Creative Plan & Design</p>
      </div>
      <div className={styles.feature_cards}>
      <Image src={"/services6.jpg"} height={25} width={60} alt="architecture" />
        <p>Creative Plan & Design</p>
      </div>
    </div>
  </div>
  <div class="button_to_top">
  <a href="#">Top</a>
</div>
<Footer/>
    </>
    
  )
}
