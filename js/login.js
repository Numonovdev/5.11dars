const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')

function validate(email,password){
     if(!email.value){
          alert("email  kiriting")
          email.focus();
          return false;
     }
     if(password.value.langth < 6){
          alert("password  kamida 6ta harfdan iborat bolsin")
          password.focus();
          return false;
     }
     return true;
}

form && form.addEventListener('submit', function(event){
     event.preventDefault();
     const isvalidate = validate(fullname,lastname,phonenumber,email,password,repassword);
     if(!isvalidate){
          return;
     }
      
     const user = {
          email: email.value,
          password: password.value
     }

     btn.innerHTML = "Pedding...";
     btn.setAttribute('disabled', true);

     fetch('Https://Auth-rg69.conrender.com/API/auth/signin',    {
          method: 'post',
          headers:{
               'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
          if(data.id){
               localStorage.setItem('user', JSON.stringify(data))
               localStorage.setItem('tocen', data.accessToken)

               let url = window.location.href.split("/pages"[0]);
               window.location.assign(`${url}/index.html`)

          }
          if(data.message == "User Not found."){
               alert(data.message)
               email.focus();
          }
     })
     .catch(err => {
          console.log(err);
     })
     .finally(function(){
          btn.innerHTML = "Login..."
          btn.removeAttribute('disabled')
     })

})
// API  xato ekan ishamayabdi