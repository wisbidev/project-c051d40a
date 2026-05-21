# Test Cases: Pipeline / How It Works Section

## SRS References: F2.1 – F2.5

### TC-PIPELINE-1: Section headline renders correctly
- [ ] Section displays the headline "Từ ý tưởng đến deploy hoàn toàn tự động"
- [ ] Headline is centered on the page
- [ ] Headline is visible at the top of the section

### TC-PIPELINE-2: Five steps are rendered
- [ ] Exactly 5 step cards are displayed
- [ ] Steps are rendered horizontally on desktop view (lg breakpoint and above)
- [ ] Steps stack vertically on mobile view

### TC-PIPELINE-3: Each step card contains icon, title, and description
- [ ] Each of the 5 cards displays an SVG icon
- [ ] Each card displays a title (bold/near-bold text)
- [ ] Each card displays a short description (smaller muted text)
- [ ] Card content matches the expected steps: "Gửi yêu cầu", "AI phân tích", "Dev viết code", "Test & Review", "Deploy tự động"

### TC-PIPELINE-4: Scroll-triggered entrance animation
- [ ] Cards animate (fade in / slide up) when scrolled into view
- [ ] Animation is subtle (opacity + translateY transition)
- [ ] Each card has a staggered delay (different cards animate at slightly different times)

### TC-PIPELINE-5: Connector between steps on desktop
- [ ] On desktop view, a visual connector (line/arrow) appears between consecutive steps
- [ ] Connector is hidden or not rendered on mobile view
