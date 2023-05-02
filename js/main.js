let teamList = document.getElementById("teamList")
const team = [
    {name: "Wayne Barnett", work: "Founder & CEO",      	img: "wayne-barnett-founder-ceo.jpg"        },
    {name: "Angela Caroll", work: "Chief Editor",	        img: "angela-caroll-chief-editor.jpg"       },
    {name: "Walter Gordon", work: "Office Manager",      	img: "walter-gordon-office-manager.jpg"     },
    {name: "Angela Lopez",  work: "Social Meedia Manager",	img: "angela-lopez-social-media-manager.jpg"},
    {name: "Scott Estrada", work: "Developer",	            img: "scott-estrada-developer.jpg"          },
    {name: "Barbara Ramos", work: "Graphic Designer",       img: "barbara-ramos-graphic-designer.jpg"   }
];

console.log(team)

for (const key in team) {
    if (Object.hasOwnProperty.call(team, key)) {
        const teamComponent = team[key];
        console.log(teamComponent)
        teamList.innerHTML += (teamComponent)
    }
}