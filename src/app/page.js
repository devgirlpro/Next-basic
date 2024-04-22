import Image from 'next/image';
import styles from './page.module.css';
import Card from './components/Card';

const topics = [
  {
    title: 'Server-side rendering',
    description:
      'Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES',
  },
  {
    title: 'Static side generation',
    description:
      'Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES',
  },
  {
    title: 'Incremental static regeneration',
    description:
      'Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES',
  },
  {
    title: 'Server-side rendering',
    description:
      'Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES',
  },
  {
    title: 'Server-side rendering',
    description:
      'Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES',
  },
  {
    title: 'Static side generation',
    description:
      'Server-side rendering (SSR)in Next.js allows for the pre-rendering of React components on the serevr before sending the final HTML to the client, improving performance and CES',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next js basics</h1>
      <div className={styles.cardContainer}>
        {topics.map((topic, index) => (
          <Card
            key={index}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </main>
  );
}
