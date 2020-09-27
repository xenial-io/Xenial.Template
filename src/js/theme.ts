import { store } from "./store";

const themeing = () => {
  const themeKey = "preferTheme";
  var storedTheme = store(themeKey);
  const elementId = "xenial-toggle-theme";
  const toggleTheme = <HTMLInputElement>document.getElementById(elementId);

  if (storedTheme && typeof storedTheme === "boolean") {
    const root = document.documentElement;

    const animS = getComputedStyle(root).getPropertyValue("--xenial-anim-s");
    const animS2 = root.style.getPropertyValue("--xenial-anim-s2");
    const animS3 = root.style.getPropertyValue("--xenial-anim-s3");
    const animM = root.style.getPropertyValue("--xenial-anim-m");
    const animL = root.style.getPropertyValue("--xenial-anim-l");

    try {
      root.style.setProperty("--xenial-anim-s", "0", "important");
      root.style.setProperty("--xenial-anim-s2", "0", "important");
      root.style.setProperty("--xenial-anim-s3", "0", "important");
      root.style.setProperty("--xenial-anim-m", "0", "important");
      root.style.setProperty("--xenial-anim-l", "0", "important");
      toggleTheme.checked = storedTheme;
    } finally {
      setTimeout(() => {
        root.style.setProperty("--xenial-anim-s", animS, "important");
        root.style.setProperty("--xenial-anim-s2", animS2, "important");
        root.style.setProperty("--xenial-anim-s3", animS3, "important");
        root.style.setProperty("--xenial-anim-m", animM, "important");
        root.style.setProperty("--xenial-anim-l", animL, "important");
      }, 0);
    }
  }
  if (toggleTheme) {
    toggleTheme.onchange = () => {
      store(themeKey, toggleTheme.checked);
    };
  } else {
    console.warn(`could not find element to toggle with the id ${elementId}`);
  }
};

export { themeing };
