const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", async(event) => {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.jwt));
        console.debug(localStorage.getItem("user"))
        return data;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
})

