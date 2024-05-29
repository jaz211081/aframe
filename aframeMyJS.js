AFRAME.registerComponent('btngoogle', {
  init: function() {
    this.el.addEventListener('click', function() {
      window.open('https://google.com');
    });
  }
});

AFRAME.registerComponent('btnxc', {
  init: function() {
    this.el.addEventListener('click', function() {
      window.open('https://xinchuang27442943.github.io/CompanyWebPage/');
    });
  }
});

AFRAME.registerComponent('btnhan', {
  init: function() {
    this.el.addEventListener('click', function() {
      window.open('https://mrhan.mystrikingly.com/');
    });
  }
});

AFRAME.registerComponent('click-show-window', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      var fileName = el.getAttribute('data-file');
      if (fileName) {
        var infoWindow = document.getElementById('infoWindow');
        fetch(fileName)
          .then(response => response.text())
          .then(data => {
            document.getElementById('infoContent').innerHTML = data; // Use innerHTML to allow HTML tags
            infoWindow.style.display = 'block';
          })
          .catch(error => console.error('Error loading message:', error));
      }
    });
  }
});

function closeWindow() {
  var infoWindow = document.getElementById('infoWindow');
  infoWindow.style.display = 'none';
}
