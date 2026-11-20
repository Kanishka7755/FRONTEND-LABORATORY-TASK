function fetchData() {

    document.getElementById("message").innerHTML = "Fetching data...";

    document.getElementById("data").innerHTML = "";

    // Create a Promise
    let promise = new Promise(function (resolve, reject) {

        // Simulate server delay using setTimeout
        setTimeout(function () {

            let serverData = {
                name: "Kanishka",
                course: "Computer Science",
                status: "Data fetched successfully!"
            };

            resolve(serverData);

        }, 2000);

    });


    promise.then(function (data) {

        document.getElementById("message").innerHTML = "Data Received!";

        document.getElementById("data").innerHTML =
            "Name: " + data.name + "<br>" +
            "Course: " + data.course + "<br>" +
            "Status: " + data.status;

    });

}