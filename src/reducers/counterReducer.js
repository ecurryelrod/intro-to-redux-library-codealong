export default function counterReducer(state = {clicks: 0}, action) {
	console.log(action)
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.clicks', state.clicks)
			console.log('Updating state.clicks to', state.clicks + 1)
			return {
				clicks: state.clicks + 1
			}
		default:
			console.log('Initial state.clicks:', state.clicks)
			return state;
	}
}
