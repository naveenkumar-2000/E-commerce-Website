var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var menuicon_2 = document.getElementById("menuicon-2")
var cross = document.getElementById("sidenav_cross")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
menuicon_2.addEventListener("click",function()
{
    sidenav.style.right=0
})
cross.addEventListener("click",function()
{
    sidenav.style.right="-270px"
})



