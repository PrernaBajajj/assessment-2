document.querySelector("#search_button").addEventListener('click',(e)=>{
    e.preventDefault();
    var xhr=new XMLHttpRequest();
    var input=document.querySelector("#input-box").value;
    const url=`https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
    xhr.open('GET',url);
    xhr.onreadystatechange=()=>{
        if(xhr.status==200 && xhr.readyState==4){
            var result=JSON.parse(xhr.responseText);
            var address=`<span>${result[input-1].address.suite} ${result[input-1].address.street} ${result[input-1].address.city}</span>`; 
            var phone=`<span>${result[input-1].phone.substr(0,14)}</span>`
            var email=`<span>${result[input-1].email}</span>`
            var website=`<span>${result[input-1].website}</span>`
            
            document.querySelector("#address_1").innerHTML=address;
            document.querySelector("#phone_1").innerHTML=phone;
            document.querySelector("#email_1").innerHTML=email;
            document.querySelector("#website_1").innerHTML=website;
            document.querySelector("#fullname_1").value=result[input-1].name;
            document.querySelector("#username_1").value=result[input-1].username;
            document.querySelector("#zipcode_1").value=result[input-1].address.zipcode;
            document.querySelector("#companyname_1").value=result[input-1].company.name;
            document.querySelector("#phrase_1").value=result[input-1].company.catchPhrase;
    }
    
  }
  xhr.send();
  })


