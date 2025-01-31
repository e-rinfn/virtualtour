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
    "firstScene": "arga-5",
    "sceneFadeDuration": 1000,
    "showFullscreenCtrl": false,
},
    "scenes": {
        "arga-1": {
            "panorama": "../../img/arga-hotsprings/arga-1.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 2.52, 
                    "yaw": 146.64,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-2",
                    "targetYaw": 30
                },
                {
                    "pitch": -5.00, 
                    "yaw": -60.61,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-3",
                    "targetYaw": 30
                }

            ]
        },
        "arga-2": {
            "panorama": "../../img/arga-hotsprings/arga-2.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -14.69,
                    "yaw": 89.52,
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-1",
                    "targetYaw": 120
                }
            ]
        },
        "arga-3": {
            "panorama": "../../img/arga-hotsprings/arga-3.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0.05, 
                    "yaw": 80.31,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-1",
                    "targetYaw": 30
                },
                {
                    "pitch": -5.58, 
                    "yaw": -85.89,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-4",
                    "targetYaw": 30
                }
            ]
        },
        "arga-4": {
            "panorama": "../../img/arga-hotsprings/arga-4.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -3.78, 
                    "yaw": 160.53,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-3",
                    "targetYaw": 30
                },
                {
                    "pitch": -3.61, 
                    "yaw": 21.45,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-6",
                    "targetYaw": 30
                },
                {
                    "pitch": -4.31, 
                    "yaw": 59.77,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-5",
                    "targetYaw": 30
                },
                {
                    "pitch": -3.64, 
                    "yaw": -95.98,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-7",
                    "targetYaw": 30
                }
            ]
        },
        "arga-5": {
            "panorama": "../../img/arga-hotsprings/arga-5.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 1.20, 
                    "yaw": 144.89,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-4",
                    "targetYaw": 30
                },
                {
                    "pitch": 3.57, 
                    "yaw": -145.92,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-6",
                    "targetYaw": 30
                }
            ]
        },
        "arga-6": {
            "panorama": "../../img/arga-hotsprings/arga-6.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -1.70, 
                    "yaw": -76.78,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-4",
                    "targetYaw": 30
                },
                {
                    "pitch": -2.37, 
                    "yaw": -142.04,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-5",
                    "targetYaw": 30
                }
            ]
        },
        "arga-7": {
            "panorama": "../../img/arga-hotsprings/arga-7.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 18.60, 
                    "yaw": -99.66,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-4",
                    "targetYaw": 30
                },
                {
                    "pitch": -10.15, 
                    "yaw": 118.21,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-8",
                    "targetYaw": 30
                }
            ]
        },
        "arga-8": {
            "panorama": "../../img/arga-hotsprings/arga-8.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0.21, 
                    "yaw": 20.80,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-7",
                    "targetYaw": 30
                },
                {
                    "pitch": 7.31, 
                    "yaw": 98.87,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-9",
                    "targetYaw": 30
                }
            ]
        },
        "arga-9": {
            "panorama": "../../img/arga-hotsprings/arga-9.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -14.16, 
                    "yaw": -7.92,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-8",
                    "targetYaw": 30
                },
                {
                    "pitch": -0.04, 
                    "yaw": -130.33,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-10",
                    "targetYaw": 30
                }
            ]
        },
        "arga-10": {
            "panorama": "../../img/arga-hotsprings/arga-10.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -6.45, 
                    "yaw": 61.24,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-9",
                    "targetYaw": 30
                },
                {
                    "pitch": 0.06, 
                    "yaw": -57.28,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-11",
                    "targetYaw": 30
                }
            ]
        },
        "arga-11": {
            "panorama": "../../img/arga-hotsprings/arga-11.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -7.99, 
                    "yaw": 126.13,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-10",
                    "targetYaw": 30
                },
                {
                    "pitch": -0.61, 
                    "yaw": -31.94,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-12",
                    "targetYaw": 30
                }
            ]
        },
        "arga-12": {
            "panorama": "../../img/arga-hotsprings/arga-12.png",
            "autoLoad": true,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": -15.04, 
                    "yaw": 43.36,  
                    "type": "scene",
                    "text": "Maju",
                    "sceneId": "arga-11",
                    "targetYaw": 30
                }
            ]
        },
                    
    }
    
});