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
            <h3>Wisata Situ Gede</h3>
            <img src="thumbnail/Thumbnail Situ Gede.jpg" alt="Gambar Utama" class="main-image">
            <div class="description">
                <p>
                Situ Gede adalah salah satu objek wisata alam populer di Tasikmalaya yang menawarkan suasana 
                tenang dan panorama alam yang memikat. Berupa danau alami yang dikelilingi pepohonan rindang, 
                Situ Gede menjadi tempat ideal untuk melepas penat dan menikmati waktu berkualitas bersama keluarga 
                atau teman. Daya tarik utama Situ Gede adalah pemandangan danau yang luas dengan airnya yang jernih. 
                Pengunjung dapat menikmati aktivitas seperti naik perahu tradisional untuk mengelilingi danau, 
                memancing, atau sekadar duduk santai di tepi danau sambil menikmati hembusan angin sejuk. 
                Pada waktu tertentu, kabut tipis yang menyelimuti danau menciptakan suasana damai dan romantis.
                </p>

                <p>
                Fasilitas di Situ Gede cukup lengkap, termasuk area parkir, warung makanan dan minuman, tempat bermain 
                anak, serta gazebo untuk beristirahat. Bagi penggemar fotografi, danau ini juga menawarkan banyak spot 
                menarik, terutama saat matahari terbit atau terbenam. Keberadaan hutan kecil di sekitar Situ Gede 
                semakin menambah keindahan alamnya. Pengunjung bisa berjalan-jalan di jalur setapak yang mengelilingi 
                danau, menikmati udara segar sambil melihat berbagai flora dan fauna khas daerah ini. Situ Gede bukan 
                hanya tempat wisata, tetapi juga menjadi bagian dari kehidupan masyarakat sekitar, sering digunakan 
                untuk acara budaya, seperti festival dan pertemuan lokal. Dengan suasana yang asri dan ramah keluarga, 
                Situ Gede adalah destinasi wajib bagi siapa saja yang ingin merasakan keindahan alam Tasikmalaya.   
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.146530634689!2d108.1913060904533!3d-7.337436247992687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f570f45c10af7%3A0x77c006148a1592fc!2sSitu%20Gede%20Pintu%20Masuk!5e0!3m2!1sid!2sid!4v1738391205222!5m2!1sid!2sid" 
                width="350px"
                height="200px" 
                style="border:0;" 
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
            <div class="card image-card" onclick="window.location.href='tour/situ-gede/gerbang-utama.php';" style="cursor: pointer;">
                <img src="thumbnail/360/situ-gede/Gerbang Utama.png" alt="Gambar 1">
                <div class="card-body">
                    <h6>Gerbang Utama</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/situ-gede/persimpangan-utama.php';" style="cursor: pointer;">
                <img src="thumbnail/360/situ-gede/Persimpangan Utama.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Persimpangan Utama</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/situ-gede/situgede-kiri.php';" style="cursor: pointer;">
                <img src="thumbnail/360/situ-gede/Situgede Kekiri.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Kiri Dari Gerbang</h6>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card image-card" onclick="window.location.href='tour/situ-gede/situgede-kanan.php';" style="cursor: pointer;">
                <img src="thumbnail/360/situ-gede/Situgede Kekanan.png" alt="Gambar 2">
                <div class="card-body">
                    <h6>Kanan Dari Gerbang</h6>
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
