/* VARIABLES - START */
const box_skills = document.querySelector(".box_skills");
const boxNot_skills = document.querySelector(".boxNot_skills");
const notification_skills = document.querySelector(".notification_skills");
const itensSkills = document.querySelectorAll(".itensSkills");
const itensImgSkill = document.querySelectorAll(".itensImgSkill"); 
const conteiner_painel = document.querySelector(".conteiner_painel");
const title_infoSkills = document.querySelector(".title_infoSkills");
const text_infoSkills = document.querySelector(".text_infoSkills");
const conteiner_infoSkills = document.querySelector(".conteiner_infoSkills");

const arrayItensSkills = [];

let numberItensSkills = itensSkills.length;

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquid ducimus quas, amet minima sequi fugiat quibusdam facere corrupti quia laudantium molestias temporibus dolorem explicabo perspiciatis veritatis. Numquam, minima non!";

const infoSkills = [
    {title: "HTML", text: lorem},
    {title: "CSS", text: lorem},
    {title: "JavaScript", text: lorem},
    {title: "PHP", text: lorem},
    {title: "MySQL", text: lorem},
    {title: "Node.js", text: lorem},
    {title: "Git", text: lorem},
];
/* VARIABLES - END */


/* FUNCTIONS - START */
function effectNotifSkills() {
        boxNot_skills.onmouseover = () => {
            notification_skills.style.opacity = 1;
            notification_skills.style.transform = 'translatex(210px)';
        }
        boxNot_skills.onmouseout = () => {
            notification_skills.style.opacity = 0;
            notification_skills.style.transform = 'translatex(235px)'
        }
}

function viewInfoSkills(id) {
    itensSkills[id].onclick = () => {
        for(var i = 0; i < numberItensSkills; i++) {
            arrayItensSkills[i] = i;
        };
    
        let idItem = arrayItensSkills.splice(id, 1);

        itensSkills[idItem].classList.add("itemSkillSelect");
        itensImgSkill[idItem].classList.remove("itensImgSkill");
        conteiner_painel.classList.add("effectPainel");

        setTimeout(() => {
            conteiner_painel.style.display = 'none';
            conteiner_infoSkills.style.display = "flex";
            setTimeout(() => {
                conteiner_infoSkills.classList.add("effectInfoSkills");
            }, 100);
        }, 500);

        title_infoSkills.innerHTML = infoSkills[idItem].title;
        text_infoSkills.innerHTML = infoSkills[idItem].text;


        arrayItensSkills.forEach((value) => {

            itensSkills[value].style.display = 'none';

        });
    }
}
/* FUNCTIONS - END */



/* MAIN - START */
for(var i = 0; i < numberItensSkills; i++) {
    viewInfoSkills(i);
}
/* MAIN - END */