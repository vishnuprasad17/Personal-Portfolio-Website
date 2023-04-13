
function validation() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value
  var letters = /^[A-Za-z]+$/;
  reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  email_result = reg.test(email);


  if (name == '') {
    document.getElementById('name_error').innerHTML = "please enter your name"
    return false
  } else if (name.length < 3) {
    document.getElementById('name_error').innerHTML = " please enter a valid name"
    return false
  } else if (name.indexOf(" ") >= 0) {
    alert("Name is not entered")
    return false
  } else if (!letters.test(name)) {
    alert("Invalid characters")
    return false
  }
  else {
    document.getElementById('name_error').innerHTML = ""
    name = true
  }


  if (email == '') {
    document.getElementById('email_error').innerHTML = "please enter your email"
    return false
  } else if (email.length < 5) {
    document.getElementById('email_error').innerHTML = " please enter a valid email"
    return false
  } else if (!email_result) {
    alert("Please provide a correct E-mail")
    return false
  }
  else {
    document.getElementById('email_error').innerHTML = ""

  }

  if (subject == '') {
    document.getElementById('subject_error').innerHTML = "please enter your subject"
    return false
  } else if (subject.indexOf(" ") >= 0) {
    alert("Subject is not entered")
  }
  else {
    document.getElementById('subject_error').innerHTML = ""

  }

  if (message == '') {
    document.getElementById('message_error').innerHTML = "please enter any message"
    return false
  } else if (message.length < 10) {
    document.getElementById('message_error').innerHTML = " please enter atleast 10 characters"
    return false
  } else if (message.indexOf(" ") >= 0) {
    alert("Message is not entered")
  }
  else {
    document.getElementById('message_error').innerHTML = ""

    // setTimeout(function() {window.location = "./page2/done.html"});
  }
}

