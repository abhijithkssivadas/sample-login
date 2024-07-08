function register(){
    let name=document.getElementById("name").value
    let no = document.getElementById("no").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let cnpswd=document.getElementById("cnpswd").value

    if(name==""||no==""||email==""||password==""||cnpswd==""){
        alert("Enter all details")
    }
    else{
        if(email in localStorage || no in localStorage){
            alert("Aready existed account")
        }
        else if(password==cnpswd){
            localStorage.setItem("Name",name)
            localStorage.setItem("No",no)
            localStorage.setItem("Email",email)
            localStorage.setItem("Password",password)
            console.log(name,no,email,password);
            window.location="login.html"
            alert("Register successfull")
           
        }
        else{
            alert("Enter Password Properly")
        }
    }
}
function login(){
    const lemail=document.getElementById("lemail").value 
    const lpassword=document.getElementById("lpassword").value

    if(lemail=="" || lpassword==""){
        alert("Enter details Properly")
    }
   else{
    const alemail=localStorage.getItem("Email")
   const alpswd= localStorage.getItem("Password")
    if(alemail==lemail && alpswd==lpassword){
        window.location="home.html"
        alert("Login Sucessful")
    }
    else{
        alert("This account is not existed , please Register Here..")
        window.location="register.html"
    }

   }
}