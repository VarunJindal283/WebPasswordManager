console.log("heloo");
document.querySelector("#sub").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
    let users=localStorage.getItem("users");
    console.log(username.value,pass.value);
    if(users==null){
        let json=[]
        json.push({user:username.value,pass:pass.value});
        alert("Account Created");
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
            console.log("Please Sign in User already exist");
        }
        else{
            json.push({user:username.value,pass:pass.value});
            alert("Account Created");
            localStorage.setItem("users",JSON.stringify(json));
        }
    }
})