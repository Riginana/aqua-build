
## Remove logo image from footer

Delete the `<img>` logo from the footer's brand block in `src/components/site/Footer.tsx`. The "AQUA BRABUS KG" text next to it stays.

### Change
- In `src/components/site/Footer.tsx`, remove the `<img src={logo} ... />` element on line 21.
- Remove the now-unused `import logo from "@/assets/logo-v2.png";` import at the top of the file.
- Keep the surrounding `<div className="flex items-center gap-3">` and the `<span>AQUA BRABUS KG</span>` text intact.

### Result
Footer's top-left brand area shows only the "AQUA BRABUS KG" wordmark, no logo image.
