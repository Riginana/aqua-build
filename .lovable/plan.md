
## Remove company name text from header navigation

Remove the "AQUA BRABUS KG" text and tagline next to the logo in the header. Only the logo image will remain on the left side.

### Change to `src/components/site/Header.tsx`
- Delete the `<span className="hidden flex-col leading-tight sm:flex">...</span>` block that contains the company name and the bilingual tagline.
- Keep the `<Link to="/">` wrapper with the `<img>` logo intact.

### Result
Left side of header shows only the logo image, on all screen sizes.
