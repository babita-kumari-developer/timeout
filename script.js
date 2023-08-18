var btn = document.querySelector("button");
var istatus = document.querySelector("h4");
var flag = 0;
var timeController
btn.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "Request Send";
    istatus.style.color = "yellow"
    btn.innerHTML = "Pending.."
    timeController = setTimeout(function () {
      istatus.innerHTML = "Friends";
      istatus.style.color = "green";
      btn.innerHTML = "Remove";
    }, 3000);
    flag = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    clearTimeout(timeController)
    flag = 0;
  }
});
