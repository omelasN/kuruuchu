document.getElementById("choice").addEventListener("change", function() {
    if (this.value === "у меня") {
        document.getElementById("phoneNumber").style.display = "none";
    } else {
        document.getElementById("phoneNumber").style.display = "block";
    }
});
