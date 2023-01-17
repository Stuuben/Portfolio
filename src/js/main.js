console.log("hej");

fetch("https://api.github.com/users/stuuben")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    handleData(data);
  });

function handleData(data) {
  let gitDiv = document.getElementById("gitInfo");
  let gitUL = document.createElement("ul");
  let articleRepo = document.getElementById("repo");
  console.log("lol");

  //

  let userName = document.createElement("h5");
  let gitRepos = document.createElement("li");
  let gitFollowers = document.createElement("li");
  let gitFollowing = document.createElement("li");
  let gitId = document.createElement("li");
  let gitUpdate = document.createElement("li");

  userName.innerHTML = data.login;
  gitRepos.innerHTML = "Public Repos: " + data.public_repos;
  gitFollowers.innerHTML = "Followers: " + data.followers;
  gitFollowing.innerHTML = "Following: " + data.following;
  gitId.innerHTML = "Id :" + data.id;
  gitUpdate.innerHTML = "Last Updated: " + data.updated_at;

  gitDiv.appendChild(userName);
  gitUL.appendChild(gitId);
  gitUL.appendChild(gitRepos);
  gitUL.appendChild(gitFollowers);
  gitUL.appendChild(gitFollowing);
  gitUL.appendChild(gitUpdate);
  gitDiv.appendChild(gitUL);
  articleRepo.appendChild(gitDiv);
}
