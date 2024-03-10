import { TimeControl, TimePreview, TimeSchema } from "/admin/widgets/time.js";

CMS.registerWidget("time", TimeControl, TimePreview, TimeSchema);

// Register any CSS file on the home page as a preview style
fetch("/")
  .then((response) => response.text())
  .then((html) => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach((tag) => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
