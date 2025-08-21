// Salin Nomor
function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(err => {
    console.error("Gagal menyalin: ", err);
  });
}

// Notifikasi Toast
function showToast() {
  const toast = document.getElementById("toast");
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2500);
}

// Kontrol Musik
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️ Pause";
  } else {
    music.pause();
    musicBtn.textContent = "▶️ Play";
  }
}

// Paksa autoplay musik tanpa delay
window.addEventListener("DOMContentLoaded", () => {
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      music.muted = true;
      music.play();
      setTimeout(() => {
        music.muted = false;
      }, 200);
    });
  }
});

// Paksa autoplay musik tanpa delay
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");

  // coba play otomatis
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // jika gagal karena policy browser, mute lalu play
      music.muted = true;
      music.play();
      setTimeout(() => {
        music.muted = false; // unmute setelah beberapa ms
      }, 200);
    });
  }
});