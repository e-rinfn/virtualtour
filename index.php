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
                    <a class="nav-link text-white" href="google.com"><i class="bi bi-lightbulb"></i> - Petunjuk Penggunaan</a>
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link text-white" href="index.php"><i class="bi bi-info-circle"></i> - Tentang</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Cards Section -->
<div class="container my-3">

<!-- Form Pencarian -->
<div class="search-bar">
    <input type="text" class="search-input" id="searchBar" placeholder="Cari Objek Wisata..." oninput="filterCards()">
</div>

<br>
<div class="row row-cols-1 row-cols-md-3 g-4">

        <!-- Card 1 -->
        <div class="col">
            <div class="card h-100" data-name="Bukit Panyangrayan">
                <img src="thumbnail/Thumbnail Bukit Panyangrayan.jpg" class="card-img-top" alt="Image 1">
                <div class="card-body">
                    <h5 class="card-title">Bukit Panyangrayan</h5>
                    <p class="card-text">
                    Bukit Panyangrayan adalah salah satu objek wisata alam unggulan di Tasikmalaya yang menawarkan 
                    panorama indah dari ketinggian. Terletak di kawasan pegunungan yang dikelilingi pepohonan hijau, 
                    Bukit Panyangrayan menjadi destinasi favorit bagi pecinta alam dan para pencari ketenangan. Daya 
                    tarik utama dari Bukit Panyangrayan adalah pemandangan menakjubkan yang membentang sejauh mata 
                    memandang.
                    </p>
                </div>
                <div class="card-footer">
                    <a href="informasi-bukit-panyangrayan.php" class="btn">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="col">
            <div class="card h-100" data-name="Arga Hotsprings">
                <img src="thumbnail/Thumbnail Arga Hotsprings.jpg" class="card-img-top" alt="Image 2">
                <div class="card-body">
                    <h5 class="card-title">Arga Hotsprings</h5>
                    <p class="card-text">
                    Pemandian Air Panas Arga Hotsprings adalah destinasi wisata alam di Tasikmalaya yang menawarkan 
                    pengalaman relaksasi dengan suasana asri dan menenangkan. Terletak di kawasan perbukitan yang sejuk, 
                    lokasi ini memadukan keindahan alam dengan manfaat kesehatan dari sumber air panas alami. Pengunjung 
                    dapat menikmati berendam di kolam air panas yang bersih dan terjaga suhunya.
                    </p>
                </div>
                <div class="card-footer">
                    <a href="informasi-arga-hotsprings.php" class="btn">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>
        <!-- Card 3 -->
        <div class="col">
            <div class="card h-100" data-name="Situ Gede">
                <img src="thumbnail/Thumbnail Situ Gede.jpg" class="card-img-top" alt="Image 3">
                <div class="card-body">
                    <h5 class="card-title">Situ Gede (COMING SOON)</h5>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="btn">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>
        <!-- Card 4 -->
        <div class="col">
            <div class="card h-100" data-name="Bukit Kacapi">
                <img src="thumbnail/Thumbnail Bukit Kacapi.jpg" class="card-img-top" alt="Image 4">
                <div class="card-body">
                    <h5 class="card-title">Bukit Kacapi (COMING SOON)</h5>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>
        <!-- Card 5 -->
        <div class="col">
            <div class="card h-100" data-name="Curug Cimanintin">
                <img src="thumbnail/Thumbnail Curug Cimanintin.jpg" class="card-img-top" alt="Image 5">
                <div class="card-body">
                    <h5 class="card-title">Curug Cimanintin (COMING SOON)</h5>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>
        <!-- Card 6 -->
        <div class="col">
            <div class="card h-100" data-name="Pangangonan Hills">
                <img src="thumbnail/Thumbnail Pangangonan Hills.jpg" class="card-img-top" alt="Image 6">
                <div class="card-body">
                    <h5 class="card-title">Pangangonan Hills (COMING SOON)</h5>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn">Lihat Selengkapnya</a>
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

<script>
        function filterCards() {
            var searchValue = document.getElementById('searchBar').value.toLowerCase();
            var cards = document.querySelectorAll('.card');

            cards.forEach(function (card) {
                var cardTitle = card.getAttribute('data-name').toLowerCase();
                if (cardTitle.includes(searchValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
</script>

<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker terdaftar:', reg.scope))
            .catch(err => console.log('Service Worker gagal:', err));
        });
    }
</script>


</body>
</html>
