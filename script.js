const myWorkElement = document.querySelector(".my-work");

for (let index = 0; index < 5; index++) {
  const projectNode = document.getElementsByClassName("project")[0];
  const clone = projectNode.cloneNode(true);

  myWorkElement.appendChild(clone);
}
