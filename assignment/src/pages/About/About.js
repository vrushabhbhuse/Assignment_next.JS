import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      <div className={styles.body}>
        <div className={styles.about_section}>
          <div className={styles.about_content}>
            <h1>About Us</h1>
          </div>
        </div>
        <div className={styles.main_content}>
          <div className={styles.about_image}>
            <Image
              src={"/work.jpg"}
              height={600}
              width={1300}
              alt="about_image"
            />
          </div>
          <div className={styles.about_image_data}>
            <h2>
              <b>We Serve all of your Construction Services</b>
            </h2>
            <h4>
              “Construction is a full service construction company offering
              building solutions from start to finish. Our staff has been
              operating on NYC for ten years.
            </h4>
            <p>
              There are many variations of passages of lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </div>
        <div className={styles.features}>
          <h2>Our Features</h2>
          <div className={styles.feature_data}>
            <div className={styles.feature_cards}>
              <Image src="/architecture.png" width={50} height={50} />
              <h3>Creative Plan & Design</h3>
              <p>
                There are many variations of passages of lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className={styles.feature_cards}>
              <Image src={"/tools.png"} width={50} height={50} alt="tools" />
              <h3>Talented Peoples</h3>
              <p>
                There are many variations of passages of lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className={styles.feature_cards}>
              <Image src={"/helmet.jpg"} width={50} height={50} alt="helmet" />

              <h3>Modern Tools</h3>
              <p>
                There are many variations of passages of lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
          <div className={styles.button_to_top}>
            <a href="#">Top</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
