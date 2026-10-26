
function showMessage() {
    document.getElementById("functionResult").innerHTML =
        "Hello! This is a JavaScript function.";
}


// 2. Closure
function createCounter() {
    let count = 0;

    return function () {
        count++;

        document.getElementById("closureResult").innerHTML =
            "Counter: " + count;
    };
}

let increaseCount = createCounter();


// 3. IIFE
(function () {
    document.getElementById("iifeResult").innerHTML =
        "IIFE executed automatically!";
})();


// Original Array
let numbers = [10, 20, 30, 40, 50];


// 4. map()
function useMap() {
    let result = numbers.map(function (num) {
        return num * 2;
    });

    document.getElementById("mapResult").innerHTML =
        "Map Result: " + result;
}


// 5. filter()
function useFilter() {
    let result = numbers.filter(function (num) {
        return num > 25;
    });

    document.getElementById("filterResult").innerHTML =
        "Filter Result: " + result;
}


// 6. reduce()
function useReduce() {
    let result = numbers.reduce(function (total, num) {
        return total + num;
    }, 0);

    document.getElementById("reduceResult").innerHTML =
        "Total Sum: " + result;
}


// 7. forEach()
function useForEach() {
    let result = "";

    numbers.forEach(function (num) {
        result += num + " ";
    });

    document.getElementById("forEachResult").innerHTML =
        "Array Elements: " + result;
}
