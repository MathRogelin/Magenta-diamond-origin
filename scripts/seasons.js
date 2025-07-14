const seasons = document.querySelectorAll(".apresentation_stories .frame_stories .frame .poster")

console.log(seasons)

seasons.forEach((season)=>{
    season.addEventListener("click", ()=>{
        window.open("seasons.html","_blank")
    })
})