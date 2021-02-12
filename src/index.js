import _ from "lodash";
import "./styles.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("text-5xl");

  return element;
}

document.body.appendChild(component());
