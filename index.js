var recipes = {}


// returns an object with the orignal key value pairs and the new key value pair
// it does not modify the original object, but rather returns a clone with
// the new dat
function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    // updates `object` with the given `key` and `value` (it is destructive)
    // and returns the entire updated object
    return Object.assign(object, {[key]: value})
}
