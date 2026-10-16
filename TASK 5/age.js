function checkAge() {
    let age = prompt("Enter your age:");

    if (age === null || age.trim() === "") {
        alert("Please enter your age.");
        document.write("<h2>You did not enter your age.</h2>");
        return;
    }

    age = Number(age);

    if (isNaN(age) || age < 0) {
        alert("Please enter a valid age.");
        document.write("<h2>Invalid age entered.</h2>");
    } else {

        // Using if-else
        if (age >= 18) {
            alert("You are eligible.");
        } else {
            alert("You are not eligible.");
        }

        // Using ternary operator
        let result = age >= 18 ? "Eligible" : "Not Eligible";

        // Displaying output
        document.write("<h2>Age Eligibility Result</h2>");
        document.write("<p>Your age is: " + age + "</p>");
        document.write("<p>Result: " + result + "</p>");
    }
}
