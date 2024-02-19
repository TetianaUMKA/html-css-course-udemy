"strict";

const likeBtn = document.querySelector(".like-btn");

likeBtn.addEventListener("click", function () {
  likeBtn.textContent = "🥰";
  likeBtn.style.border = "1px solid transparent";
  likeBtn.style.cursor = "auto";
  likeBtn.classList.remove("like-btn-hover");
  setTimeout(function () {
    likeBtn.setAttribute("disabled", "");
  }, 2000);

  console.log("ok");
});
