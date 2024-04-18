import { Injectable } from '@angular/core';
import { IGalleryItem } from '../interfaces/gallery-item';
import { text } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class ItemHolderService {
  constructor() { }
  searchText:string = ""
  protected ItemList : IGalleryItem[] = [
    {
      id:1,
      title: "Phanteks (PH-ES620PC_BK02 Enthoo Pro 2 Server Edition - Soporte de Placa Base SSI-EEB, 11 Ranuras PCI, 15 Posiciones de Ventilador (Panel Cerrado)",
      imgUrl:"https://m.media-amazon.com/images/I/81lhzIpYsjL._AC_SL1500_.jpg",
      price:3708,
      maker:"Phanteks",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"Case"  ,
      link:"",
      stock:3
    },
    {
      id:2,
      title: "Phanteks Enthoo Pro Tempered Glass Full-Tower Negro gabinete de computadora - Caja de Ordenador (Full-Tower, PC, Acero, Vidrio Templado, ATX,EATX,Micro-ATX,Mini-ITX, Negro, 19.3 cm)",
      imgUrl:"https://m.media-amazon.com/images/I/61E40kvT0xL._AC_SL1000_.jpg",
      price:3834,
      maker:"Phanteks",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"Case"  ,
      link:"",
      stock:5
    },
    {
      id:3,
      title: "Thermaltake Core Gaming carcasa de computadora, V71 TG E-ATX torre completa",
      imgUrl:"https://m.media-amazon.com/images/I/71WWDwHZLhL._AC_SL1300_.jpg",
      price:4416,
      maker:"Thermaltake",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"Case"  ,
      link:"",
      stock:1
    },
    {
      id:3,
      title: "Phanteks (PH-ES620PTG-DBK01 Torre Completa Enthoo Pro 2 - Malla de Tela de Alto Rendimiento, Vidrio Templado, Soporte de Sistema Dual/PSU, Almacenamiento masivo, iluminación Digital-RGB, Negro",
      imgUrl:"https://m.media-amazon.com/images/I/61gwYJ0piCL._AC_SL1280_.jpg",
      price:5397,
      maker:"Phanteks",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"Case"  ,
      link:"",
      stock:9
    },
    {
      id:4,
      title: "Nvidia",
      imgUrl:"https://m.media-amazon.com/images/I/61ram9dN+PL._AC_UL640_FMwebp_QL65_.jpg",
      price:0,
      maker:"Nvidia",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"GpuMaker"  ,
      link:"Maker",
      stock:3
    },
    {
      id:5,
      title: "AMD",
      imgUrl:"https://m.media-amazon.com/images/I/81-70VBUexL._AC_UL640_FMwebp_QL65_.jpg",
      price:0,
      maker:"AMD",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"GpuMaker"  ,
      link:"Maker",
      stock:3
    },
    {
      id:6,
      title: "Intel",
      imgUrl:"https://m.media-amazon.com/images/I/71sO2CZL1UL._AC_UL640_FMwebp_QL65_.jpg",
      price:0,
      maker:"Intel",
      metadata: {
        "Color": "Panel Cerrado"
      },
      description:"asdfasdfasdfasdf",
      type:"GpuMaker"  ,
      link:"Maker",
      stock:3
    },
    {
      id:7,
      title: "Ad",
      imgUrl:"https://images-na.ssl-images-amazon.com/images/G/33/kaiseki/img/gateway/100231_Kaiseki_GW__758x608._CB619051665_.jpg",
      price:0,
      maker:"Ad",
      metadata: {
      },
      description:"asdfasdfasdfasdf",
      type:"Ad"  ,
      link:"",
      stock:3
    },
    {
      id:8,
      title: "Tarjets Graficas",
      imgUrl:"https://m.media-amazon.com/images/I/71tduSp8ooL._AC_UY436_FMwebp_QL65_.jpg",
      price:0,
      maker:"GPU",
      metadata: {
      },
      description:"asdfasdfasdfasdf",
      type:"Categories"  ,
      link:"Category",
      stock:3
    },
    {
      id:7,
      title: "Discos de estado solido",
      imgUrl:"https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_UY436_FMwebp_QL65_.jpg",
      price:0,
      maker:"SSD",
      metadata: {
      },
      description:"asdfasdfasdfasdf",
      type:"Categories"  ,
      link:"",
      stock:3
    },
    {
      id:10,
      title: "Fuentes de poder",
      imgUrl:"https://m.media-amazon.com/images/I/81Lo+vS9QBL._AC_UY436_FMwebp_QL65_.jpg",
      price:0,
      maker:"PSU",
      metadata: {
      },
      description:"asdfasdfasdfasdf",
      type:"Categories"  ,
      link:"Category",
      stock:3
    },
    {
      id:11,
      title: "Procesadores",
      imgUrl:"https://m.media-amazon.com/images/I/71Gyox1aqRL._AC_UY436_FMwebp_QL65_.jpg",
      price:0,
      maker:"CPU",
      metadata: {
      },
      description:"asdfasdfasdfasdf",
      type:"Categories"  ,
      link:"Category",
      stock:3
    },
    {
      id:12,
      title: "MissionImposible",
      imgUrl:"https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2024/MISIO_2024_DashboardCard_758x608_POST_Final_noLocale_DOT7772._SY608_CB582766709_.jpg",
      price:0,
      maker:"Adss",
      metadata: {
      },
      description:"asdfasdfasdfasdf",
      type:"Adss"  ,
      link:"",
      stock:3
    },
    {
      id:13,
      title: "Acteck Monitor 23.8 Plano 75 HZ HDMI + VGA + DC Altavoces 3 W Negro Captive SP240",
      imgUrl:"https://m.media-amazon.com/images/I/51mDSjfTC2L._AC_SL1000_.jpg",
      price:1549,
      maker:"Acteck",
      metadata: {
        "Tamaño de la pantalla":	"23,8 Pulgadas",
        "Resolución máxima de la pantalla":"	1600 x 900 Pixels",
        "Marca":	"Acteck",
        "Característica especial":	"Sin marco, Filtro de luz azul, Sin parpadeo, Ajuste de inclinación",
        "Frecuencia de actualización":  "75hz"   
       },
      description:"Disfruta de todas las cualidades que el monitor Acteck Captive Vivid SP215 tiene para ofrecerte. Percibe las imágenes de una manera completamente diferente y complementa cualquier espacio ya sea en tu hogar u oficina. Un monitor a la medida Con tu pantalla LED no solo ahorrarás energía, ya que su consumo es bajo, sino que podrás ver colores nítidos y definidos en tus películas o series favoritas. Una experiencia visual de calidad Sus 21.5 van a resultar ideales en tu vida diaria, ya sea para estudiar o trabajar. Asimismo, su resolución de 1920 x 1080 te permitirá disfrutar de momentos únicos gracias a una imagen de alta fidelidad.",
      type:"Monitor"  ,
      link:"",
      stock:3
    },
    {
      id:14,
      title: "BenQ GW2480 Monitor LED, Eye-Care Tech, FHD 1080p, HDMI, Negro, 24 pulgadas",
      imgUrl:"https://m.media-amazon.com/images/I/71fldUuE52L._AC_SL1082_.jpg",
      price:2165,
      maker:"BenQ",
      metadata: {
      },
      description:"",
      type:"Monitor"  ,
      link:"",
      stock:5
    },
    {
      id:15,
      title: "QIAN Monitor LED sin Marco 21.5' Full HD (1920x1080p) 6.5ms, VA, 75hz, HDMI, VGA, 16,7 Millones de Colores, 3 años Garantia (QM2151F)",
      imgUrl:"https://m.media-amazon.com/images/I/515Fq1vNS5L._AC_SL1080_.jpg",
      price:1429,
      maker:"QIAN",
      metadata: {
      },
      description:"",
      type:"Monitor"  ,
      link:"",
      stock:8
    },
    {
      id:16,
      title: "Kingston SSD A400, Capacidad: 480GB, Factor de Forma: SATA 2.5, Interfaz: SATA Rev. 3.0 (6Gb/s), Lectura: 500MB/s y Escritura: 450MB/s, Numero de Parte: SA400S37/480G",
      imgUrl:"https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg",
      price:579,
      maker:"Kingston",
      metadata: {
      },
      description:"",
      type:"SSD"  ,
      link:"Category",
      stock:31
    },
    {
      id:17,
      title: "Aguas siniestras",
      imgUrl:"https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2023/NSWIM_2024_DashboardCard_758x608_POST_Final_noLocale_GSS001117_2856206._SY608_CB582595485_.jpg",
      price:579,
      maker:"Ad2",
      metadata: {
      },
      description:"",
      type:"Adsss"  ,
      link:"",
      stock:3
    },
    {
      id:18,
      title: "Zotac Gaming GeForce RTX 3090 Trinity OC 24 GB GDDR6X 384 bits 19,5 Gbps PCIE 4.0, Tarjeta Gráfica para Juegos, Tarjeta de Video, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30900J-10P, NVIDIA",
      imgUrl:"https://m.media-amazon.com/images/I/81JP9a4rCCS._AC_SL1500_.jpg",
      price:31625,
      maker:"Nvidia",
      metadata: {
      },
      description:"ZOTAC cree que estar a la vanguardia de la innovación es la clave para la sostenibilidad. La tecnología y el descubrimiento son los agentes claves que impulsan que nuestro mundo avance. Continuamos impulsando los límites de la ingeniería al expandir tecnologías claves más allá de lo que pueden hacer y nos preguntamos cómo pueden aplicarse a nuestras vidas, cómo pueden afectarnos y cómo podemos mejorarlas. Desde los primeros días, hemos expandido nuestros conocimientos y experiencia en el diseño de productos y descubrimiento de materiales para armonizar con las tecnologías en constante crecimiento, y concentrados en la interacción de los clientes con nuestro producto, para crear experiencias verdaderamente intuitivas y únicas.",
      type:"GPU"  ,
      link:"",
      stock:2
    },
    {
      id:19,
      title: "XFX Speedster MERC310 AMD Radeon RX 7900XT Ultra Gaming Tarjeta gráfica con 20 GB GDDR6, AMD RDNA 3 RX-79TMERCU9",
      imgUrl:"https://m.media-amazon.com/images/I/61F2rF1rKCL._AC_SL1500_.jpg",
      price:15150,
      maker:"AMD",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:5
    },
    {
      id:20,
      title: "Intel Tarjeta de Video ARC A750, 8GB, PCI Express 4.0, GDDR6,256 bit, DirectX 12 Ultimate",
      imgUrl:"https://m.media-amazon.com/images/I/71sO2CZL1UL._AC_SL1500_.jpg",
      price:5713,
      maker:"Intel",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:8
    },
    {
      id:21,
      title: "Seasonic FOCUS Plus 850 Gold unidad de - Fuente de alimentación (850 W, 100 - 240 V, 50/60 Hz, 6 - 12 A, Activo, 100 W)",
      imgUrl:"https://m.media-amazon.com/images/I/81Lo+vS9QBL._AC_SL1500_.jpg",
      price:2918,
      maker:"Seasonic",
      metadata: {
      },
      description:"",
      type:"PSU"  ,
      link:"",
      stock:2
    },
    {
      id:22,
      title: "CORSAIR HXi Series (2022), HX1500i, 1500 Watt, 80 Plus Platinum",
      imgUrl:"https://m.media-amazon.com/images/I/61UeJ-U1mSL._AC_SL1024_.jpg",
      price:7964,
      maker:"Corsair",
      metadata: {
      },
      description:"",
      type:"PSU"  ,
      link:"",
      stock:3
    },
    {
      id:23,
      title: "AMD Ryzen™ Threadripper™ 7960X Procesador de 24 núcleos, 48 Hilos",
      imgUrl:"https://m.media-amazon.com/images/I/71Gyox1aqRL._AC_SL1500_.jpg",
      price:32619,
      maker:"AMD",
      metadata: {
      },
      description:"",
      type:"CPU"  ,
      link:"",
      stock:3
    },
    {
      id:24,
      title: "AMD Ryzen™ Threadripper™ Pro 5995WX, procesador de computadora de 64 núcleos, 128 Hilos",
      imgUrl:"https://m.media-amazon.com/images/I/51myLcDfemL._AC_SL1500_.jpg",
      price:128094,
      maker:"AMD",
      metadata: {
      },
      description:"",
      type:"CPU"  ,
      link:"",
      stock:3
    },
    {
      id:25,
      title: "Tarjeta gráfica Asus ROG Strix NVIDIA GeForce RTX 3090 EVA Edition, ROG-STRIX-RTX3090-O24G-EVA, 24GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, ventiladores Axial-tech , 2.9 ranuras, Edición Evagelion",
      imgUrl:"https://m.media-amazon.com/images/I/81BvbvoUMvL._AC_SL1500_.jpg",
      price:44448,
      maker:"Nvidia",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:2
    },
    {
      id:26,
      title: "EVGA GeForce RTX 3090 FTW3 Ultra Gaming, 24GB GDDR6X, tecnología iCX3, ARGB LED, placa trasera de metal, 24G-P5-3987-KR (Reacondicionado)",
      imgUrl:"https://m.media-amazon.com/images/I/81a7++CClYL._AC_SL1500_.jpg",
      price:26135,
      maker:"Nvidia",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:3
    },
    {
      id:27,
      title: "AMD Ryzen Threadripper 3970X 32-Core, procesador de computadora Desbloqueado de 64 Hilos, sin refrigerador, CPU",
      imgUrl:"https://m.media-amazon.com/images/I/81D-WvtG6OL._AC_SL1500_.jpg",
      price:33144,
      maker:"AMD",
      metadata: {
      },
      description:"",
      type:"CPU"  ,
      link:"",
      stock:3
    },
    {
      id:28,
      title: "ASUS TUF Gaming NVIDIA GeForce RTX 3090 OC Edition Tarjeta gráfica - PCIe 4.0, 24GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, rodamientos de ventilador de doble bola (renovados)",
      imgUrl:"https://m.media-amazon.com/images/I/81qSzMCCLjS.jpg",
      price:30480,
      maker:"Nvidia",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:3
    },
    {
      id:29,
      title: "XFX Speedster MERC310 AMD Radeon RX 7900XTX Tarjeta gráfica para Juegos Negra con 24 GB GDDR6, AMD RDNA 3 RX-79XMERCB9",
      imgUrl:"https://m.media-amazon.com/images/I/71XirBhMcIL._AC_SL1500_.jpg",
      price:20309,
      maker:"AMD",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:3
    },
    {
      id:30,
      title: "PowerColor Red Devil AMD Radeon RX 7900 XTX Tarjeta gráfica",
      imgUrl:"https://m.media-amazon.com/images/I/81skgrznGqL._AC_SL1500_.jpg",
      price:21360,
      maker:"AMD",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:3
    },
    {
      id:31,
      title: "ASRock Intel Arc A380 Perfil bajo 6GB OC GDDR6",
      imgUrl:"https://m.media-amazon.com/images/I/314RNRflXJL._AC_.jpg",
      price:2881,
      maker:"Intel",
      metadata: {
      },
      description:"",
      type:"GPU"  ,
      link:"",
      stock:3
    },
    {
      id:32,
      title: "Intel CPU Core i9-14900K 3.2GHz 24core LGA1700 Socket",
      imgUrl:"https://m.media-amazon.com/images/I/61jRMCAX4CL._AC_SL1500_.jpg",
      price:12319,
      maker:"Intel",
      metadata: {
      },
      description:"",
      type:"CPU"  ,
      link:"",
      stock:3
    },
    {
      id:33,
      title: "Intel Procesador Core i9-12900K, S-1700, 5.20GHz, 8-Core - (12va Generación Alderman Lake)",
      imgUrl:"https://m.media-amazon.com/images/I/61UVtHz+IlL._AC_SL1080_.jpg",
      price:7703,
      maker:"Intel",
      metadata: {
      },
      description:"",
      type:"CPU"  ,
      link:"",
      stock:3
    },
    {
      id:34,
      title: "SAMSUNG 980 Pro 1TB PCIe NVMe Gen4 SSD Interno para Videojuegos M.2 (MZ-V8P1T0B)",
      imgUrl:"https://m.media-amazon.com/images/I/713h+shZfQL._AC_SL1500_.jpg",
      price:2362,
      maker:"Samgsung",
      metadata: {
      },
      description:"",
      type:"SSD"  ,
      link:"",
      stock:3
    },
    {
      id:35,
      title: "Asus Motherboard AMD B550, Prime B550M-A AC, AM4 mATX con PCIe 4.0, dual M.2, WiFi, HDMI, D-Sub, DVI, SATA 6 Gbps, puertos USB 3.2 Gen 2 e iluminación Aura Sync RGB",
      imgUrl:"https://m.media-amazon.com/images/I/81W-mq5DWbL._AC_SL1280_.jpg",
      price:1898,
      maker:"ASUS",
      metadata: {
      },
      description:"",
      type:"Motherboard"  ,
      link:"",
      stock:2
    },
    {
      id:36,
      title: "Asus ROG Strix B550-F Gaming WiFi II Motherboard",
      imgUrl:"https://m.media-amazon.com/images/I/81S9D7bqEzL._AC_SL1500_.jpg",
      price:3635,
      maker:"ASUS",
      metadata: {
      },
      description:"",
      type:"Motherboard"  ,
      link:"",
      stock:3
    },
    {
      id:37,
      title: "Asus Pro WS WRX80E-SAGE SE WiFi II AMD WRX80 Ryzen™ Threadripper™ Pro Placa Base extendida ATX para estación de Trabajo Motherboard",
      imgUrl:"https://m.media-amazon.com/images/I/91nnUGvf+gL._AC_SL1500_.jpg",
      price:19338,
      maker:"ASUS",
      metadata: {
      },
      description:"",
      type:"Motherboard"  ,
      link:"",
      stock:3
    },
    {
      id:38,
      title: "Seagate ST8000DM004 Barracuda - Disco Duro Interno, 8TB, 3.5",
      imgUrl:"https://m.media-amazon.com/images/I/61Ud7V6Tj4L._AC_SL1312_.jpg",
      price:2489,
      maker:"Seagate",
      metadata: {
      },
      description:"",
      type:"HDD"  ,
      link:"",
      stock:3
    },
    {
      id:39,
      title: "Seagate - Disco duro interno BarraCuda SATA de 4 TB, 6 Gb/s, 256 MB de caché de 3,5 pulgadas (ST4000DM004), paquete único",
      imgUrl:"https://m.media-amazon.com/images/I/61s+lKUxtbL._AC_SL1312_.jpg",
      price:1728,
      maker:"Seagate",
      metadata: {
      },
      description:"",
      type:"HDD"  ,
      link:"",
      stock:3
    },
  ]

  getProductById( id:number){
    return this.ItemList.find(item => item.id === id)
  }

  updateSearchText(textToUpdate:string){
    this.searchText=textToUpdate;
  }

  getSearchText(){
    return this.searchText
  }

  searchItems(query: string): IGalleryItem[] {
    return this.ItemList.filter(item =>
      item.type !== 'Ad' &&
      item.type !== 'GpuMaker' &&
      item.type !== 'Categories' &&
      item.type !== 'Adsss' &&
      item.type !== 'Adss' &&
      item.title.toLowerCase().includes(query)
    );
  }

  getItemsByTypeEx(type: string): IGalleryItem[] {
    return this.ItemList.filter(item => 
      item.type !== 'Ad' &&
      item.type !== '' &&
      item.type !== 'Categories' &&
      item.type !== 'Adsss' &&
      item.type !== 'Adss' &&
      item.type.toLowerCase().includes(type)    );
  }
  getItemsByMaker(maker: string): IGalleryItem[] {
    return this.ItemList.filter(item => 
      item.type !== 'Ad' &&
      item.type !== 'GpuMaker' &&
      item.type !== 'Categories' &&
      item.type !== 'Adsss' &&
      item.type !== 'Adss' &&
      item.maker.includes(maker)    );
  }
  getAllItemsExcludingTypes(excludeTypes: string[]): IGalleryItem[] {
    return this.ItemList.filter(item => !excludeTypes.includes(item.type));
  }
  getItemsByType(type: string): IGalleryItem[] {
    return this.ItemList.filter(item => item.type === type);
  }  
}
