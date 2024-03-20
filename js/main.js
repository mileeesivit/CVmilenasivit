const openModal= document.querySelector(".main1");
const modal= document.querySelector(".modal");
const cerrar= document.querySelector(".modal_close");

const openModal2= document.querySelector(".main2");
const modal2= document.querySelector(".modal2");
const cerrar2= document.querySelector(".modal_close2");

const openModal3= document.querySelector(".main3");
const modal3= document.querySelector(".modal3");
const cerrar3= document.querySelector(".modal_close3");

//---------------------------------------------------------------------
openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
});

cerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
});
//---------------------------------------------------------------------
openModal2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal2.classList.add("modal--show2");
});

cerrar2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal2.classList.remove("modal--show2");
});
//---------------------------------------------------------------------
openModal3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal3.classList.add("modal--show3");
});

cerrar3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal3.classList.remove("modal--show3");
});
//---------------------------------------------------------------------