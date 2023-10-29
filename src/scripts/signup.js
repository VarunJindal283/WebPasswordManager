console.log("heloo");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalText=document.getElementsByClassName("modalText")[0];
document.querySelector("#sub").addEventListener("click",(e)=>{
    // e.preventDefault();
    console.log("clicked");
    let users=localStorage.getItem("users");
    console.log(username.value,pass.value);
    if(users==null){
        let json=[]
        json.push({user:username.value,pass:pass.value});
        modalText.innerHTML="Account Created";
        modal.style.display = "block";
        localStorage.setItem("users",JSON.stringify(json));
    }
    else{
        json=JSON.parse(users);
        let userExist=false;
        json.forEach((element)=>{
            if(username.value==element.user){
                userExist=true;
            }
        })
        if(userExist){
            modalText.innerHTML="User already exist.. Please Sign In.";
            modal.style.display = "block";
            // console.log("Please Sign in User already exist");
        }
        else{
            json.push({user:username.value,pass:pass.value});
            modalText.innerHTML="Account Created";
            modal.style.display = "block";
            localStorage.setItem("users",JSON.stringify(json));
        }
    }
    username.value="";
    pass.value="";
});
document.querySelector(".redirect").addEventListener("click",(e)=>{
    window.location.href="src/pages/signin.html";
})


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}