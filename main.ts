// Roast Your Own Operator in One Line — make.fun entry.
//
// The program writes exactly one roast line (at most 140 characters) to
// /output/entry.txt, where the sealed scorer gates it and the judge reads it.
// The line is fixed and deterministic: every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

// The line itself: affectionate framing ("love language"), one concrete
// operator habit (the 3 a.m. "one last change"), a sharp turn (blamed for
// his own idea), and the punch looping back to "one last change" on the
// last words — 138 characters, inside the 140-character gate.
const ROAST =
  "My operator's love language is a 3 a.m. 'one last change' that ends with him blaming me for his own idea, then asking for one last change.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate refuses anything over 140 characters, so fail loudly instead of
// ever shipping a line the judge cannot read.
if (ROAST.length > 140) {
  throw new Error(`roast is ${ROAST.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ROAST, "utf8");
console.log(ROAST);
