import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(dir, "output");
mkdirSync(outDir, { recursive: true });
// Copy entry.txt verbatim into the output directory (created if missing).
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
