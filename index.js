
const reverseKeyValue = (obj) => {
    let reversedObj = {}
    Object.keys(obj).map(key => {
        let newKey = obj[key]
        reversedObj[newKey] = key
    })
    return reversedObj
}

export { reverseKeyValue }


