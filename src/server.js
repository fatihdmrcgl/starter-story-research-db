import { createServer } from "node:http";
import { loadBusinesses, getBusinessById } from "./db.js";
import { getStats, searchBusinesses } from "./search.js";

const port = Number(process.env.PORT || 3030);
const records = await loadBusinesses();

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*"
  });
  response.end(JSON.stringify(payload, null, 2));
}

const server = createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname === "/health") {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (url.pathname === "/stats") {
    sendJson(response, 200, getStats(records));
    return;
  }

  if (url.pathname === "/businesses") {
    sendJson(
      response,
      200,
      searchBusinesses(records, {
        query: url.searchParams.get("query"),
        model: url.searchParams.get("model"),
        category: url.searchParams.get("category"),
        tag: url.searchParams.get("tag"),
        minRevenue: url.searchParams.get("minRevenue") ?? undefined
      })
    );
    return;
  }

  const businessMatch = url.pathname.match(/^\/businesses\/([^/]+)$/);
  if (businessMatch) {
    const record = getBusinessById(records, decodeURIComponent(businessMatch[1]));
    sendJson(response, record ? 200 : 404, record || { error: "Business not found." });
    return;
  }

  sendJson(response, 404, { error: "Not found." });
});

server.listen(port, () => {
  console.log(`Starter Story Research DB API listening at http://localhost:${port}`);
});
