 const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });

    function joinPlan(plan) {
      alert("You have selected the ${plan} Membership Plan. Our team will contact you soon!");
    }