# Test Cases: Hero Section (F1.1–F1.5)

## Happy Path Test Cases

### TC1: Headline renders correctly
- [x] The headline text "AI Team. Không cần thuê dev." is visible on the page
- [x] The headline is rendered as an `<h1>` element
- [x] The headline is centered

### TC2: Subheadline renders correctly
- [x] A subheadline paragraph is visible below the headline
- [x] The subheadline text color is muted (gray or similar, not pure white)

### TC3: Primary CTA button "Bắt đầu ngay"
- [x] A button/link with text "Bắt đầu ngay" is visible
- [x] The button has a filled blue (#3B82F6) background
- [x] The button has a hover state (background darkens to a darker blue)

### TC4: Secondary CTA button "Xem cách hoạt động"
- [x] A button/link with text "Xem cách hoạt động" is visible
- [x] The button has an outlined style (border only, no fill)
- [x] The button uses blue (#3B82F6) for border and text
- [x] The button has a hover state

### TC5: Background and glow effect
- [x] The section has a dark background (#0a0a0f or similar dark color)
- [x] A blue gradient is present in the background
- [x] A glow effect is applied behind the headline (blue drop-shadow or blur element)

### TC6: Mobile responsive
- [x] Buttons stack vertically on small screens (flex-col on mobile)
- [x] Button widths are full-width on mobile, auto on larger screens
- [x] The heading font size adjusts responsively (smaller on mobile, larger on desktop)
- [x] Adequate padding/spacing for touch-friendly targets on mobile
