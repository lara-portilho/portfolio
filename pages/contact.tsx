import Head from 'next/head';
import { Sidebar } from '../src/components/Sidebar';
import { PageLayout } from '../src/components/PageLayout';
import { Contact } from '../src/routes/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Lara P. Marques | Dev Junior</title>
      </Head>

      <Sidebar />
      <PageLayout>
        <Contact />
      </PageLayout>
    </>
  );
}
