function firstChar(text) {
  // your code here
	let trimmed = text.trim();
	let trimmedText = trimmed.charAt(0);
	return trimmedText;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
