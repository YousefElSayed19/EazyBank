let iconList=document.querySelector(".icon-list");
let xList=document.querySelector(".x-list");
let list=document.querySelector(".list");
let links=document.querySelectorAll(".list li")
let header=document.querySelector("header")

iconList.onclick=()=>{
    list.style.display="block"
    list.style.height="250px"
    list.style.padding="10px 0"
    iconList.style.display="none"
    xList.style.display="block"
}
xList.onclick=()=>{
    list.style.height="0px"
    list.style.padding="0"
    iconList.style.display="block"
    xList.style.display="none"
}
links.forEach((el)=>{
    el.onclick=()=>{
        if (header.scrollWidth>900){
            list.style.display="flex"
            iconList.style.display="none"
            xList.style.display="none"
        }
        else{
            list.style.display="none"
            iconList.style.display="block"
            xList.style.display="none"
        }
    }
})

window.onresize=()=>{
    if (header.scrollWidth>900){
        list.style.display="flex"
        list.style.height="0px"
        iconList.style.display="none"
        xList.style.display="none"
    }
    else{
        list.style.display="none"
        iconList.style.display="block"
        xList.style.display="none"
    }
}