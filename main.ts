import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sentence = "One star for Earth: humans charge rent for standing on dirt, baffling all six of my legs, but the garlic bread is so sublime I asked the mothership to send a security deposit instead of a death ray.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), sentence, 'utf8');
