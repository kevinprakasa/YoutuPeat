  let changeColor = document.getElementById('changeColor');
  changeColor.onclick = function(element) {
    let color = element.target.value;
      chrome.tabs.executeScript(
          {code: 'document.getElementByClassName("html5-main-video")[0].loop = "true";'});
  };