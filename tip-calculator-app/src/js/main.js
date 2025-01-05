document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const elements = {
    bill: document.getElementById("bill"),
    customTip: document.getElementById("customTip"),
    people: document.getElementById("people"),
    peopleError: document.getElementById("peopleError"),
    tipButtons: Array.from(document.getElementsByClassName("tipButton")),
    resetButton: document.getElementById("reset"),
    tipAmountDisplay: document.getElementById("tipAmount"),
    totalAmountDisplay: document.getElementById("totalAmount"),
    form: document.getElementById("tip-form"),
  };

  let state = {
    selectedTipPercentage: 0,
    billAmount: 0,
    numberOfPeople: 0,
  };

  // Formatting functions
  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  // Validation functions
  function validatePeople(value) {
    const peopleCount = parseInt(value);
    const isValid = peopleCount > 0;

    elements.people.classList.toggle("border-red-400", !isValid);
    elements.people.classList.toggle("focus:border-red-400", !isValid);
    elements.people.classList.toggle("border-transparent", isValid);
    elements.peopleError.classList.toggle("hidden", isValid);

    return isValid;
  }

  // Check if calculator has any values
  function hasAnyValue() {
    return (
      state.billAmount > 0 ||
      state.selectedTipPercentage > 0 ||
      state.numberOfPeople > 0 ||
      elements.customTip.value !== "" ||
      elements.bill.value !== "" ||
      elements.people.value !== ""
    );
  }

  // Update reset button state
  function updateResetButton() {
    const hasValues = hasAnyValue();
    elements.resetButton.disabled = !hasValues;

    if (hasValues) {
      elements.resetButton.classList.remove("opacity-20", "cursor-not-allowed");
      elements.resetButton.classList.add(
        "hover:bg-grayish-750",
        "text-grayish-950"
      );
    } else {
      elements.resetButton.classList.add("opacity-20", "cursor-not-allowed");
      elements.resetButton.classList.remove(
        "hover:bg-grayish-750",
        "text-grayish-950"
      );
    }
  }

  // Calculation functions
  function calculateAmounts() {
    const { billAmount, selectedTipPercentage, numberOfPeople } = state;

    if (billAmount <= 0 || numberOfPeople <= 0) {
      return { tipAmount: 0, totalAmount: 0 };
    }

    const tipTotal = billAmount * (selectedTipPercentage / 100);
    const tipPerPerson = tipTotal / numberOfPeople;
    const totalPerPerson = (billAmount + tipTotal) / numberOfPeople;

    return {
      tipAmount: tipPerPerson,
      totalAmount: totalPerPerson,
    };
  }

  // Update display
  function updateDisplay() {
    const { tipAmount, totalAmount } = calculateAmounts();
    elements.tipAmountDisplay.textContent = formatCurrency(tipAmount);
    elements.totalAmountDisplay.textContent = formatCurrency(totalAmount);
    updateResetButton();
  }

  // Event handlers
  function handleTipButtonClick(event) {
    const button = event.target;
    elements.tipButtons.forEach((btn) => {
      btn.classList.remove("bg-grayish-750", "text-grayish-950");
      btn.classList.add("bg-grayish-950", "text-white");
    });
    button.classList.remove("bg-grayish-950", "text-white");
    button.classList.add("bg-grayish-750", "text-grayish-950");

    elements.customTip.value = "";
    state.selectedTipPercentage = parseFloat(button.dataset.tip);
    updateDisplay();
  }

  function handleCustomTipInput(event) {
    elements.tipButtons.forEach((btn) => {
      btn.classList.remove("bg-grayish-750");
      btn.classList.add("bg-grayish-950", "text-white");
    });
    state.selectedTipPercentage = Math.min(
      Math.max(parseFloat(event.target.value) || 0, 0),
      100
    );
    updateDisplay();
  }

  function handleBillInput(event) {
    state.billAmount = Math.max(parseFloat(event.target.value) || 0, 0);
    updateDisplay();
  }

  function handlePeopleInput(event) {
    const value = event.target.value;
    if (validatePeople(value)) {
      state.numberOfPeople = parseInt(value);
      updateDisplay();
    }
  }

  function handleReset(event) {
    event.preventDefault(); // Prevent form reset

    // Reset state
    state = {
      selectedTipPercentage: 0,
      billAmount: 0,
      numberOfPeople: 0,
    };

    // Reset form values
    elements.bill.value = "";
    elements.customTip.value = "";
    elements.people.value = "";

    // Reset UI states
    elements.tipButtons.forEach((btn) => {
      btn.classList.remove("bg-grayish-750");
      btn.classList.add("bg-grayish-950", "text-white");
    });
    elements.people.classList.remove("border-red-400");
    elements.people.classList.add("border-transparent");
    elements.peopleError.classList.add("hidden");

    // Reset displays
    elements.tipAmountDisplay.textContent = "$0.00";
    elements.totalAmountDisplay.textContent = "$0.00";

    // Update reset button state immediately after reset
    updateResetButton();
  }

  // Event listeners
  elements.tipButtons.forEach((button) => {
    button.addEventListener("click", handleTipButtonClick);
  });

  elements.customTip.addEventListener("input", handleCustomTipInput);
  elements.bill.addEventListener("input", handleBillInput);
  elements.people.addEventListener("input", handlePeopleInput);
  elements.resetButton.addEventListener("click", handleReset);

  // Initial reset button state
  updateResetButton();
});
