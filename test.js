window.jQuery = function(selector){
    let elements;
    if (typeof selector === 'string') {
        elements = document.querySelectorAll(selector);
    }else if(selector instanceof Array) {
        elements = selector;
    }
    return {
      addClass(className){
          for(let i = 0; i < elements.length; i++) {
           elements[i].classList.add(className);
          }
        return this;
      },
      find(selector){
          let array = [];
          for( let i = 0; i< elements.length; i++){
            array.push(...Array.from(elements[i].querySelectAll(selector)));
          }
          return jQuery(array);
      }
    }
  }
  
  window.$ = window.jQuery
