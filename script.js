"use strict";
/*light mode
mainHeading color = --very-dark-blue-text
mode-pragraph text = 'lightmiode'
mode-paragraph color = --dark-grayish-blue
totalFollowers color = --dark-grayish-blue
header backgoundColor = ---very-pale-blue                           X
body backgroundColor = --white                                      X
switch justifyContent = flex-end                                    x
switch backgoundColor = --toggle-light                              x
circle backgroundColor = --white                                    X
stat backgroundColor = --light-grayish-blue                         X
account color = --dark-grayish-blue use closer                      X
numOfFollowers color = very-dark-blue-text use closer               X
followers-paragraph color =--dark-grayish-blue use closer           X
overview-heading color = --dark-grayish-blue                        X
ov-elemnt backgroundColor = --light-grayish-blue                    X
ov-paragraph color = --dark-grayish-blue use closer                 X 
ov-num color = --very-dark-blue-text use closer                     X
*/
const body = document.querySelector("body");
const header = document.querySelector("header");
const mainHeading = document.querySelector(".mainHeading");
const modeParagraph = document.querySelector(".mode-paragraph");
const totalFollowers = document.querySelector(".totalFollowers");
const switchBtn = document.querySelector(".switch");
const circle = document.querySelector(".circle");
const stats = document.querySelectorAll(".stat");
const ovElements = document.querySelectorAll(".ov-element");
const overviewHeading = document.querySelector(".overview-heading");
/* change backgound  color of body and header*/

const changeMainBackground = function (bodyBackground, headerBackground) {
  body.style.backgroundColor = `var(--${bodyBackground})`;
  header.style.backgroundColor = `var(--${headerBackground})`;
};
/*change switch style+ */
const switchToggle = function (justify, bgColor, circleBg) {
  switchBtn.style.justifyContent = justify;
  switchBtn.style.background = `var(--${bgColor})`;
  circle.style.backgroundColor = `var(--${circleBg})`;
};
const changeHeading = function (mainHeadingColor, overviewHeadingColor) {
  mainHeading.style.color = `var(--${mainHeadingColor})`;
  overviewHeading.style.color = `var(--${overviewHeadingColor})`;
};
const changeStat = function (statColor, accountColor, followerColor) {
  stats.forEach((stat) => {
    stat.style.backgroundColor = `var(--${statColor})`;
    stat.querySelector(".account").style.color = `var(--${accountColor})`;
    stat.querySelector(
      ".followers-paragraph"
    ).style.color = `var(--${accountColor})`;

    stat.querySelector(
      ".numOfFollowers"
    ).style.color = `var(--${followerColor})`;
  });
};
const changeTopParagraphs = function (textColor, text) {
  totalFollowers.style.color = `var(--${textColor})`;
  modeParagraph.style.color = `var(--${textColor})`;
  modeParagraph.textContent = `${text} Mode`;
};
const changeOverview = function (elementBg, numColor, paragraphColor) {
  ovElements.forEach((element) => {
    element.style.backgroundColor = `var(--${elementBg})`;
    element.querySelector(".ov-num").style.color = `var(--${numColor})`;
    element.querySelector(
      ".ov-paragraph"
    ).style.color = `var(--${paragraphColor})`;
  });
};
const activateMode = function () {
  if (body.classList.contains("lightMode")) {
    console.log("light mode");
    changeMainBackground("white", "very-pale-blue");
    switchToggle("flex-end", "toggle-light", "white");
    changeHeading("very-dark-blue-text", "dark-grayish-blue");
    changeStat(
      "light-grayish-blue",
      "dark-grayish-blue",
      "very-dark-blue-text"
    );
    changeOverview(
      "light-grayish-blue",
      "very-dark-blue-text",
      "dark-grayish-blue"
    );
    changeTopParagraphs("dark-grayish-blue", "Light");
  } else {
    console.log("dark mode");
    changeMainBackground("very-dark-blue-bg", "very-dark-blue-topbg");
    switchToggle("flex-start", "toggle", "very-dark-blue-bg");
    changeHeading("white", "white");
    changeStat("dark-desaturated-blue", "desaturated-blue", "white");
    changeOverview("dark-desaturated-blue", "white", "desaturated-blue");
    changeTopParagraphs("desaturated-blue", "Dark");
  }
};
switchBtn.addEventListener("click", function () {
  body.classList.toggle("lightMode");
  activateMode();
});
