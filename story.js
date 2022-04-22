function dis1_choice1_func() {
  document.getElementById("dis1_p1").style.display = "block";


  btn_hide1();

  // console.log('button1');
}

function dis1_choice2_func() {
  document.getElementById("dis1_p2").style.display = "block";

  btn_hide1();
}

function dis2_choice1_func() {
  document.getElementById("dis2_p1").style.display = "block";
  btn_hide2();
}

function dis2_choice2_func() {
  document.getElementById("dis2_p2").style.display = "block";
  btn_hide2();
}

const btn_hide1 = () => {
  document.getElementById("buttons1").style.display = "none";

  document.getElementById("buttons2").style.display = "block";
};

const btn_hide2 = () => {
  document.getElementById("buttons2").style.display = "none";
};
