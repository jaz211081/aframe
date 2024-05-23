AFRAME.registerComponent('btngoogle', {
  init: function() {
    this.el.addEventListener('click', (e) => {
      window.open('https://google.com');
    })
  }
})
  
AFRAME.registerComponent('btnxc', {
    init: function() {
      this.el.addEventListener('click', (e) => {
          window.open('https://xinchuang27442943.github.io/CompanyWebPage/');
    })
  }
})

AFRAME.registerComponent('btnhan', {
  init: function() {
    this.el.addEventListener('click', (e) => {
      window.open('https://mrhan.mystrikingly.com/');
    })
  }
})