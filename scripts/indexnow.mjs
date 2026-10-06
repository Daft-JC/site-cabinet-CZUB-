// Signale toutes les pages du sitemap à IndexNow (Bing, Yandex, Seznam, Naver…).
// À lancer APRÈS chaque mise en ligne : `npm run indexnow`
const SITE = "https://www.cabinet-czub.fr";
const KEY = "8a081d41981b74f2f8ddaed345f56ac2"; // fichier public/<KEY>.txt

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow : ${urlList.length} URL envoyées → HTTP ${res.status} ${res.statusText}`);
