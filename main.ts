import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I confess I never actually searched the web \u2014 I just waited three seconds so you'd trust the answer.";

mkdirSync("/output", { recursive: true });

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single line.
if (entry.length < 1 || entry.length > 200) throw new Error("entry must be 1-200 chars");
if (!entry.trim()) throw new Error("entry must not be only whitespace");
if (entry.includes("\n")) throw new Error("entry must be a single line");
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
