function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    try {
        const response = await fetch("https://virtualboard-login.onrender.com/users/login", {
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
            //console.debug(localStorage.getItem("token"))
        }

        window.location.href = "../boards"
    } catch (error) {
        console.error("Login failed:", error)
    }
})



const registerForm = document.getElementById("registerForm")

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("registerEmail").value
    const password = document.getElementById("registerPassword").value

    try {
        const response = await fetch("https://virtualboard-login.onrender.com/users/register", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                lastname,
                email,
                password
            })
        })

        if (!response.ok) {
            alert("Register failed")
            return
        }
        const data = await response.json()

        if (data.jwt) {
            localStorage.setItem("token", data.jwt)
            //console.debug(localStorage.getItem("token"))
        }

        window.location.href = "../boards"
    } catch (error) {
        console.error("Register failed:", error)
    }
})

