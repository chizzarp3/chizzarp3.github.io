import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="ru">/);
  assert.match(html, /<title>Иван Иващенко/);
  assert.match(html, /Платформа стандартизированного 3D-культивирования/);
  assert.match(html, /СфероАнализ/);
  assert.match(html, /RU 2847666/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /og:image/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("all navigation targets exist", async () => {
  const html = await (await render()).text();
  for (const id of ["top", "projects", "publications", "experience", "about", "contacts"])
    assert.match(html, new RegExp(`id="${id}"`));
});
