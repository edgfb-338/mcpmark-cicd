// This file intentionally contains linting violations to test the CI workflow
var unusedVariable = "This variable is never used"
let anotherUnused = 42

function greet(name) {
    console.log("Hello " + name) // Missing semicolon and uses double quotes
    console.warn("This is a warning message") // Uses console.warn
    return true
}

const config = {
    apiUrl: "https://api.example.com", // Double quotes
    timeout: 5000
} // Missing semicolon

function calculate(a, b) {
    let result = a + b // Missing semicolon
    console.log("Result: " + result) // Console.log and double quotes
    return result
}

// Another unused variable
const UNUSED_CONSTANT = "I am not used anywhere"

greet("World")
calculate(5, 3)