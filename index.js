var recipes = {}

// returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
    Object.assign({}, {[key]: value})
}