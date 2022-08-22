let tabs = document.querySelectorAll(".tabs li");
let content = document.querySelectorAll(".content div");

tabs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        tabs.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        content.forEach((div) => {
            div.style.display = "none"
        })
        // let dataRelate = document.querySelector(e.currentTarget.dataset.name)
        // dataRelate.style.display = "block"
        document.querySelector(e.currentTarget.dataset.name).style.display = "block"
    })
})