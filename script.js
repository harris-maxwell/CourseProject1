let NoteArray = [];

let NoteObject = function (pData, pType, pPriority) {
    this.data = pData;
    this.type = pType;
    this.priority = pPriority;
};
var restaurants = [
  { name: "Crunch Coop test array", closingTime: "20:00:00" },
  { name: "Slammin Salmon test array", closingTime: "22:00:00" },
  { name: "What The Buckwheat? test array", closingTime: "21:00:00" }
];

let selectedType = "";

// code runs immediately
//================================================================
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("buttonAdd").addEventListener("click", function () {
    const newRestaurant = {
      name: document.getElementById("restaurantName").value,
      closingTime: document.getElementById("closingTimeInput").value
    };
    restaurants.push(newRestaurant);
    console.log(restaurants)
    // Clear inputs
    document.getElementById("restaurantName").value = "";
    document.getElementById("closingTimeInput").value = ""
    renderRestaurant(restaurants);
  });
});

/*
// runs  when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
        NoteArray.push ( new NoteObject(document.getElementById("dataInput").value, selectedType,
        document.getElementById("priorityInput").value ) );
        
        document.getElementById("dataInput").value = "";
        document.getElementById("priorityInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

});

*/
//======================================
// function defintions
function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    NoteArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = element.priority + ":  " + element.type + "   " + element.data;
        myul.appendChild(li);
    });
};
// Creating Changes for the branch

//making change due to VS code dumb editing.
// creating a restaurant array


  function renderRestaurant(restaurants)
  {
    //Creating a restaurant Class
    let restaurantContainer = document.querySelector("#new-restaurants");
    console.log(restaurants);
    //copying prof format for Creating an element from array 
    restaurants.forEach((restaurant) => {
        let restaurantDiv = document.createElement("div");
        restaurantDiv.classList.add("restaurant-saved");
        // Googling how to add a saved class 
        //copying for each item 
        let restaurantInfoDiv = document.createElement("div");
        restaurantInfoDiv.classList.add("restaurant-info");
        restaurantDiv.appendChild(restaurantInfoDiv);
      
        let restaurantNameDiv = document.createElement("div");
        restaurantNameDiv.classList.add("restaurant-name-saved");
        restaurantNameDiv.innerText = restaurant.name;
        restaurantInfoDiv.appendChild(restaurantNameDiv);
      
        let restaurantHoursDiv = document.createElement("div");
        restaurantHoursDiv.classList.add("restaurant-hours-saved");
        restaurantHoursDiv.innerText = `Closing Time: ${restaurant.closingTime}`;
        restaurantInfoDiv.appendChild(restaurantHoursDiv);
      
        let countdownDiv = document.createElement("div");
        countdownDiv.classList.add("restaurant-countdown");
        countdownDiv.setAttribute("data-time", restaurant.closingTime);
        restaurantDiv.appendChild(countdownDiv);
      //cheating here and appending it... Might not be right but hack and saw 
        restaurantContainer.appendChild(restaurantDiv);
    });
    console.log(restaurantContainer);
  }


  /// Resturants countdowns:
  
  let countdowns = document.querySelectorAll(".restaurant-countdown");
  countdowns.forEach((countdown) => {
    var now = new Date();
    let closingTime = new Date();
    let closingHours = parseInt(
      countdown.getAttribute("data-time").split(":")[0]
    );
    let closingMinutes = parseInt(
      countdown.getAttribute("data-time").split(":")[1]
    );
    let closingSeconds = parseInt(
      countdown.getAttribute("data-time").split(":")[2]
    );
    closingTime.setHours(closingHours, closingMinutes, closingSeconds);
  
    let timeRemaining = closingTime - new Date();
    let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    countdown.innerText = `${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  
    setInterval(() => {
      timeRemaining = closingTime - new Date();
      hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      countdown.innerText = `${hours
        .toString()
        .padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
  });


  // -------------Ratings JS----------
  let selectedRating = 0;
      const stars = document.querySelectorAll('.stars');
      for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function() {
          selectedRating = i + 1;
          highlightStars(selectedRating);
        });
        stars[i].addEventListener('mouseover', function() {
          highlightStars(i + 1);
        });
        stars[i].addEventListener('mouseout', function() {
          highlightStars(selectedRating);
        });
      }
      function highlightStars(rating) {
        for (let i = 0; i < stars.length; i++) {
          if (i < rating) {
            stars[i].classList.add('selected');
          } else {
            stars[i].classList.remove('selected');
          }
        }
        document.getElementById('result').innerHTML = `You rated us ${rating} stars.`;
      }
  