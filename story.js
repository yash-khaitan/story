function dis1_choice1_func() {
  document.getElementById("dis1_p1").style.display = "block";
  document.getElementById("dis1_p1").classList.add("opacity_animation");

  // document.getElementById("buttons2").classList.add("opacity_animation");

  btn_hide1();
  // console.log('button1');
}

function dis1_choice2_func() {
  document.getElementById("dis1_p2").style.display = "block";
  document.getElementById("dis1_p2").classList.add("opacity_animation");

  btn_hide1();
}
const btn_hide1 = () => {
  document.getElementById("buttons1").style.display = "none";

  document.getElementById("buttons2").style.display = "flex";
  document.getElementById("buttons2").classList.add("opacity_animation");
};

function dis2_choice1_func() {
  document.getElementById("dis2_p1").style.display = "block";
  document.getElementById("dis2_p1").classList.add("opacity_animation");
  btn_hide2();
}

function dis2_choice2_func() {
  document.getElementById("dis2_p2").style.display = "block";
  document.getElementById("dis2_p2").classList.add("opacity_animation");
  btn_hide2();
}

const btn_hide2 = () => {
  document.getElementById("buttons2").style.display = "none";
};
