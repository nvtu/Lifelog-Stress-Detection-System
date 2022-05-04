export const setDateRange = (startDate, endDate) => ({
    type: "SET_DATE_RANGE",
    startDate,
    endDate
})


export const setTimeRange = (startTime, endTime) => ({
    type: "SET_TIME_RANGE",
    startTime,
    endTime 
})


export const setStressFilter = (stressFilter) => ({
    type: "SET_STRESS_FILTER",
    stressFilter
})