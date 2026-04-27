## Добавить адрес и карту Google на страницу контактов

Добавим точный адрес компании и встраиваемую карту Google Maps на страницу `/contact`, а также обновим адрес в футере.

### Адрес
**Улица Таалай 7, район Киргизия 1, Бишкек, Кыргызстан**

### Изменения

**1. `src/lib/i18n.tsx`**
- Обновить ключ `footer.address` (RU и KG) на новый адрес: «Ул. Таалай 7, мкр. Киргизия 1, Бишкек».
- Добавить ключ `contact.mapTitle` («Мы на карте» / «Картадагы биз»).

**2. `src/routes/contact.tsx`**
- В блоке `items` пункт «Адрес» сделать кликабельной ссылкой на Google Maps (`https://www.google.com/maps/search/?api=1&query=...`).
- Под сеткой контактов и формой добавить новую секцию с заголовком «Мы на карте» и `<iframe>` Google Maps:
  - Встраиваемый URL: `https://www.google.com/maps?q=Taalay+7,+Kyrgyzstan+1,+Bishkek&output=embed`
  - Размер: full width, высота `h-[400px] md:h-[500px]`, скруглённые углы `rounded-3xl`, рамка как у других карточек, `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"`, `title` для доступности.
- Обновить meta `description`, добавив адрес для локального SEO.

**3. `src/components/site/Footer.tsx`**
- Адрес подтянется автоматически через `t("footer.address")`. Сделать его кликабельной ссылкой на Google Maps (как в контактах).

### Технические детали
- Используем стандартный публичный embed Google Maps через `https://www.google.com/maps?q=...&output=embed` — не требует API-ключа.
- Iframe оборачиваем в контейнер с `overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]`.

### Результат
На `/contact` посетитель видит точный адрес-ссылку и интерактивную карту Google с меткой компании. В футере адрес также становится кликабельной ссылкой на карту.
