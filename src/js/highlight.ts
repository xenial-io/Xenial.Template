import Prism from "prismjs";

import "prismjs/components/prism-markup-templating.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-csharp.min.js";
import "prismjs/components/prism-yaml.min.js";
import "prismjs/components/prism-json.min.js";
import "prismjs/components/prism-php.min.js";
import "prismjs/components/prism-sass.min.js";
import "prismjs/components/prism-css.min.js";
import "prismjs/components/prism-css-extras.min.js";
import "prismjs/components/prism-scss.min.js";

const highlight = () => {
  Prism.highlightAll();
};

export { highlight };
