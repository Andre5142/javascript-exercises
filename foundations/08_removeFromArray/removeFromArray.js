const removeFromArray = function (arr, ...args) {
    const remArray = []
    arr.forEach((item) => {
        if (!args.includes(item)) {
            remArray.push(item)
        }
    })
    return remArray
}
// Do not edit below this line
module.exports = removeFromArray;
