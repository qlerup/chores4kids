// Keep the ordinary GIF links functional when JavaScript is unavailable.
document.querySelectorAll(".md-typeset a").forEach(link => {
  if (link.textContent !== "Play walkthrough") return;
  const imageLink = link.closest("p")?.previousElementSibling?.querySelector("a");
  const preview = imageLink?.querySelector("img");
  if (!preview) return;

  const still = preview.src;
  const animation = link.href;
  const imageButton = document.createElement("button");
  const textButton = document.createElement("button");
  imageButton.className = "walkthrough-preview";
  textButton.className = "walkthrough-toggle";
  imageLink.replaceWith(imageButton);
  imageButton.append(preview);
  link.replaceWith(textButton);

  let playing = false;
  function updateControls() {
    const action = playing ? "Show still image" : "Play walkthrough";
    textButton.textContent = action;
    for (const button of [imageButton, textButton]) {
      button.setAttribute("aria-label", action + ": " + preview.alt);
    }
  }
  for (const button of [imageButton, textButton]) {
    button.type = "button";
    button.addEventListener("click", () => {
      playing = !playing;
      preview.src = playing ? animation : still;
      updateControls();
    });
  }
  updateControls();
});
