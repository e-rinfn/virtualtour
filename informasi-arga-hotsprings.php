<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alam Tasikmalaya 360</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/informasi-wisata.css">

</head>
<body>

<!-- Header -->
<nav class="navbar navbar-expand-lg navbar-light bg-green">
    <div class="container">
        <!-- Logo -->
        <a class="navbar-brand text-white" href="index.php">Alam Tasikmalaya 360</a>

        <!-- Hamburger menu button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto"> <!-- Menambahkan ms-auto untuk memindahkan menu ke kanan -->
                <li class="nav-item text-center">
                    <a class="nav-link text-white" href="google.com"><i class="bi bi-lightbulb"></i> - Petunjuk Penggunaan</a>
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link text-white" href="index.php"><i class="bi bi-arrow-left"></i> Kembali</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container my-3">
    <div class="row">
        <!-- Bagian kiri: Gambar utama dan deskripsi -->
        <div class="col-md-8 mb-5">
            <h3>Wisata Pemandian Arga Hotsprings</h3>
            <img src="thumbnail/Thumbnail Arga Hotsprings.jpg" alt="Gambar Utama" class="main-image">
            <div class="description">
                <p>
                Pemandian Air Panas Arga Hotsprings adalah destinasi wisata alam di Tasikmalaya yang menawarkan 
                pengalaman relaksasi dengan suasana asri dan menenangkan. Terletak di kawasan perbukitan yang sejuk, 
                lokasi ini memadukan keindahan alam dengan manfaat kesehatan dari sumber air panas alami. Pengunjung 
                dapat menikmati berendam di kolam air panas yang bersih dan terjaga suhunya, ideal untuk melepas penat 
                dan meredakan otot yang tegang. Selain itu, fasilitas yang tersedia meliputi ruang ganti, area 
                bersantai, dan kedai makanan yang menyajikan hidangan khas lokal.
                </p>

                <p> 
                Salah satu daya tarik utama Arga Hotsprings adalah keindahan alam di sekitarnya. Dengan pepohonan 
                hijau yang rimbun dan udara yang segar, pengunjung dapat menikmati momen tenang jauh dari hiruk-pikuk 
                kota.Pemandian Air Panas Arga Hotsprings adalah pilihan sempurna bagi Anda yang ingin menikmati waktu 
                berkualitas bersama keluarga, teman, atau sekadar memanjakan diri. Pastikan untuk mengunjungi tempat 
                ini dan rasakan sendiri sensasi relaksasi di tengah keindahan alam Tasikmalaya.
                </p>

                <h4>Fasilitas :</h4>
                <ul>
                    <li>Pemandian Air Panas</li>
                    <li>Mushola</li>
                    <li>Toilet</li>
                    <li>Warung Makan</li>
                    <li>Tempat Parkir</li>
                </ul>
            </div>
            <h4>Peta Lokasi :</h4>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2266043503623!2d108.10061517574294!3d-7.2149721708412144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4d584fd2ccdd%3A0x78c1a1c5e607172d!2sWisata%20Alam%20Arga%20Hot%20Springs%20Desa%20Wisata%20Sundakerta!5e0!3m2!1sid!2sid!4v1737418037851!5m2!1sid!2sid" 
                width="350px"
                height="200px" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>        
        </div>

        <div class="col-md-4 vertical-images">
            <h3>Virtual Tour 360</h3>

            <!-- Card 1 -->
            <div class="card image-card" onclick="window.location.href='tour/arga-hotsprings/gerbang-utama.php';" style="cursor: pointer;">
                <img src="thumbnail/360/arga-hotsprings/Gerbang Utama.png" alt="Gambar 1">
                <div class="card-body">
                    <h6>Gerbang Utama</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/arga-hotsprings/persimpangan-utama.php';" style="cursor: pointer;">
                <img src="thumbnail/360/arga-hotsprings/Persimpangan Utama.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Persimpangan Utama</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/arga-hotsprings/area-panggung.php';" style="cursor: pointer;">
                <img src="thumbnail/360/arga-hotsprings/Area Panggung.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Area Panggung</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/arga-hotsprings/pemandian-air-panas.php';" style="cursor: pointer;">
                <img src="thumbnail/360/arga-hotsprings/Pemandian Air Panas.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Pemandian Air Panas</h6>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<footer>
    <p>&copy; 2025 Erin Fajrin Nugraha - Alam Tasikmalaya 360.</p>
</footer>


<!-- Bootstrap JS (for the hamburger menu) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
