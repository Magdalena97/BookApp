export const counterIncrement = () => {
    return {
        type: "INCREMENT"
    };
}
export const counterDecrement = () => {
    return {
        type: "DECREMENT"
    };
}
export const counterSet = (receivednumber) => {
    return {
        type: "SET",
        payload: receivednumber
    };
}