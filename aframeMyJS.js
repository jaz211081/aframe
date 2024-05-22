function ToLink(){
    
}


AFRAME.registerComponent('code-that-does-this', {
    init: function () {
      // Code here.
      console.log(this.el);
    }
  });

  AFRAME.registerComponent('Btn_ToGoogle', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = 'https://www.google.com/';
          });
          console.log(this.el);
        }
      });