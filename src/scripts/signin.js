console.log("working");
var modal = document.getElementById("myModal");
var modalText=document.getElementsByClassName("modalText")[0];
document.querySelector("#sub").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
    let users=JSON.parse(localStorage.getItem("users"));
    let userexist=false;
    if(users==null){
        modalText.innerHTML="User not found.. Please signup.";
        modal.style.display = "block";
        console.log("User not found");
    }
    else{
        users.forEach((element)=>{
            if(username.value==element.user && pass.value==element.pass){
                console.log("entered")
                userexist=true;
                window.location.href="home.html";
            }
            else if(username.value==element.user && pass.value!=element.pass){
                userexist=true;
                modalText.innerHTML="Entered wrong password";
                modal.style.display = "block";
                console.log("You entered wrong password");
            }
        })
        if(userexist==false){
            modalText.innerHTML="User not found.. Please signup.";
            modal.style.display = "block";
            console.log("User not found");
        }
    }
    username.value="";
    pass.value="";
});
document.querySelector(".redirect").addEventListener("click",(e)=>{
    window.location.href="../../index.html";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }