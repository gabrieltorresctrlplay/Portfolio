document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio carregado com sucesso! 🚀")

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const targetId = this.getAttribute("href")
            const targetElement = document.querySelector(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(18, 18, 18, 0.95)"
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)"
        } else {
            header.style.background = "rgba(18, 18, 18, 0.7)"
            header.style.boxShadow = "none"
        }
    })
})
