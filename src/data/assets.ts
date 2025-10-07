// Assets centralizados para MAPEA
// Este archivo centraliza todas las referencias a assets para mejor mantenibilidad

// Backgrounds
import tropicalJungle from '../assets/backgrounds/tropical-jungle.jpeg';
import businessLandscape from '../assets/backgrounds/business-landscape.jpeg';
import additionalLandscape from '../assets/backgrounds/additional-landscape.jpeg';
import missionBG from '../assets/backgrounds/true_landscape.jpg'
import clientBG from '../assets/backgrounds/true_clients_bg.jpeg'

// Logos
import mapeaLogoTransparent01 from '../assets/logos/mapea-logo-transparent-01.png';
import mapeaLogoTransparent03 from '../assets/logos/mapea-logo-transparent-03.png';
import mapeaLogoSingle from '../assets/logos/mapea-logo-single.png';
import mapeaTrueLogo from '../assets/logos/MAPEA TRASNPARENTE 01 cropped.png'
import mapeaTrueDarkLogo from '../assets/logos/dark_header_logo.png'
// Videos
import droneLidarDemo360p from '../assets/videos/drone-lidar-demo-360p.mp4';
import droneLidarDemo540p from '../assets/videos/drone-lidar-demo-540p.mp4';
// Services Images
import card1 from '../assets/services/services_card_1.png'
import card2 from '../assets/services/services_card_2.png'
import card3 from '../assets/services/services_card_3.png'
import card4 from '../assets/services/services_card_4.png'

// Assets organizados por categoría
export const ASSETS = {
  // Backgrounds para secciones
  backgrounds: {
    tropicalJungle,
    businessLandscape,
    additionalLandscape,
    missionBG,
    clientBG
  },
  
  // Logos de la empresa
  logos: {
    mapeaTransparent01: mapeaLogoTransparent01,
    mapeaTransparent03: mapeaLogoTransparent03,
    mapeaSingle: mapeaLogoSingle,
    mapeaTrueLogo: mapeaTrueLogo,
    mapeaTrueDarkLogo: mapeaTrueDarkLogo,
  },
  
  // Videos promocionales
  videos: {
    droneLidarDemo360p,
    droneLidarDemo540p,
  },
  
  // Modelos 3D (referencias a public)
  models: {
    droneModel: '/3d/dji_m350_with_zenmuse_l2_lidar_scanner.glb',
  },
  // Services Images
  services: {
    card1,
    card2,
    card3,
    card4,
  },
} as const;