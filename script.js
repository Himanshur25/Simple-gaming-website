
const proBroGames=[
    {
    id:1,
    game_name:"IGI",
    game_image:"https://cdn.appuals.com/wp-content/uploads/2022/08/maxresdefault-10.jpg",
    game_video:"https://youtu.be/7Bn8KMdShqc"
},
{
    id:2,
    game_name:"CALL OF DUTY",
    game_image:"https://cdn1.dotesports.com/wp-content/uploads/2020/04/02142718/GarenaWorld.png",
    game_video:"https://www.youtube.com/watch?v=r72GP1PIZa0"
},
{
    id:3,
    game_name:"TEKKEN 3",
    game_image:"https://www.gameshub.com/wp-content/uploads/sites/5/2022/09/tekken-8-game.jpg",
    game_video:"https://www.youtube.com/watch?v=HoG9jmXMdW0"
    },
{
    id:4,
    game_name:"GTA 5",
    game_image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1667343890",
    game_video:"https://www.youtube.com/watch?v=1_2FFayWsvA"
},
{
    id:5,
    game_name:"RESIDENT EVIL",
    game_image:"https://assets-prd.ignimgs.com/2022/10/31/resident-evil-games-in-order-1667258033160.jpg",
    game_video:"https://www.youtube.com/watch?v=eFuHLUuuzLI"
},
{
    id:6,
    game_name:"RD REDEMPTION",
    game_image:"https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/8414.jpeg",
    game_video:"https://www.youtube.com/watch?v=eaW0tYpxyp0"
}
]

const allGames=document.querySelector(".all-games")

const gaming=proBroGames.map((game)=> {
 return `
 <li class="game-item">
 <div class="game">
   <div class="game-image"><img src="${game.game_image}"/></div>
   <div class="game-info">
     <h2 class="game-name">${game.game_name}</h2>
     <a class="btn" href="${game.game_video}">Play</a>
   </div>
 </div>
</li>
`
}
)
allGames.innerHTML=gaming

