# SS AirTech Solutions — Design System

## The company

**SS AirTech Solutions** is an industrial compressed-air business based in Coimbatore, Tamil Nadu, India. Its main business line is **SOLLANT screw air compressors** for industrial applications, sold as an authorised SOLLANT dealer. Alongside this it manufactures its own **AT series** reciprocating compressors, supplies VFD/starter panels, filters, separators and genuine spare parts, and — as an authorised KVN dealer — submersible pumps for homes, farms and industries. It sells, installs and services all of it.

- Address: No. 8/1, Gandhi Nagar, Pattanam Road, Vellalore, Coimbatore — 641111, Tamil Nadu, India
- Phone: 9790029225 / 9790029316 / 9790039214 · Email: support@ssairtechsolutions.com · Web: www.ssairtech.com
- Strapline: **OPTIMIZE · SAVE · SUSTAIN**
- Tagline: **"Your Trusted Compressed Air Partner."** (long form: "Your Trusted Partner for Compressed Air Solutions"). The screw-compressor banner uses a second sign-off: **"Your Partner for Better Compressed Air"**, and the strapline **"ENERGY CONSERVATION – INNOVATION – SMART TECHNOLOGY"**.

> **Inconsistency to resolve.** The two source artefacts disagree on contact details. The AT-series catalogue sheet says *Pattanam Road*, `support@ssairtechsolutions.com`, `www.ssairtech.com`; the SOLLANT banner says *Pattanam Road*, `support@ssairtechsolutions.com`, `www.ssairtech.com`. The UI kit currently uses the catalogue sheet's version. Please confirm which is correct.

Product lines as evidenced in the source material. **SOLLANT Stahl kompresor screw air compressors** — the lead line — sold as an authorised dealer for "all kinds of screw compressor, air dryers & accessories". Models shown in the brand's own banner: `SLT 15V`, `SLT 37V`, `SLT 45V`. The supplier catalogue also covers fixed-speed, PM VSD, two-stage PM VSD, low- and high-pressure, oil-free and centrifugal ranges. Sold with air tanks, air dryers, air filters, piping solutions and genuine spare parts. Selling claims, verbatim: *Advanced German Technology · Energy Efficient & Cost Saving · Reliable Performance · Low Maintenance · Long Service Life · Global Quality Standards*. Industries served: automotive, textile, food & beverage, pharma, engineering, plastic. **Technical specifications** come from `Tank and Fixed speed screw compressor.pdf`: the fixed & PM VSD screw range `SLT-7.5F` … `SLT-45F` (7.5–45 kW / 10–60 HP), capacity 0.63–7.46 m³/min (22–263 cfm) across 8/10/13/16 bar working pressures, DN20–DN40 outlets, 60–66 dB, direct drive, star-delta start. The V-suffix models on the poster (`SLT 15V`, `SLT 37V`, `SLT 45V`) are the PM VSD variants of the same frames. That PDF also states **"over 35 years of industry experience"** and gives `support@ssairtechsolutions.com`. **AT series — SS AirTech's own brand** of single-stage (`AT S03 LB` … `AT S15 LB`, 9 kg/cm²) and two-stage (`AT T03 LB` … `AT T15 LB`, 12 kg/cm²) industrial reciprocating compressors, 160–500 L receivers, 3–15 HP, tested to IS 5456, conforming to ASME and OSHA.

### Sources used
All material came from one attached local folder, `Photos for Web site/` (read-only mount). No codebase, Figma file or existing website was provided.

| Source file | What it gave us |
| --- | --- |
| `Final SS logo image.png`, `SS Energy.png` | The two brand lockups (copied to `assets/`) |
| `WhatsApp Image 2026-08-13 at 5.59.23 PM.jpeg` (also …4.47.18 PM) | **The single most important artefact** — the full printed product catalogue sheet: colour system, angled navy bands, value tiles, feature/benefit table, technical specification tables, footer contact block. Copied to `assets/photo-install-3.jpeg` |
| `ChatGPT Image Jul 20, 2026, 04_54_27 PM.png` | Submersible-pump marketing flier — tone of voice, headline style, gold offer treatment. Copied to `assets/flier-submersible-pumps.png` |
| `Sollant Stahl kompresor brochure_.pdf`, `SHANGHAI SOLLANT 2026.pdf` | Supplier brochures — mission/values copy, product portfolio naming |
| `Tank and Fixed speed screw compressor.pdf` | **The SLT screw compressor datasheet** — full specification tables for `SLT-7.5F` … `SLT-45F`, tank-mounted and floor-mounted, now reproduced on the Products page |
| `Single page Final catalog*.docx` | Product-family headings (PM VSD, fixed speed, 4-in-1) |
| `WhatsApp Image 2026-08-07 at 5.21.09 PM.jpeg` | **The SOLLANT screw-compressor banner** — the lead product line. Gave the SLT 15V / 37V / 45V model names, the Sollant Stahl dealer badge, the "Why choose Sollant Stahl" claims, the six-category product row (screw compressors, air tanks, air dryers, air filters, piping solutions, genuine spare parts) and the served industries. Copied to `assets/banner-sollant-screw.jpeg`; product cut-outs cropped from it into `assets/sollant-*.png` |
| `uploads/ChatGPT Image Jul 20, 2026, 05_43_15 PM.png` (supplied later, in chat) | **The high-resolution SOLLANT poster** — the cleanest source for the SLT 15V / 37V / 45V units, the Sollant Stahl dealer badge and the four benefit icons. All `assets/sollant-*.png` crops now come from this file. Also states a second phone number, **+91 80722 92336** |
| Product photography (`Picture1.jpg`, `VFD Panel.jpg`, `Screw comp spare parts.png`, WhatsApp product shots) | The imagery style; copied to `assets/` |

**No live website exists.** The UI kit is therefore an extrapolation of the print system onto web layouts, not a recreation of an existing page. Treat it as a proposal.

---

## Content fundamentals

**Voice.** Plainly commercial, engineer-to-engineer, and unembarrassed about selling. Claims are made directly and then backed with a number or a standard. There is no storytelling and no personality writing.

**Person.** Third person for the company ("SS AIRTECH SOLUTIONS, an Authorised dealer for SOLLANT Screw Air Compressor"; likewise "SS AIRTECH SOLUTIONS, an Authorized Dealer for KVN PUMPS, offers a complete range…"), second person for the customer ("Your Trusted Compressed Air Partner", "CORE VALUES THAT BENEFITS THE CUSTOMER"). "We" appears in supplier brochure copy ("We are committed to providing high-quality products…"). First-person singular never appears.

**Casing.** Headlines and section headers are **ALL CAPS**, always. Sub-headings are Title Case. Body copy is sentence case. Model numbers are uppercase with spaces: `AT S05LB 250LTS`. Units are lowercase and follow the number with a space: `12.7 cfm`, `9 kg/cm²`, `258 kg`, `1590×625×1105 mm`.

**Structure.** Copy comes in short, parallel, stacked pairs — a feature and the benefit it produces. The catalogue's own pattern, used verbatim across the system:

> Cast iron block → Outperforms and outlasts aluminium block compressor
> Slow running speed → Low wear & tear
> Totally enclosed belt guard → Full protection against accidents
> Leak proof fittings → No compressed air leakage

Four-word uppercase value labels with two lines of support underneath: **HIGH RELIABILITY**, **COST EFFECTIVE**, **ENERGY EFFICIENT**, **OPERATOR SAFETY**.

**Headline register.** Marketing headlines use a two-beat construction with an ellipsis or a line break and end in an exclamation: *"RELIABLE WATER… PROSPEROUS LIFE!"* Offer language is loud and time-bound: *"BEST DISCOUNTED PRICE WILL BE GIVEN!"*, *"LIMITED TIME OFFER!"*, *"CHOOSE HIGH PERFORMANCE"*.

**Trust language.** Standards and certifications are named, not hinted at: IS 5456, ASME, OSHA, IE2 motors. Service promises are concrete: erection, commissioning, transportation, pan-India service network.

**Grammar note.** Source copy contains small non-idiomatic constructions ("CORE VALUES THAT BENEFITS THE CUSTOMER"). Quote the brand's own strings verbatim when reproducing existing collateral; write new copy in correct standard English.

**Emoji: never.** Not in print, not on the web. Icons carry that job.

---

## Visual foundations

**Colour.** Navy is the brand and does almost all the work — `--navy-700 #003080`, sampled from the logo wordmark. Green (`--green-600 #2E8B14`, deep `--green-800 #00480C`) is the *sustain* half of the strapline and appears as eyebrows, eco claims, active underlines and short rules. Red `#BE0014` comes from the logo swoosh and is used only as a separator dot, a required-field asterisk, or a danger state. Gold `#FCC000` is reserved for price and offer moments — at most one per page. Backgrounds are white or a very pale blue-grey tint; there is no dark mode. **Never** use bluish-purple gradients — the only gradients in the system run navy→navy or green→green along a shallow 100° angle.

**Type.** Heavy condensed uppercase for headlines, regular grotesque for copy, monospace for every figure. Display sizes run to 76px; body sits at 16/1.65; nothing goes below 12px. Tracking widens as size drops: headlines +0.04em, labels +0.08em, eyebrows +0.16em.

**Spacing and layout.** A 4px base scale, 1200px content container, 24px gutters, 80px section rhythm, 66ch measure. Layout is a straightforward stacked-band page — full-width coloured sections alternating white and pale tint, content centred in the container. The site header is sticky; nothing else is fixed.

**Backgrounds.** Flat colour or flat tint, plus one signature device: **the angled band** — a navy block whose leading edge is cut on a 28px diagonal, lifted directly from the catalogue's title strips. There are no repeating patterns, no textures, no hand-drawn illustration, and no decorative photography behind text. Where a photo must sit under text, use `--gradient-photo-scrim` (transparent → 78% navy) rather than a blur.

**Photography — two modes.** The SOLLANT screw line is shot *on dark*: green cabinet units in a moody, blue-lit factory interior, with dark navy-black backgrounds behind cut-outs. The AT reciprocating line and accessories are shot *on white*: product cut-outs on pure white, flat and evenly lit — cobalt-blue receiver tanks, black cast-iron blocks, machined steel and grey-blue motors. Cool overall, no warmth, no grain, no filter, no depth-of-field tricks. Installation and workshop photos are candid phone shots; keep them small and secondary. Never crop a product photo to a circle.

**Corners and cards.** Restrained: 6px is the default radius, 4px on controls, 3px on badges. The card is white, 1px `--blue-100` border, 6px radius, `--shadow-sm`. Full pill radius appears in exactly one place — filter tags. **No coloured left-border accent cards, ever.**

**Shadows.** All navy-tinted (`rgba(0,27,77,…)`), never neutral black. Six steps from a 1px hairline to the heavy `--shadow-band` under angled bands. Inner shadows are not used.

**Borders.** 1px hairlines separate content; 2px is the button border; 3px is the green rule under section headings and the active-tab underline. Table grids use hairlines with a solid navy header row and a pale-blue zebra tint.

**Animation.** Short and mechanical. 140ms for hover/focus colour changes, 200ms for card lift and tab switches, 520ms for scroll-in fades. Easing is `cubic-bezier(.16,1,.3,1)` — decelerating, never a bounce, never an overshoot, never a spring.

**Hover states.** Cards lift 2px and deepen from `--shadow-sm` to `--shadow-lg`. Filled buttons go one step *darker* (navy 700 → 900, green 600 → 700); outline and ghost buttons fill in. Links switch navy → green and gain an underline at 3px offset.

**Press states.** Colour holds; the element scales to `0.985`. No ripple.

**Focus.** A 3px navy ring at 35% opacity (`--ring-focus`), never a browser outline.

**Transparency and blur.** Almost none. Transparency is used only for shadows, the photo scrim and the focus ring. There is no frosted glass anywhere in this system.

---

## Iconography

The brand's own icons exist only as flattened artwork baked into print fliers — filled navy glyphs in rounded-square frames (shield, piggy bank, leaf, hard hat) and small circled ticks on benefit lines. **No icon font, sprite or SVG set was supplied.**

**Substitution — please confirm.** The `Icon` component uses **Lucide** (`lucide-static@0.417.0` from unpkg), 2px stroke, rendered in `--navy-700` or `--green-600`. It is the closest available match to the catalogue's glyph weight and metaphor set, but it is *outline* where the print icons are *filled*. If you have the original icon files, send them and this component will be repointed.

Rules in use:
- Icons always inherit or are explicitly set to a brand colour — never multicolour, never gradient.
- Value tiles frame a 44px icon in a 96px pale-blue rounded square, matching the catalogue.
- Inline icons in tables and contact blocks run at 16–18px alongside text.
- Unicode characters do double duty for units and separators: `·` in the strapline, `×` in dimensions, `²` in kg/cm².
- **No emoji, ever.**

## Fonts

**Substitution — please confirm.** No font binaries were supplied. The system uses the closest Google Fonts matches, loaded from the Google Fonts CDN in `tokens/fonts.css`:

| Role | Font used | Matching |
| --- | --- | --- |
| Display / hero | **Barlow Condensed** 700 | the catalogue's heavy condensed uppercase headlines |
| Headline / UI | **Barlow Semi Condensed** 600–700 | section headers, table headers, buttons |
| Body | **Barlow** 400–700 | running copy |
| Spec figures | **IBM Plex Mono** 400–500 | technical specification tables |

The logo wordmark is a heavy italic grotesque that is *not* Barlow. It is supplied as artwork and should never be re-set in type. **If you have the original brand fonts, send them and we will swap them in.**

---

## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file. `SKILL.md` — Agent Skills wrapper.
- `thumbnail.html` — homepage tile.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`
- `assets/` — logo lockups (`ss-energy.png`, `logo-ss.png`), the catalogue sheet, product cut-outs, workshop and installation photography.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `scraps/` — working extracts from the source PDFs and DOCX files; not part of the shipped system.

### Components
**core/** — `Button`, `Badge`, `Tag`, `Card`, `Icon`, `Logo`
**marketing/** — `SectionHeading`, `AngledBand`, `ValueTile`, `ProductCard`, `StatBlock`, `CTABanner`
**data/** — `SpecTable`, `FeatureTable`
**forms/** — `Input`, `Select`, `Checkbox`
**navigation/** — `SiteHeader`, `SiteFooter`, `Tabs`

Each has a sibling `.d.ts` props contract and a `.prompt.md` usage note.

#### Intentional additions
No source defined a component inventory, so this is an authored set sized to the brand's actual needs (a product-catalogue marketing site). Two entries deserve a note:
- **`Icon`** — a wrapper over the substituted Lucide set, so the whole system can be repointed from one file when real icons arrive.
- **`SpecTable` / `FeatureTable`** — not generic UI, but direct recreations of the two tables that dominate the printed catalogue sheet. They are the brand's most distinctive layout element.

Deliberately **not** built, because nothing in the source calls for them: Toast, Avatar, Dialog, Tooltip, Switch, Radio, Breadcrumb.

### UI kits
- `ui_kits/website/` — three-screen click-through marketing site (Home, Products with live specification tables, Contact with enquiry form). See its own `README.md`.

No slide template was supplied, so no sample slides were created.
