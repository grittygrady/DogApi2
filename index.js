'use strict'

function displayDog(responseJson) {
  let selectedBreed = $("#breed").val();
  $(".result").removeClass("hidden");
  $("#your-dog").html(`<h2>Here's your ${selectedBreed}!</h2>`);
  $(".dogImage").replaceWith(`<img src="${responseJson.message}" class="dogImage">`);
}

function getBreedPic() {
  let selectedBreed = $("#breed").val();
  let breed = selectedBreed.toLowerCase();
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDog(responseJson))
    .catch(error => alert(`No breed by that name found. Try again!`));
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