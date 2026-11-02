
function getApi() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {

            var result = this.responseText;

            var mohamed = JSON.parse(result);

            var basket = "";

            for (var i = 0; i < mohamed.length; i++) {

                var cartoona = `
                    <div class="col-md-4 text-center">

                        <img src="${mohamed[i].url}" class="w-100">

                        <h4>${mohamed[i].title}</h4>

                        <h6>${mohamed[i].id}</h6>

                    </div>
                `;

                basket = basket + cartoona;

            }

            document.querySelector(".test").innerHTML = basket;

        }

    };

    xhttp.open(
        "GET",
        "https://jsonplaceholder.typicode.com/photos",
        true
    );

    xhttp.send();

}

// Call the function
getApi();
