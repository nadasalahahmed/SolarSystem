 // Existing JavaScript
        var navigation = document.getElementById("nav");
        var logo = document.getElementById("logoSection");
        var menuToggle = document.getElementById("menu-toggle");
        var links = document.getElementById("nav-links");
        menuToggle.addEventListener("click", function () {
            links.classList.toggle("show");
            if (links.classList.contains("show")) {
                navigation.classList.add("SmallHeight");
                links.classList.add("corner");
                logo.classList.add("gap");
            } else {
                navigation.classList.remove("SmallHeight");
                links.classList.remove("corner");
                logo.classList.remove("gap");
            }
        });

        function toggleSwitch() {
            var ball = document.getElementById('ball');
            ball.classList.toggle('active');
            if (ball.classList.contains("active")) {
                document.body.style.backgroundColor = "rgb(60,88,116)";
                ball.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png";
            } else {
                document.body.style.backgroundColor = "black";
                ball.src = "https://cdn-icons-png.flaticon.com/128/1823/1823397.png";
                document.body.style.color = "white";
            }
        }

        var backPhoto = document.getElementById("first");
        var arr = [
            "https://images.pexels.com/photos/1542493/pexels-photo-1542493.jpeg",
            "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg",
            "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg",
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        ];

        var index = 0;
        var show;

        show = setInterval(function () {
            backPhoto.style.transition = "background-image .6s ease-in";
            backPhoto.style.backgroundImage = "url('" + arr[index] + "')";
            if (index < arr.length - 1) {
                index++;
            } else {
                index = 0;
            }
        }, 2000);

        var tabs = document.querySelectorAll(".tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", function () {
                for (var j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove("active");
                }
                this.classList.add("active");
            });
        }

        // Planet tab event listeners (unchanged)
        var tab1 = document.getElementById("tab1");
        var tab2 = document.getElementById("tab2");
        var tab3 = document.getElementById("tab3");
        var tab4 = document.getElementById("tab4");
        var tab5 = document.getElementById("tab5");
        var tab6 = document.getElementById("tab6");
        var tab7 = document.getElementById("tab7");
        var tab8 = document.getElementById("tab8");
        var tab9 = document.getElementById("tab9");

        tab1.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Mercury is the smallest planet in our solar system. Mercury is a little more than one-third the width of Earth, and has an equatorial diameter of about 3,032 miles (4,880 kilometers). Mercury is the closest planet to the Sun, orbiting at an average distance of 36 million miles (58 million kilometers). Mercury is 57 million miles closer to the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" },
                { description: "Venus is the sixth largest planet in the solar system. Venus is about the same width as Earth, and has an equatorial diameter of about 7,521 miles (12,104 kilometers). For this reason, Venus is sometimes known as Earth’s twin. Venus is the second planet from the Sun, orbiting at an average distance of 67.2 million miles (108 million kilometers). Venus is about 26 million miles (42 million kilometers) closer to the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/venus.png" },
                { description: "Earth is the fifth largest planet in the solar system. It has an equatorial diameter of about 7,926 miles (12,756 kilometers). Earth is the third planet from the Sun, orbiting at an average distance of 93 million miles (149.7 million kilometers).", image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png" },
                { description: "Mars, the red planet, is the seventh largest planet in our solar system. Mars is about half the width of Earth, and has an equatorial diameter of about 4,221 miles (6,792 kilometers). Mars is the fourth planet from the Sun, orbiting at an average distance of 141.6 million miles (227.9 million kilometers). Mars is about 49 million miles (79 million kilometers) farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/mars.png" },
                { description: "Jupiter is the largest planet in the solar system. It’s about 11 times wider than Earth with an equatorial diameter of 88,846 miles (about 142,984 kilometers). Jupiter is the fifth planet from the Sun, orbiting at an average distance of 483.7 million miles (778 million kilometers). It’s about five times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png" },
                { description: "Saturn, known for its spectacular icy rings, is the second largest planet in our solar system. It’s about nine times wider than Earth, with an equatorial diameter of about 74,898 miles (about 120,536 kilometers). Saturn is the sixth planet from the Sun, orbiting at an average distance of 889.8 million miles (1.4 billion kilometers). It’s about 9.5 times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/saturn.png" },
                { description: "Uranus is the third largest planet in our solar system. It’s about four times wider than Earth, and has an equatorial diameter of about 31,763 miles (51,118 kilometers). Uranus is the seventh planet from the Sun, orbiting at an average distance of 1.8 billion miles (2.9 billion kilometers). It’s about 19 times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/uranus.png" },
                { description: "Neptune is the fourth largest planet. It’s about four times wider than Earth with an equatorial diameter of about 30,775 miles (49,528 kilometers). Neptune is the eighth, and the most distant planet from the Sun, orbiting at an average distance of 2.8 billion miles (4.5 billion kilometers). Neptune is about 30 times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/neptune.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-5 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Planet+Image";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab2.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Mercury is the smallest planet in our solar system. Mercury is a little more than one-third the width of Earth, and has an equatorial diameter of about 3,032 miles (4,880 kilometers). Mercury is the closest planet to the Sun, orbiting at an average distance of 36 million miles (58 million kilometers). Mercury is 57 million miles closer to the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Mercury";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab3.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Venus is the sixth largest planet in the solar system. Venus is about the same width as Earth, and has an equatorial diameter of about 7,521 miles (12,104 kilometers). For this reason, Venus is sometimes known as Earth’s twin. Venus is the second planet from the Sun, orbiting at an average distance of 67.2 million miles (108 million kilometers). Venus is about 26 million miles (42 million kilometers) closer to the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/venus.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Venus";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab4.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Earth is the fifth largest planet in the solar system. It has an equatorial diameter of about 7,926 miles (12,756 kilometers). Earth is the third planet from the Sun, orbiting at an average distance of 93 million miles (149.7 million kilometers).", image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Earth";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab5.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Mars, the red planet, is the seventh largest planet in our solar system. Mars is about half the width of Earth, and has an equatorial diameter of about 4,221 miles (6,792 kilometers). Mars is the fourth planet from the Sun, orbiting at an average distance of 141.6 million miles (227.9 million kilometers). Mars is about 49 million miles (79 million kilometers) farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/mars.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Mars";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab6.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Jupiter is the largest planet in the solar system. It’s about 11 times wider than Earth with an equatorial diameter of 88,846 miles (about 142,984 kilometers). Jupiter is the fifth planet from the Sun, orbiting at an average distance of 483.7 million miles (778 million kilometers). It’s about five times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Jupiter";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab7.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Saturn, known for its spectacular icy rings, is the second largest planet in our solar system. It’s about nine times wider than Earth, with an equatorial diameter of about 74,898 miles (about 120,536 kilometers). Saturn is the sixth planet from the Sun, orbiting at an average distance of 889.8 million miles (1.4 billion kilometers). It’s about 9.5 times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/saturn.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Saturn";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab8.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Uranus is the third largest planet in our solar system. It’s about four times wider than Earth, and has an equatorial diameter of about 31,763 miles (51,118 kilometers). Uranus is the seventh planet from the Sun, orbiting at an average distance of 1.8 billion miles (2.9 billion kilometers). It’s about 19 times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/uranus.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-12 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Uranus";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        tab9.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var arr = [
                { description: "Neptune is the fourth largest planet. It’s about four times wider than Earth with an equatorial diameter of about 30,775 miles (49,528 kilometers). Neptune is the eighth, and the most distant planet from the Sun, orbiting at an average distance of 2.8 billion miles (4.5 billion kilometers). Neptune is about 30 times farther from the Sun than Earth.", image: "https://nineplanets.org/wp-content/uploads/2020/03/neptune.png" }
            ];

            menu.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var wordBox = document.createElement("div");
                wordBox.classList.add("sentence-box");
                wordBox.style.fontSize = "2rem";
                wordBox.style.marginBottom = "20px";

                var description = document.createElement("div");
                description.className = "col-12 col-md-6 col-sm-12 planet-desc";
                description.textContent = arr[i].description;

                var images = document.createElement("img");
                images.src = arr[i].image;
                images.className = "col-12 col-md-6 col-sm-6 planet-image";
                images.style.width = "33%";
                images.onerror = function () {
                    this.src = "https://via.placeholder.com/300x300?text=Neptune";
                };

                wordBox.appendChild(description);
                wordBox.appendChild(images);
                menu.appendChild(wordBox);
            }
        });

        var myform = document.getElementById("myForm");
        myform.addEventListener("submit", function (e) {
            e.preventDefault();

            var username = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var mobile = document.getElementById("phone").value;

            document.getElementById("nameError").textContent = '';
            document.getElementById("emailError").textContent = '';
            document.getElementById("mobileerror").textContent = '';

            var isValid = true;

            var nameReg = /^[a-zA-Z]{2,10}$/;
            if (!nameReg.test(username)) {
                document.getElementById("nameError").textContent = "Please enter a correct name (2-10 letters)";
                isValid = false;
            }

            var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailReg.test(email)) {
                document.getElementById("emailError").textContent = "Please enter a correct email";
                isValid = false;
            }

            var mobilereg = /^(010|011|012|015)[0-9]{8}$/;
            if (!mobilereg.test(mobile)) {
                document.getElementById("mobileerror").textContent = "Please enter a correct mobile number";
                isValid = false;
            }

            if (isValid) {
                myform.submit();
            }
        });

        function comparePlanets() {
            var p1 = document.getElementById("planet1").value.toLowerCase();
            var p2 = document.getElementById("planet2").value.toLowerCase();
            var result = document.getElementById("result");

            result.innerHTML = "";

            var planets = [
                { name: "Mercury", size: 4879, order: 1 },
                { name: "Venus", size: 12104, order: 2 },
                { name: "Earth", size: 12742, order: 3 },
                { name: "Mars", size: 6779, order: 4 },
                { name: "Jupiter", size: 139820, order: 5 },
                { name: "Saturn", size: 116460, order: 6 },
                { name: "Uranus", size: 50724, order: 7 },
                { name: "Neptune", size: 49244, order: 8 }
            ];

            var planet1;
            var planet2;

            for (var i = 0; i < planets.length; i++) {
                if (planets[i].name.toLowerCase() === p1) {
                    planet1 = planets[i];
                }
                if (planets[i].name.toLowerCase() === p2) {
                    planet2 = planets[i];
                }
            }

            if (!planet1 || !planet2) {
                result.innerHTML = "Please enter valid planet names.";
                return;
            }

            if (p1 === p2) {
                result.innerHTML = "Please enter two different planets.";
                return;
            }

            var sizeText = document.createElement("p");
            if (planet1.size > planet2.size) {
                sizeText.innerHTML = planet1.name + " is larger than " + planet2.name + ".";
            } else {
                sizeText.innerHTML = planet2.name + " is larger than " + planet1.name + ".";
            }

            var orderText = document.createElement("p");
            orderText.innerHTML = planet1.name + " is planet number " + planet1.order +
                " from the Sun, and " + planet2.name + " is planet number " + planet2.order + ".";

            result.appendChild(sizeText);
            result.appendChild(orderText);
        }