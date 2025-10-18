const frames = [
    "../assets/images/frame1.png",
    "../assets/images/frame2.png",
    "../assets/images/frame3.png",
    "../assets/images/frame4.png",
    "../assets/images/frame5.png"
]

const bg = document.querySelector("#history_img img")

if (bg) {
    console.log("selected")
}

let index = 0
setInterval(() => {
        bg.src = `${frames[index]}`
        index = (index + 1) % frames.length
}, 5000);