// Actions

const SETHIGHSCORE = "SETHIGHSCORE";
const SETSCORE = "SETSCORE";
const SETTUTORIAL = "SETTUTORIAL";

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

// Initial state
const initialState = {
	highscore: 0,
	tutorial: true,
	score: 0,
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

		default:
			return state;
	}
};

export default profileReducer;
