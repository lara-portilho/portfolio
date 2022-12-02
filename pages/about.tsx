import Head from 'next/head';
import { Sidebar } from '../src/components/Sidebar';
import { PageLayout } from '../src/components/PageLayout';
import { About } from '../src/routes/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Lara P. Marques | Dev Junior</title>
      </Head>

      <Sidebar />
      <PageLayout>
        <About />
      </PageLayout>
    </>
  );
}
