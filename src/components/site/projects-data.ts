import p1 from "@/assets/pool-1.jpeg";
import p2 from "@/assets/pool-2.jpeg";
import p3 from "@/assets/pool-3.jpeg";
import p4 from "@/assets/pool-4.jpeg";
import p5 from "@/assets/pool-5.jpeg";
import w1 from "@/assets/work-1.jpeg";
import w2 from "@/assets/work-2.jpeg";
import w3 from "@/assets/work-3.jpeg";
import w4 from "@/assets/work-4.jpeg";

export type Category = "pools" | "hammam" | "sauna" | "fountain";

export type Project = {
  id: string;
  src: string;
  category: Category;
  titleRu: string;
  titleKg: string;
  locationRu: string;
  locationKg: string;
  descRu: string;
  descKg: string;
  term: string;
  year: number;
};

export const projects: Project[] = [
  {
    id: "p1",
    src: p1,
    category: "pools",
    titleRu: "Частный бассейн",
    titleKg: "Жеке бассейн",
    locationRu: "Бишкек, мкр. Ак-Орго",
    locationKg: "Бишкек, Ак-Орго",
    descRu:
      "Крытый бассейн 8×4 м для частного дома. Мозаичная отделка, система подогрева воды, автоматическая фильтрация.",
    descKg: "Жеке үй үчүн 8×4 м жабык бассейн. Мозаика, суу жылытуу, автоматтык фильтрация.",
    term: "45 дней",
    year: 2024,
  },
  {
    id: "p2",
    src: p2,
    category: "pools",
    titleRu: "Открытый бассейн",
    titleKg: "Ачык бассейн",
    locationRu: "Чолпон-Ата, база отдыха",
    locationKg: "Чолпон-Ата, эс алуу базасы",
    descRu: "Открытый бассейн 12×6 м для базы отдыха. Укладка природного камня, система противотока, подсветка.",
    descKg: "Эс алуу базасы үчүн 12×6 м ачык бассейн. Табигый таш, каршы агым, жарыктандыруу.",
    term: "60 дней",
    year: 2024,
  },
  {
    id: "p3",
    src: p3,
    category: "pools",
    titleRu: "Бассейн под ключ",
    titleKg: "Ачкыч бассейн",
    locationRu: "Бишкек, Ала-Арча",
    locationKg: "Бишкек, Ала-Арча",
    descRu: "Строительство бассейна 10×5 м с нуля: проект, чаша, отделка, оборудование, пусконаладка.",
    descKg: "10×5 м бассейнди нөлдөн куруу: долбоор, чаша, жасалга, жабдуу, ишке киргизүү.",
    term: "50 дней",
    year: 2023,
  },
  {
    id: "p4",
    src: p4,
    category: "pools",
    titleRu: "Коммерческий объект",
    titleKg: "Коммерциялык объект",
    locationRu: "Бишкек, СПА-центр",
    locationKg: "Бишкек, СПА-борбор",
    descRu: "Два бассейна 15×7 м и 6×3 м для коммерческого СПА. Система обеззараживания, тепловой насос, зона отдыха.",
    descKg: "Коммерциялык СПА үчүн 15×7 м жана 6×3 м эки бассейн. Тазалоо тутуму, жылуулук насосу.",
    term: "90 дней",
    year: 2024,
  },
  {
    id: "p5",
    src: p5,
    category: "hammam",
    titleRu: "Турецкий хамам",
    titleKg: "Түрк хамамы",
    locationRu: "Бишкек, частная резиденция",
    locationKg: "Бишкек, жеке резиденция",
    descRu: "Классический хамам 20 м² с мозаичной отделкой, мраморными лежаками, парогенератором и хромотерапией.",
    descKg: "Мозаика, мрамор жатуучу орундар, буу генератору жана хромотерапия менен 20 м² классикалык хамам.",
    term: "30 дней",
    year: 2023,
  },
  {
    id: "w1",
    src: w1,
    category: "pools",
    titleRu: "Строительство чаши",
    titleKg: "Чашаны куруу",
    locationRu: "Иссык-Куль, пансионат",
    locationKg: "Ысык-Көл, пансионат",
    descRu: "Монолитная железобетонная чаша бассейна 20×10 м. Гидроизоляция, закладные элементы, армирование.",
    descKg: "20×10 м бассейндин монолиттик темир-бетон чашасы. Гидроизоляция, армирование.",
    term: "35 дней",
    year: 2024,
  },
  {
    id: "w2",
    src: w2,
    category: "sauna",
    titleRu: "Финская сауна",
    titleKg: "Финляндия саунасы",
    locationRu: "Бишкек, частный дом",
    locationKg: "Бишкек, жеке үй",
    descRu: "Финская сауна 12 м² из термодерева. Печь Harvia, стеклянная дверь, встроенная подсветка, комната отдыха.",
    descKg: "Термодеревдан 12 м² финляндия саунасы. Harvia мешкени, айнек эшик, жарыктандыруу.",
    term: "14 дней",
    year: 2023,
  },
  {
    id: "w3",
    src: w3,
    category: "hammam",
    titleRu: "Хамам — отделка",
    titleKg: "Хамам — жасалга",
    locationRu: "Бишкек, отель",
    locationKg: "Бишкек, мейманкана",
    descRu: "Отделка хамама 35 м² мозаичной плиткой вручную. Звёздное небо, мраморные элементы, LED-подсветка.",
    descKg: "35 м² хамамды мозаика менен кол менен жасалгалоо. Жылдыздуу асман, мрамор, LED.",
    term: "25 дней",
    year: 2024,
  },
  {
    id: "w4",
    src: w4,
    category: "fountain",
    titleRu: "Декоративный фонтан",
    titleKg: "Декоративдик фонтан",
    locationRu: "Бишкек, торговый центр",
    locationKg: "Бишкек, соода борбору",
    descRu: "Архитектурный фонтан диаметром 4 м для торгового центра. RGB-подсветка, автоматика, насосы Grundfos.",
    descKg: "Соода борбору үчүн 4 м диаметрдеги архитектуралык фонтан. RGB, автоматтык башкаруу.",
    term: "20 дней",
    year: 2023,
  },
];

export { p1 as heroImage };
