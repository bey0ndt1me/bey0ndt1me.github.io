// The email address is stored in _config.yml as character codes, so the static
// HTML never contains a plain address. It is assembled here only after the
// visitor deliberately clicks, which deters simple address harvesters. It is
// not meant to stop a crawler that executes JavaScript and interacts with the
// page.
document.addEventListener("DOMContentLoaded", function () {
  var link = document.querySelector(".js-email-reveal");
  if (!link) {
    return;
  }

  link.addEventListener("click", function (event) {
    if (link.dataset.emailRevealed === "true") {
      return;
    }

    event.preventDefault();
    var codePoints = (link.dataset.emailCodes || "").split(",").map(Number);
    var isValid =
      codePoints.length > 0 &&
      codePoints.every(function (code) {
        return Number.isInteger(code) && code > 0 && code <= 127;
      });

    if (!isValid) {
      return;
    }

    var address = String.fromCharCode.apply(null, codePoints);
    link.href = "mailto:" + address;
    link.dataset.emailRevealed = "true";
    link.removeAttribute("data-email-codes");
    link.textContent = address;
    link.title = "Click again to open your email app";
    link.setAttribute("aria-label", "Send email to " + address);
  });
});
