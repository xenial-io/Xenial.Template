import "./css/main.scss";
import { themeing } from "./js/theme";
import { highlight, Prism } from "./js/highlight";
import { store } from "./js/store";
const xenial = () => {
  themeing();
  highlight();
};

export { xenial, store, Prism };
