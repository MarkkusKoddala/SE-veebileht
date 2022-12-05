/* Javascripti koodi sain veebilehelt https://www.w3schools.com/howto/howto_js_read_more.asp */

/* Funktsiooni loomine, mille abil saab kogu toimuva korraga välja kutsuda ja vastavalt toimima panna */
function myFunction(){
    var dots = document.getElementById("dots"); /* märgib ära, kust maalt enam näha pole ja seal asendatud "..." */
    var moreText = document.getElementById("more"); /* märgib ära tekstiosa, mis on peidetud "loe rohkem" alla */
    var btnText = document.getElementById("myBtn"); /* nupp, millele vajutades funktsioon toimib */
  
    /* kui on kinnine, siis vastavast nupust saab avada ja kuvab kogu teksti, mis on id="more" alla peidetud */
    if (dots.style.display === "none") { 
      dots.style.display = "inline";
      btnText.innerHTML = "Loe rohkem"; 
      moreText.style.display = "none";
    } 
    /* kui avatud, siis saab sulgeda vastavast nupust ning kuvab nähtava osa */
    else {                             
      dots.style.display = "none";
      btnText.innerHTML = "Loe vähem"; 
      moreText.style.display = "inline";
    }
  }