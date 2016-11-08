var checkTargets = document.querySelectorAll("input.checked"),
    checkValues = function(elems){
      var values = [],
          futureReturn = null;

      if (typeof elems == "object") {
        for(var i = 0; i < elems.length; i++){
          values.push(elems[i].value);
        }
      } else if (elems == null || elems == undefined) {
        return false;
      } else {
        values.push(elems.value);
      };

      if(values.length !== 0){
        for(var i = 0; i < values.length; i++){
          if(values[i] == ""){
            return false;
          } else {
            futureReturn = true;
          }
        }
      };

      console.log(elems);
      return futureReturn;
    },
    buttonTarget = document.querySelector(".check-button"),
    checkFunction = function(target){
      if(checkValues(target)){
        addClass(buttonTarget, "available");
        buttonTarget.disabled = "false";
      } else {
        removeClass(buttonTarget, "available");
        buttonTarget.disabled = "disabled";
      }
    };

function init(){
  for(var i = 0; i < checkTargets.length; i++){
    checkTargets[i].addEventListener("keydown", function(){
      checkFunction(checkTargets);
    });
    checkTargets[i].addEventListener("keyup", function(){
      checkFunction(checkTargets);
    })
  }
}

init();

function removeClass(el, _class) {
  if (el && el.className && el.className.indexOf(_class) >= 0) {
    var pattern = new RegExp('\\s*' + _class + '\\s*');
    el.className = el.className.replace(pattern, ' ');
  }
}
function addClass(el, _class){
  if (el.classList){
    el.classList.add(_class);
  } else {
    el.className += ' ' + _class;
  }
}
