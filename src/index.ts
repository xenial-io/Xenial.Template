import { store } from "./js/store";

const themeKey = "preferTheme";
var storedTheme = store(themeKey);

const toggleTheme = <HTMLInputElement>(
  document.getElementById("xenial-toggle-theme")
);

if (storedTheme && typeof storedTheme === "boolean") {
  toggleTheme.checked = storedTheme;
}

toggleTheme.onchange = () => {
  store(themeKey, toggleTheme.checked);
};
