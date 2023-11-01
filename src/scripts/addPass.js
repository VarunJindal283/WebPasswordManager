if(sessionStorage.length!=0){
    var modal = document.getElementById("myModal");
    var modalText=document.getElementsByClassName("modalText")[0];


    document.querySelector(".logo").addEventListener("click", (e)=>{
        window.location.href="home.html"
    })

    document.querySelector(".logout").addEventListener("click",(e)=>{
        window.location.href="signin.html";
        sessionStorage.clear();
    })
    
    
    
    let PmUser=sessionStorage.getItem("PmUser");
    
    function checkRedentant(website, username){
        let arr= JSON.parse(localStorage.getItem(`${PmUser}`)); 
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
        let passwords=localStorage.getItem(`${PmUser}`)
        console.log(passwords)
        if(website.value!="" && username.value!="" && password.value!=""){
            if(passwords==null){
                let json=[]
                json.push({website:website.value, username:username.value, password:password.value});
                // alert("Password Saved");
                modalText.innerHTML="Password Saved";
                modal.style.display = "block";
                localStorage.setItem(`${PmUser}`, JSON.stringify(json))
            }
            
            else{
                let json;
                if(checkRedentant(website.value, username.value)){
                    if(confirm("Want to Update the Password?")){
                        json= JSON.parse(localStorage.getItem(`${PmUser}`));
                        json.forEach((x)=>{
                            if(x.website==website.value){
                                if(x.username==username.value){
                                    x.password=password.value;
                                }
                            }
                        }); 
                        localStorage.setItem(`${PmUser}`, JSON.stringify(json))
                        // alert("Password Updated");
                        modalText.innerHTML="Password Updated Sucessfully";
                        modal.style.display = "block";
                    }
                    else{
                        website.value="";
                        username.value="";
                        password.value="";
                    }
                }
    else{
        json= JSON.parse(localStorage.getItem(`${PmUser}`));
        json.push({website:website.value, username:username.value, password:password.value});
        // alert("Password Saved");
        modalText.innerHTML="Password Saved";
        modal.style.display = "block";
        localStorage.setItem(`${PmUser}`, JSON.stringify(json))
    }
}
}
else{
    modalText.innerHTML="Enter a valid Website, Username and Password";
    modal.style.display = "block";
}
website.value="";
username.value="";
password.value="";
})

document.querySelector(".redirect").addEventListener("click",(e)=>{
    window.location.href="home.html";
})


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
else{
    window.location.href="signin.html";
}