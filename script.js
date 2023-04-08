function drop1(){
 let svg1 = document.getElementById("open");
  svg1.addEventListener('click', function(){
   let drop1 = document.getElementById("dropdown1");
   drop1.style.display = "block";
   svg1.style.transform = "rotate(180deg)";
   let drop2 = document.getElementById("dropdown2");  
      drop2.style.display = "none"; 
});
}
drop1();

 function drop2(){
   let svg2 = document.getElementById("open2");
    svg2.addEventListener('click', function(){
      let drop2 = document.getElementById("dropdown2");
      drop2.style.display = "block";
      svg2.style.transform = "rotate(180deg)";
      let drop1 = document.getElementById("dropdown1");  
      drop1.style.display = "none"; 
});
}
drop2();

   
     

