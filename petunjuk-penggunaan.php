<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Petunjuk Pengguna - Virtual Tour Wisata</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/index.css">

    <!-- Manifest -->
    <link rel="manifest" href="manifest.json">
    
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
                    <a class="nav-link text-white" href="javascript:window.history.back();"><i class="bi bi-arrow-left"></i> Kembali</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container my-3">
    <h1>Petunjuk Penggunaan</h1>
    <br>

    <h3>1. Akses Website</h3>
    <p>
        Buka browser dan kunjungi website virtual tour 
        <a href="index.php">Alam Tasikmalaya 360</a>.
    </p>
    <p>
        Setelah masuk ke website, pengguna dapat melihat daftar objek wisata yang tersedia.  
        Pilih objek wisata yang ingin dijelajahi dengan menekan tombol <strong>"Lihat Selengkapnya"</strong>.
    </p>
    <p>
        Untuk memulai eksplorasi, klik gambar thumbnail dari lokasi yang ingin dijelajahi dalam tampilan virtual 360 derajat.
    </p>

    <h3>2. Navigasi dalam Virtual Tour</h3>
    <ol>
        <li>Gunakan mouse atau layar sentuh untuk menggeser tampilan dan melihat ke segala arah.</li>
        <li>Klik ikon <strong>hotspot</strong> berbentuk panah untuk berpindah ke lokasi lain dalam tur.</li>
        <li>Gunakan fitur zoom dengan mencubit layar (pinch) atau menggulir (scroll) menggunakan mouse untuk memperbesar atau memperkecil tampilan.</li>
    </ol>

    <h3>3. Informasi Objek Wisata</h3>
    <p>
        Klik ikon informasi (<strong>"i"</strong>) yang muncul di layar untuk melihat deskripsi dan detail tentang objek wisata yang sedang dijelajahi.
    </p>    
</div>
    

<!-- Bootstrap JS (for the hamburger menu) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
