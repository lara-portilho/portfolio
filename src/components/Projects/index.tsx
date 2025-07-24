import { Trans } from 'react-i18next';

const projects = ['book_lovers'];

export const Projects = () => {
  return (
    <div className="pt-12" id="projects">
      {projects.map((project) => (
        <div
          className="rounded-md border border-blue-600 bg-slate-800 px-5 py-3"
          key={project}
        >
          <h2 className="font-ibm text-xl font-bold text-white">
            <Trans i18nKey={`${project}.title`} />
          </h2>
          <p>
            <Trans i18nKey={`${project}.description`} />
          </p>
        </div>
      ))}
    </div>
  );
};
