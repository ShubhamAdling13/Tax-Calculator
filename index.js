function calculatetax() {
    var tax, finalincome, overallIncome;

    console.log("inside");
    var gross = parseFloat(document.getElementById("grossincome").value);
    var extra = parseFloat(document.getElementById("extrain").value);
    var age = document.getElementById("agegroup").value;
    var deductions = parseFloat(
      document.getElementById("totaldeduc").value
    );
  
    if (isNaN(gross) || isNaN(extra) || age === "" || isNaN(deductions)) {
  alert("Please fill in all fields.");
  return;
}
    console.log(
      "gross :" + gross,
      "extra:" + extra,
      "age:" + age,
      "deduc:" + deductions
    );

    overallIncome = gross + extra - deductions;
    if (overallIncome <= 800000) {
      console.log("inside less than 8lakh");
      tax = 0;
      finalincome = overallIncome - tax;
    } else if (overallIncome > 800000) {
      console.log("inside greater than 8lakh");
      if (age === "less than 40") {
        tax = 0.3 * (overallIncome - 800000);
      } else if (age === "40 to 60") {
        tax = 0.4 * (overallIncome - 800000);
      } else if (age === "greater than 60") {
        tax = 0.1 * (overallIncome - 800000);
      }
      finalincome = overallIncome - tax;
    }

    console.log("final income : " + finalincome);
    document.getElementById("price").innerText = finalincome;
    var container = document.querySelector(".ans");
    container.style.display = "block";
    container.classList.add("ansdisplay");
  }

  function gohome() {
    var b1 = document.querySelector(".ans").style;

    document.getElementById("grossincome").value = "";
    document.getElementById("extrain").value = "";
    document.getElementById("agegroup").value = "";
    document.getElementById("totaldeduc").value = "";
    b1.display = "none";
  }