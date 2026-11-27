// Run before the page paints. Direct links to /pl/ always stay in Polish.
(() => {
  const url = new URL(location.href);
  const choice = url.searchParams.get("lang");
  let language;
  try {
    language = localStorage.getItem("baktime-language");
  } catch {
    /* Browsers can disable site storage. */
  }

  if (choice === "en" || choice === "pl") {
    language = choice;
    try {
      localStorage.setItem("baktime-language", choice);
      url.searchParams.delete("lang");
      history.replaceState(null, "", url);
    } catch {
      /* Keep the explicit choice in the URL as a fallback. */
    }
  }

  const preferred =
    language || navigator.languages?.[0] || navigator.language || "en";
  if (document.documentElement.lang === "en" && /^pl(?:-|$)/i.test(preferred)) {
    url.pathname = "/pl/";
    location.replace(url);
  }
})();
