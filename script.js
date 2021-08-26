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
  document.querySelector(".scissors").removeEventListener;
  console.log("makeRandomComputerChoice");
  let random = Math.floor(Math.random() * computerOptions.length);
  console.log("computer: " + (random, computerOptions[random]));
  computerFist = (random, computerOptions[random]);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  determineWinner();
  if (userFist == "rock") {
    document.querySelector(".player1").classList.add(".rock");
    console.log("rock is shown");
  }
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
    winner = "computer";
    winner = "user";
    console.log("the winner is " + winner);
  }

  if (userFist === "paper" && computerFist === "rock") {
    winner = "computer";
    winner = "user";
    console.log("the winner is " + winner);
  }

  if (userFist === "scissors" && computerFist === "paper") {
    winner = "computer";
    winner = "user";
    console.log("the winner is " + winner);
  }

  //user loses

  if (userFist === "rock" && computerFist === "paper") {
    winner = "computer";
    console.log("the winner is " + winner);
  }

  if (userFist === "paper" && computerFist === "scissors") {
    winner = "computer";
    console.log("the winner is " + winner);
  }

  if (userFist === "scissors" && computerFist === "rock") {
    winner = "computer";
    console.log("the winner is " + winner);
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
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
}
