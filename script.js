function validate(){
    var username=document.getElementById("name");
    var email=document.getElementById("email");

    if(username.value==""){
        alert("Please enter Name");
        document.form1.Name.focus();
        return false;
    }
    if(username.value.length<4){
        alert("Minimum 4 characters")
        return false;
    }
    if(email.value==""){
        alert("Please enter MAILID");
        document.form1.Email.focus();
        return false;
    }
     return true;
    }






