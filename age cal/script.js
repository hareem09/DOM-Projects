const dob = document.querySelector("#dob");
const age = document.querySelector("#age");
const btn = document.querySelector("#btn");
const res = document.querySelector(".cal");

btn.addEventListener("click", () => {
   const dobValue = new Date(dob.value);
   const ageValue = parseInt(age.value);
   
   if (!isNaN(dobValue.getTime()) && !isNaN(ageValue)) {
      const currentYear = new Date().getFullYear();
      const dobYear = dobValue.getFullYear();
      const calculatedAge = currentYear - dobYear;
      
      res.textContent = `Calculated age is: ${calculatedAge}`;
   } else {
      res.textContent = "Please provide valid inputs.";
   }
});
