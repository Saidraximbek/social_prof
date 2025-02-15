const container = document.createElement("div");
const heroImg = document.createElement("img");
const title = document.createElement("h1");
const subTitle = document.createElement("h5");
const cardInfo = document.createElement("p");
const ul = document.createElement("ul");

heroImg.src = "./images/profile-pic1.png";
title.textContent = "Jessica Randall";
subTitle.textContent = "London, United Kingdom";
cardInfo.textContent = `"Front-end developer and avid reader."`;
const btn = document.createElement("button");
btn.textContent = "Olov uchun meni bosing!";
btn.setAttribute("class", "btn");
const arr = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
for (let i = 0; i < arr.length; i++) {
  const li = document.createElement("li");
  li.textContent = arr[i];
  li.setAttribute("class", "card__item");
  ul.appendChild(li);
}

container.append(heroImg, title, subTitle, cardInfo, ul, btn);
document.body.append(container);

container.setAttribute("class", "container");
heroImg.setAttribute("class", "hero__img");
title.setAttribute("class", "title");
subTitle.setAttribute("class", "subtitle");
cardInfo.setAttribute("class", "card__info");
ul.setAttribute("class", "card__list");

btn.addEventListener("click", () => {
  if (!container.classList.contains("fire-border")) {
    container.setAttribute("class", "container fire-border");
    btn.textContent = "Olovni o'chirish uchun bosing!";
  } else {
    container.setAttribute("class", "container");
    btn.textContent = "Olov uchun meni bosing!";
  }
});
