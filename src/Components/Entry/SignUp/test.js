function isUpper(str) {
    return /[a-z]/.test(str) && /[A-Z]/.test(str);
}

console.log(isUpper("rohan"))
console.log(isUpper("Phoenix"))