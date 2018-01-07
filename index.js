var recipes = {}

// returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, {[key]: value})
}
