import _ from "lodash";
import "./styles.css";

function component() {
  const h1 = document.createElement("h1");
  const div = document.createElement("div");

  // Lodash, now imported by this script
  h1.innerHTML = _.join(["Auto", "Prefixer"], " ");
  h1.classList.add("autoprefixer");
  div.classList.add("text-5xl");
  div.appendChild(h1);

  return div;
}

document.body.appendChild(component());
