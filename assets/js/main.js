/* VARIABLES - START */
const box_skills = document.querySelector(".box_skills");
const notification_skills = document.querySelector(".notification_skills");
const box_html = document.getElementById("box_html");
const itensSkills = document.querySelectorAll(".itensSkills");
const itensImgSkill = document.querySelectorAll(".itensImgSkill"); 

const arrayItensSkills = [];

let numberItensSkills = itensSkills.length;
/* VARIABLES - END */


/* FUNCTIONS - START */
function effectNotifSkills() {
    box_skills.onmouseover = () => {
        notification_skills.style.opacity = 1;
        notification_skills.style.transform = 'translatex(210px)';
    }
    box_skills.onmouseout = () => {
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
    
        arrayItensSkills.forEach((value) => {

            itensSkills[value].style.display = 'none';

        });
    }
}
/* FUNCTIONS - END */



/* MAIN - START */
effectNotifSkills();

for(var i = 0; i < numberItensSkills; i++) {
    viewInfoSkills(i)
}
/* MAIN - END */