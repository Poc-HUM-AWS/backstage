import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

export const scaffolderModuleAwsActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'aws-actions',
  register(reg) {
    reg.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        logger.info('Hello World!');
      },
    });
  },
});
