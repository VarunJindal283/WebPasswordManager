function checkRedentant(website, username){
    let arr= JSON.parse(localStorage.getItem("passwords")); 
    let r=false; 
    arr.forEach((x)=>{
        if(x.website==website){
            if(x.username==username){
                r=true;
            }
        }
    }); 
    return r;
}



console.log("Working");
document.querySelector(".btnn").addEventListener("click",(e)=>{
    e.preventDefault() //preventing page to reload or we can say prevent form to get submited
    console.log("clicked");
    console.log(username.value, password.value);
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)

    if(passwords==null){
        let json=[]
        json.push({website:website.value, username:username.value, password:password.value});
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    
    else{
        let json;
        if(checkRedentant(website.value, username.value)){
            if(confirm("Want to Update the Password?")){
            json= JSON.parse(localStorage.getItem("passwords"));
            json.forEach((x)=>{
                if(x.website==website.value){
                    if(x.username==username.value){
                        x.password=password.value;
                    }
                }
            }); 
            localStorage.setItem("passwords", JSON.stringify(json))
            alert("Password Updated");
            }
            else{
                website.value="";
                username.value="";
                password.value="";
            }
        }
        else{
            json= JSON.parse(localStorage.getItem("passwords"));
            json.push({website:website.value, username:username.value, password:password.value});
            alert("Password Saved");
            localStorage.setItem("passwords", JSON.stringify(json))
        }
    }
    website.value="";
    username.value="";
    password.value="";
})