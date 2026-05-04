// DARK / LIGHT MODE
function toggleMode() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "mode",
    document.body.classList.contains("light") ? "light" : "dark",
  );
}

// LOAD MODE
if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light");
}

// WORD COUNTER
function countWords() {
  let t = document.getElementById("text").value;
  let w = t ? t.trim().split(/\s+/) : [];
  document.getElementById("words").innerText = w.length;
  document.getElementById("chars").innerText = t.length;
}

// SAVE TEXT HISTORY (NEW v3 FEATURE)
function saveText() {
  let text = document.getElementById("text").value;
  localStorage.setItem("savedText", text);
  loadHistory();
}

// LOAD HISTORY
function loadHistory() {
  let saved = localStorage.getItem("savedText");
  let box = document.getElementById("history");

  if (saved && saved.length > 0) {
    box.innerHTML = "<div>" + saved + "</div>";
  }
}

// REVERSE TEXT
function reverseText() {
  let t = document.getElementById("rev").value;
  document.getElementById("revResult").innerText = t
    .split("")
    .reverse()
    .join("");
}

// PASSWORD
function generatePassword() {
  let len = document.getElementById("passLen").value;
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";
  let p = "";

  for (let i = 0; i < len; i++) {
    p += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("passResult").innerText = p;
}

// BMI
function calcBMI() {
  let w = document.getElementById("weight").value;
  let h = document.getElementById("height").value / 100;

  let bmi = (w / (h * h)).toFixed(2);

  document.getElementById("bmiResult").innerText = "BMI: " + bmi;
}

// SEARCH
function filterTools() {
  let v = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach((c) => {
    c.style.display = c.getAttribute("data-name").includes(v)
      ? "block"
      : "none";
  });
}

// INIT
loadHistory();
