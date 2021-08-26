"use strict";
window.addEventListener("DOMContentLoaded", start);
let winner = "computer";
let tie = "tied";
let userFist;
let computerFist;
const computerOptions = ["rock", "paper", "scissors"];

function start() {
  console.log("start");
  getPlayerChoice();
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  document.querySelector(".rock").addEventListener("click", () => {
    userFist = "rock";
    console.log(userFist);
    makeRandomComputerChoice();
  });
  document.querySelector(".paper").addEventListener("click", () => {
    userFist = "paper";
    console.log(userFist);
    makeRandomComputerChoice();
  });
  document.querySelector(".scissors").addEventListener("click", () => {
    userFist = "scissors";
    console.log(userFist);
    makeRandomComputerChoice();
  });
}

function makeRandomComputerChoice() {
  //reset match status
  console.log("makeRandomComputerChoice");
  let random = Math.floor(Math.random() * computerOptions.length);
  console.log("computer: " + (random, computerOptions[random]));
  computerFist = (random, computerOptions[random]);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", determineWinner);
}

function determineWinner() {
  console.log("determineWinner");
  console.log("determineWinner:" + userFist);
  console.log("determineWinner:" + computerFist);
  if (userFist === computerFist) {
    winner = "tie";
    console.log("it's a " + winner);
  }

  //user wins

  if (userFist === "rock" && computerFist === "scissors") {
    winner = "user";
  }

  if (userFist === "paper" && computerFist === "rock") {
    winner = "user";
  }

  if (userFist === "scissors" && computerFist === "paper") {
    winner = "user";
  }

  //user loses

  if (userFist === "rock" && computerFist === "paper") {
  }

  if (userFist === "paper" && computerFist === "scissors") {
  }

  if (userFist === "scissors" && computerFist === "rock") {
  }

  if (winner === "computer") {
    showLose();
  } else if (winner === "user") {
    showWin();
  } else {
    showDraw();
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
  reset();
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  reset();
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
  reset();
}

function reset() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelectorAll(".state").forEach((el) => el.classList.add("hidden"));
  getPlayerChoice();
}
