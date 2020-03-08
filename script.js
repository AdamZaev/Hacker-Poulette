
let down=document.getElementById("downarrow")
let con=document.getElementById('containercontactus','sub')
let ishidden=true;

down.addEventListener('click', ()=>togglecontact());


  
 function togglecontact () { 
     console.log(con.style.display)
    ishidden=!ishidden
    if (ishidden) {
        con.style.display='none'
    }
    else {
        con.style.display='block'
    }   
 }

