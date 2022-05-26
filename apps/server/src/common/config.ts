import { readFileSync } from 'fs';
import * as yamlParser from 'js-yaml';

const YAML_CONFIG_FILENAME = 'config.yaml';

const yaml = () => {
    return yamlParser.load(readFileSync(YAML_CONFIG_FILENAME, 'utf8')) as Record<string, any>;
};

export const config = {
    yaml,
};
