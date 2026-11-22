import { readFile } from "node:fs/promises";
import { build } from "esbuild";

const read = path => readFile(path, "utf8");
const icons = JSON.parse(await read("node_modules/@mdi/svg/meta.json"));
const names = icons.map(icon => icon.name).sort().join(" ");
const packages = ["lit", "lit-element", "lit-html", "@lit/reactive-element", "@mdi/svg"];
const licenses = new Set();
for (const pkg of packages) {
  licenses.add((await read(`node_modules/${pkg}/LICENSE`)).replaceAll("\r\n", "\n").trim());
}

await build({
  entryPoints: ["src/chores4kids-card.js"],
  outfile: "chores4kids-card.js",
  bundle: true,
  format: "esm",
  target: "es2022",
  minify: true,
  legalComments: "inline",
  define: { __C4K_MDI_ICON_NAMES__: JSON.stringify(names) },
  banner: { js: "// Generated from src/chores4kids-card.js with npm run build." },
  footer: { js: `/*! Third-party licenses\n${[...licenses].join("\n\n")}\n*/` },
});
