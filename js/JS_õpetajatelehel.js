/* Javascripti koodi sain veebilehelt https://www.w3schools.com/howto/howto_js_read_more.asp */

/*Funktsioon, loe rohkem/loe vähem nupu toimimiseks*/
function myFunction(){
    var dots = document.getElementById("dots"); /* otsib üles, kus tuleb asendada tekst kolme täpiga*/
    var moreText = document.getElementById("more"); /*tähistab teksti, mis on peidetud enne nupule vajutamist*/
    var btnText = document.getElementById("myBtn"); /* tähistab nuppu, millele vajutades hakkab funktsioon tööle*/
  
    if (dots.style.display === "none") { /*kui nuppu ei ole vajutatud*/
      dots.style.display = "inline";
      btnText.innerHTML = "Loe rohkem"; 
      moreText.style.display = "none";
    } else {/*kui nupp on vajutatud*/
      dots.style.display = "none";
      btnText.innerHTML = "Loe vähem"; 
      moreText.style.display = "inline";
    }
  }

/*Samad tegevused, mis eelnevas funktsioonis*/
  function myFunction2(){
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Loe rohkem"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Loe vähem"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction3(){
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Loe rohkem"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Loe vähem"; 
      moreText.style.display = "inline";
    }
  }