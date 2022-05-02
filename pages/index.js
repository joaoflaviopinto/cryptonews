import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/Crypto.png'
import styles from '../styles/Home.module.css'

export async function getStaticProps(){
  const apiResponse = await fetch('https://api.blockchair.com/news?q=language(pt)');
  const news = await apiResponse.json();
  return {
    props: {news}
  }
}

export default function Home({ news }) {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
      <Image src={logo}  />
      </div>
      
      <div className={styles.grid}>
          {news.data.map((noticia) => (
            <a href={noticia.link} className={styles.card}>
            <h2 className={styles.titulo}>{noticia.title} &rarr;</h2>
            <p className={styles.fonte}>Fonte: <span>{noticia.source}</span></p>
          </a>
          ))} 
        </div>
    </div>
  )
}
