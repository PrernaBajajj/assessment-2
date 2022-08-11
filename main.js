document.querySelector('#search-button').addEventListener('click',(e)=>{
    e.preventDefault()
    const xhr=new XMLHttpRequest()
    const url=''
    xhr.open('GET',url)
    xhr.onreadystatechange=()=>{
        if(xhr.status===200 && xhr.readyState==4){
            var result=JSON.parse(xhr.responseText)
            var phone='<span>${result[input-1].phone.substr(0,14)}</span>
            `
        }

    }
})