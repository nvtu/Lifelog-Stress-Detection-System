let initialState = {
    'start_date': '',
    'end_date': '',
    'start_time': '',
    'end_time': '',
    'stress_filter': 'all', // Filter by stress moments (stress, neutral, all) where all return all moments regardless of stress
}


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATE_RANGE':
            return {
                ...state,
                'start_date': action.startDate,
                'end_date': action.endDate,
            }
        case 'SET_TIME_RANGE':
            return {
                ...state,
                'start_time': action.startTime,
                'end_time': action.endTime,
            }
        case 'SET_STRESS_FILTER':
            return {
                ...state,
                'stress_filter': action.stressFilter,
            }
        default:
            return state
    }
}


export default filterReducer;