const dataFromApi = (state = "Zero Data state", action) => {
    console.log("Was dispatched?")
    switch (action.type) {
        case 'GET_DATA':
            return state + " Data is Here"
        default:
            return state + " No Data for you today : /"
    }
};

export default dataFromApi