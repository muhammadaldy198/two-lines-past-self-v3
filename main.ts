import { writeFileSync, chmodSync } from 'node:fs';
import { join } from 'node:path';

// two-lines-past-self v3 (rebuild): one small moment, one song carried forward.
// Positive chain: the finished song outlives the afternoon and is sung onward.
const lines = [
  "Don't leave the song unfinished on the piano in the school music room at 4pm on 11 March 2012.",
  "That song became the lullaby you sang your daughter, and she now sings it to her baby every night.",
];
const text = lines.join('\n');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
const target = join(outDir, 'entry.txt');
writeFileSync(target, text, 'utf8');
chmodSync(target, 0o644);
