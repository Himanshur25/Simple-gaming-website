
const proBroGames=[
    {
    id:1,
    game_name:"IGI",
    game_image:"https://cdn.appuals.com/wp-content/uploads/2022/08/maxresdefault-10.jpg"
},
{
    id:2,
    game_name:"CALL OF DUTY",
    game_image:"https://cdn1.dotesports.com/wp-content/uploads/2020/04/02142718/GarenaWorld.png"
},
{
    id:3,
    game_name:"TEKKEN 3",
    game_image:"https://www.gameshub.com/wp-content/uploads/sites/5/2022/09/tekken-8-game.jpg"
    },
{
    id:4,
    game_name:"GTA 5",
    game_image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1667343890"
},
{
    id:5,
    game_name:"RESIDENT EVIL",
    game_image:"https://assets-prd.ignimgs.com/2022/10/31/resident-evil-games-in-order-1667258033160.jpg"
},
{
    id:6,
    game_name:"RD REDEMPTION",
    game_image:"https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/8414.jpeg"
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
     <button class="btn">Play</button>
   </div>
 </div>
</li>
`
}
)
allGames.innerHTML=gaming

