// Example file demonstrating proper code style after fixing linting violations
// This file was updated to comply with ESLint rules

function greet(name) {
    const message = 'Hello ' + name; // Using single quotes and adding semicolon
    // Note: console.log is allowed but triggers warnings (no-console: "warn")
    return message;
}

const config = {
    apiUrl: 'https://api.example.com', // Using single quotes
    timeout: 5000
}; // Adding semicolon

function calculate(a, b) {
    const result = a + b; // Adding semicolon
    // Note: console.log triggers warnings but doesn't fail the build
    return result;
}

// Export functions for potential use
module.exports = {
    greet,
    calculate
};