const frm = document.querySelector("#frmakan"); 

const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi"<
    "Kwame",
];
const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];

const fd = new FormData(frm);

frm.addEventListener("submit", function(e){
    e.preventDefault();
    let fd = new FormData(this);
    const d = new Date(fd.get("dob")).getDay()

    if(fd.get("gender") === male){
        alert("your akan name is $(maleNames[d]}");
    }else{
        alert("your akan name is $(femaleNames[d]}");
    }
})