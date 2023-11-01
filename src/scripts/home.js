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

    function maskPassword(pass){
        let str="";
        for(let index =0; index<pass.length; index++){
            str += "*";
        }
        return str;
    }


    function copyText(txt) {
        navigator.clipboard.writeText(txt);
        document.getElementById("alert").style.display = "inline";
        setTimeout(()=>{
            document.getElementById("alert").style.display = "none";
        },500);
    }


    function deletePassword(website,username){
        let data = localStorage.getItem(`${PmUser}`);
        let arr=JSON.parse(data);
        let arrUpdated=[];
        arr.forEach((e)=>{
            if(e.website!=website){
                arrUpdated.push(e);
            }
            else if(e.website==website){
                if(e.username!=username){
                    arrUpdated.push(e);
                }
            }
        });
        localStorage.setItem(`${PmUser}`,JSON.stringify(arrUpdated));
        // alert(`Successfully deleted ${website}'s password`);
        showPasswords();
        modalText.innerHTML=`Successfully deleted ${website}'s password`;
        modal.style.display = "block";
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }

    // Logic to fill the table

    const showPasswords=()=>{ 
        let tb=document.querySelector("table");
        let data = localStorage.getItem(`${PmUser}`);
        if(data == null || JSON.parse(data).length == 0){
            tb.innerHTML= "...."+"No Data To Show "+"...."
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
                <td>${element.website} <img onclick="copyText('${element.website}')" src="../images/copy.svg" alt="Copy Button" width="10" height="10"></td>
                <td>${element.username} <img onclick="copyText('${element.username}')" src="../images/copy.svg" alt="Copy Button" width="10" height="10"></td>
                <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="../images/copy.svg" alt="Copy Button" width="10" height="10"></td>
                <td><button class="btnsm" onclick="deletePassword('${element.website}','${element.username}')+showPasswords()">Delete</button></td>
                </tr>`
                tb.innerHTML=tb.innerHTML + str;
            }
            website.value="";
            username.value="";
            password.value="";
        }
    }



    console.log("Working");

    document.querySelector(".redirect").addEventListener("click",(e)=>{
        window.location.href="addPass.html";
    })


    showPasswords();

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}
else{
    window.location.href="signin.html";
}
