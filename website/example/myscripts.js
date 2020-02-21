document.getElementById('buttonfilters').onclick=function(event) {
  var target = getEventTarget(event);
  alert(target.innerHTML);
};

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
};

