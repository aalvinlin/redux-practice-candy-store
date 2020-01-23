export const addToBasket = (candy) => {
    return {
        type: "ADD_TO_BASKET",
        payload: candy
    }
}

export const removeFromBasket = (candy) => {
    return {
        type: "REMOVE_FROM_BASKET",
        payload: candy
    }
}

