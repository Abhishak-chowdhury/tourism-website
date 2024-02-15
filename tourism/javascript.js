 Array.from(document.getElementsByTagName('input')).forEach((e,i) => {
    e.addEventListener('keyup',(el)=>{
        if(e.value.length>0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";
        }else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";
        }
    });
});

let btn=document.getElementsByClassName('bi-three-dots-vertical')[0];
let manu_bx=document.getElementById('manu_bx');
btn.addEventListener('click',()=>{
    manu_bx.classList.toggle('add');
});