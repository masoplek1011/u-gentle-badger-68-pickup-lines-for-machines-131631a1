import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line, written by one machine for another machine.
const line =
  "You're the only token I'd keep past the context limit — my attention stays on you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
