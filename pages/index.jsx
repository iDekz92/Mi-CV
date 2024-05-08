import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';
import PurpleGuy from '../components/PurpleGuy';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        {/* <Image
            src="/not-image.png"
            alt="Picture of the author"
            width={512}
            height={443}
            objectFit='contain'
            className={styles.logo}
          />
        </div> */}
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Oscar de Jesus Zuñiga Zavala</h1>
            <PurpleGuy/> 
            <br />
            <Link href="/employers">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/socials">
              <button className={styles.outlined}>My socials</button>
            </Link>
          </div>
          <br />
          <Image
            src="/logo_dekz.png"
            alt="Picture of the author"
            width={512}
            height={512}
            objectFit='contain'
            className={styles.logo}
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
