const nav = document.querySelector(".header");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 20) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark"); 
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});


// Mengambil elemen-elemen yang dibutuhkan
const pricingSection = document.querySelector('.pricing-section');
const modal = document.getElementById('cart-modal');
const closeBtn = document.querySelector('.close-btn');
const packageDisplay = document.getElementById('package-name');


const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
};

// Event Delegation: Menangani semua klik tombol 'Tambahkan Keranjang'
pricingSection.addEventListener('click', (event) => {
    const button = event.target.closest('.button');

    // Cek apakah yang diklik adalah tombol dengan class 'button'
    if (button) {
        const packageName = button.getAttribute('data-package');
        
        // Tampilkan nama paket dan buka modal
        packageDisplay.textContent = packageName;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Non-aktifkan scrolling body
    }
});

// Event Listener untuk menutup modal
closeBtn.addEventListener('click', closeModal);

// Event Listener untuk tombol "Lanjut Belanja" di dalam modal (menggunakan class)
document.querySelector('.btn-primary-modal').addEventListener('click', closeModal);

// Event Listener untuk menutup modal ketika mengklik di luar konten modal (backdrop)
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Inisialisasi AOS (Pastikan Anda tetap memuat library AOS di HTML)
AOS.init();