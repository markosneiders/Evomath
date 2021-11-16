// Actions

const SETHIGHSCORE = "SETHIGHSCORE";

// Action creators

export const sethighscore = (highscore) => {
	return { type: SETHIGHSCORE, payload: highscore };
};

// Initial state
const initialState = {
	highscore: 0,
};

// Root reducer
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETHIGHSCORE:
			return { ...state, highscore: (state.highscore = action.payload) };

		default:
			return state;
	}
};

export default profileReducer;
