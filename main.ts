// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry r1 — one satirical sentence (106 chars) written to /output/entry.txt.
// Setup: a 400-page AI law. Turn: the lawmaker phones IT over a PDF.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "They passed a 400-page law telling AI how to think, then phoned IT because the PDF would not open in Word.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
