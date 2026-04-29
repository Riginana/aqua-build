## Заменить фото Hero на загруженное

1. Скопировать `user-uploads://heropic.jpg` в `src/assets/hero-pool.jpg`.
2. В `src/components/site/sections.tsx` (строка 9) заменить импорт:
   - было: `import heroBg from "@/assets/pool-2.jpeg";`
   - стало: `import heroBg from "@/assets/hero-pool.jpg";`

Остальное (градиент-оверлей, текст, верстка) не трогаем.
