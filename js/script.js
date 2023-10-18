function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const tdButton = document.getElementById("td");
  const isOpen = sidebar.style.left === "0px";
  sidebar.style.left = isOpen ? "-250px" : "0";
  tdButton.classList.toggle("active", !isOpen);
}

  function validation2() {
    // Get the values from input fields
    var x = document.getElementById("in1").value;
    var y = document.getElementById("in2").value;

    if (x === "admin" && y === "admin") {
      // Redirect to "base.html" if both x and y are "admin"
      window.location.href = "base.html";
      return false; // To prevent the form from submitting
    }
   
    alert("Invalid credentials. Please try again.");
    return false; // To prevent the form from submitting
  }


     function placeOrder() {
       // Redirect to billingdetails.html
       window.location.href = "billingdetails.html";
     }


    