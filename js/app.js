"use strict";
$(document).ready(function(){
    $(`input[type="submit"]`).click(function(action){
        action.preventDefault();

        let firstName,lastName,email,country,password,confirmPassword, fullName;

        firstName = $(`#firstName`).val()
        lastName = $(`#lastName`).val()
        fullName = firstName + " " + lastName;
        email = $(`#email`).val()
        country = $(`#selectOption`).val()
        password = $(`#password`).val()
        confirmPassword = $(`#confirmPassword`).val()

        if(firstName === null || firstName === undefined || firstName === ""){
            alert(`First Name is Requird`)
        }else if(lastName === null || lastName === undefined || lastName === ""){
            alert(`Last Name is Requird`)
        }else if (email === null || email === undefined || email === ""){
            alert("Please Provide your Eamil Address")
        }else if (country === null || country === undefined || country === ""){
            alert("Select country")
        }else if(password === null || password === undefined || password === ""){
            alert("Type your password")
        }else if (password !== confirmPassword){
            alert("Password Invalid")
        }else{
            let allData = `My Name is ${fullName}. My Email is ${email}, My Country is ${country}. I am sure this information is true. 
        `
        
          let result = confirm(allData);
		  if(result === true){
			  alert("Thanks for your Registration! Your Registration is complete")
		  }else{
			  alert("Fill up again the form")
		  }
        }

        
    })
})
