// Assets centralizados para MAPEA
// Este archivo centraliza todas las referencias a assets para mejor mantenibilidad

// Backgrounds
import tropicalJungle from '../assets/backgrounds/tropical-jungle.jpeg';
import businessLandscape from '../assets/backgrounds/business-landscape.jpeg';
import additionalLandscape from '../assets/backgrounds/additional-landscape.jpeg';
import missionBG from '../assets/backgrounds/QUEBRADA.jpg'
import clientBG from '../assets/backgrounds/true_clients_bg.jpeg'
import trueMissionBG from '../assets/backgrounds/mission_bg.jpg'
import contactVideo from '../assets/videos/contact_bg_video.mp4'

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

//services cards icons
import card1Icon from '../assets/services/icons/service_card_icon_1.png'
import card2Icon from '../assets/services/icons/service_card_icon_2.png'
import card3Icon from '../assets/services/icons/service_card_icon_3.png'
import card4Icon from '../assets/services/icons/service_card_icon_4.png'


// Assets organizados por categoría
export const ASSETS = {
  // Backgrounds para secciones
  backgrounds: {
    tropicalJungle,
    businessLandscape,
    additionalLandscape,
    missionBG,
    clientBG,
    trueMissionBG
  },

  ///home/ethan/Desktop/HERSO/Mapea-forked/mapea/src/assets/backgrounds/mission_bg.JPG
  
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
    contactVideo,
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
    card1Icon,
    card2Icon,
    card3Icon,
    card4Icon,
  },
} as const;