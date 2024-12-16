const options = document.querySelectorAll("input[name='units']");
const totalPrice = document.getElementById("total");

options.forEach((option) => {
  option.addEventListener("change", () => {
    totalPrice.textContent = `$${option.value}.00 USD`;
    document
      .querySelectorAll(".option")
      .forEach((opt) => opt.classList.remove("selected"));
    option.closest(".option").classList.add("selected");
  });
});

//Add Event  Listeners for box-2
document.addEventListener("DOMContentLoaded", () => {
  const twoUnitRadio = document.getElementById("two-unit");
  const oneUnitRadio = document.getElementById("one-unit");
  const threeUnitRadio = document.getElementById("three-unit");
  const optionsContainer = document.querySelector(".options-container");
  // const twoUnitRadio = document.getElementById('twoUnitRadio');
  const twoUnitBox = document.getElementById("two-unit");
  // const optionsContainer = document.getElementById('options-container');
  const option2 = document.getElementById("option2");

  // Function to toggle options-container visibility
  function toggleOptions() {
    if (twoUnitRadio.checked) {
      // margin-top.style.height = "-66px";
      twoUnitBox.style.marginTop = "-66px";
      option2.style.height = "174px";
      optionsContainer.style.display = "block";
    } else {
      twoUnitBox.style.marginTop = "-16px";
      option2.style.height = "74px";
      optionsContainer.style.display = "none";
    }
  }

  twoUnitRadio.addEventListener("change", toggleOptions);
  oneUnitRadio.addEventListener("change", toggleOptions);
  threeUnitRadio.addEventListener("change", toggleOptions);

  optionsContainer.style.display = "none";
});
//Add Event  Listeners for box-1
document.addEventListener("DOMContentLoaded", () => {
  const oneUnitRadio = document.getElementById("one-unit");
  const twoUnitRadio = document.getElementById("two-unit");
  const threeUnitRadio = document.getElementById("three-unit");
  const option1 = document.getElementById("option1");
  const optionsContainer = document.querySelector(".product-options-container");

  function toggleOptionsOneUnit() {
    if (oneUnitRadio.checked) {
      oneUnitRadio.style.marginTop = "-54px";
      option1.style.height = "174px";
      optionsContainer.style.display = "block";
    } else {
      oneUnitRadio.style.marginTop = "-5px";
      option1.style.height = "74px";
      optionsContainer.style.display = "none";
    }
  }

  oneUnitRadio.addEventListener("change", toggleOptionsOneUnit);
  twoUnitRadio.addEventListener("change", toggleOptionsOneUnit);
  threeUnitRadio.addEventListener("change", toggleOptionsOneUnit);

  if (!oneUnitRadio.checked) {
    optionsContainer.style.display = "none";
    optionsContainer.style.height = "0px";
  }
});
//Add Event  Listeners for box-3
document.addEventListener("DOMContentLoaded", () => {
  const oneUnitRadio = document.getElementById("one-unit");
  const twoUnitRadio = document.getElementById("two-unit");
  const threeUnitRadio = document.getElementById("three-unit");

  const option3 = document.getElementById("option3");
  const selectionsContainer = option3.querySelector(".selections-container");

  function toggleOption3() {
    if (threeUnitRadio.checked) {
      threeUnitRadio.style.marginTop = "-54px";
      selectionsContainer.style.display = "block";
      option3.style.height = "174px";
    } else {
      threeUnitRadio.style.marginTop = "-3px";
      selectionsContainer.style.display = "none";
      option3.style.height = "74px";
    }
  }

  function collapseOption3() {
    selectionsContainer.style.display = "none";
    option3.style.height = "74px";
    threeUnitRadio.style.marginTop = "-3px";
  }

  oneUnitRadio.addEventListener("change", collapseOption3);
  twoUnitRadio.addEventListener("change", collapseOption3);
  threeUnitRadio.addEventListener("change", toggleOption3);

  toggleOption3();
});
