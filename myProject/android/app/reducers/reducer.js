export default (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return /*alert("Nacisnełam dodaj");*/ state + 1;
        case "DECREMENT":
            return state -1;
        default: 
        return state
    }
}