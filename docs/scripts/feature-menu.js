const primaryMenu = document.querySelector(".md-sidebar--primary nav.md-nav--primary");
if (primaryMenu) {
  const box = document.createElement("div");
  box.className = "guide-search";
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Find a feature or page";
  input.setAttribute("aria-label", input.placeholder);
  const results = document.createElement("ul");
  const status = document.createElement("span");
  status.setAttribute("role", "status");
  status.className = "guide-search-count";
  const fullSearch = document.createElement("button");
  fullSearch.type = "button";
  fullSearch.textContent = "Search the whole guide";
  fullSearch.addEventListener("click", () => {
    const toggle = document.querySelector("#__search");
    const query = document.querySelector('[data-md-component="search-query"]');
    const drawer = document.querySelector('#__drawer');
    if (drawer.checked) drawer.click();
    if (!toggle.checked) toggle.click();
    query.focus();
    query.value = input.value;
    query.dispatchEvent(new Event("input", { bubbles: true }));
  });
  box.append(input, status, results, fullSearch);
  primaryMenu.before(box);
  const links = [...primaryMenu.querySelectorAll("a.md-nav__link")];
  function revealCurrentFeature() {
    const current = links.find(link => link.href === location.href && link.closest(".md-nav[data-md-level='2']"));
    if (!current) return;
    for (let group = current.closest("li"); group; group = group.parentElement.closest("li")) {
      const toggle = group.querySelector(":scope > input.md-nav__toggle");
      if (toggle) toggle.checked = true;
    }
  }
  revealCurrentFeature();
  window.addEventListener("hashchange", revealCurrentFeature);
  results.addEventListener("click", event => {
    if (event.target.closest("a") && document.querySelector("#__drawer").checked) {
      document.querySelector("#__drawer").click();
    }
  });
  input.addEventListener("input", () => {
    const words = input.value.trim().toLowerCase().split(/\s+/);
    results.replaceChildren();
    status.textContent = "";
    if (!words[0]) return;
    const found = new Set();
    for (const link of links) {
      const label = link.textContent.trim().replace(/\s+/g, " ");
      if (found.has(link.href) || !words.every(word => label.toLowerCase().includes(word))) continue;
      const item = document.createElement("li");
      const result = document.createElement("a");
      result.href = link.href;
      result.textContent = label;
      item.append(result);
      results.append(item);
      found.add(link.href);
    }
    status.textContent = found.size ? found.size + " matching links" : "No menu matches. Try searching the whole guide.";
  });
}
