const stylesBody = getComputedStyle(document.body);
const backgroundBody = stylesBody.backgroundColor;

const container = document.querySelector(".container");
const paragraph = container.querySelectorAll("p");

const title = document.querySelector("h1");
title.style.color = backgroundBody;
title.style.textTransform = "uppercase";

for (let i of paragraph) {
  const paragraphs = i;
  paragraphs.style.backgroundColor = backgroundBody;
  paragraphs.style.color = "#fff";
  paragraphs.style.borderRadius = "10px";
  paragraphs.style.padding = "10px";
}
