fetch("https://api.github.com/users/stuuben/repos")
  .then((response) => response.json())
  .then((data) => {
    handleData(data);
  });

function handleData(data) {
  let articleRepo = document.getElementById("repo");
  let gitUL = document.createElement("ul");
  let gitDiv = document.getElementById("gitInfo");

  for (let i = 12; i < data.length; i++) {
    console.log(data);
    let createDiv = document.createElement("div");
    createDiv.classList.add("createDivRepo");
    createDiv.addEventListener("click", () => {
      document.location.href = "https://github.com/Stuuben/";
    });
    let repoName = document.createElement("h6");
    let repoDesc = document.createElement("p");
    let repoUrl = document.createElement("p");

    repoName.innerHTML = data[i].name;
    repoDesc.innerHTML = data[i].description;

    createDiv.appendChild(repoName);
    createDiv.appendChild(repoDesc);

    gitDiv.appendChild(createDiv);
  }
}

fetch("https://api.github.com/users/stuuben")
  .then((response) => response.json())
  .then((gitData) => {
    console.log(gitData.followers);
    let gitDiv = document.getElementById("gitData");

    let gitP = document.createElement("p");
    let gitP2 = document.createElement("p");
    gitP.classList.add("gitNumber");
    gitP2.classList.add("gitNumber");

    let textP = document.createElement("p");
    let textP2 = document.createElement("p");

    let divP = document.createElement("div");
    let divP2 = document.createElement("div");

    textP.innerHTML = "Public Repositories: ";
    textP2.innerHTML = "Followers: ";

    gitP.innerText += gitData.public_repos;
    gitP2.innerHTML += gitData.followers;

    divP.appendChild(textP);
    divP.appendChild(gitP);

    divP2.appendChild(textP2);
    divP2.appendChild(gitP2);

    gitDiv.appendChild(divP);
    gitDiv.appendChild(divP2);
  });

// name
// description
// url

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 1,
  effect: "cubes",
  slidesPerView: "auto",
  autoplay: {
    delay: 1000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
