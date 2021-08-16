document.getElementById("login-submit").addEventListener("click",function(){
    //get user email
    const user =   document.getElementById("user-email");
      const userEmail =  user.value;
    //get user password
    const passwoed = document.getElementById("user-password").value;
    // check email and password
    if(userEmail=="hello@gmail.com"&& passwoed == "secrate"){
        window.location.href = "banking.html"
    }else{
        console.log("Enter correct bio")
    }
});
