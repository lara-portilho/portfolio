import { useTranslation } from 'react-i18next';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="md:relative md:mx-auto md:flex md:max-w-6xl">
      <Sidebar i18n={i18n} />
      <div className="relative px-3 md:w-3/5">
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
