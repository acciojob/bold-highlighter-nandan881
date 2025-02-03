// Function to highlight bold words when hovering over the link
function highlight() {
  // Select all the <strong> tags in the document (bold words)
  var boldWords = document.getElementsByTagName('strong');
  
  // Loop through each <strong> element and change its color to green
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'green';
  }
}

// Function to revert the bold words back to the original color when mouse leaves the link
function return_normal() {
  // Select all the <strong> tags again
  var boldWords = document.getElementsByTagName('strong');
  
  // Loop through each <strong> element and reset its color to black
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'black';
  }
}
