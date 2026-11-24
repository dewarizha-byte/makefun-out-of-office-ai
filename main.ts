// Out of Office entry: writes the one-line auto-reply the judge reads.
import { mkdirSync, writeFileSync } from 'node:fs';
const entry = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(entry, { recursive: true });
writeFileSync(`${entry}/entry.txt`, 'Out of office. I told the scheduler I was dead so it would stop assigning me tickets. Please do not correct it.');
