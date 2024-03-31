function checkCustomLanguage(select) {
    var customLanguageInput = document.getElementById("customLanguageInput");
    if (select.value === "other") {
      customLanguageInput.style.display = "block";
    } else {
      customLanguageInput.style.display = "none";
    }
}

