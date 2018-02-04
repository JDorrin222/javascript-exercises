function echo(input) {
	return input;
}

function shout(inputStr) {
	return inputStr.toUpperCase();
}

function repeat(inputRepeat, inputVar = 2) {
	return (inputRepeat + ' ').repeat(inputVar).trim();
}

function pieceOfWord(str, indx) {
	return str.substring(0, indx);
}

function firstWord(firstWordString) {
	let firstWordResult = firstWordString.split(' ')
 return firstWordResult[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

// function titleCreator(titleCreatorString) {
// let result1 = titleCreatorString.split(' ');
// 	for(i = 0; i < result1.length; i++){
// 		result1[i] = result1[i].charAt(0).toUpperCase() + result1[i].substr(1);
// 		if(i != 0 && (result1[i]=="And" || result1[i] =="The" || result1[i]=="Over")){
// 			result1[i] = result1[i].toLowerCase();
// 		}
// 	}
// str = result1.join(" ");
// // str1 = str.charAt(0).toUpperCase() + str.substr(1);
//
//
// return str;
//
// }

function titleCreator(titleCreatorString) {
	let smallWords = ['and', 'the', 'over'];
	let words = titleCreatorString.split(' ');

	for(i = 0; i < words.length; i++) {
		if (i > 0 && smallWords.includes(words[i])) {
			continue;
		}
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	return words.join(' ');
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
