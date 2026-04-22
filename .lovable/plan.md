
## Remove phone icon from mobile navigation

Remove the cyan circular phone call icon from the mobile header bar. The desktop phone pill (with full number) stays unchanged.

### Change to `src/components/site/Header.tsx`
- Delete the mobile-only `<a>` element with the `Phone` icon (the one with classes `inline-flex h-11 w-11 ... sm:hidden`).
- Keep the hamburger menu and language switcher in place.

### Resulting mobile header right side
```text
[RU|KG]  [☰]
```

Users can still call via the contact page and footer.
