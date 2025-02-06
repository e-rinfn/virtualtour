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
    "firstScene": "situgede-1",
    "sceneFadeDuration": 1000,
    "showFullscreenCtrl": false,
    "autoRotate": -10,
},
    "scenes": {
        "situgede-1": {
            "panorama": "../../img/situ-gede/situgede-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 7.01, 
                    "yaw": 14.32,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-persimpangan",
                    "targetYaw": 30
                }
            ]
        },
        "situgede-persimpangan": {
            "panorama": "../../img/situ-gede/situgede-persimpangan.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -9.74,
                    "yaw": 172.22,
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-1",
                    "targetYaw": 120
                },
                {
                    "pitch": -3.11, 
                    "yaw": 66.63,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-1",
                    "targetYaw": 30
                },
                {
                    "pitch": -1.27, 
                    "yaw": -53.16,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-1",
                    "targetYaw": 30
                }
            ]
        },

        "situgede-kekanan-1": {
            "panorama": "../../img/situ-gede/situgede-kekanan-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -1.16, 
                    "yaw": -100.84,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-persimpangan",
                    "targetYaw": 30
                },
                {
                    "pitch": 0.45, 
                    "yaw": 98.70,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-2",
                    "targetYaw": 30
                },
                {
                    "pitch": 19.65,
                    "yaw": 168.46,
                    "type": "info",
                    "text": "Informasi",
                    "clickHandlerFunc": showModal,
                    "clickHandlerArgs": {
                        "title": "Informasi Wisata",
                        "content": "Ini adalah informasi tempat bersantai."
                    }
                }
            ]
        },
        "situgede-kekanan-2": {
            "panorama": "../../img/situ-gede/situgede-kekanan-2.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0.00, 
                    "yaw": -7.22,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-1",
                    "targetYaw": 30
                },
                {
                    "pitch": -1.82, 
                    "yaw": 150.35,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-3",
                    "targetYaw": 30
                }
            ]
        }, 
        "situgede-kekanan-3": {
            "panorama": "../../img/situ-gede/situgede-kekanan-3.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -0.71, 
                    "yaw": -19.72,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-2",
                    "targetYaw": 30
                },   
                {
                    "pitch": -1.41, 
                    "yaw": 2.04,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-4",
                    "targetYaw": 30
                },
                {
                    "pitch": 0.01, 
                    "yaw": 78.31,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-5",
                    "targetYaw": 30
                }                       
            ]
        },
        "situgede-kekanan-4": {
            "panorama": "../../img/situ-gede/situgede-kekanan-4.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -6.19, 
                    "yaw": -48.33,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-2",
                    "targetYaw": 30
                }, 
                {
                    "pitch": -2.31, 
                    "yaw": -158.33,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-3",
                    "targetYaw": 30
                },   
                {
                    "pitch": -0.00, 
                    "yaw": 143.86,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-5",
                    "targetYaw": 30
                }                     
            ]
        },
        "situgede-kekanan-5": {
            "panorama": "../../img/situ-gede/situgede-kekanan-5.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -1.85, 
                    "yaw": 172.45,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-3",
                    "targetYaw": 30
                },   
                {
                    "pitch": -2.06, 
                    "yaw": -157.20,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekanan-4",
                    "targetYaw": 30
                }                     
            ]
        },

        "situgede-kekiri-1": {
            "panorama": "../../img/situ-gede/situgede-kekiri-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -1.15, 
                    "yaw": 112.08,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-persimpangan",
                    "targetYaw": 30
                },   
                {
                    "pitch": -1.57, 
                    "yaw": -111.41,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-2",
                    "targetYaw": 30
                }                     
            ]
        },
        "situgede-kekiri-2": {
            "panorama": "../../img/situ-gede/situgede-kekiri-2.png",
            "autoLoad": true,
            "yaw": 5,
            "hotSpots": [
                {
                    "pitch": -0.13, 
                    "yaw": 69.48,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-1",
                    "targetYaw": 30
                },   
                {
                    "pitch": -1.27, 
                    "yaw": -87.36,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-3",
                    "targetYaw": 30
                }                     
            ]
        },
        "situgede-kekiri-3": {
            "panorama": "../../img/situ-gede/situgede-kekiri-3.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -2.72, 
                    "yaw": 94.25,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-2",
                    "targetYaw": 30
                },   
                {
                    "pitch": -2.17, 
                    "yaw": -94.90,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-4",
                    "targetYaw": 30
                }                     
            ]
        },
        "situgede-kekiri-4": {
            "panorama": "../../img/situ-gede/situgede-kekiri-4.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -3.34, 
                    "yaw": 87.15,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-3",
                    "targetYaw": 30
                },   
                {
                    "pitch": -0.23, 
                    "yaw": -102.06,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-5",
                    "targetYaw": 30
                }                     
            ]
        },
        "situgede-kekiri-5": {
            "panorama": "../../img/situ-gede/situgede-kekiri-5.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -4.39, 
                    "yaw": 103.37,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-4",
                    "targetYaw": 30
                },   
                {
                    "pitch": -2.42, 
                    "yaw": -125.92,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kekiri-6",
                    "targetYaw": 30
                }                     
            ]
        },
        "situgede-kekiri-6": {
            "panorama": "../../img/situ-gede/situgede-kekiri-6.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -1.88, 
                    "yaw": 78.75,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "situgede-kiri-5",
                    "targetYaw": 30
                }                     
            ]
        },            
    }
    
});