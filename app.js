document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("Email").value;
      const password = document.getElementById("password").value;

      if (email === "indahh12@gmail.com" && password === "12345678") {
          alert("Anda berhasil login");
          window.location.href = "order.html"; // Redirect to order page
      } else {
          errorMessage.textContent = "Email atau password salah";
          setTimeout(function() { 
            errorMessage.textContent = ""; 
        }, 3000); 
      }
  });
});
document.addEventListener("DOMContentLoaded", function() { 
    const menuItems = document.querySelectorAll(".menu-item"); 
    const totalPriceElement = document.getElementById("totalPrice"); 
    let totalPrice = 0;

    // Function to add price when a menu item is clicked 
    function addToTotal(price) { 
        totalPrice += price; 
        totalPriceElement.textContent = "Rp " + totalPrice.toLocaleString(); // Display the price in the format Rp x,xxx,xxx 
    } 
    
    // Add event listener to each menu item 
    menuItems.forEach(function(item) { 
        item.addEventListener("click", function() { 
            const price = parseFloat(item.getAttribute("data-price")); 
            addToTotal(price); 
            this.classList.add("clicked"); 
        }); 
    }); 
});
