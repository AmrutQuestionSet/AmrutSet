const modal1 = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");

function openModal1() {
    console.log('Modal is Open');
    modal1.classList.add("modal1-active");
    overlay.classList.add("overlayactive");
}


function closeModal1(){
    console.log('Modal is close');
    modal1.classList.remove("modal1-active");
    overlay.classList.remove("overlayactive");
}

const modal2 = document.querySelector(".modal2");

function openModal2() {
    console.log('Modal is Open');
    modal2.classList.add("modal2-active"); 
    overlay.classList.add("overlayactive");
}


function closeModal2(){
    console.log('Modal is close');
    modal2.classList.remove("modal2-active");
    overlay.classList.remove("overlayactive");
}

const modal3 = document.querySelector(".modal3");

function openModal3() {
    console.log('Modal is Open');
    modal3.classList.add("modal3-active");
    overlay.classList.add("overlayactive");
}


function closeModal3(){
    console.log('Modal is close');
    modal3.classList.remove("modal3-active");
    overlay.classList.remove("overlayactive");
}


const modal4 = document.querySelector(".modal4");

function openModal4() {
    console.log('Modal is Open');
    modal4.classList.add("modal4-active");
    overlay.classList.add("overlayactive");
}


function closeModal4(){
    console.log('Modal is close');
    modal4.classList.remove("modal4-active");
    overlay.classList.remove("overlayactive");
}


const modal5 = document.querySelector(".modal5");

function openModal5() {
    console.log('Modal is Open');
    modal5.classList.add("modal5-active");
    overlay.classList.add("overlayactive");
}


function closeModal5(){
    console.log('Modal is close');
    modal5.classList.remove("modal5-active");
    overlay.classList.remove("overlayactive");
}


const modal6 = document.querySelector(".modal6");

function openModal6() {
    console.log('Modal is Open');
    modal6.classList.add("modal6-active");
    overlay.classList.add("overlayactive");
}


function closeModal6(){
    console.log('Modal is close');
    modal6.classList.remove("modal6-active");
    overlay.classList.remove("overlayactive");
}

function closeModal(){
    closeModal2();
    closeModal1();
    closeModal4();
    closeModal5();
    closeModal3();
    closeModal6();
}
