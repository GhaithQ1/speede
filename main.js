let words_Easy = [
  "website",
  "server",
  "syntax",
  "equal",
  "style",
  "hosls",
  "fetch",
  "from",
  "states",
  "get",
  "set",
  "export",
  "import",
  "tool",
  "tools",
  "for",
  "about",
  "loop",
  "result",
];
let words_Normal = [
  "pointer",
  "operator",
  "constant",
  "declare",
  "package",
  "function",
  "condition",
  "decimal",
  "binary",
  "runtime",
  "methods",
  "fromies",
];
let words_Hard = [
  "Programmer",
  "Developer",
  "Application",
  "Argumeunt",
  "Compilation",
  "Structures",
  "DataType",
  "InterFace",
  "Declaration",
  "Implementation",
  "Parameters",
  "GreaterThan",
  "LessThan",
  "Attribute",
  "Expresstion",
  "FrameWork",
  "Asynchronous",
  "Synchrouous",
  "Processing",
  "Progress",
];

let levela = {
  Easy: 6,
  Normal: 5,
  Hard: 4,
};

let level = document.querySelector(".lvl");
let scend = document.querySelector(".scend");
let start = document.querySelector(".start");
let input = document.querySelector(".inp");
let woedes = document.querySelector(".woedes");
let time = document.querySelector(".sce span");
let tog = document.querySelector(".tog");
let total = document.querySelector(".total");
let test = document.querySelector(".test");
let finsh = document.querySelector(".finchGame");

let loop = document.querySelectorAll("ul li");
let ul = document.querySelector("ul");
start.addEventListener("click", (eo) => {
  eo.target.remove(start);
  input.focus();
  tests();
  ul.style.display = "none";
});

let Easy = document.querySelector(".Easy");
let Normal = document.querySelector(".Normal");
let Hard = document.querySelector(".Hard");

function type() {
  loop.forEach((ele) => {
    ele.addEventListener("click", (eo) => {
      loop.forEach((ele) => {
        ele.classList.remove("active");
      });
      eo.target.classList.add("active");

      if (eo.target.className == "Easy active") {
        let defuoltLevel = "Easy";
        let defuoltScend = levela[defuoltLevel];
        level.innerHTML = defuoltLevel;
        scend.innerHTML = defuoltScend;
        time.innerHTML = defuoltScend;
        total.innerHTML = words_Easy.length;
      } else if (eo.target.className == "Normal active") {
        let defuoltLevel = "Normal";
        let defuoltScend = levela[defuoltLevel];
        level.innerHTML = defuoltLevel;
        scend.innerHTML = defuoltScend;
        time.innerHTML = defuoltScend;
        total.innerHTML = words_Normal.length;
      } else if (eo.target.className == "Hard active") {
        let defuoltLevel = "Hard";
        let defuoltScend = levela[defuoltLevel];
        level.innerHTML = defuoltLevel;
        scend.innerHTML = defuoltScend;
        time.innerHTML = defuoltScend;
        total.innerHTML = words_Hard.length;
      }
    });
  });
}
type();
function tests() {
  if (Easy.className == "Easy active") {
    generet_Easy();
  } else if (Normal.className == "Normal active") {
    generet_Normal();
  } else if (Hard.className == "Hard active") {
    generet_Hard();
  }
}

function generet_Easy() {
  let random = words_Easy[Math.floor(Math.random() * words_Easy.length)];
  let index = words_Easy.indexOf(random);
  words_Easy.splice(index, 1);
  test.innerHTML = random;
  woedes.innerHTML = "";
  for (let i = 0; i < words_Easy.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words_Easy[i]);
    div.appendChild(txt);
    woedes.appendChild(div);
  }
  play_Easy();
}
function generet_Normal() {
  let random = words_Normal[Math.floor(Math.random() * words_Normal.length)];
  let index = words_Normal.indexOf(random);
  words_Normal.splice(index, 1);
  test.innerHTML = random;
  woedes.innerHTML = "";
  for (let i = 0; i < words_Normal.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words_Normal[i]);
    div.appendChild(txt);
    woedes.appendChild(div);
  }
  play_Normal();
}
function generet_Hard() {
  let random = words_Hard[Math.floor(Math.random() * words_Hard.length)];
  let index = words_Hard.indexOf(random);
  words_Hard.splice(index, 1);
  test.innerHTML = random;
  woedes.innerHTML = "";
  for (let i = 0; i < words_Hard.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words_Hard[i]);
    div.appendChild(txt);
    woedes.appendChild(div);
  }
  play_Hard();
}

function play_Easy() {
  time.innerHTML = defuoltScend;
  let starts = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML == 0) {
      clearInterval(starts);
      if (test.innerHTML === input.value) {
        input.value = "";
        tog.innerHTML++;
        if (words_Easy.length > 0) {
          generet_Easy();
        } else {
          let span = document.createElement("span");
          let txtSpan = document.createTextNode("Good Job");
          span.classList.add("good");
          span.appendChild(txtSpan);
          finsh.appendChild(span);
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      } else {
        let span = document.createElement("span");
        let txtSpan = document.createTextNode("Gmae Over");
        span.classList.add("bad");
        span.appendChild(txtSpan);
        finsh.appendChild(span);
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }, 1000);
}
function play_Normal() {
  time.innerHTML = defuoltScend;
  let starts = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML == 0) {
      clearInterval(starts);
      if (test.innerHTML === input.value) {
        input.value = "";
        tog.innerHTML++;
        if (words_Normal.length > 0) {
          generet_Normal();
        } else {
          let span = document.createElement("span");
          let txtSpan = document.createTextNode("Good Job");
          span.classList.add("good");
          span.appendChild(txtSpan);
          finsh.appendChild(span);
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      } else {
        let span = document.createElement("span");
        let txtSpan = document.createTextNode("Gmae Over");
        span.classList.add("bad");
        span.appendChild(txtSpan);
        finsh.appendChild(span);
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }, 1000);
}
function play_Hard() {
  time.innerHTML = defuoltScend;
  let starts = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML == 0) {
      clearInterval(starts);
      if (test.innerHTML === input.value) {
        input.value = "";
        tog.innerHTML++;
        if (words_Hard.length > 0) {
          generet_Hard();
        } else {
          let span = document.createElement("span");
          let txtSpan = document.createTextNode("Good Job");
          span.classList.add("good");
          span.appendChild(txtSpan);
          finsh.appendChild(span);
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      } else {
        let span = document.createElement("span");
        let txtSpan = document.createTextNode("Gmae Over");
        span.classList.add("bad");
        span.appendChild(txtSpan);
        finsh.appendChild(span);
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }, 1000);
}
let defuoltLevel = "Easy";
let defuoltScend = levela[defuoltLevel];
level.innerHTML = defuoltLevel;
scend.innerHTML = defuoltScend;
time.innerHTML = defuoltScend;
total.innerHTML = words_Easy.length;
