(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const c of t.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = o(e);
    fetch(e.href, t);
  }
})();
function u(i) {
  let r = 0;
  const o = (n) => {
    (r = n), (i.innerHTML = `count is ${r}`);
  };
  i.addEventListener("click", () => o(r + 1)), o(0);
}
let s = 1;
s = 2;
document.querySelector("#app").innerHTML = ` <div> 
<div class="card">
  <button id="counter" type="button"></button>
</div>  ${s}</div> `;
u(document.querySelector("#counter"));
