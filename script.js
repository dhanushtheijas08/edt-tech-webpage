"use strict";

let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function (event) {
    let name = event.target.getAttribute("data-name")
    question.classList.toggle("svg-active");
    let answer = document.querySelector(`.answer-${name}`)
    answer.classList.toggle("ans-hidden");
  });
});
