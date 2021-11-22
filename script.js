function buttonHover() {
    document.getElementById("login-btn").style.boxShadow = "none";
}

function buttonLeave() {
    document.getElementById("login-btn")
        .style.boxShadow = "0px 4px  4px rgba(0,0,0,0.25)";
}

function nextPage() {
    window.location.href = "main.html";
}