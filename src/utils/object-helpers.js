export const updateObjectInArray = (items, itemId, objectPropertyName, newObjectProps) => {
    return items.map(u => {
        if (u[objectPropertyName] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u
    })
}