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
                    <a class="nav-link text-white" href="petunjuk-penggunaan.php"><i class="bi bi-lightbulb"></i> - Petunjuk Penggunaan</a>
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
            <h3>Wisata Bukit Panyangrayan</h3>
            <img src="thumbnail/Thumbnail Bukit Panyangrayan.jpg" alt="Gambar Utama" class="main-image">
            <div class="description">
                <p>
                Bukit Panyangrayan adalah salah satu objek wisata alam unggulan di Tasikmalaya yang menawarkan 
                panorama indah dari ketinggian. Terletak di kawasan pegunungan yang dikelilingi pepohonan hijau, 
                Bukit Panyangrayan menjadi destinasi favorit bagi pecinta alam dan para pencari ketenangan. Daya 
                tarik utama dari Bukit Panyangrayan adalah pemandangan menakjubkan yang membentang sejauh mata 
                memandang. Dari puncak bukit, pengunjung dapat melihat hamparan sawah, perbukitan, dan pemukiman 
                yang terlihat seperti miniatur. Saat pagi hari, kabut tipis yang menyelimuti bukit menciptakan 
                suasana magis, sementara saat senja, langit yang berwarna keemasan menjadikan tempat ini sempurna 
                untuk menikmati matahari terbenam.
                </p>

                <p>
                Untuk mencapai puncak, pengunjung dapat menikmati perjalanan yang penuh tantangan namun tetap aman. 
                Jalur pendakian yang tersedia relatif mudah diakses dan dilengkapi dengan spot-spot foto yang 
                Instagramable, seperti gardu pandang berbentuk hati dan ayunan gantung yang menghadap ke lembah. 
                Fasilitas di Bukit Panyangrayan cukup memadai, termasuk area parkir, warung makanan ringan, dan 
                tempat istirahat. Pengunjung juga bisa berkemah di area yang telah disediakan, menikmati suasana 
                malam yang tenang dan langit penuh bintang. Bukit Panyangrayan adalah destinasi sempurna bagi Anda 
                yang ingin menikmati keindahan alam, mengabadikan momen berharga, atau sekadar melepas penat dari 
                rutinitas sehari-hari. Dengan suasana yang memikat, tempat ini layak masuk dalam daftar perjalanan 
                wisata Anda.    
                </p>

                <h4>Fasilitas :</h4>
                <ul>
                    <li>Area Berfoto</li>
                    <li>Mushola</li>
                    <li>Toilet</li>
                    <li>Warung Makan</li>
                    <li>Tempat Parkir</li>
                </ul>
            </div>
            <h4>Peta Lokasi :</h4>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1613508762257!2d108.17564907574575!3d-7.447394273390923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65f9e7f9a6500b%3A0xbad2ab4a702f44c1!2sBukit%20Panyangrayan!5e0!3m2!1sid!2sid!4v1736655647315!5m2!1sid!2sid" 
                    width="350px"
                    height="200px" 
                    style="border:0; margin-left: 10px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <!-- Tombol Bagikan -->
                <button id="shareBtn" class="btn btn-primary m-3 mb-5">Bagikan - <i class="bi bi-share"></i></button>
            </div>

            <!-- JavaScript untuk berbagi link -->
            <script>
            document.getElementById("shareBtn").addEventListener("click", function() {
                const currentURL = window.location.href; // Mendapatkan URL halaman saat ini
                const shareText = `Lihat lokasi ini di Virtual Tour: ${currentURL}`;
                
                if (navigator.share) {
                    // Gunakan Web Share API jika didukung
                    navigator.share({
                        title: document.title,
                        text: shareText,
                        url: currentURL
                    }).catch(err => console.log("Gagal berbagi:", err));
                } else {
                    // Fallback: Salin URL ke clipboard
                    navigator.clipboard.writeText(currentURL);
                    alert("Link telah disalin ke clipboard!");
                }
            });
            </script>

        <div class="col-md-4 vertical-images">
            <h3>Virtual Tour 360</h3>

            <!-- Card 1 -->
            <div class="card image-card" onclick="window.location.href='tour/bukit-panyangrayan/gerbang-utama.php';" style="cursor: pointer;">
                <img src="thumbnail/360/bukit-panyangrayan/Gerbang Utama.png" alt="Gambar 1">
                <div class="card-body">
                    <h6>Gerbang Utama</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/bukit-panyangrayan/persimpangan-utama.php';" style="cursor: pointer;">
                <img src="thumbnail/360/bukit-panyangrayan/Persimpangan Utama.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Persimpangan Utama</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/bukit-panyangrayan/panyangrayan-bawah.php';" style="cursor: pointer;">
                <img src="thumbnail/360/bukit-panyangrayan/Panyangrayan Bawah.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Panyangrayan Bawah</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/bukit-panyangrayan/panyangrayan-atas.php';" style="cursor: pointer;">
                <img src="thumbnail/360/bukit-panyangrayan/Panyangrayan Atas.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Panyangrayan Atas</h6>
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
