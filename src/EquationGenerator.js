//question generators input player rank and correct streak and get question, answer option1, answer option2, answer option3, answer option4, correct answer option
const range = ([playerRank, correctStreak]) => {
	//generate max and min, sum and difference
	const maxNum = Math.round(24 + (1 * correctStreak * playerRank) / 1000);
	const minNum = 6 - 1 * correctStreak;
	return [maxNum, minNum];
};

const anwserGen = (correctAnwser) => {
	//Probable answer generation function

	const algorithms = {
		//All the algorithms for generating probable answers (Infinetly expendable)
		1: Math.floor(
			Math.random() * (correctAnwser + 10 - correctAnwser + 1 + 1) +
				correctAnwser +
				1
		),
		2: Math.floor(
			Math.random() * (correctAnwser - 1 - correctAnwser - 10 + 1) +
				correctAnwser -
				10
		),
		3:
			Math.floor(
				Math.random() * (correctAnwser - 1 - correctAnwser - 2) +
					correctAnwser -
					2
			) + 2,
		4: Math.floor(
			Math.random() * (correctAnwser + 2 - correctAnwser + 1) +
				correctAnwser +
				1
		),
	};

	function shuffleArray(array) {
		//Shuffles array with all the answer generation methods
		let i = Object.keys(array).length;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i - 1) + 1);
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	const shuffledAlgorithms = shuffleArray(algorithms); //Asigns shuffledAlgorithms to shuffled array
	const correctAnswerIndex = Math.floor(Math.random() * 4 + 1); //Generates random number from 1-4 to decide which answer will be the correct one
	shuffledAlgorithms[correctAnswerIndex] = correctAnwser; //Overwrites one of first 4 answers with the correct answe
	return [shuffledAlgorithms, correctAnswerIndex]; //Returns whole shuffled algorithm array with one correct answer and then an int indicating which one is the correct answer
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
	const answers = anwserGen(addition.anwser); //Runs answer generation function and asigns it to answers

	return [
		//Returns the question, answer option 1 thru 4 and the correct answer index
		addition.question,
		answers[0][1],
		answers[0][2],
		answers[0][3],
		answers[0][4],
		answers[1],
	];
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
	const answers = anwserGen(subtraction.anwser); //Runs answer generation function and asigns it to answers

	return [
		//Returns the question, answer option 1 thru 4 and the correct answer index
		subtraction.question,
		answers[0][1],
		answers[0][2],
		answers[0][3],
		answers[0][4],
		answers[1],
	];
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
	const answers = anwserGen(multiplication.anwser); //Runs answer generation function and asigns it to answers

	return [
		//Returns the question, answer option 1 thru 4 and the correct answer index
		multiplication.question,
		answers[0][1],
		answers[0][2],
		answers[0][3],
		answers[0][4],
		answers[1],
	];
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
	const answers = anwserGen(division.a); //Runs answer generation function and asigns it to answers

	return [
		//Returns the question, answer option 1 thru 4 and the correct answer index
		division.question,
		answers[0][1],
		answers[0][2],
		answers[0][3],
		answers[0][4],
		answers[1],
	];
}
