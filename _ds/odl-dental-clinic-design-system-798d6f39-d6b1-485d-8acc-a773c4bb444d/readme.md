# ODL Dental Clinic — Design System

A brand & UI design system for **ODL Dental Clinic**, an award-winning dental
practice in the City of London (31 Finsbury Circus, London EC2M 5QQ) offering
orthodontic, cosmetic and general dental care.

> "Exceptional Care Backed by Decades of Experience"

The practice positions itself as **the UK's most awarded dental clinic** — the
homepage leads with award badges (Dental Team of the Year, Best Patient Care,
Practice Manager of the Year, etc.) and a wall of Google 5-star reviews. It runs
a sister brand, the **London Orthodontic Clinic (LOC)**, its dedicated Invisalign
"Experience Studio" and an accredited **Invisalign Diamond Apex** provider.

## Sources given
- **Live site:** https://www.odldentalclinic.com (homepage, braces/teeth-straightening,
  Invisalign, and Work With Us pages)
- **Full-page screenshots:** homepage and "How Much Do Braces Cost in London" page
- **Brand color extraction** (Peek export from the live site) — background, text, CTA and border palettes
- **Logos:** ODL primary logo (tooth mark + "ODL / DENTAL CLINIC"), Invisalign Diamond Apex badge
- **Award badges:** 22 winner badges 2019–2025 (Dentistry Awards, The Dental Awards,
  Private Dentistry Awards, GHP Private Healthcare Awards)
- **Accreditation marks:** General Dental Council, Care Quality Commission,
  British Orthodontic Society, BDA Good Practice Member, American Association of
  Orthodontists
- **Photography:** clinic team, clinicians consulting, clinic ODL sign wall, patient/treatment photos
- **Font:** Manrope (variable weight TTF)

No component library, Figma file or codebase was provided — components and UI kit
below are reconstructed from the live site screenshots + extracted tokens, so treat
component APIs as a faithful interpretation rather than a 1:1 port.

---

## Brand at a glance
- **Personality:** trusted, premium-but-approachable, reassuring, expert. Clinical
  cleanliness softened by warm, real patient photography and rounded shapes.
- **One hero color:** a confident sky **cyan `#15ace6`** carries the whole brand,
  set against clean white and pale off-white surfaces, with a deep navy `#0056a7`
  for high-emphasis CTAs.
- **Proof-led:** awards, accreditations ("As featured in", "Accreditation") and
  Google review cards are a core visual device, not decoration.

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, confident, reassuring and plain-spoken. Speaks to the patient as
**"you"** and about the practice as **"we"** ("we combine exceptional patient care",
"with us, your braces treatment is carried out by an entire orthodontic team").
Never clinical-cold; always human and calming.

**Casing.** Sentence case for body copy. Headlines are Title Case
("Exceptional Care Backed by Decades of Experience", "Ready to Transform Your
Smile?", "Treatments We Offer", "Why Choose Us"). Section eyebrows are short
Title-Case labels preceded by a thin line icon, set directly on the background
with no container — "Before and After", "What We Do", "Our Practices",
"Latest Blog", "As featured in".

**Numbers & proof.** Heavy, specific use of quantified proof presented as big
figures with a small caption: **2377+** Smiles Transformed, **4+** Years of Trusted
Care, **ALL** Specialists in One Place, **7+** Award-Winning Standards, **26+**
People Who Care. Prices are concrete and transparent — "From £999", "braces start
at just £999", "A consultation which costs £59".

**CTAs.** Action-first and friendly: **"Book an Appointment"** (primary, everywhere),
"Book Now", "Book ODL", "Book LOC", "Learn More", "Read More", "View All",
"Contact Us", "book a consultation". Often paired with a supportive line
("Ready to Transform Your Smile?" → "Or If You Need Further Guidance, Contact Us").

**Tone examples.**
- Hero: "How Much Do Braces Cost in London?" → "At ODL Dental Clinic, we combine
  exceptional patient care with transparent pricing. From simple to complex cases,
  braces start at just £999 with flexible payment options designed around your needs."
- FAQ-style plain questions: "How long does teeth straightening take?",
  "Can adults get braces?", "Will braces be painful?"
- Reassurance over hard sell: "We do not want to waste your time... treatment for
  each case is tailored to suit the needs and choices of the individual."

**Emoji:** none. The brand uses award badges, star ratings and simple line icons
instead of emoji.

---

## VISUAL FOUNDATIONS

**Color.** A single dominant brand cyan `#15ace6` (links, icon accents, the full-width
"Why Choose Us" band, small CTAs and the top utility bar). A deeper navy `#0056a7`
appears as a high-emphasis CTA color. Everything else is a clean neutral
ladder: near-black headings `#111`, charcoal body `#3b3b3b`/`#464141`, muted grays,
and a stack of off-whites — `#fafafa`, `#f6f6f6` and a pale cyan-tinted `#f2f9fd`
for alternating section fills. Sections alternate white ↔ pale-ice / smoke to create
rhythm; one section (Why Choose Us) inverts to full cyan with white text.

**Type.** **Manrope** for everything — a friendly geometric humanist sans (confirmed
by the client as ODL's typeface). Large, approachable Title-Case display headings
(semibold/bold, slightly tight tracking), calm regular-weight body at ~1.5–1.65
line-height. No serif, no secondary display face.

**Shape & radius.** Soft and rounded throughout. **Pill-shaped buttons** (fully
rounded) are the signature control. Treatment and "Why Choose Us" thumbnails are
**perfect circles**. Cards use gentle 10–24px rounding. Floating Google-review chips
are small pill/rounded cards. **Section eyebrow labels are NOT pills** — they are a
thin line icon plus a short label sitting bare on the background.

**Cards.** White fill, generous padding, gently rounded corners, **soft cool ambient
shadow** (no hard borders, no colored left-accent stripe). Treatment cards are a
circular photo above a centered name + "From £xxx" price. Practice cards pair a
rounded photo with a heading, paragraph and a pill "Book" button.

**Imagery.** Bright, natural-light photography with a clean, slightly cool-to-neutral
white balance. Real patients (genuine smiles, close-up teeth for treatment tiles),
real team in **ODL-blue scrubs**, real clinic interiors (the mirrored silver ODL
tooth sign above a row of glass award trophies). No heavy filters, no grain,
no duotone. Treatment thumbnails are tightly-cropped circular close-ups.

**Backgrounds.** Mostly flat white and flat pale tints — **no gradients, no textures,
no patterns**. Full-bleed photo appears in the hero (photo bleeds to the right, text
sits in a soft-white rounded panel over it) and in the closing "Ready to Transform"
band (team photo). Occasional pale-cyan section fills.

**Shadows.** Soft, cool-tinted, ambient — used to float cards and review chips off
the page. No inner shadows, no harsh drop shadows. Cyan CTAs may carry a faint cyan
glow.

**Borders.** Thin, light neutral hairlines (`#d1d1d1` / `#d9d9d9` / `#e3e3e3`) for
inputs, dividers and table rows. Brand cyan borders appear on some outlined/active
controls.

**Motion.** Understated. Quick fades, small hover lifts, gentle carousels for
reviews/treatments. No bounce, no dramatic parallax.

**Hover / press.** Buttons darken/deepen slightly and lift on hover (soft shadow
grows); pills may fill in on hover for outlined variants. Links move toward the
brand cyan. Press is a subtle settle (shadow reduces); no aggressive scale-down.

**Layout.** Centered max-width container (~1200px) with generous ~80px section
padding. A persistent top utility bar (address · phone · Contact Us) sits above the
main white nav with the logo left, links center, and a cyan pill "Book an
Appointment" right. Section headers are centered Title-Case with the content grid
below. Floating Google-review cards are pinned to the right edge of many sections.

---

## TREATMENT PAGE PATTERNS

The Invisalign and "Work With Us" pages are ODL's best-designed templates.
Reference renders live in `assets/reference/`. The section vocabulary:

1. **Hero** — full-bleed photo bleeding right; a **frosted translucent light panel**
   (rounded ~24px) over the left third holding a small action cluster (a white pill
   CTA plus two icon-only circular buttons — phone, calendar), a large charcoal
   Title-Case headline, and a two-line sub.
2. **Two-column intro** — pale-ice section. Eyebrow + heading + body paragraphs and
   a CTA on the left; a **white rounded card** on the right holding an accreditation
   logo or a video still with a play button.
3. **Numbered step cards** (`StepCard`) — 2-column grid of white rounded cards:
   rounded photo left, cyan numbered circle, optional small cyan "Book Now" (slightly
   rounded rect, *not* a pill), title, bold `Cost: £59`, hairline divider, body copy.
4. **Price tiles** (`PriceTile`) — row of 3–4: circular photo, option name,
   "From £xx per month", outline pill CTA with the cyan arrow chip.
5. **FAQ accordion** (`FaqList`) — centred heading over plain hairline-divided rows,
   question left, `+`/`−` right. No cards, no fills.
6. **Overlay photo strip** (`OverlayCard`) — 3-up rounded photos with bold white
   captions over a bottom-up dark protection gradient.
7. **List cards** (`ListCard`) — 3-up benefit cards alternating solid cyan (white text)
   and white, each an intro paragraph then hairline-divided list rows.
8. **Split text/photo** — heading + body + white pill CTA on one side, large rounded
   photo on the other. Used for "Why Choose Us" and closing sections.

**The CTA pattern.** Almost every button is a pill whose label is followed by a
**filled cyan circle containing an ↗ arrow**. Default is a white pill with a thin
dark hairline border and dark label; secondary is cyan hairline + cyan label. Solid
cyan is reserved for the nav's booking button.

---

## ICONOGRAPHY

- The site uses **simple, thin line icons** (single stroke, rounded joins) for the
  "Why Choose Us" feature circles, treatment/utility affordances (location pin,
  phone, calendar, search, chat) and form-field adornments. There is **no bespoke
  brand icon font** evident in the sources.
- **Section eyebrows carry ODL's own glyph** — a thin bowtie/hourglass mark
  (`assets/icons/ic-title.svg`, the site's `ic-title`) to the left of the label
  ("How We Do", "Proven Excellence"). This is a **real brand asset**, not a
  substitution; `Badge` inlines it as `TitleGlyph` so it inherits `currentColor`.
- **The CTA arrow** is an ↗ (arrow-up-right) inside a filled cyan circle — the most
  recognisable icon in the system. See `Button`.
- **Substitution (flagged):** since no icon assets were provided, this system uses
  **[Lucide](https://lucide.dev)** (thin, rounded, 1.5–2px stroke) via CDN as the
  closest match to the site's line-icon style. Swap for the real icon set if
  available. Documented in the `Icon` component.
- **Logos & badges are real files** shipped in `assets/`: the ODL primary logo, the
  Invisalign Diamond Apex badge, **22 award winner badges (2019–2025)** in
  `assets/badges/awards/`, and **5 accreditation marks** in
  `assets/badges/accreditations/` (General Dental Council, Care Quality Commission,
  British Orthodontic Society, BDA Good Practice Member, American Association of
  Orthodontists). Award badges run in horizontal proof rows at ~80px tall;
  accreditation marks sit smaller (~46px) in a separate, quieter row beneath.
  They are mixed formats and mixed aspect ratios — always constrain with
  `max-height` + `object-fit: contain`, never stretch.
- **Star ratings** (★) and the Google "G" mark appear on review chips.
- **No emoji, no Unicode glyphs** used as UI icons.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (link this one file); `@import`s all tokens.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry.

**tokens/** — CSS custom properties
- `fonts.css` — Manrope `@font-face`
- `colors.css` — brand, ink, border, surface + semantic aliases (no red — the
  palette is cyan + navy + neutrals only)
- `typography.css` — font stacks, weights, type scale, line-heights
- `spacing.css` — 4px grid, section rhythm, container widths
- `effects.css` — radii, shadows, focus ring, motion

**assets/** — `fonts/`, `logos/` (ODL logo, Invisalign Diamond Apex),
`icons/` (`ic-title.svg` — the eyebrow glyph),
`badges/awards/` (22 winner badges, 2019–2025), `badges/accreditations/`
(GDC, CQC, BOS, BDA, AAO), `images/` (team, clinicians, clinic sign, patient photos),
`reference/` (renders of the Invisalign and Work With Us pages — the best-designed
templates; use these as the layout reference for new treatment pages)

**components/** — reusable React primitives (see the Components group in the
Design System tab). Groups: `core/` (Button, Badge, Card, StatBlock, ReviewCard,
TreatmentCard, Icon), `forms/` (Input, Textarea), `sections/` (StepCard, PriceTile,
FaqList, ListCard, OverlayCard — the treatment-page blocks).

**ui_kits/website/** — high-fidelity recreation of the ODL marketing site
(homepage flow): header/utility bar, hero, awards row, "Why Choose Us" band,
treatments grid, practices, contact band, footer. Interactive booking modal.

**SKILL.md** (root) — Agent-Skills-compatible entry for use in Claude Code.

### Font substitution
None required — **Manrope is confirmed** as ODL's typeface (client-verified) and is
shipped here as the provided variable TTF. Headings and body are both Manrope.
