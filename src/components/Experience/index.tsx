import React from 'react';
import { Trans } from 'react-i18next';

const years = ['y2025', 'y2024', 'y2022'];

export const Experience = () => {
  return (
    <div className="relative overflow-hidden py-12" id="experience">
      <div className="absolute top-10.5 left-[3.65rem] size-0 border-r-8 border-b-8 border-l-8 border-r-transparent border-b-blue-600 border-l-transparent" />
      <div className="absolute left-16 h-full w-1 bg-blue-600" />
      <div className="grid grid-cols-[3rem_min-content_1fr] items-center gap-x-3 gap-y-5">
        {years.map((year) => (
          <React.Fragment key={year}>
            <span>
              <Trans i18nKey={`${year}.period`} />
            </span>
            <div className="size-3 shrink-0 rounded-full bg-blue-600" />
            <div>
              <span className="font-bold text-white">
                <Trans i18nKey={`${year}.title`} />
              </span>
              <p>
                <Trans i18nKey={`${year}.description`} />
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
