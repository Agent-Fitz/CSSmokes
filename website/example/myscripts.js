function myFunction() {
    // Get the checkbox
    var button = document.getElementById("myCheck");
    // Get the output text
    var section = document.getElementById("mapsites");
  
    // If the checkbox is checked, display the output text
    if (button.checked == true){
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
}