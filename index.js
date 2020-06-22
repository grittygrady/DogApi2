'use strict'

function displayDog(responseJson) {
  let selectedBreed = $("#breed").val();
  $(".result").removeClass("hidden");
  $("#your-dog").html(`<h2>Here's your ${selectedBreed}!</h2>`);
  $(".dogImage").replaceWith(`<img src="${responseJson.message}" class="dogImage">`);
}

function getBreedPic() {
  let selectedBreed = $("#breed").val();
  let breed = selectedBreed.toLowerCase().split(" ").reverse().join("-");
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "success") {
        displayDog(responseJson);
      } else {
        alert('No dog by that breed found, try again! Try using only the breed, not the sub-breed.')
      }
    })
    .catch(error => alert(`Something went wrong, please try again.`));
  }


function formListener() {
  $("form").on("submit", function(event){
    event.preventDefault();
    let selectedBreed = $("#breed").val();

    getBreedPic();
  });
}

function dogBreedPic() {
  console.log(`App started awaiting input!`);
  formListener();
}


$(dogBreedPic);