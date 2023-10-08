console.log("Working");
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault() //preventing page to reload or we can say prevent form to get submited
    console.log("clicked");
    console.log(username.value, password.value);
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords==null){
        let json=[]
        json.push({username:username.value, password:password.value});
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else{
        let json= JSON.parse(localStorage.getItem("passwords"))
        json.push({username:username.value, password:password.value});
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
})