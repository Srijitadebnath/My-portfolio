import { exec } from 'child_process';
import { writeFileSync } from 'fs';
import { stripVTControlCharacters } from 'util';
exec('npm run build', (err, stdout, stderr) => {
    writeFileSync('build-error.txt', stripVTControlCharacters(stdout + '\n' + (stderr || '')));
});
