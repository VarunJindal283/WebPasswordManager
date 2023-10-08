function copyText(txt) {
    navigator.clipboard.writeText(txt);
    // alert("Copied the text: " + txt);
}



const deletePassword = (website) =>{
    let data = localStorage.getItem("passwords");
    let arr= JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website !=website
    });
    localStorage.setItem("passwords", JSON.stringify(arrUpdated));
    alert(`Successfully deleted ${website}'s password`);
    showPasswords();
}

// Logic to fill the table

const showPasswords=()=>{ 
    let tb=document.querySelector("table");
    let data = localStorage.getItem("passwords");
    if(data == null){
        tb.innerHTML= "No Data To Show"
    }
    else{
        tb.innerHTML=`<tr>
                        <th>Website</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Delete</th>
                      </tr>`
        let arr=JSON.parse(data);
        for (let index =0; index<arr.length;index++){
            const element = arr[index];
            str =`<tr>
            <td>${element.website} <img onclick="copyText('${element.website}')" src="copy.svg" alt="Copy Button" width="10" height="10"></td>
            <td>${element.username} <img onclick="copyText('${element.username}')" src="copy.svg" alt="Copy Button" width="10" height="10"></td>
            <td>${element.password} <img onclick="copyText('${element.password}')" src="copy.svg" alt="Copy Button" width="10" height="10"></td>
            <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
            </tr>`
            tb.innerHTML=tb.innerHTML + str;
        }
        website.value="";
        username.value="";
        password.value="";
    }
}



console.log("Working");
showPasswords();
document.querySelector(".btn").addEventListener("click",(e)=>{
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
        let json= JSON.parse(localStorage.getItem("passwords"))
        json.push({website:website.value, username:username.value, password:password.value});
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords();
})