const first = { a: 2, s: 3, d: 4 };
const second = { a: 2, d: 4, s: 5 };

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);

    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false
            }
        }
        return true
    }
    else {
        return false
    }
}
const result = compareObject(first, second);
console.log(result);