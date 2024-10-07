function validateForm() {
    let isValid = true;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;
  
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('ageError').innerHTML = '';
    document.getElementById('genderError').innerHTML = '';
    document.getElementById('addressError').innerHTML = '';
    
    if (name === "") {
      document.getElementById('nameError').innerHTML = "Name is required";
      isValid = false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
      document.getElementById('emailError').innerHTML = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerHTML = "Invalid email format";
      isValid = false;
    }

    if (password === "") {
      document.getElementById('passwordError').innerHTML = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').innerHTML = "Password must be at least 6 characters";
      isValid = false;
    }
  
   
    if (age === "") {
      document.getElementById('ageError').innerHTML = "Age is required";
      isValid = false;
    } else if (age < 18) {
      document.getElementById('ageError').innerHTML = "You must be at least 18 years old";
      isValid = false;
    }
  

    if (gender === "") {
      document.getElementById('genderError').innerHTML = "Gender selection is required";
      isValid = false;
    }
  
  
    if (address === "") {
      document.getElementById('addressError').innerHTML = "Address is required";
      isValid = false;
    }
  
    if (isValid) {
      displayData(name, email, age, gender, address);
    }
  
    return false; 
  }
  
  function displayData(name, email, age, gender, address) {
    let data = `
      <h3>Submitted Data</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Address:</strong> ${address}</p>
    `;
    document.getElementById('submittedData').innerHTML = data;
  }
  