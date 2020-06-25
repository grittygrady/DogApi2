'use strict'

function displayDog(responseJson) {
  let selectedBreed = $("#breed").val();
  $(".result").removeClass("hidden");
  $("#your-dog").html(`<h2>Here's your ${selectedBreed}!</h2>`);
  $(".dogImage").replaceWith(`<img src="${responseJson.message}" class="dogImage">`);
}

function errorMessage(responseJson) {
  $("#js-error-msg").removeClass("hidden");
  $("#js-error-msg").text(`Something went wrong: ${responseJson.code}: ${responseJson.message}`);
}

function getBreedPic() {
  let selectedBreed = $("#breed").val();
  let breed = selectedBreed.toLowerCase().split(" ").reverse().join("-");
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "error") {
        errorMessage(responseJson);
      } else if (responseJson.status === "success") {
        displayDog(responseJson);
      }
    })
    .catch(error => alert(`Something went wrong, please try again.`));
  }


function formListener() {
  $("form").on("submit", function(event){
    event.preventDefault();
    let selectedBreed = $("#breed").val();
    $("#js-error-msg").empty();
    getBreedPic();
  });
}

function dogBreedPic() {
  console.log(`App started awaiting input!`);
  formListener();
}


$(dogBreedPic);