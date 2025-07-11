import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

import {createAzurePipelineAction} from './actions/createAzurePipeline'
import {runAzurePipelineAction} from './actions/runAzurePipeline'
import {permitAzurePipelineAction} from './actions/permitAzurePipeline'

export const scaffolderModuleAzurePipelinesActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'azure-pipelines-actions',
  register(reg) {
    reg.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
        // ... and other dependencies as needed
      },
      async init({ scaffolder, config }) {
        scaffolder.addActions(createAzurePipelineAction({ config }));
        scaffolder.addActions(runAzurePipelineAction({ config }));
        scaffolder.addActions(permitAzurePipelineAction({ config }));
      },
    });
  },
});
