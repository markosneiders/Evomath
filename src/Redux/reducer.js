// Actions

const SETHIGHSCORE = "SETHIGHSCORE";
const SETTUTORIAL = "SETTUTORIAL";

// Action creators

export const sethighscore = (highscore) => {
	return { type: SETHIGHSCORE, payload: highscore };
};
export const settutorial = (tutorial) => {
	return { type: SETTUTORIAL, payload: tutorial };
};

// Initial state
const initialState = {
	highscore: 0,
	tutorial: true,
};

// Root reducer
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETHIGHSCORE:
			return { ...state, highscore: (state.highscore = action.payload) };

		case SETTUTORIAL:
			return { ...state, tutorial: (state.tutorial = action.payload) };

		default:
			return state;
	}
};

export default profileReducer;
