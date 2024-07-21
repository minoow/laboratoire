import _ from "lodash";
import printMe from "./print.js";

function component() {
  const div = document.createElement("div");

  div.innerHTML = "laboratorie!";
  div.onclick = printMe;

  return div;
}

document.body.appendChild(component());
