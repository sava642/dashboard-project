//создаем экшн и константу

export const ADD_POSITIONS = 'ADD_POSITIONS';

export const addPositions = (positions) => ({
	type: ADD_POSITIONS,
	positions,
	// можно испоьзовать payload:positions
})