const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

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
        })

        if (!response.ok) {
            alert("Login failed")
            return
        }
        const data = await response.json()

        if (data.jwt) {
            localStorage.setItem("token", data.jwt)
            console.debug(localStorage.getItem("token"))
        }

        window.location.href = "../boards"
    } catch (error) {
        console.error("Login failed:", error)
    }
})

