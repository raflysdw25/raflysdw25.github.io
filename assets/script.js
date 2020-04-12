function openMenu(evt, menuName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.querySelector("#"+menuName).style.display = "block";
    evt.currentTarget.className += " active";
}


// like and dislike button
const likesButton = document.querySelector("#likesButton");
const dislikesButton = document.querySelector("#dislikesButton");
let likeCount = document.querySelector("#like-count");
let dislikeCount = document.querySelector("#dislike-count");



likesButton.addEventListener('click', function(event){
    likeCount.innerText++;
})

dislikesButton.addEventListener('click', function(event){
    dislikeCount.innerText++;
})