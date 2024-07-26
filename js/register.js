const form = document.getElementById('form')
const fullname = document.getElementById('fulname')
const lastname = document.getElementById( 'lastname')
const phonenumber = document.getElementById('phonenumber')
const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const repassword = document.getElementById('re-password')

function validate(fullname,lastname,phonenumber,email,password,repassword){
     if(fullname.value.length < 3){
          alert("Fullname kamida 3ta harfdan iborat bolsin")
          fullname.focus();
          return false;
     }
     if(lastname.value.length < 5){
          alert("lastname kamida 5ta harfdan iborat bolsin")
          lastname.focus();
          return false;
     }
     if(phonenumber.value.length < 9){
          alert("Phone namber  kamida 9ta harfdan iborat bolsin")
          phonenumber.focus();
          return false;
     }
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
     
     if(password.value != repassword.value){
          alert("Password bir xil bolishi shart")
          repassword.focus();
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
          fulname: fullname.value,
          lastname: lastname.value,
          phonenumber: phonenumber.value,
          email: email.value,
     }
     fetch('Https://Auth-rg69.conrender.com/API/auth/signup',    {
          method: 'post',
          headers:{
               'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
          if(data.message == "Failed! Username is already in user!"){
            alert(data.message);
            fullname.focus
          }
          console.log(data);
     })
     .catch(err => {
          console.log(err);
     })

})
// API  xato ekan ishamayabdi