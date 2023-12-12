import { SplitEnumsConfigurator } from '@wezom/graphql-codegen-configurator';
import { DOCUMENTS, OUTPUT_DIR, SCHEMA_SDL } from '../constants';

const configurator = new SplitEnumsConfigurator({
	schema: SCHEMA_SDL,
	outputDir: OUTPUT_DIR,
	documents: DOCUMENTS,
	ignoreNoDocuments: true
});

const config = configurator.create();
export { config as default };
