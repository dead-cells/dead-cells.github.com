function $(element) {
  return document.getElementById(element);
}

function it(element) {
  if (element.innerText) {return element.innerText;}
  return element.textContent;
}

function getKey(e) {
  if (window.event)
    return window.event.keyCode;
  else if (e)
    return e.which;
  else
    return null;
}

function ael(obj, ev, fun) {
  if (obj.addEventListener) {
    obj.addEventListener(ev, fun, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + ev, fun);
  }
}

function rel(obj, ev, fun) {
  if (obj.removeEventListener) {
    obj.removeEventListener(ev, fun, false);
  } else if (obj.detachEvent) {
    obj.detachEvent("on" + ev, fun);
  }
}