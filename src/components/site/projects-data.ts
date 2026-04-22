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
};

export const projects: Project[] = [
  { id: "p1", src: p1, category: "pools", titleRu: "Частный бассейн", titleKg: "Жеке бассейн" },
  { id: "p2", src: p2, category: "pools", titleRu: "Открытый бассейн", titleKg: "Ачык бассейн" },
  { id: "p3", src: p3, category: "pools", titleRu: "Бассейн под ключ", titleKg: "Ачкыч бассейн" },
  { id: "p4", src: p4, category: "pools", titleRu: "Коммерческий объект", titleKg: "Коммерциялык объект" },
  { id: "p5", src: p5, category: "hammam", titleRu: "Турецкий хамам", titleKg: "Түрк хамамы" },
  { id: "w1", src: w1, category: "pools", titleRu: "Строительство чаши", titleKg: "Чашаны куруу" },
  { id: "w2", src: w2, category: "sauna", titleRu: "Финская сауна", titleKg: "Финляндия саунасы" },
  { id: "w3", src: w3, category: "hammam", titleRu: "Хамам — отделка", titleKg: "Хамам — жасалга" },
  { id: "w4", src: w4, category: "fountain", titleRu: "Декоративный фонтан", titleKg: "Декоративдик фонтан" },
];

export { p1 as heroImage };
