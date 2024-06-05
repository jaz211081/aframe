// 小視窗點擊後開啟正確文件
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
            addLinkEventListeners(); // 添加对链接点击事件的监听
          })
          .catch(error => console.error('Error loading message:', error));
      }
    });
  }
});

// 小視窗內部資訊更新
function addLinkEventListeners() {
  var links = document.getElementById('infoWindow').querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      if (link.getAttribute('target') === '_blank') {
        // 允许外部链接打开
        return;
      }
      event.preventDefault(); // 阻止默认行为
      var fileName = link.getAttribute('href');
      if (fileName) {
        fetch(fileName)
          .then(response => response.text())
          .then(data => {
            document.getElementById('infoContent').innerHTML = data; // 更新内容
            addLinkEventListeners(); // 递归调用以添加新内容中的链接事件监听
          })
          .catch(error => console.error('Error loading message:', error));
      }
    });
  });
}

function closeWindow() {
  var infoWindow = document.getElementById('infoWindow');
  stopAllVideos(infoWindow); // 停止所有影片
  infoWindow.style.display = 'none';
}

function stopAllVideos(container) {
  var videos = container.querySelectorAll('video');
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
  
  var iframes = container.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    var src = iframe.src;
    iframe.src = src; // 重新加载iframe以停止视频播放
  });
}

function topLeftButtonAction() {
  var button = document.querySelector('.top-left-button');
  var filePath = button.getAttribute('data-file');
  var infoWindowCenter = document.getElementById('infoWindowCenter');

  fetch(filePath) // 使用从按钮获取的文件路径
    .then(response => response.text())
    .then(data => {
      document.getElementById('infoContentCenter').innerHTML = data;
      infoWindowCenter.style.display = 'block';
      infoWindowCenter.style.top = '50%'; // 将窗口置于屏幕中央
      infoWindowCenter.style.left = '50%';
      infoWindowCenter.style.transform = 'translate(-50%, -50%)'; // 将窗口置于屏幕中央
      addLinkEventListeners();
    })
    .catch(error => console.error('Error loading message:', error));
}

function closeWindowCenter() {
  var infoWindowCenter = document.getElementById('infoWindowCenter');
  stopAllVideos(infoWindowCenter);
  infoWindowCenter.style.display = 'none';
}
