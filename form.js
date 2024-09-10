 <script>
      function validation() {
        let name = document.getElementById("fname").value;
        let patterns = /^[a-zA-Z ]{2,30}$/;
        let isFormInValid = false;

        if (name == "") {
          document.getElementById("fnam").innerHTML = "enter your name";
          isFormInValid = true;
        } else if (!patterns.test(name)) {
          document.getElementById("fnam").innerHTML = "enter a valid name";
          isFormInValid = true;
        } else {
          document.getElementById("fnam").innerHTML = "";
        }



        let lastname = document.getElementById("fname").value;
        let lptn = /^[a-zA-Z ]{2,30}$/;

        if (lastname == "") {
          document.getElementById("lnam").innerHTML = "enter your name";
          isFormInValid = true;
        } else if (!lptn.test(lastname)) {
          document.getElementById("lnam").innerHTML = "enter a valid name";
          isFormInValid = true;
        } else {
          document.getElementById("lnam").innerHTML = "";
        }

        
        let mail = document.getElementById("email").value;
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (mail == "") {
          document.getElementById("mail").innerHTML = "enter your mail";
          isFormInValid = true;
        } else if (!pattern.test(mail)) {
          document.getElementById("mail").innerHTML = "enter a valid mail";
          isFormInValid = true;
        } else {
          document.getElementById("mail").innerHTML = "";
        }


        let password = document.getElementById("pwd").value;
        let p = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        if (password == "") {
          document.getElementById("pass1").innerHTML = "enter your password";
          isFormInValid = true;
        } else if (!p.test(password)) {
          document.getElementById("pass1").innerHTML =
            "enter your correct password";
          isFormInValid = true;
        } else {
          document.getElementById("pass1").innerHTML = "";
        }

        let cpassword = document.getElementById("cpwd").value;
        let p1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        if (cpassword == "") {
          document.getElementById("pass2").innerHTML = "confirm your password";
          isFormInValid = true;
        } else if (password != cpassword) {
          document.getElementById("pass2").innerHTML =
            "enter your correct password";
          isFormInValid = true;
        } else {
          document.getElementById("pass2").innerHTML = "";
        }

        if (male.checked) {
          document.getElementById("rad").innerHTML = "";
        } else if (female.checked) {
          document.getElementById("rad").innerHTML = "";
        }
         else if (others.checked) {
          document.getElementById("rad").innerHTML = "";
        }
         else {
          document.getElementById("rad").innerHTML =
            "choose any one of the option";
          isFormInValid = true;
        }


        if (Python.checked) {
          document.getElementById("box").innerHTML = "";
        } else if (Java.checked) {
          document.getElementById("box").innerHTML = "";
        } else if (c.checked) {
          document.getElementById("box").innerHTML = "";
        } else {
          document.getElementById("box").innerHTML = "choose any one of the option";
          isFormInValid = true;
        }


        let phno = document.getElementById("phone").value;
        let ptn = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
        if (phno == "") {
          document.getElementById("number").innerHTML =
            "enter your phone number";
          isFormInValid = true;
        } else if (!ptn.test(phno)) {
          document.getElementById("number").innerHTML =
            "enter the valid phone number";
          isFormInValid = true;
        } else {
          document.getElementById("number").innerHTML = "";
        }

        let place = document.getElementById("select").value;
         if (place == "") {
          document.getElementById("i").innerHTML =
            "select a city";
            isFormInValid = true;}
            
            else {
          document.getElementById("i").innerHTML = "";
        }

        let db = document.getElementById("dob").value;
         if (db == "") {
          document.getElementById("d").innerHTML =
            "select a date";
            isFormInValid = true;}
            
            else {
          document.getElementById("d").innerHTML = "";
        }

         let add = document.getElementById("address").value;
         if (add == "") {
          document.getElementById("a").innerHTML =
            "fill your address";
            isFormInValid = true;}
            
            else {
          document.getElementById("a").innerHTML = "";
        }
        

        if (isFormInValid) {
          console.log("Form is invalid");
        } else {
          alert("Form submitted successfully!");
        }
      }
    </script>