const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const quit_btn = info_box.querySelector(".questionnaire-buttons .quit");
const continue_btn = info_box.querySelector(".questionnaire-buttons .restart");
const questionnaire_box = document.querySelector(".questionnaire-box");

const option_list = document.querySelector(".option-list");

start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

quit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  questionnaire_box.classList.add("activeQuestionnaire");
  showQuestions(0);
  queCounter(1);
};

let que_count = 0;
let que_numb = 1;

const next_btn = questionnaire_box.querySelector(".next-btn");
const result_box = document.querySelector(".result-box");
const restart_questionnaire = result_box.querySelector(
  ".questionnaire-buttons .restart"
);
const quit_questionnaire = result_box.querySelector(
  ".questionnaire-buttons .quit"
);

quit_questionnaire.onclick = () => {
  window.location.reload();
};

next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    next_btn.style.display = "none";
  } else {
    console.log("questions completed");
    showResultBox();
  }
};

function showQuestions(index) {
  const que_text = document.querySelector(".que-text");
  que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let allOptions = option_list.children.length;

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.remove("selected");
  }

  answer.classList.add("selected");

  next_btn.style.display = "block";
}

function queCounter(index) {
  const bottom_ques_counter = questionnaire_box.querySelector(".total-que");
  let totalQuesCountTag =
    "<span><p>" +
    index +
    "</p>of<p>" +
    questions.length +
    "</p>Questions</span>";
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function showResultBox() {
  info_box.classList.remove("activeInfo");
  questionnaire_box.classList.remove("activeQuestionnaire");
  result_box.classList.add("activeResult");
}
