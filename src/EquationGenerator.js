//question generators input player rank and correct streak and get question, answer option1, answer option2, answer option3, answer option4, correct answer option
const range = ([playerRank, correctStreak]) => {
	//generate max and min, sum and difference
	const maxNum = Math.round(24 + (1 * correctStreak * playerRank) / 1000);
	const minNum = 6 - 1 * correctStreak;
	return [maxNum, minNum];
};

export function genAddition([playerRank, correctStreak]) {
	const addition = {};
	//Gets maxnum and min num from range()
	const maxNum = range([playerRank, correctStreak])[0];
	const minNum = range([playerRank, correctStreak])[1];

	//Question generation
	addition.anwser = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
	addition.b = Math.floor(Math.random() * addition.anwser);
	addition.a = addition.anwser - addition.b;

	//Formating and return
	addition.question = addition.a + "+" + addition.b;
	return [addition.question, null, null, null, null, null];
}

export function genSubtraction([playerRank, correctStreak]) {
	const subtraction = {};
	//Gets maxnum and min num from range()
	const maxNum = range([playerRank, correctStreak])[0];
	const minNum = range([playerRank, correctStreak])[1];

	//Question generation
	subtraction.anwser = Math.floor(
		Math.random() * (maxNum - minNum + 1) + minNum
	);
	subtraction.b = Math.floor(Math.random() * subtraction.anwser);
	subtraction.a = subtraction.anwser + subtraction.b;

	//Formating and return
	subtraction.question = subtraction.a + "-" + subtraction.b;
	return [subtraction.question, null, null, null, null, null];
}

export function genMultiplication([playerRank, correctStreak]) {
	const multiplication = {};
	//Gets maxnum and min num from range()
	const maxNum = range([playerRank, correctStreak])[0];
	const minNum = range([playerRank, correctStreak])[1];

	//Question generation
	multiplication.a = Math.floor(Math.random() * (10 - 2)) + 2;
	multiplication.b = Math.floor(Math.random() * (10 - 2)) + 2;
	multiplication.anwser = multiplication.a * multiplication.b;

	//Formating and return
	multiplication.question = multiplication.a + "*" + multiplication.b;
	return [multiplication.question, null, null, null, null, null];
}

export function genDivision([playerRank, correctStreak]) {
	const division = {};
	//Gets maxnum and min num from range()
	const maxNum = range([playerRank, correctStreak])[0];
	const minNum = range([playerRank, correctStreak])[1];

	//Question generation
	division.a = Math.floor(Math.random() * (10 - 2)) + 2;
	division.b = Math.floor(Math.random() * (10 - 2)) + 2;
	division.anwser = division.a * division.b;

	//Formating and return
	division.question = division.anwser + "/" + division.b;
	return [division.question, null, null, null, null, null];
}
