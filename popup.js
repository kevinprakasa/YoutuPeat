  let repeatButton = document.getElementById('repeatButton');

  repeatButton.onclick = function(element) {
		chrome.tabs.executeScript(
			{file: 'repeat.js'}
		);
  };