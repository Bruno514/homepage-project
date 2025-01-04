const colors = [
  "#7C75CA",
  "#D5D5D5",
  "#5E8F4D",
  "#CA7599",
  "#4692D9",
  "#5E8F4D",
];

const projectsElement = document.getElementsByClassName("projects")[0];

for (let index = 0; index < 5; index++) {
  const projectNode = document.getElementsByClassName("project")[0];
  const projectImage = projectNode.querySelector(".project-image");
  projectImage.style.backgroundColor = colors[index];
  const clone = projectNode.cloneNode(true);

  projectsElement.appendChild(clone);
}
