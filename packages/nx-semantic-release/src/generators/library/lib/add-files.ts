import { Tree, names, offsetFromRoot, generateFiles } from '@nrwl/devkit';
import * as path from 'path';
import { NormalizedSchema } from './normalize-options';

export function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };

  // Generate root files
  generateFiles(
    tree,
    path.join(__dirname, '..', 'files', 'root'),
    '.',
    templateOptions
  );

  // Generate lib files
  generateFiles(
    tree,
    path.join(__dirname, '..', 'files', 'lib'),
    options.projectRoot,
    templateOptions
  );
}
