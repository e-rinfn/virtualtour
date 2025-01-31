<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Virtual Tour Wisata Tasikmalaya</title>
    
    <!-- Link CDN CSS Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
    <!-- Link CDN CSS Pannellum -->
    <link rel="stylesheet" href="https://cdn.pannellum.org/2.5/pannellum.css">

    <!-- Link CDN JS Pannellum -->
    <script src="https://cdn.pannellum.org/2.5/pannellum.js"></script>

    <!-- Link CDN Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <!-- Link CSS Custom -->
    <link rel="stylesheet" href="../../css/tour.css">
</head>

<body>
    <div id="panorama-container">
        <div id="panorama"></div>
    </div>

    <div class="container mt-4">

        <!-- Tombol Kembali ke Index dan Pilih Lokasi -->
        <div class="d-flex justify-content-between align-items-center">
            <!-- Pilih Lokasi -->
            <div id="menu-overlay" class="p-2">
                <h5 class="text-center">Menu</h5>
                <div class="d-flex justify-content-between">
                    <a href="../../informasi-arga-hotsprings.php" class="btn bg-warning" style="margin-right: 1rem"><i class="bi bi-arrow-left"></i> Kembali</a>

                    <!-- Pilih lokasi -->
                    <div class="hamburger-menu">
                        <button id="hamburgerButton" onclick="toggleMenu()">☰ Pilih Lokasi</button>
                        <div id="menuItems" class="menu hidden">
                            <a href="#" onclick="selectMenu('arga-1')" class="menu-item">
                                <img src="../../thumbnail/360/arga-hotsprings/Gerbang Utama.png" alt="Gerbang Utama" class="menu-image">
                                <span>Gerbang Utama</span>
                            </a>
                            <a href="#" onclick="selectMenu('arga-4')" class="menu-item">
                                <img src="../../thumbnail/360/arga-hotsprings/Persimpangan Utama.png" alt="Persimpangan Utama" class="menu-image">
                                <span>Persimpangan Utama</span>
                            </a>
                            <a href="#" onclick="selectMenu('arga-5')" class="menu-item">
                                <img src="../../thumbnail/360/arga-hotsprings/Area Panggung.png" alt="Panyangrayan Bawah" class="menu-image">
                                <span>Area Panggung</span>
                            </a>
                            <a href="#" onclick="selectMenu('arga-12')" class="menu-item">
                                <img src="../../thumbnail/360/arga-hotsprings/Pemandian Air Panas.png" alt="Panyangrayan Atas" class="menu-image">
                                <span>Pemandian Air Panas</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div id="judul-overlay">
                <h5>Arga Hotsprings</h5>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitle">Informasi</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p id="modalContent">Konten informasi akan ditampilkan di sini.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Link JS Custom -->
        <script src="../../js/tour.js"></script>
        <script src="../../js/arga-hotsprings/area-panggung.js"></script>

        <!-- Link JS Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
</body>
</html>
