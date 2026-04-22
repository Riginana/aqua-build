
## Move language switcher next to phone icon on mobile

Currently the RU/KG language switcher is hidden on mobile (`hidden md:flex`) and only appears inside the opened hamburger menu. The user wants it visible in the top bar on mobile, placed to the left of the phone call icon.

### Changes to `src/components/site/Header.tsx`

1. **Add a compact mobile language switcher** in the right-side action group, positioned before the mobile phone icon button:
   - Visible only on mobile (`flex sm:hidden` for the new compact switcher)
   - Two small pill buttons (RU / KG), height 44px to keep touch target accessibility
   - Active state: navy background + white text; inactive: navy/70 text with border
   - Compact sizing (px-2, text-xs) so both buttons + phone icon + hamburger fit comfortably at 390px width

2. **Keep the existing desktop switcher** (`hidden md:flex`) unchanged for tablet/desktop.

3. **Remove the duplicate switcher from the open hamburger panel** since it's now always visible in the header bar (avoids redundancy).

### Layout order on mobile (right side)
```text
[RU|KG]  [📞]  [☰]
```

### Layout order on desktop (unchanged)
```text
[RU|KG]  [📞 +996 707 148 555]
```

No other files need changes.
