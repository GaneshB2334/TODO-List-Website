document.addEventListener("DOMContentLoaded", () => {
    const inp = document.querySelector("#input");

    function addTask() {
        if (inp.value.trim() !== '') {
            let li = document.createElement("li");

            let checkbox = document.createElement("img");
            checkbox.src = "./unchecked.svg";
            checkbox.classList.add("check-img", "image");
            li.appendChild(checkbox);

            let span = document.createElement("span");
            span.innerHTML = inp.value;
            span.style.cursor = "grab";
            span.style.fontWeight = "bold";
            li.appendChild(span);

            let cross = document.createElement("img");
            cross.src = "./cross.svg";
            cross.classList.add("cross-img", "image");
            li.appendChild(cross);

            li.classList.add("flex");
            document.querySelector(".list").appendChild(li);
            inp.value = '';
        }
    }

    document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    document.querySelector(".add-button").addEventListener("click", () => {
        addTask();
    });

    document.querySelector(".list").addEventListener("click", (event) => {
        if (event.target.classList.contains("cross-img")) {
            event.target.parentElement.remove();
        }

        if (event.target.classList.contains("check-img")) {
            const checkbox = event.target;
            const currentState = checkbox.dataset.state || "unchecked";

            if (currentState === "unchecked") {
                checkbox.src = "./checked.svg";
                checkbox.dataset.state = "checked";
            } else {
                checkbox.src = "./unchecked.svg";
                checkbox.dataset.state = "unchecked";
            }
        }
    });

    document.querySelector("#del").addEventListener("click", () => {
        let ul = document.getElementsByTagName("ul")[0]

        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    })

    new Sortable(document.getElementById('sortable-list'), {
        animation: 150,
        draggable: 'li',
        onEnd: function (evt) {
            console.log('Element was moved');
        }
    });

});
