let num = 3;
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (window.matchMedia("(max-width: 990px)").matches) {
  num = 2;
}
if (window.matchMedia("(max-width: 768px)").matches) {
  num = 1;
}

new Swiper(".swiper", {
  slidesPerView: num,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value.match(mailformat)) {
    email.style.border = "unset";
    email.value = "";
    alertDiv.classList.add("d-none");
    liveToast.classList.add("show");
  } else {
    email.style.border = "1px solid red";
    alertDiv.classList.remove("d-none");
  }
});
