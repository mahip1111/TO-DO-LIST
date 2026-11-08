# Project Progress & Changelog — iTask

---

## 📌 Version 1.0 — Initial MVP Release

### Overview
Version 1.0 marks the completion of the core Minimum Viable Product (MVP) for **iTask**, a modern, responsive single-page Todo application designed to manage daily tasks with ease and zero setup friction.

---

### 🚀 Key Features Implemented in v1.0

#### 1. Full CRUD Capabilities
- **Create (Add Task)**:
  - Text input with real-time state tracking (`todo`).
  - Validation check: Save button stays disabled unless the task has more than 3 characters (`disabled={todo.length <= 3}`).
  - Generates a guaranteed unique ID for every item using `uuidv4()`.
- **Read (Display Tasks)**:
  - Renders all todos dynamically with conditional rendering.
  - Friendly fallback empty state: *"No Todos to display"* when list is empty.
- **Update (Edit Task)**:
  - Quick edit button (`FaEdit` icon) loads the selected todo back into the input field for instant modification.
- **Delete (Remove Task)**:
  - Delete button (`AiFillDelete` icon) immediately removes the item from the state and local storage.

#### 2. Task Completion & Filtering
- **Checkbox Toggle**: Check off completed tasks, immediately applying a strike-through (`line-through`) visual cue.
- **Show/Hide Finished Tasks**: A dedicated toggle switch (`Show Finished`) allowing users to focus only on pending tasks or view all tasks.

#### 3. Data Persistence (`localStorage`)
- **Auto-Sync**: Any change (add, toggle, edit, delete) is synchronized with browser `localStorage`.
- **Hydration on Load**: An initial `useEffect` hook retrieves and parses existing tasks from storage on initial page load so data persists across browser sessions.

#### 4. UI / UX Design & Responsiveness
- **Tailwind CSS v4 Styling**: Clean violet/purple aesthetic with smooth hover and focus transitions.
- **Responsive Container**: Adaptive card layout (`md:w-[35%]`, `md:mx-auto`) optimized for mobile, tablet, and desktop screens.
- **Modern Icons**: Integrated standard iconography via `react-icons` (`FaEdit`, `AiFillDelete`).
- **Navbar Header**: Sleek top navigation bar displaying brand identity and navigation links.

---

### 🏗️ Technical Architecture (v1.0)

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | React 19 | Functional components & hooks (`useState`, `useEffect`) |
| **Bundler** | Vite 7 | Fast HMR (Hot Module Replacement) and optimized build |
| **Styling** | Tailwind CSS v4 | Utility-first styling with global overrides in `index.css` |
| **Icons** | React Icons | FontAwesome (`fa`) & Ant Design (`ai`) |
| **Unique Identifiers** | UUID v13 | Unique key management for efficient virtual DOM reconciliation |
| **Storage** | Browser `localStorage` | Client-side persistence without external database overhead |

---

### 📂 File Structure Overview

- [`src/App.jsx`](file:///c:/Users/gupta/Desktop/TO-DO-LIST/src/App.jsx) — Main state management, CRUD handlers, and layout.
- [`src/components/Navbar.jsx`](file:///c:/Users/gupta/Desktop/TO-DO-LIST/src/components/Navbar.jsx) — Reusable header component.
- [`src/index.css`](file:///c:/Users/gupta/Desktop/TO-DO-LIST/src/index.css) — Tailwind CSS v4 import and global body background color.
- [`src/main.jsx`](file:///c:/Users/gupta/Desktop/TO-DO-LIST/src/main.jsx) — DOM mounting and React root entry point.

---

### 🔮 Roadmap & Next Steps (v2.0 Considerations)

- [ ] **Task Priorities & Tags**: Categorize tasks (e.g., High, Medium, Low / Work, Personal).
- [ ] **Due Dates & Timers**: Add deadline dates with reminder badges.
- [ ] **Drag & Drop Reordering**: Ability to manually reorder tasks.
- [ ] **Dark Mode Support**: Theme switch between light and dark themes.
- [ ] **Search & Sort**: Filter todos by title keyword or creation date.

