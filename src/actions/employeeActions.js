export const addNewCandy = newCandy => {
    return {
        type: '',
        payload: newCandy
    };
}

export const removeCandy = candyID => {
    return {
        type: '',
        payload: candyID
    };
}

export const addToStock = (candyID, numToAdd) => {
    return {
        type: '',
        payload: {id: candyID, numToAdd: numToAdd}
    };
}

export const changePrice = (candyID, newPrice) => {
    return {
        type: '',
        payload: {id: candyID, newPrice: newPrice}
    };
}