const _origPD = Event.prototype.preventDefault;
Event.prototype.preventDefault = function () {
  if (this.type === "wheel") return;
  return _origPD.call(this);
};

function RemovePopup() {
  document.querySelector(".modal-modern-security-prompt")?.remove();
  document.body.removeAttribute("data-scroll-locked");
  document.body.style.overflow = "";
  document.body.style.marginRight = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(RemovePopup);
  observer.observe(document.body, { childList: true, subtree: true });
});
