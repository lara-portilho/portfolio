import Head from 'next/head';
import { Sidebar } from '../src/components/Sidebar';
import { PageLayout } from '../src/components/PageLayout';
import { Home } from '../src/routes/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lara P. Marques | Dev Junior</title>
      </Head>

      <Sidebar />
      <PageLayout>
        <Home />
      </PageLayout>
    </>
  );
}
