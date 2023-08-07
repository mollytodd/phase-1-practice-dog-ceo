//global variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

// fetch functions
function getAllDogImages(imgUrl) {
  return fetch(imgUrl).then((res) => res.json());
}

function getAllDogBreeds(breedURL) {
  return fetch(breedURL).then((res) => res.json());
}

function updateBreedList(filteredBreeds) {
  const dogBreedName = document.getElementById("dog-breeds");

  // Clear the previous list items
  while (dogBreedName.firstChild) {
    dogBreedName.removeChild(dogBreedName.firstChild);
  }

  // Append the filtered breeds to the list
  for (let breed of filteredBreeds) {
    const filteredListItem = document.createElement("li");
    filteredListItem.textContent = breed;
    dogBreedName.appendChild(filteredListItem);
    filteredListItem.addEventListener("click", function onClick(e) {
      // Change text color globally when a breed is clicked
      document.body.style.color = "darkblue";
    });
  }
}

// initializers
getAllDogImages(imgUrl).then((data) => {
  const imageDiv = document.querySelector("#dog-image-container");
  for (let i = 0; i < data.message.length; i++) {
    const img = document.createElement("img");
    img.src = data.message[i];
    imageDiv.append(img);
  }
});

getAllDogBreeds(breedUrl).then((data) => {
  const breedDropdown = document.getElementById("breed-dropdown");
  const breedNames = Object.keys(data.message);
  const allBreeds = breedNames.slice();

  // Initially update the breed list with all breeds
  updateBreedList(allBreeds);

  // Add event listener to the breed dropdown select element
  breedDropdown.addEventListener("change", function () {
    const selectedLetter = breedDropdown.value.toLowerCase();
    const filteredBreeds = selectedLetter
      ? filterByFirstLetter(allBreeds, selectedLetter)
      : allBreeds;
    updateBreedList(filteredBreeds);
  });
});
