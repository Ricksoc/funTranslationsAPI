"use strict";

const inputText = document.querySelector("#text");
const outputText = document.querySelector("#translation");
const form = document.querySelector("#form");
const languageSelect = document.querySelector("#language-select");

const url = "https://api.funtranslations.com/translate/";
const urlJoin = ".json?text=";

form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  outputText.value = "";
  let toTranslate = encodeURIComponent(inputText.value.trim());
  let language = languageSelect.value;
  e.preventDefault();
  try {
    let response = await fetch(url + language + urlJoin + toTranslate);
    let results = await response.json();
    outputText.value = results.contents.translated;
  } catch (err) {
    if (language === "") {
      outputText.value = "You did not select a language";
    } else {
      console.log(err);
    }
  }
}
