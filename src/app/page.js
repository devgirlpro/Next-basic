import Image from 'next/image';
import styles from './page.module.css';
import Card from './components/Card';
import { Carrois_Gothic } from 'next/font/google';


const topics= [
  {
    title: "Server-side rendering",
    description: "Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES"},
  {
    title: "Static side generation",
    description: "Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES"
  },
  {
    title: "Incremental static regeneration",
    description: "Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES"
  },
  {}
]

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next js basics</h1>
      {topics.map((topic, index) => (
        <Card key={topic.index}  title={topic.title} description={topic.description} />
      ))}
    </main>
  );
}
