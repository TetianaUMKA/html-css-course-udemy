"strict";

const likeBtn = document.querySelector(".like-btn");

likeBtn.addEventListener("click", function () {
  likeBtn.textContent = "🥰";
  likeBtn.style.border = "1px solid transparent";
  likeBtn.style.boxShadow = "none";
});
