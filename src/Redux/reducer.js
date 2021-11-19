// Actions

const SETHIGHSCORE = "SETHIGHSCORE";
const SETSCORE = "SETSCORE";
const SETTUTORIAL = "SETTUTORIAL";
const SETGAMES = "SETGAMES";
const SETIMAGE = "SETIMAGE";

// Action creators

export const sethighscore = (highscore) => {
	return { type: SETHIGHSCORE, payload: highscore };
};
export const setscore = (score) => {
	return { type: SETSCORE, payload: score };
};
export const settutorial = (tutorial) => {
	return { type: SETTUTORIAL, payload: tutorial };
};
export const setgames = (games) => {
	return { type: SETGAMES, payload: games };
};
export const setimage = (image) => {
	return { type: SETIMAGE, payload: image };
};

// Initial state
const initialState = {
	highscore: 0,
	tutorial: true,
	score: 0,
	games: 0,
	image: ".//",
};

// Root reducer
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETHIGHSCORE:
			return { ...state, highscore: (state.highscore = action.payload) };

		case SETSCORE:
			return { ...state, score: (state.score = action.payload) };

		case SETTUTORIAL:
			return { ...state, tutorial: (state.tutorial = action.payload) };

		case SETGAMES:
			return { ...state, games: (state.games = action.payload) };

		case SETIMAGE:
			return { ...state, image: (state.image = action.payload) };

		default:
			return state;
	}
};

export default profileReducer;
