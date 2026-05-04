import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const dirs = readdirSync(join(__dirname, '..', 'src/'))
console.log(dirs);

const exports = dirs.map(e => {
    return {
        "./input": {
            "types": "./src/input/public-api.ts",
            "default": "./src/input/public-api.ts"
        },
    }
})