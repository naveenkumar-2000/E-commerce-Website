var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var cross = document.getElementById("sidenav_cross")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
cross.addEventListener("click",function()
{
    sidenav.style.right="-270px"
})



