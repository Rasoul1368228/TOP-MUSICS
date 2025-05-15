 // تابع اعتبارسنجی ایمیل با استفاده از الگوی دقیق‌تر
function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim(); // حذف فاصله‌های اضافی

  // الگوی پیشرفته‌تر برای بررسی ساختار ایمیل
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // بررسی تطابق ایمیل با الگو
  const isValid = emailPattern.test(email);

  if (!isValid) {
    alert("لطفاً یک ایمیل معتبر وارد کنید.");
    emailInput.focus(); // تمرکز دوباره روی فیلد ایمیل
    return false;
  }

  alert("با تشکر از عضویت شما بزودی هفته نامه های تیم به ایمیلتان ارسال می گردد");

  return true;
}

// تابع برای باز و بسته کردن منو
function toggleMenu(menuIcon) {
  const menu = document.querySelector("header nav ul"); // پیدا کردن منو
  menu.classList.toggle("show-menu"); // اضافه یا حذف کردن کلاس 'show-menu'
  menuIcon.classList.toggle("active"); // تغییر ظاهر آیکون همبرگر
}

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

// نمایش اسلاید اول
showSlide(slideIndex);

// تغییر خودکار اسلاید هر 5 ثانیه
setInterval(() => moveSlide(1), 8000);


 const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.addEventListener("play", () => {
      audios.forEach(a => {
        if (a !== audio) a.pause();
      });
    });
  });
ش
  function searchArtists() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    
    // بخش‌های مختلفی که می‌خواهیم جستجو روی آن‌ها اعمال شود
    const cards = document.querySelectorAll(".music-card");
    const boxes = document.querySelectorAll(".box-pesar");
    const titles = document.querySelectorAll(".aa");

    // همه را نمایش می‌دهیم در ابتدا
    cards.forEach(card => card.style.display = "block");
    boxes.forEach(box => box.style.display = "block");
    titles.forEach(title => title.style.display = "block");

    if (input === "") return;

    // اگر چیزی وارد شده، فقط بخش‌هایی را نگه داریم که شامل آن هستند
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

