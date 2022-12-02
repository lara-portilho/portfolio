import Head from 'next/head';
import { Sidebar } from '../src/components/Sidebar';
import { PageLayout } from '../src/components/PageLayout';
import { Projects } from '../src/routes/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Lara P. Marques | Dev Junior</title>
      </Head>

      <Sidebar />
      <PageLayout>
        <Projects />
      </PageLayout>
    </>
  );
}
