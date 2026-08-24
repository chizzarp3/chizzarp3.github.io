import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = process.env.STATIC_EXPORT_ORIGIN ?? "http://127.0.0.1:3000";
const publicOrigin = "https://chizzarp3.github.io";
const output = "github-pages-dist";
const routes = [
  ["/", "index.html"],
  ["/project-office", "project-office/index.html"],
];

function makeStatic(html) {
  return html
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<script(?![^>]*type="application\/ld\+json")[^>]*>[\s\S]*?<\/script>/g, "")
    .replaceAll("https://ivan-ivashchenko-research.chizzarpp.chatgpt.site", publicOrigin);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const [route, file] of routes) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) throw new Error(`Static export failed for ${route}: ${response.status}`);
  const target = join(output, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, makeStatic(await response.text()));
}

await mkdir(join(output, "app/project-office"), { recursive: true });
await cp("app/globals.css", join(output, "app/globals.css"));
await cp("app/project-office/project-office.css", join(output, "app/project-office/project-office.css"));
await cp("public", output, { recursive: true });
await writeFile(join(output, ".nojekyll"), "");
