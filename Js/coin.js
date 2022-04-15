//view more 
let row = document.querySelector(".hide");
let btn = document.querySelector(".viewmore");

btn.addEventListener("click", function(){
 row.classList.toggle('hide')
});

//faq
let qbtn=document.querySelectorAll(".ques-btn")
qbtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
    let questions= e.currentTarget.parentElement.parentElement;
questions.classList.toggle('show-text')
    
})

})

//respo

let nav=document.querySelector('.navbar')
let navList=document.querySelector('.nav-list')
let rightnav=document.querySelector('.rightnav')
let burger=document.querySelector('.burger')
burger.addEventListener('click',function(){
    nav.classList.toggle('h-nav')
    navList.classList.toggle('n-hide')
    rightnav.classList.toggle('n-hide')
})

