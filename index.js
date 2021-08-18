"use strict";

const inputText = document.querySelector("#text");
const outputText = document.querySelector("#translation");
const form = document.querySelector("#form");

const url = "https://api.funtranslations.com/translate/pirate.json?text=";

form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  let toTranslate = encodeURIComponent(inputText.value.trim());
  e.preventDefault();
  try {
    let response = await fetch(url + toTranslate);
    let results = await response.json();
    outputText.value = results.contents.translated;
    console.log(results.contents.translated);
  } catch (err) {
    console.log(err);
  }
}
