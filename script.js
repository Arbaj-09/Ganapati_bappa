function redirectToWishes() {
    const name = document.getElementById("name").value;
    if (name) {
        localStorage.setItem("userName", name);
        window.location.href = "wishes.html";
    } else {
        alert("Please enter your name.");
    }
}
