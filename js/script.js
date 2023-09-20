const text = document.querySelector(".text-z");
const strong = document.querySelector(".text-z");
const job = document.querySelector(".job");
const img = document.querySelector(".tanya");
const antes = document.querySelector(".antes");
const depois = document.querySelector(".depois");
const body = document.querySelector("body");
const ok = document.querySelector(".ok");


function prev(){
  
    const isActive = body.classList.contains("active");
    if (!isActive) {
        strong.innerHTML = " “If you want to lay the best foundation possible, I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.” ";
        job.innerHTML = "Junior Front-end Developer";
        img.src = "../images/image-john.jpg";
        ok.innerHTML = "<strong>John Tarkpor</strong>"
    }
}
function depoi(){
    const isActive = body.classList.contains("active");
    if (!isActive) {
        strong.innerHTML = "   “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so  excited about the future. ”"
        job.innerHTML = "UX Engineer";
        img.src = "../images/image-tanya.jpg";
        ok.innerHTML = "<strong>Tanya Sinclair</strong>"
    }
}

antes.addEventListener('click', prev)
depois.addEventListener('click', depoi);

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prev();
    } else if (event.key === 'ArrowRight') {
        depoi();
    }
});


