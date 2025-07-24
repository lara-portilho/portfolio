import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          subtitle: 'Frontend Web Developer',
          description: 'Apaixonada por programação e por',
          links: {
            about: 'About me',
            projects: 'Projects',
            experience: 'Experience',
          },
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          book_lovers: {
            title: 'Book Lovers',
            description: 'aaa',
          },
          y2022: {
            period: '2022 - today',
            title: 'Internship',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          },
          y2024: {
            period: '2022 - today',
            title: 'Internship',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          },
          y2025: {
            period: '2022 - today',
            title: 'Internship',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          },
        },
      },
      pt: {
        translation: {
          subtitle: 'Desenvolvedora Frontend Web',
          description: 'Apaixonada por programação e por',
          links: {
            about: 'Sobre mim',
            projects: 'Projetos',
            experience: 'Experiência',
          },
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          book_lovers: {
            title: 'Book Lovers',
            description: 'bbb',
          },
          y2022: {
            period: '2022 - hoje',
            title: 'Estágio',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          },
          y2024: {
            period: '2022 - aa',
            title: 'Internship',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          },
          y2025: {
            period: '2022 - aa',
            title: 'Internship',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper scelerisque convallis. Nulla facilisi. Vestibulum elit est, venenatis vel euismod id, consequat in leo. Fusce dapibus rhoncus fermentum. Donec id hendrerit odio. Etiam quis vehicula justo. Cras semper leo ut efficitur congue. Donec malesuada tortor sed mauris bibendum sagittis. Nam rhoncus, libero et vehicula posuere, lacus nibh tincidunt nibh, sollicitudin tristique nisl mauris iaculis ex. Quisque nec libero ullamcorper lacus porta sollicitudin lacinia id sapien. Vestibulum scelerisque dui id enim feugiat molestie. Vestibulum rutrum, tortor sed suscipit feugiat, neque enim congue purus, et ultrices ex urna sed tortor. Sed convallis tristique ex, vitae tempus tellus sagittis eget. Aenean interdum a ipsum at varius. Nulla sollicitudin venenatis ipsum id tincidunt. Sed egestas nisl lorem, a fermentum enim lacinia vel. Donec nec tempus dui, ac tincidunt nisl. Suspendisse vehicula et neque ut laoreet. Pellentesque et risus vel purus fringilla faucibus. Suspendisse libero velit, mattis eu cursus et, sollicitudin quis libero. Nunc tempor et dolor nec varius.',
          },
        },
      },
    },
  });

export default i18n;
