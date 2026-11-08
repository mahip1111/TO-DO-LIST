# React StrictMode & Cleanup Function

## 1. What is StrictMode?

`StrictMode` is a special component provided by React.

It helps developers identify potential bugs in their React applications during development.

Example:

```jsx
import { StrictMode } from 'react';

<StrictMode>
  <App />
</StrictMode>
```

### Why do we use StrictMode?

It helps identify:

1. Impure rendering.
2. Missing `useEffect` cleanup.
3. Deprecated APIs.
4. Other potential problems in React code.

**Important:** StrictMode performs additional checks only in development. It does not perform these extra checks in production.

---

## 2. Development Mode vs Production Mode

| Development Mode | Production Mode |
|---|---|
| Used while building the application. | Used when the application is deployed. |
| Helps developers find bugs. | Optimized for real users. |
| StrictMode performs extra checks. | StrictMode does not perform extra development checks. |

---

## 3. What is a Cleanup Function?

A cleanup function is a function returned from `useEffect`.

It is used to clean up things created by an effect.

For example:
- Removing event listeners.
- Clearing timers.
- Unsubscribing from subscriptions.
- Aborting unnecessary API requests.

Syntax:

```jsx
useEffect(() => {

  // Effect logic

  return () => {
    // Cleanup logic
  };

}, []);
```

---

## 4. Real Example: Event Listener

Suppose we want to detect when a browser window is resized.

### Incorrect Code (Without Cleanup)

```jsx
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    function handleResize() {
      console.log("Window resized");
    }

    window.addEventListener("resize", handleResize);

  }, []);

  return <h1>Hello World</h1>;
}

export default App;
```

### Understanding the Problem

1. We created a function called `handleResize`.
2. We attached this function to the browser's resize event.
3. Whenever the window is resized, the function executes.
4. But we never removed the event listener.

**Problem:** The event listener remains attached even after the component is removed.

This can cause unnecessary resource usage and memory leaks.

---

## 5. How Does StrictMode Help?

In development, StrictMode performs an extra setup and cleanup cycle for effects.

Consider our incorrect code:

```text
1. Effect runs
       |
       ↓
2. Event listener gets attached
       |
       ↓
3. React performs cleanup
       |
       ↓
4. No cleanup function exists!
       |
       ↓
5. Effect runs again
       |
       ↓
6. Another event listener gets attached
```

Now when we resize the browser window, the same function can execute twice.

Console:

```text
Window resized
Window resized
```

This unexpected behavior gives us a clue that something might be wrong.

**Note:** StrictMode does not automatically display a warning saying "You forgot cleanup." We identify this problem by observing unexpected behavior and debugging.

---

## 6. Correct Code (With Cleanup)

```jsx
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    function handleResize() {
      console.log("Window resized");
    }

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return <h1>Hello World</h1>;
}

export default App;
```

### Understanding the Cleanup

```jsx
return () => {
  window.removeEventListener("resize", handleResize);
};
```

This function removes the event listener that we previously attached.

Now StrictMode performs:

```text
1. Effect runs
       |
       ↓
2. Listener gets attached
       |
       ↓
3. Cleanup runs
       |
       ↓
4. Previous listener gets removed
       |
       ↓
5. Effect runs again
       |
       ↓
6. New listener gets attached
```

Now only one active listener remains.

Console when resizing:

```text
Window resized
```

---

## 7. Another Example: API Calls

Consider this code:

```jsx
useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));

}, []);
```

In development with StrictMode, the effect can run twice.

Therefore, you may see two API requests in the browser's Network tab.

This is not necessarily an API bug.

It is React helping you identify that your effect needs to handle repeated setup correctly.

For API requests, we can use `AbortController` to cancel an outdated request.

---

## 8. How Can We Identify Bugs?

StrictMode does not always show a direct warning.

We can identify potential problems through:

| Problem | How to identify it |
|---|---|
| Impure rendering | Unexpected output or duplicate side effects |
| Missing cleanup | Duplicate listeners, subscriptions, or timers |
| Repeated API requests | Browser Network tab |
| Deprecated APIs | React console warnings |

### Useful debugging tools

1. Browser Console – To check errors and unexpected logs.
2. Network Tab – To inspect API requests.
3. React Developer Tools – To inspect components and their behavior.

---

## 9. Important Points to Remember

- StrictMode is a development tool.
- It helps identify potential bugs.
- It can run component rendering logic extra times in development.
- It performs an extra setup and cleanup cycle for effects in development.
- Cleanup functions prevent unwanted resources from remaining active.
- StrictMode does not automatically fix bugs.
- Not every bug produces a direct warning.
- Keeping StrictMode enabled is recommended.

### Golden Concept

**StrictMode does not create bugs intentionally. It helps expose hidden problems in our code so that we can fix them before deploying our application.**
