function searchUniversity() {

    let country = document.getElementById("country").value;

    let result = document.getElementById("result");

    if (country === "") {
        result.innerHTML = "Please enter a country name";
        return;
    }

    result.innerHTML = "Loading universities...";

    fetch("http://universities.hipolabs.com/search?country=" + encodeURIComponent(country))
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            result.innerHTML = "";

            if (data.length === 0) {
                result.innerHTML = "No universities found!";
                return;
            }

            data.forEach(function (university) {

                result.innerHTML +=
                    "<h3>" + university.name + "</h3>" +
                    "<p>Country: " + university.country + "</p>" +
                    "<p>Website: <a href='" + university.web_pages[0] +
                    "' target='_blank'>" + university.web_pages[0] +
                    "</a></p><hr>";

            });

        })
        .catch(function (error) {
            result.innerHTML = "Error fetching data!";
            console.log(error);
        });
}