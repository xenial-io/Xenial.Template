import "./css/main.scss";
import { themeing } from "./js/theme";
import { highlight } from "./js/highlight";

const xenial = () => {
  themeing();
  highlight();
};

export { xenial };
