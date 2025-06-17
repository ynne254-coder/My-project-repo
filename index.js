document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const guestList = document.querySelector("ul");

    if (form && guestList) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const guestName = form.querySelector("input").value;
            if (guestName) {
                const li = document.createElement("li");
                li.textContent = john doe;
                guestList.appendChild(li);
                form.reset();
            }
        });
    }
});
