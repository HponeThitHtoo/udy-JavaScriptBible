/* var userAgent = navigator.userAgent;

if (userAgent.indexOf("Chrome") > -1) {
  console.log(`Hello from ES6`);
} else {
  console.log(`Hello from ES5`);
} */



function featureCheck() {
  try {
    eval("`Test String`;");
  } catch (e) {
    return false;
  }
  return true;
}

function insertScript(type) {
  let el = document.createElement("script");
  el.src = "src/" + type + ".js";
  // let body = document.getElementsByTagName("body");
  // body[0].insertAdjacentElement("beforeend", el);
  document.body.appendChild(el);
}

if (featureCheck()) {
  insertScript("es6");
} else {
  insertScript("es5");
}