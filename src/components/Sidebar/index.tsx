import { BR, US } from 'country-flag-icons/react/3x2';
import type { i18n } from 'i18next';
import { Trans } from 'react-i18next';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const supportedLngs: {
  [key: string]: {
    title: string;
    flag: React.FC<{ title: string; className?: string }>;
  };
} = {
  pt: { title: 'Português', flag: BR },
  en: { title: 'English', flag: US },
};

const links = ['about', 'projects', 'experience'];

const contacts: {
  [key: string]: {
    link: string;
    icon: React.FC<{ className?: string }>;
  };
} = {
  github: { link: 'https://github.com/lara-portilho', icon: FaGithub },
  linkedin: {
    link: 'https://www.linkedin.com/in/lara-portilho-marques/',
    icon: FaLinkedin,
  },
};

export const Sidebar = ({ i18n }: { i18n: i18n }) => {
  return (
    <div className="relative md:sticky md:top-0 md:h-screen md:w-2/5">
      <div className="flex flex-col gap-2 px-5 pt-15 md:pt-28">
        <h1 className="font-ibm text-5xl font-bold text-white">
          Lara Portilho
        </h1>
        <h2 className="text-xl">
          <Trans i18nKey="subtitle" />
        </h2>
        <p>
          <Trans i18nKey="description" />
        </p>
      </div>
      <nav className="fixed top-0 z-10 flex w-full justify-between px-5 py-3 backdrop-blur-lg md:static md:flex md:flex-col md:gap-2 md:py-12">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="flex items-center gap-1 transition-all hover:text-white md:hover:translate-x-5"
          >
            <FaArrowRight className="size-3" />
            <Trans i18nKey={`links.${link}`} />
          </a>
        ))}
      </nav>
      <div className="flex gap-2 p-5 pb-0">
        {Object.keys(contacts).map((contact) => {
          const Icon = contacts[contact].icon;
          return (
            <a
              key={contact}
              href={contacts[contact].link}
              target="_blank"
              rel="noopener noreferer"
              className="cursor-pointer rounded-full transition-all hover:text-white"
            >
              <Icon className="size-9" />
            </a>
          );
        })}
      </div>
      <div className="absolute right-5 bottom-0 md:bottom-5">
        {Object.keys(supportedLngs).map((lng) => {
          const Flag = supportedLngs[lng].flag;
          return (
            <button
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              className={`cursor-pointer rounded-full border p-3 transition-all ${i18n.resolvedLanguage === lng ? 'border-blue-600 bg-slate-800' : 'border-transparent bg-transparent'}`}
            >
              <Flag title={supportedLngs[lng].title} className="w-6" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
