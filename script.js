// تابع اعتبارسنجی ایمیل با استفاده از الگوی دقیق‌تر
function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim(); // حذف فاصله‌های اضافی

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailPattern.test(email);

  if (!isValid) {
    alert("لطفاً یک ایمیل معتبر وارد کنید.");
    emailInput.focus();
    return false;
  }

  alert("با تشکر از عضویت شما. به‌زودی هفته‌نامه‌های تیم به ایمیلتان ارسال می‌گردد.");
  return true;
}

// تابع برای باز و بسته کردن منو
function toggleMenu(menuIcon) {
  const menu = document.querySelector("header nav ul");
  menu.classList.toggle("show-menu");
  menuIcon.classList.toggle("active");
}

// اسلایدر
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function moveSlide(step) {
  slideIndex += step;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}

showSlide(slideIndex);
setInterval(() => moveSlide(1), 8000);

// پخش تک‌به‌تک صداها
const audios = document.querySelectorAll("audio");
audios.forEach(audio => {
  audio.addEventListener("play", () => {
    audios.forEach(a => {
      if (a !== audio) a.pause();
    });
  });
});

// جستجوی هنرمندان
function searchArtists() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".music-card");
  const boxes = document.querySelectorAll(".box-pesar");
  const titles = document.querySelectorAll(".aa");

  cards.forEach(card => card.style.display = "block");
  boxes.forEach(box => box.style.display = "block");
  titles.forEach(title => title.style.display = "block");

  if (input === "") return;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (!text.includes(input)) {
      card.style.display = "none";
    }
  });

  boxes.forEach(box => {
    const text = box.innerText.toLowerCase();
    if (!text.includes(input)) {
      box.style.display = "none";
    }
  });

  titles.forEach(title => {
    const text = title.innerText.toLowerCase();
    if (!text.includes(input)) {
      title.style.display = "none";
    }
  });
}
