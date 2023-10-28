console.log("working");
document.querySelector("#sub").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
    let users=JSON.parse(localStorage.getItem("users"));
    let userexist=false;
    users.forEach((element)=>{
        if(username.value==element.user && pass.value==element.pass){
            console.log("entered")
            userexist=true;
            window.location.href="index.html";
        }
        else if(username.value==element.user && pass.value!=element.pass){
            userexist=true;
            console.log("You entered wrong password");
        }
    })
    if(userexist==false){
        console.log("User not found");
    }
});
document.querySelector(".redirect").addEventListener("click",(e)=>{
    window.location.href="signup.html";
})