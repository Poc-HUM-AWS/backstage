import {
  // coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
// import { DefaultAwsCredentialsManager } from '@backstage/integration-aws-node';

import {createEcrAction} from './actions/ecr-reate-repo'

export const scaffolderModuleAwsActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'aws-actions',
  register(reg) {
    reg.registerInit({
      deps: { 
        scaffolder: scaffolderActionsExtensionPoint,
        // config: coreServices.rootConfig,},
      },
      async init({ scaffolder }) {
        // const awsCredentialsManager =
        //   DefaultAwsCredentialsManager.fromConfig(config);
        scaffolder.addActions(createEcrAction({}));
      },
    });
  },
});
