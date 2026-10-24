/* Artifact では .gz を配信できないため、言語データは Base64 の .txt で置いている。
   Tesseract のワーカーが .traineddata(.gz) を取りに行ったら、.b64.txt を読んでバイナリに戻して返す。 */
const originalFetch = self.fetch.bind(self);
self.fetch = async (url, opts) => {
  const u = String(url);
  if (/\.traineddata(\.gz)?$/.test(u)){
    const res = await originalFetch(u.replace(/\.traineddata(\.gz)?$/, '.traineddata.gz.b64.txt'), opts);
    if (!res.ok) return res;
    const bin = atob((await res.text()).trim());
    const data = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) data[i] = bin.charCodeAt(i);
    return new Response(data, {status: 200});
  }
  return originalFetch(url, opts);
};
importScripts(new URL('worker.min.js', self.location.href).href);
