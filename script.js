function checkingBreaches(){
  var email = document.getElementById("email").value;

  fetch("https://evelynescobar-hibp-api.herokuapp.com/hibp/" + email)
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      var formattedString = data.split(",").join(", ").replaceAll(/{"Name":"|"}/g,'');
      const lines = (formattedString.match(/,/g) || '').length + 1
      document.getElementById("count").innerText = lines;
      document.getElementById("results").innerText = formattedString;
      var form = document.getElementById("myForm");
      form.reset();
    })
    .catch(error => console.log('error', error));
}