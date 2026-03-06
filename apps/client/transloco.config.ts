import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: '/i18n/',
  langs: [
    'en', 'es', 'fr',
    'ru', 'tr', 'de',
    'zh', 'ja', 'pt'
  ],
  keysManager: {}
};

export default config;