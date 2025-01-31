// Menu toggle function
function toggleMenu() {
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('hidden');
}

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    const menu = document.getElementById('menuItems');
    const button = document.getElementById('hamburgerButton');

    // Check if the click is outside the menu and button
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

function selectMenu(scene) {
    changeScene(scene); // Panggil fungsi perubahan scene
    const menu = document.getElementById('menuItems');
    menu.classList.add('hidden'); // Sembunyikan menu setelah memilih opsi
}

function changeScene(scene) {
    console.log('Changing scene to:', scene); // Ganti dengan logika Anda
    alert(`Mengubah lokasi ke: ${scene}`);
}

// Function to show modal
function showModal(_, args) {
    document.getElementById("modalTitle").innerText = args.title;
    document.getElementById("modalContent").innerText = args.content;
    $('#infoModal').modal('show'); // Menampilkan modal
}

// Function to change scene based on dropdown selection
function changeScene(sceneId) {
    if (sceneId) {
        viewer.loadScene(sceneId);
    }
}

// Event listener untuk menyesuaikan hfov saat layar berubah ukuran
window.addEventListener('resize', () => {
    const newHfov = isMobile() ? 80 : 100; // Atur hfov baru berdasarkan ukuran layar
    const newMinHfov = isMobile() ? 60 : 80;
    const newMaxHfov = isMobile() ? 100 : 120;

    // Perbarui properti viewer
    viewer.setHfov(newHfov);
    viewer.setMinHfov(newMinHfov);
    viewer.setMaxHfov(newMaxHfov);
});