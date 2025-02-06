// Function untuk menentukan apakah perangkat adalah mobile
function isMobile() {
    return window.innerWidth <= 768; // Anggap perangkat dengan lebar <= 768px adalah mobile
}

// Konfigurasi awal berdasarkan ukuran layar
const initialHfov = isMobile() ? 80 : 100; // hfov lebih kecil di mobile untuk zoom lebih dekat
const minHfov = isMobile() ? 60 : 80;      // Zoom in lebih besar di mobile
const maxHfov = isMobile() ? 100 : 120;    // Zoom out lebih kecil di mobile

const viewer = pannellum.viewer('panorama', {
"default": {
    "compass": false, // Matikan kompas
    "hfov": initialHfov,
    "minHfov": minHfov,
    "maxHfov": maxHfov,
    // Kembalikan ke panyangrayan-3 setelah selesai
    "firstScene": "panyangrayan-3",
    "sceneFadeDuration": 1000,
    "showFullscreenCtrl": false,
    "autoRotate": -10,
    
},
    "scenes": {
        "panyangrayan-1": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 5, 
                    "yaw": -5,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-2",
                    "targetYaw": 90
                }
            ]
        },
        "panyangrayan-2": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-2.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-3",
                    "targetYaw": 15
                },
                {
                    "pitch": -5, 
                    "yaw": -90,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-1",
                    "targetYaw": 150
                }
            ]
        },
        "panyangrayan-3": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-3.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -17, 
                    "yaw": -5,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-4",
                    "targetYaw": -40
                },
                {
                    "pitch": -2, 
                    "yaw": 185,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-2",
                    "targetYaw": -95
                },
                {
                    "pitch": 0,
                    "yaw": 90,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-shop'></i>",
                        "content": "<p>Di kawasan wisata Bukit Panyangrayan, pengunjung dapat menemukan warung-warung yang menyajikan berbagai makanan dan minuman untuk melepas lelah setelah menikmati keindahan alam.</p><p>Warung ini menawarkan aneka hidangan tradisional khas daerah serta camilan ringan yang cocok dinikmati sembari bersantai menikmati panorama alam.</p><p>Selain makanan, beberapa warung juga menjual minuman segar seperti <i>es kelapa muda</i>, <i>kopi</i>, dan <i>teh hangat</i> yang pas untuk menemani momen bersantai.</p>\n<p>Dengan suasana yang asri dan pemandangan yang menyejukkan, warung-warung ini menjadi tempat istirahat yang nyaman bagi para wisatawan sebelum melanjutkan eksplorasi Bukit Panyangrayan.</p>"
                    }
                },
                {
                    "pitch": 8.34, 
                    "yaw": 125.96,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-1",
                    "targetYaw": 30
                },
                {
                    "pitch": -17.86, 
                    "yaw": 33.59,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-1",
                    "targetYaw": 30
                }
            ]
        },
        "panyangrayan-4": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-4.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 10, 
                    "yaw": 160,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-3",
                    "targetYaw": 30
                },
                {
                    "pitch": -8.00,
                    "yaw": -105.20,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-signpost'></i>",
                        "content": "<p>Kolam renang bagian atas di Bukit Panyangrayan menawarkan pengalaman unik bagi pengunjung yang ingin bersantai sembari menikmati pemandangan alam yang memukau.</p> <p>Terletak di area yang lebih tinggi, kolam renang ini memberikan sensasi berenang dengan latar belakang bukit dan pegunungan hijau yang indah. Desain kolam yang luas dan air yang jernih membuatnya menjadi tempat yang sempurna untuk relaksasi atau berenang bersama keluarga dan teman. Pengunjung dapat menikmati suasana yang tenang dan sejuk, ditambah dengan udara segar yang membuat setiap detik terasa menyegarkan.</p><p>Kolam renang bagian atas ini menjadi pilihan favorit bagi wisatawan yang mencari tempat untuk beristirahat dan melepas penat setelah berkeliling menikmati keindahan Bukit Panyangrayan.</p>"
                    }
                }
            ]
        },
        
        
        "panyangrayan-atas-1": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -18.61, 
                    "yaw": -78.41,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-3",
                    "targetYaw": 30
                },   
                {
                    "pitch": 6.54, 
                    "yaw": 119.22,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-2",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-2": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-2.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -15.03, 
                    "yaw": -87.15,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-3",
                    "targetYaw": 30
                }, 
                {
                    "pitch": -16.79, 
                    "yaw": -44.78,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-1",
                    "targetYaw": 30
                },   
                {
                    "pitch": 1.53, 
                    "yaw": 43.18,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-3",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-3": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-3.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -7.82, 
                    "yaw": -128.82,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-2",
                    "targetYaw": 30
                },   
                {
                    "pitch": 7.46, 
                    "yaw": 170.17,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-4",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-4": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-4.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -23.60, 
                    "yaw": -154.33,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-3",
                    "targetYaw": 30
                },   
                {
                    "pitch": 2.08, 
                    "yaw": -5.39,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-5",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-5": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-5.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -20.14, 
                    "yaw": 155.98,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-4",
                    "targetYaw": 30
                },   
                {
                    "pitch": 2.33, 
                    "yaw": -92.99,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-6",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-6": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-6.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -20.11, 
                    "yaw": 78.44,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-5",
                    "targetYaw": 30
                }, 
                {
                    "pitch": 7.90, 
                    "yaw": -67.94,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-7",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-7": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-7.png",
            "autoLoad": true,
            "yaw": -10,
            "hotSpots": [
                {
                    "pitch": -22.88, 
                    "yaw": 82.92,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-6",
                    "targetYaw": 30
                },  
                {
                    "pitch": -5.46,
                    "yaw": 137.92,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-droplet'></i>",
                        "content": "<p>Fasilitas toilet di Bukit Panyangrayan dirancang untuk kenyamanan pengunjung yang ingin beristirahat sejenak selama menikmati wisata alam. Terletak di beberapa titik strategis di area wisata, toilet ini selalu terjaga kebersihannya dan dilengkapi dengan fasilitas dasar yang memadai.</p><p>Toilet yang bersih dan nyaman ini memberikan kemudahan bagi pengunjung untuk menjaga kenyamanan selama berada di objek wisata. Fasilitas ini juga dilengkapi dengan sistem pembuangan yang efisien, memastikan kenyamanan dan kebersihan bagi semua pengunjung. Dengan lokasi yang mudah dijangkau, toilet di Bukit Panyangrayan menjadi salah satu fasilitas penting yang mendukung pengalaman wisata yang menyenangkan dan praktis.</p>"
                    }
                },  
                {
                    "pitch": 12.92, 
                    "yaw": -146.01,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-8",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-8": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-8.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -15.93, 
                    "yaw": -105.57,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-7",
                    "targetYaw": 30
                },   
                {
                    "pitch": 17.29, 
                    "yaw": 131.00,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-9",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-9": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-9.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -26.75, 
                    "yaw": -99.98,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-8",
                    "targetYaw": 30
                },   
                {
                    "pitch": -19.05,
                    "yaw": -72.87,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-moon'></i>",
                        "content": "<p>Mushola di Bukit Panyangrayan merupakan fasilitas yang disediakan untuk pengunjung yang ingin melaksanakan ibadah dengan tenang di tengah-tengah suasana alam yang asri. Terletak di lokasi yang strategis, mushola ini dilengkapi dengan berbagai fasilitas yang memadai untuk kenyamanan beribadah.</p><p>Dengan desain yang sederhana namun nyaman, mushola ini menawarkan tempat yang sejuk dan tenang, cocok bagi wisatawan yang ingin meluangkan waktu sejenak untuk beribadah. Fasilitas ini juga menjaga kebersihan dan ketertiban agar para pengunjung dapat melaksanakan ibadah dengan khusyuk. Mushola di Bukit Panyangrayan memberikan kenyamanan bagi pengunjung yang membutuhkan tempat ibadah selama berkunjung ke objek wisata ini.</p>"
                    }
                },
                {
                    "pitch": 9.83, 
                    "yaw": 110.96,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-10",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-10": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-10.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -23.62, 
                    "yaw": -132.03,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-9",
                    "targetYaw": -61.14
                },
                {
                    "pitch": 8.50,
                    "yaw": 70.58,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-signpost'></i>",
                        "content": "<p>Tempat bersantai di Bukit Panyangrayan menawarkan pengalaman relaksasi yang menyenangkan di tengah keindahan alam sekitar. Dikelilingi oleh pepohonan hijau dan udara segar, area ini cocok bagi pengunjung yang ingin menikmati waktu santai sambil menikmati pemandangan bukit yang mempesona.</p><p>Tersedia berbagai tempat duduk yang nyaman, baik berupa bangku taman maupun area terbuka yang luas, sehingga pengunjung dapat memilih tempat sesuai keinginan mereka. Suasana yang tenang dan sejuk menjadikan tempat ini ideal untuk bersantai, berbicara dengan teman, atau sekadar menikmati secangkir kopi sambil menikmati keindahan alam. Tempat bersantai di Bukit Panyangrayan menjadi pilihan sempurna untuk mengisi waktu luang setelah menjelajahi keindahan alam objek wisata ini.-</p>"
                    }
                },   
                {
                    "pitch": -2.38, 
                    "yaw": -13.68,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-11",
                    "targetYaw": -87.07
                }                     
            ]
        },
        "panyangrayan-atas-11": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-11.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -5.02, 
                    "yaw": 142.51,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-10",
                    "targetYaw": 30
                },   
                {
                    "pitch": 3.83, 
                    "yaw": 1.06,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-12",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-12": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-12.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -17.40, 
                    "yaw": -103.33,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-11",
                    "targetYaw": 30
                },   
                {
                    "pitch": -9.69, 
                    "yaw": -0.98,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-13",
                    "targetYaw": 30
                },  
                {
                    "pitch": -8.03, 
                    "yaw": 26.70,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-17",
                    "targetYaw": 30
                }                   
            ]
        },
        "panyangrayan-atas-13": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-13.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -0.22, 
                    "yaw": -86.72,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-12",
                    "targetYaw": 30
                },   
                {
                    "pitch": -1.98, 
                    "yaw": 80.51,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-14",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-14": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-14.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -3.70, 
                    "yaw": -104.36,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-13",
                    "targetYaw": 30
                },   
                {
                    "pitch": 1.20, 
                    "yaw": 75.63,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-15",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-15": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-15.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -10.99, 
                    "yaw": -146.52,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-14",
                    "targetYaw": 30
                },   
                {
                    "pitch": 2.27, 
                    "yaw": 44.19,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-16",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-16": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-16.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -25.52, 
                    "yaw": -0.57,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-15",
                    "targetYaw": 30
                },   
                {
                    "pitch": 10.36,
                    "yaw": -83.95,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-signpost'></i>",
                        "content": "<p>Bukit Panyangrayan menawarkan berbagai spot foto yang menakjubkan, cocok bagi pengunjung yang ingin mengabadikan momen mereka di tengah keindahan alam. Dengan pemandangan bukit yang hijau, langit biru yang cerah, dan berbagai elemen alam lainnya, tempat ini menyediakan latar belakang yang sempurna untuk foto-foto yang memukau.</p><p>Terdapat beberapa titik strategis yang dilengkapi dengan spot foto ikonik, seperti area dengan pemandangan luas, jembatan kayu, atau taman bunga yang menambah keindahan gambar. Pengunjung dapat menikmati momen berfoto dengan keluarga atau teman-teman, mendapatkan gambar yang indah yang akan menjadi kenangan tak terlupakan. Spot foto di Bukit Panyangrayan memastikan bahwa setiap kunjungan dapat dikenang dengan foto-foto yang menakjubkan.</p>"
                    }
                }                    
            ]
        },
        "panyangrayan-atas-17": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-17.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -0.47, 
                    "yaw": 1.55,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-12",
                    "targetYaw": 30
                },   
                {
                    "pitch": 5.30, 
                    "yaw": 178.99,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-18",
                    "targetYaw": 30
                }                     
            ]
        },
        "panyangrayan-atas-18": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-atas-18.png",
            "autoLoad": true,
            "yaw": -94.06,
            "hotSpots": [
                {
                    "pitch": -11.08, 
                    "yaw": 73.78,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-atas-17",
                    "targetYaw": 30
                }                     
            ]
        },


        "panyangrayan-bawah-1": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 2.85, 
                    "yaw": -128.45,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-3",
                    "targetYaw": 30
                },
                {
                    "pitch": -8.01, 
                    "yaw": 89.26,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-2",
                    "targetYaw": 30
                }                       
            ]
        },
        "panyangrayan-bawah-2": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-2.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -3.25, 
                    "yaw":  -90.02,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-1",
                    "targetYaw": 30
                },
                {
                    "pitch":  -1.07, 
                    "yaw": 86.22,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-3",
                    "targetYaw": 30
                }                       
            ]
        },
        "panyangrayan-bawah-3": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-3.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -8.18, 
                    "yaw": -96.06,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-2",
                    "targetYaw": 30
                },
                {
                    "pitch": -3.75, 
                    "yaw": 72.67,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-4",
                    "targetYaw": 30
                }                       
            ]
        },
        "panyangrayan-bawah-4": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-4.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -0.04, 
                    "yaw": -76.01,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-3",
                    "targetYaw": 30
                },
                {
                    "pitch": -3.08, 
                    "yaw": 77.59,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-5",
                    "targetYaw": 30
                }                       
            ]
        },
        "panyangrayan-bawah-5": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-5.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0.03, 
                    "yaw": -89.65,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-4",
                    "targetYaw": 30
                },
                {
                    "pitch": -4.85, 
                    "yaw": 68.44,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-6",
                    "targetYaw": 30
                }                       
            ]
        },
        "panyangrayan-bawah-6": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-6.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0.79, 
                    "yaw": -104.58,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-5",
                    "targetYaw": 30
                },
                {
                    "pitch": -6.80, 
                    "yaw": 94.86,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-7",
                    "targetYaw": 30
                }                       
            ]
        },
        "panyangrayan-bawah-7": {
            "panorama": "../../img/bukit-panyangrayan/panyangrayan-bawah-7.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -1.52, 
                    "yaw": -101.83,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "panyangrayan-bawah-6",
                    "targetYaw": 30
                },
                {
                    "pitch": -4.17,
                    "yaw": 66.37,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata - <i class='bi bi-signpost'></i>",
                        "content": "<p>Kolam renang bagian bawah di Bukit Panyangrayan menawarkan pengalaman unik bagi pengunjung yang ingin bersantai sembari menikmati pemandangan alam yang memukau.</p> <p>Terletak di area yang lebih tinggi, kolam renang ini memberikan sensasi berenang dengan latar belakang bukit dan pegunungan hijau yang indah. Desain kolam yang luas dan air yang jernih membuatnya menjadi tempat yang sempurna untuk relaksasi atau berenang bersama keluarga dan teman. Pengunjung dapat menikmati suasana yang tenang dan sejuk, ditambah dengan udara segar yang membuat setiap detik terasa menyegarkan.</p><p>Kolam renang bagian atas ini menjadi pilihan favorit bagi wisatawan yang mencari tempat untuk beristirahat dan melepas penat setelah berkeliling menikmati keindahan Bukit Panyangrayan.</p>"
                    }
                }                       
            ]
        },             
    }
    
});