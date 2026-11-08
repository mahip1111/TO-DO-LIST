# React Todo App – Complete App.jsx Notes

> Beginner to Intermediate | Easy Hinglish | Code + Logic + Dry Runs

## Table of Contents

1. Import Statements
2. React Component – App()
3. useState
4. LocalStorage
5. JSON.stringify() and JSON.parse()
6. useEffect
7. saveToLS()
8. Event Object (e)
9. e.target, e.target.value, e.target.name
10. handleChange()
11. handleAdd()
12. Spread Operator
13. UUID
14. handleDelete()
15. filter()
16. handleEdit()
17. findIndex()
18. handleCheckbox()
19. map()
20. Conditional Rendering
21. Ternary Operator
22. Controlled Input
23. JSX and Fragment
24. React Keys
25. StrictMode
26. Complete Application Flow
27. Common Bugs and Improvements
28. Interview Revision Questions

---

# 1. Import Statements

Our App.jsx starts with:

```jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'
```

### What is import?

Import means bringing something from another file or library into our current file so that we can use it.

### 1.1 useState

```jsx
import { useState } from 'react'
```

- Used to manage data inside a React component.
- When state changes, React re-renders the component.

### 1.2 useEffect

```jsx
import { useEffect } from 'react'
```

- Used to perform side effects.
- Example: Reading or writing data in LocalStorage.

### 1.3 Navbar

```jsx
import Navbar from './components/Navbar'
```

We are importing our Navbar component from the components folder.

We can use it like:

```jsx
<Navbar />
```

### 1.4 React Icons

```jsx
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
```

These imports provide Edit and Delete icons.

### 1.5 UUID

```jsx
import { v4 as uuidv4 } from 'uuid'
```

UUID stands for Universally Unique Identifier.

It generates a unique ID for every Todo.

Example:

```jsx
uuidv4()
```

Might generate:

```text
550e8400-e29b-41d4-a716-446655440000
```

**Understanding the import:**

- `uuid` = Library name.
- `v4` = Function exported by the library.
- `as uuidv4` = Giving the imported function another name.

Example:

```jsx
id: uuidv4()
```

Every time we call `uuidv4()`, it generates a new ID.

Why do we need IDs?

Because we need to identify exactly which Todo the user wants to edit, delete or complete.

---

# 2. React Component – App()

```jsx
function App() {
  return (
    <h1>Hello World</h1>
  )
}

export default App
```

A React component is a JavaScript function that returns JSX.

### Important terms

- `function App()` = Creating a component.
- `return` = Returning the UI.
- `export default App` = Making this component available to other files.

Example:

```jsx
import App from './App'
```

---

# 3. useState – State Management

This is one of the most important React concepts.

### What is State?

State is data that React manages inside a component.

When state changes, React updates the UI.

### Syntax

```jsx
const [value, setValue] = useState(initialValue)
```

Three parts:

| Part | Meaning |
|---|---|
| value | Current state value |
| setValue | Function to update state |
| initialValue | Initial state |

Example:

```jsx
const [name, setName] = useState("Manav")
```

To update:

```jsx
setName("Rahul")
```

React updates the state and re-renders the component.

### Three states in our Todo App

#### A. todo

```jsx
const [todo, setTodo] = useState("")
```

Purpose: Stores the currently typed Todo.

Example:

```jsx
todo = "Learn React"
```

#### B. todos

```jsx
const [todos, setTodos] = useState([])
```

Purpose: Stores all Todos.

Example:

```jsx
todos = [
  {
    id: "123",
    todo: "Learn React",
    isCompleted: false
  },
  {
    id: "456",
    todo: "Learn DSA",
    isCompleted: true
  }
]
```

Remember:

- `todo` = Single task text.
- `todos` = Array containing all task objects.

#### C. showFinished

```jsx
const [showFinished, setshowFinished] = useState(true)
```

Purpose: Controls whether completed tasks should be displayed.

| Value | Meaning |
|---|---|
| true | Show completed tasks |
| false | Hide completed tasks |

---

# 4. LocalStorage

### What is LocalStorage?

LocalStorage is browser storage that allows us to save data even after refreshing the page.

Suppose a user adds three Todos.

If we only use React state, the initial state returns after a page refresh.

To preserve data, we use LocalStorage.

### Three important methods

**1. Save data**

```jsx
localStorage.setItem("name", "Manav")
```

**2. Get data**

```jsx
localStorage.getItem("name")
```

Output:

```text
Manav
```

**3. Remove data**

```jsx
localStorage.removeItem("name")
```

---

# 5. JSON.stringify() and JSON.parse()

LocalStorage stores data as strings.

But our Todos are stored as JavaScript arrays and objects.

We need to convert between them.

### JSON.stringify()

Converts JavaScript objects/arrays into JSON strings.

```jsx
const user = {
  name: "Manav"
}

JSON.stringify(user)
```

Output:

```json
{"name":"Manav"}
```

### JSON.parse()

Converts a JSON string back into JavaScript data.

```jsx
JSON.parse('{"name":"Manav"}')
```

Output:

```jsx
{
  name: "Manav"
}
```

### Remember

```text
JavaScript Object/Array
        |
        | JSON.stringify()
        ↓
JSON String
        |
        | JSON.parse()
        ↓
JavaScript Object/Array
```

---

# 6. useEffect()

### What is useEffect?

useEffect is used to perform side effects in a React component.

Example:
- Fetching data from APIs.
- Reading browser storage.
- Setting up subscriptions.
- Synchronizing external systems.

### Syntax

```jsx
useEffect(() => {
  // Side effect code
}, [dependencies])
```

### Empty dependency array

```jsx
useEffect(() => {
  console.log("Component mounted")
}, [])
```

This effect runs after the initial mount.

In development, StrictMode can run an extra setup/cleanup cycle.

### Our Todo App useEffect

```jsx
useEffect(() => {
  let todoString = localStorage.getItem("todos")

  if (todoString) {
    let todos = JSON.parse(todoString)
    setTodos(todos)
  }
}, [])
```

### Step-by-step execution

1. User opens the application.
2. React renders the App component.
3. useEffect runs after the initial commit.
4. LocalStorage retrieves saved Todos.
5. `if(todoString)` checks whether data exists.
6. `JSON.parse()` converts the string into an array.
7. `setTodos(todos)` updates React state.
8. React re-renders and displays saved tasks.

---

# 7. saveToLS()

Original code:

```jsx
const saveToLS = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}
```

Purpose: Save Todos in LocalStorage.

Breakdown:

```jsx
localStorage.setItem(
  "todos",
  JSON.stringify(todos)
)
```

- `"todos"` = LocalStorage key.
- `JSON.stringify(todos)` = Converts array into a string.
- `setItem()` = Saves the string.

### Important React concept: State updates

Consider:

```jsx
setTodos([...todos, newTodo])
saveToLS()
```

Do not assume that `saveToLS()` will automatically read the newly updated state.

React schedules state updates. The current render's state value does not immediately change.

A better approach is:

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

Now whenever `todos` changes, LocalStorage gets updated.

---

# 8. Event Object – e

When a user interacts with an element, such as clicking a button or typing into an input, an event occurs.

React provides information about that event through an event object.

Example:

```jsx
const handleChange = (e) => {
  console.log(e)
}
```

Here `e` represents the event object.

### What is the difference between e and id?

Example:

```jsx
const handleEdit = (e, id) => {
  // Code
}
```

| e | id |
|---|---|
| Event information | Todo identity |
| React provides it when the handler runs | We pass it ourselves |
| Tells us about the interaction | Tells us which Todo is selected |

Example:

```jsx
<button onClick={(e) => handleEdit(e, item.id)}>
  Edit
</button>
```

Here:

- `e` = Click event.
- `item.id` = Selected Todo's ID.

---

# 9. e.target, e.target.value, e.target.name

These three are very important.

### e.target

Returns the HTML element on which the event occurred.

Example:

```jsx
e.target
```

Might represent:

```html
<input type="text" name="todo" />
```

### e.target.value

Returns the current value of that element.

Example:

```jsx
<input value="Learn React" />
```

Then:

```jsx
e.target.value
```

Returns:

```text
Learn React
```

### e.target.name

Returns the name attribute of that element.

Example:

```jsx
<input name="username" />
```

Then:

```jsx
e.target.name
```

Returns:

```text
username
```

### Quick revision

| Expression | Meaning |
|---|---|
| e.target | Actual HTML element |
| e.target.value | Element's current value |
| e.target.name | Element's name attribute |

---

# 10. handleChange()

Our code:

```jsx
const handleChange = (e) => {
  setTodo(e.target.value)
}
```

Input:

```jsx
<input
  onChange={handleChange}
  value={todo}
/>
```

### Why do we need handleChange?

Because we want to store whatever the user types inside React state.

Suppose user types:

```text
Learn React
```

Flow:

```text
User types Learn React
        ↓
onChange event triggers
        ↓
handleChange(e) executes
        ↓
e.target.value gets Learn React
        ↓
setTodo("Learn React")
        ↓
React state updates
        ↓
Component re-renders
```

### What happens without handleChange?

Consider:

```jsx
const [todo, setTodo] = useState("")

<input value={todo} />
```

Here the input value is controlled by React state.

But there is no handler to update that state.

Therefore, the user cannot properly type into this controlled input.

### Important

- `value={todo}` = Input value comes from React state.
- `onChange={handleChange}` = Detects user changes.
- `setTodo()` = Updates the state.

---

# 11. Controlled Input

A controlled input is an input whose value is controlled by React state.

Example:

```jsx
const [name, setName] = useState("")

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

The flow:

```text
User types
   ↓
onChange runs
   ↓
State updates
   ↓
React re-renders
   ↓
Input displays updated state
```

This is called a controlled input.

---

# 12. handleAdd()

Our original code:

```jsx
const handleAdd = () => {
  setTodos([
    ...todos,
    {
      id: uuidv4(),
      todo,
      isCompleted: false
    }
  ])

  setTodo("")
  saveToLS()
}
```

Purpose: Add a new Todo.

### Step-by-step explanation

**Step 1:**

```jsx
setTodos([...todos, newTodo])
```

Adds a new task to the existing array.

**Step 2:**

```jsx
id: uuidv4()
```

Generates a unique ID.

**Step 3:**

```jsx
todo
```

Stores the current input text.

Equivalent to:

```jsx
todo: todo
```

This is JavaScript object property shorthand.

**Step 4:**

```jsx
isCompleted: false
```

New Todo is initially incomplete.

**Step 5:**

```jsx
setTodo("")
```

Clears the input after adding a task.

### Example

Before:

```jsx
todos = [
  { id: "111", todo: "Learn HTML" }
]
```

After:

```jsx
todos = [
  { id: "111", todo: "Learn HTML" },
  {
    id: "222",
    todo: "Learn React",
    isCompleted: false
  }
]
```

---

# 13. Spread Operator (...)

Spread operator expands the elements of an array or object.

Example:

```jsx
const arr = [10, 20, 30]

const newArr = [...arr, 40]
```

Output:

```jsx
[10, 20, 30, 40]
```

In our Todo App:

```jsx
setTodos([...todos, newTodo])
```

Means:

1. Copy the existing Todos into a new array.
2. Add the new Todo.
3. Update React state.

**Important:** Spread creates a shallow copy, not a deep copy.

---

# 14. handleDelete()

Original code:

```jsx
const handleDelete = (e, id) => {
  let newTodos = todos.filter(item => {
    return item.id !== id
  })

  setTodos(newTodos)
}
```

Purpose: Delete a particular Todo.

### What is filter()?

filter() creates a new array containing only elements that satisfy a condition.

Example:

```jsx
const numbers = [10, 20, 30, 40]

const result = numbers.filter(num => num !== 20)
```

Output:

```jsx
[10, 30, 40]
```

### Applying it to Todos

Suppose:

```jsx
todos = [
  { id: "111", todo: "HTML" },
  { id: "222", todo: "CSS" },
  { id: "333", todo: "React" }
]
```

We want to delete ID 333.

```jsx
todos.filter(item => item.id !== "333")
```

The result:

```jsx
[
  { id: "111", todo: "HTML" },
  { id: "222", todo: "CSS" }
]
```

Then:

```jsx
setTodos(newTodos)
```

React updates the UI.

### Remember

- filter() returns a new array.
- The original array is not modified.
- We use the ID to identify which Todo to remove.

---

# 15. handleEdit()

Original code:

```jsx
const handleEdit = (e, id) => {
  let t = todos.filter(i => i.id === id)

  setTodo(t[0].todo)

  let newTodos = todos.filter(item => {
    return item.id !== id
  })

  setTodos(newTodos)
}
```

Purpose: Edit an existing Todo.

### Step 1: Find the selected Todo

```jsx
let t = todos.filter(i => i.id === id)
```

This returns an array containing the selected Todo.

### Step 2: Put its text into the input

```jsx
setTodo(t[0].todo)
```

Why `t[0]`?

Because filter() returns an array.

Example:

```jsx
t = [
  { id: "111", todo: "Learn HTML" }
]
```

`t[0]` gives the first object.

`t[0].todo` gives:

```text
Learn HTML
```

### Step 3: Remove the old Todo

```jsx
let newTodos = todos.filter(item => item.id !== id)
```

The selected Todo is removed from the list.

### Step 4: Update state

```jsx
setTodos(newTodos)
```

Now the user can edit the text in the input and save it again.

### Important limitation

This simple edit approach removes the old Todo and creates another one when saved.

It does not preserve the original ID or completion status.

A better edit implementation uses a separate editing state and updates the existing object.

---

# 16. handleCheckbox()

Original code:

```jsx
const handleCheckbox = (e) => {
  let id = e.target.name

  let index = todos.findIndex(item => {
    return item.id === id
  })

  let newTodos = [...todos]

  newTodos[index].isCompleted =
    !newTodos[index].isCompleted

  setTodos(newTodos)
}
```

Purpose: Mark a Todo as completed or incomplete.

### Step 1: Get the selected Todo ID

```jsx
let id = e.target.name
```

Our checkbox:

```jsx
<input name={item.id} />
```

So the checkbox's name contains the Todo ID.

### Step 2: Find its array position

```jsx
let index = todos.findIndex(item => item.id === id)
```

What is findIndex()?

It returns the index of the first element that satisfies a condition.

Example:

```jsx
const numbers = [10, 20, 30]

numbers.findIndex(num => num === 20)
```

Output:

```text
1
```

Remember: Array indexing starts from 0.

### Step 3: Copy the array

```jsx
let newTodos = [...todos]
```

Creates a shallow copy.

### Step 4: Toggle completion

```jsx
newTodos[index].isCompleted =
  !newTodos[index].isCompleted
```

What is `!`?

It is the NOT operator.

| Previous | New |
|---|---|
| false | true |
| true | false |

### Step 5: Update state

```jsx
setTodos(newTodos)
```

React updates the UI.

### Better immutable approach

```jsx
const newTodos = todos.map(item =>
  item.id === id
    ? { ...item, isCompleted: !item.isCompleted }
    : item
)

setTodos(newTodos)
```

This creates a new array and a new object for the changed Todo instead of mutating the existing object.

---

# 17. map()

map() is used to transform every element of an array and returns a new array.

Example:

```jsx
const numbers = [1, 2, 3]

const result = numbers.map(num => num * 2)
```

Output:

```jsx
[2, 4, 6]
```

### In React

We use map() to display multiple Todos.

```jsx
todos.map(item => {
  return (
    <div key={item.id}>
      {item.todo}
    </div>
  )
})
```

Suppose todos contains three objects.

map() executes three times and creates three Todo UI elements.

---

# 18. Conditional Rendering

Conditional rendering means displaying UI based on a condition.

Example:

```jsx
{todos.length === 0 && (
  <div>No Todos to display</div>
)}
```

Meaning:

If the Todos array is empty, show this message.

### Understanding &&

```jsx
true && "Hello"
```

Returns:

```text
Hello
```

But:

```jsx
false && "Hello"
```

Does not render the Hello text in JSX.

### Hide completed tasks

```jsx
(showFinished || !item.isCompleted) && (
  <div>
    {item.todo}
  </div>
)
```

Logic:

| showFinished | isCompleted | Display |
|---|---|---|
| true | true | Yes |
| true | false | Yes |
| false | true | No |
| false | false | Yes |

`||` means OR.

`!` means NOT.

---

# 19. Ternary Operator

Syntax:

```jsx
condition ? valueIfTrue : valueIfFalse
```

Our code:

```jsx
<div className={
  item.isCompleted ? "line-through" : ""
}>
  {item.todo}
</div>
```

Meaning:

- If completed, apply line-through.
- Otherwise, apply an empty class.

---

# 20. JSX and Fragment

JSX allows us to write HTML-like syntax inside JavaScript.

Example:

```jsx
return (
  <h1>Hello</h1>
)
```

### Fragment

```jsx
<>
  <Navbar />
  <div>Hello</div>
</>
```

Fragment lets us return multiple elements without adding an unnecessary parent div.

### className vs class

In JSX:

```jsx
<div className="container">
```

We use `className` instead of HTML's `class`.

---

# 21. React Keys

Example:

```jsx
todos.map(item => (
  <div key={item.id}>
    {item.todo}
  </div>
))
```

Why do we use keys?

React needs a stable identity for each element in a rendered list.

When an item is added or deleted, keys help React identify which items changed.

Use unique and stable IDs whenever possible.

Avoid array indexes as keys when list items can be added, removed or reordered.

---

# 22. StrictMode

Example:

```jsx
import { StrictMode } from 'react'

<StrictMode>
  <App />
</StrictMode>
```

StrictMode is a development-only helper that helps detect potential problems.

It can:

- Run additional development checks.
- Run an extra setup/cleanup cycle for Effects.
- Help identify impure rendering and lifecycle issues.

### Important

StrictMode does not cause every JavaScript error.

Example:

```jsx
<input onChange={handleChange} />
```

If `handleChange` is undefined, JavaScript throws:

```text
ReferenceError: handleChange is not defined
```

This error also happens without StrictMode.

---

# 23. Complete Application Flow

This is the most important section.

Understand how every concept connects.

```text
             USER OPENS APP
                    |
                    v
              App() renders
                    |
                    v
              useState runs
                    |
                    v
             useEffect runs
                    |
                    v
          Read LocalStorage data
                    |
                    v
             setTodos(data)
                    |
                    v
            Todos displayed
                    |
                    v
           USER INTERACTION
                    |
          +---------+---------+
          |         |         |
          v         v         v
         Add       Edit     Delete
          |         |         |
          +---------+---------+
                    |
                    v
             setTodos()
                    |
                    v
             React re-renders
                    |
                    v
            useEffect runs
                    |
                    v
          Save in LocalStorage
```

### Remember the main responsibilities

| Concept | Responsibility |
|---|---|
| useState | Store application data |
| useEffect | Synchronize with external systems |
| LocalStorage | Persist data in browser |
| JSON.stringify | Convert data into string |
| JSON.parse | Convert string into data |
| UUID | Generate unique IDs |
| handleChange | Update input state |
| handleAdd | Add a Todo |
| handleEdit | Edit a Todo |
| handleDelete | Delete a Todo |
| handleCheckbox | Toggle completion |
| map | Display multiple Todos |
| filter | Keep matching elements |
| findIndex | Find array position |
| Spread operator | Copy and expand data |
| Conditional rendering | Display UI based on conditions |

---

# 24. Common Bugs and Improvements

### Bug 1: handleChange is not defined

If you remove:

```jsx
const handleChange = (e) => {
  setTodo(e.target.value)
}
```

But keep:

```jsx
<input onChange={handleChange} />
```

JavaScript throws:

```text
ReferenceError: handleChange is not defined
```

Why?

Because JSX is trying to access a function that no longer exists.

### Bug 2: Saving old state

Avoid depending on this sequence:

```jsx
setTodos(newTodos)
saveToLS()
```

Instead, synchronize LocalStorage with state:

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

### Bug 3: Mutating state objects

Avoid directly modifying nested objects:

```jsx
newTodos[index].isCompleted = true
```

Prefer creating new objects:

```jsx
const newTodos = todos.map(item =>
  item.id === id
    ? { ...item, isCompleted: !item.isCompleted }
    : item
)
```

### Bug 4: JSON parsing errors

JSON.parse can throw an error if the stored string is invalid JSON.

For production code, handle parsing errors appropriately.

---

# 25. Interview Revision Questions

Try answering these without looking at the notes.

1. What is the difference between state and normal JavaScript variables?
2. What does useState return?
3. Why do we use useEffect?
4. What is the difference between useEffect with `[]` and `[todos]`?
5. Why do we need LocalStorage?
6. What is the difference between JSON.stringify and JSON.parse?
7. What is the difference between todo and todos?
8. What is a controlled input?
9. Why do we need handleChange?
10. What is an event object?
11. What is the difference between e and id?
12. What is e.target?
13. What is e.target.value?
14. What is e.target.name?
15. What is the purpose of UUID?
16. How does the spread operator work?
17. What is the difference between map() and filter()?
18. What does findIndex() return?
19. Why do we use keys in React lists?
20. What is conditional rendering?
21. What is the purpose of StrictMode?
22. Why can an undefined handler crash an application?

---

# Final Revision: Understand These Five Connections

If you understand these five connections, you will understand most of your Todo App.

**1. Input and State**

```jsx
<input
  value={todo}
  onChange={handleChange}
/>
```

Input is connected to React state.

**2. Adding Todos**

```jsx
setTodos([
  ...todos,
  {
    id: uuidv4(),
    todo,
    isCompleted: false
  }
])
```

Existing tasks plus a new task.

**3. Updating Todos**

```jsx
setTodos(newTodos)
```

Tell React that the Todo array has changed.

**4. Displaying Todos**

```jsx
todos.map(item => (
  <div key={item.id}>
    {item.todo}
  </div>
))
```

Convert every Todo object into UI.

**5. Saving Todos**

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

Whenever the Todos state changes, synchronize it with LocalStorage.

---

**Your learning goal:**

Do not memorize the code.

Try to explain:

- Where does the data come from?
- Where is it stored?
- Which function changes it?
- How does React know that something changed?
- How does the updated data reach the screen?
- How does the data survive a refresh?

If you can answer these six questions, you have understood the core logic of your React Todo App.