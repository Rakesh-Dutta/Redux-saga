export const increment = () => {
    console.log("increment***")
    return { type: 'INCREMENT' }
}
export const decrement = () => {
    return { type: 'DECREMENT' }
}
export const increment_5 = () => {
    return { type: 'INCREMENT_5' }
}
export const decrement_5 = () => {
    return { type: 'DECREMENT_5' }
}
export const increment_async = () => {
    console.log("increment_async***")
    return { type: 'INCREMENT_ASYNC' }
}