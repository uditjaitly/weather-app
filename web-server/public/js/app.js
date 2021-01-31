const form=document.getElementById('wform')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=e.target.value
    console.log(location)
    url="http://localhost:3000/weather?location="
    fetch(url+location).then((response) => {
    response.json().then((data) => {
    if(data.error){
        console.log(data.error)
    }
    else{
        console.log(data)
    }
  });
});
    
})


