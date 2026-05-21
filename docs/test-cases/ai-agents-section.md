# Test Cases: AI Agents Section

Requirements source: SRS.md §2.3 (F3.1–F3.5)

## Happy Path Test Cases

- [x] **TC1**: Section renders 4 agent cards with names PM, TL, Dev, TestLead
- [x] **TC2**: Each card displays the agent name
- [x] **TC3**: Each card displays a list of responsibilities/tasks
- [x] **TC4**: Each card displays an SVG icon
- [x] **TC5**: Cards have dark background style (`bg-[#111118]`)
- [x] **TC6**: Cards have a light gray border (`border-gray-800`)
- [x] **TC7**: Hover effect changes border to blue and shows blue glow shadow (`hover:border-blue-500/*`, `hover:shadow-[*rgba(59,130,246,*)]`)
- [x] **TC8**: Grid layout is responsive: 4 columns on desktop (`lg:grid-cols-4`), 2 on tablet (`sm:grid-cols-2`), 1 on mobile (`grid-cols-1`)
- [x] **TC9**: Cards have scroll-triggered entrance animation (fade + slide up via IntersectionObserver)
- [x] **TC10**: Section has a heading "Đội ngũ AI Agents"
