document.addEventListener("DOMContentLoaded", function() {
    function showTimeline(type){
        const academic=document.getElementById("academic");
        const professional=document.getElementById("professional");
        console.log(type);
        academic.style.display=type==="academic"?"block":"none";
        professional.style.display=type==="professional"?"block":"none";

        const tabs=document.querySelectorAll(".tab");
        tabs.forEach(tab => tab.classList.remove("activate"));
        document.querySelector(`.tab[onclick*="${type}"]`).classList.add('activate');
    }

    function slider(type){
        const slides=document.querySelectorAll(".slide");
        const sl_=document.querySelector(".slide");
        const points=document.querySelectorAll(".point");
        const n=slides.length;
        let index=0;
        let dir='0%';
        slides.forEach((slide,i) => {
            if (slide.classList.contains('roll')){
                index=i;
                slide.classList.remove('roll');
        
            }
        });
        points[index].classList.remove('active');
        if (type==="right"){
            index++;
            if (index>=n){
                index=0;
            }
        }
        if (type==="left"){
            index--;
            if (index<0){
                index=n-1;
            }
        }
        slides[index].classList.add('roll');
        points[index].classList.add('active');
        console.log(index);
        console.log(n);
    }
    window.showTimeline = showTimeline;
    window.slider = slider;
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click',function(){
        const list=this.querySelector('.skillset_list');
        const arrow=this.querySelector('.arrow');
        const circle=this.querySelector('.uil-circle');
        list.style.display=list.style.display==="flex"?"none":"flex";
        circle.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});
document.querySelectorAll('.skillset_list_item').forEach(item =>{
    const percent=item.querySelector('.skillset_list_box_percent');
    const loaded=item.querySelector('.loaded');
    const percentValue=parseInt(percent.innerText);
    loaded.style.width=percentValue+"%";
})


const points=document.querySelector('.points');
document.querySelectorAll('.slide').forEach((slide,i) => {
    const new_div=document.createElement('div');
    points.appendChild(new_div);
    if (slide.classList.contains('roll')){
        new_div.classList.add('point','active');
    }
    else{
        new_div.classList.add('point');
    }
});
