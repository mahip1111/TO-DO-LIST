# iTask Todo App -- Complete JSX Notes

## Super Easy Hinglish Guide (Beginner to Interview Level)

> Goal: Is document ko padhne ke baad tum apne iTask component ke JSX ko
> line-by-line samajh paoge: har tag, attribute, React concept,
> JavaScript expression aur Tailwind class ka purpose.

------------------------------------------------------------------------

# 0. Sabse pehle: JSX kya hota hai?

React mein hum UI banane ke liye JSX likhte hain.

JSX dekhne mein HTML jaisa lagta hai, lekin ye JavaScript ke andar likha
jaata hai.

Example:

``` jsx
function App() {
  return <h1>Hello React</h1>;
}
```

-   `function App()` ek React component define karta hai.
-   `return` batata hai ki component kya UI dikhayega.
-   `<h1>` JSX element hai.
-   `Hello React` screen par dikhne wala text hai.

**HTML aur JSX mein ek difference:** HTML mein `class` likhte hain, JSX
mein `className` likhte hain.

``` jsx
<div className="box">Hello</div>
```

JSX mein JavaScript expression likhne ke liye curly braces `{ }` use
karte hain.

``` jsx
<h1>{todo}</h1>
```

Agar `todo` ki value `"Learn React"` hai, toh screen par `Learn React`
dikhega.

------------------------------------------------------------------------

# 1. Tumhare component ka overall structure

Tumhara return section:

``` jsx
return (
  <>
    <Navbar />

    <div className="...">
      <h1>iTask - Manage your todos at one place</h1>

      <div className="addTodo ...">
        <h2>Add a Todo</h2>
        <div className="flex">
          <input />
          <button>Save</button>
        </div>
      </div>

      <input type="checkbox" />
      <label>Show Finished</label>

      <div></div>

      <h2>Your Todos</h2>

      <div className="todos">
        {/* Empty message and todo list */}
      </div>
    </div>
  </>
);
```

Is UI ko chaar main parts mein samjho:

1.  **Navbar** -- app ka navigation area.
2.  **Add a Todo** -- naya task enter aur save karne ka area.
3.  **Show Finished** -- completed tasks ko show/hide karne ka checkbox.
4.  **Your Todos** -- saved tasks ki list, jahan checkbox, edit aur
    delete actions hain.

------------------------------------------------------------------------

# 2. React Fragment: `<> </>`

Tumhare code mein:

``` jsx
return (
  <>
    <Navbar />
    <div>...</div>
  </>
);
```

React component ko ek parent JSX element return karna hota hai. Agar tum
sibling elements ko directly return karoge, toh JSX error dega.

❌ Aisa nahi:

``` jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

✅ Ek option: `div` parent use karo:

``` jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

✅ Dusra option: Fragment use karo:

``` jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

**Fragment ka kaam:** Multiple elements ko ek group mein rakhna, bina
extra HTML element create kiye.

-   `div` use karoge toh DOM mein extra `<div>` aayega.
-   Fragment use karoge toh extra wrapper element nahi aayega.

`<> </>` Fragment ka short syntax hai. Full syntax
`<React.Fragment>...</React.Fragment>` bhi hota hai.

------------------------------------------------------------------------

# 3. Navbar component: `<Navbar />`

``` jsx
<Navbar />
```

`Navbar` tumhara custom React component hai.

Example:

``` jsx
function Navbar() {
  return (
    <nav>
      <h2>My Website</h2>
    </nav>
  );
}
```

Ab `<Navbar />` likhne par React us component ka UI render karta hai.

**Component ka benefit -- Reusability:** Ek component ek baar banao aur
zaroorat ke hisaab se multiple jagah use karo.

Yaad rakho: - HTML tags generally lowercase hote hain: `<div>`,
`<h1>`. - React component names capital letter se start hote hain:
`<Navbar />`, `<TodoItem />`.

------------------------------------------------------------------------

# 4. Main container

Tumhari line:

``` jsx
<div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
```

Ye main wrapper hai. Iske andar app ka baaki content hai.

## 4.1 `className` kyun?

HTML mein `class` hota hai. JSX mein `className` use hota hai:

``` jsx
<div className="box">Content</div>
```

## 4.2 Har Tailwind class ka meaning

  Class             Easy meaning
  ----------------- ---------------------------------------------
  `mx-3`            Left aur right margin
  `md:container`    Medium breakpoint se container styling
  `md:mx-auto`      Medium breakpoint se horizontal auto margin
  `my-5`            Top aur bottom margin
  `rounded-xl`      Corners ko rounded banana
  `p-5`             Chaaron taraf padding
  `bg-violet-100`   Light violet background
  `min-h-[80vh]`    Minimum height viewport height ka 80%
  `md:w-[35%]`      Medium breakpoint se width 35%

### Margin aur padding ka simple difference

-   **Margin:** Element ke bahar ki space.
-   **Padding:** Element ke andar, content aur boundary ke beech ki
    space.

Example socho: ek box hai. - Box aur doosre box ke beech ki distance =
margin. - Box ki boundary aur uske text ke beech ki distance = padding.

### `mx` aur `my`

-   `mx-3`: x-axis, yani left + right.
-   `my-5`: y-axis, yani top + bottom.

### `rounded-xl`

Box ke corners ko round karta hai.

### `bg-violet-100`

Element ka background light violet banata hai.

### `min-h-[80vh]`

-   `min-h` = minimum height.
-   `vh` = viewport height, yani browser window ki visible height.
-   `80vh` = visible browser height ka 80%.

Agar viewport height 1000px hai, toh 80vh = 800px.

### `md:` ka matlab

`md:` Tailwind ka responsive breakpoint prefix hai. Iska style medium
screen aur usse badi screens par apply hota hai.

Example:

``` jsx
<div className="mx-3 md:mx-auto">
```

-   Small screen par `mx-3`.
-   Medium aur bigger screen par `md:mx-auto` bhi apply hota hai.

**Note:** Tailwind ke default `md` breakpoint ka exact pixel value
Tailwind version/configuration par depend kar sakta hai.

------------------------------------------------------------------------

# 5. Main heading

``` jsx
<h1 className="font-bold text-center text-3xl">
  iTask - Manage your todos at one place
</h1>
```

-   `<h1>`: Page ki main heading.
-   `font-bold`: Text bold.
-   `text-center`: Text horizontally center.
-   `text-3xl`: Text ka size bada.

HTML heading levels `h1` se `h6` tak hote hain. Heading level content ki
hierarchy batata hai; sirf size ke liye heading choose nahi karni
chahiye.

------------------------------------------------------------------------

# 6. Add Todo section

``` jsx
<div className="addTodo my-5 flex flex-col gap-4">
  <h2 className="text-2xl font-bold">Add a Todo</h2>
  <div className="flex">
    ...
  </div>
</div>
```

Ye section naya task add karne ke liye hai.

Classes:

-   `addTodo`: Custom CSS class name. Iska visual effect tab hoga jab
    CSS mein `.addTodo` style define ki ho.
-   `my-5`: Top aur bottom margin.
-   `flex`: Flexbox layout on karta hai.
-   `flex-col`: Children ko column direction mein, yani ek ke neeche ek
    rakhta hai.
-   `gap-4`: Direct children ke beech gap/space deta hai.

### Flexbox kya hai?

Flexbox CSS layout system hai. Isse hum elements ko row ya column mein
arrange kar sakte hain.

``` jsx
<div className="flex">
  <div>One</div>
  <div>Two</div>
</div>
```

Default direction `row` hoti hai: One aur Two side-by-side.

``` jsx
<div className="flex flex-col">
  <div>One</div>
  <div>Two</div>
</div>
```

`flex-col` lagane par One aur Two vertically arrange honge.

### Add Todo heading

``` jsx
<h2 className="text-2xl font-bold">Add a Todo</h2>
```

-   `h2`: Section heading.
-   `text-2xl`: Font size.
-   `font-bold`: Bold font.

------------------------------------------------------------------------

# 7. Input aur Save button ka row

``` jsx
<div className="flex">
  <input />
  <button>Save</button>
</div>
```

Parent par `flex` hone se input aur button default row direction mein
side-by-side aate hain.

Tumhare app mein input available width leta hai aur Save button uske
side mein rehta hai.

------------------------------------------------------------------------

# 8. Input field -- sabse important React concept

Tumhara actual input:

``` jsx
<input
  onChange={handleChange}
  value={todo}
  type="text"
  className="w-full rounded-full px-5 py-1 outline outline-2 outline-violet-500 focus:shadow-lg focus:shadow-violet-200 transition-all duration-200"
/>
```

Isko parts mein samjho.

## 8.1 `type="text"`

Browser ko batata hai ki ye text input field hai. User ismein text type
kar sakta hai.

## 8.2 `value={todo}`

`todo` React state variable hai.

Example state:

``` jsx
const [todo, setTodo] = useState("");
```

`useState` React Hook hai jo component ko data yaad rakhne deta hai.

Is line ko teen parts mein samjho:

-   `todo`: Current state value.
-   `setTodo`: State update karne ka function.
-   `""`: Initial value, yani shuru mein empty string.

Agar `todo` ki value `"Learn React"` hai, toh input mein `"Learn React"`
dikhai dega.

Curly braces `{todo}` ka matlab hai JSX ke andar JavaScript variable ki
value use karna.

## 8.3 `onChange={handleChange}`

`onChange` input ki value change hone par event handler chalata hai.

Example:

``` jsx
const handleChange = (e) => {
  setTodo(e.target.value);
};
```

Ab har part:

-   `e`: Event object. Browser event ki information deta hai.
-   `e.target`: Jis element par event hua, yahan input.
-   `e.target.value`: Input ke andar abhi jo text hai.
-   `setTodo(...)`: React state update karta hai.

### Dry run

User input mein `H` type karta hai:

``` js
e.target.value // "H"
setTodo("H");
```

Phir user `i` type karta hai:

``` js
e.target.value // "Hi"
setTodo("Hi");
```

Ab React state `todo` ki value `"Hi"` hai.

### Data flow yaad rakho

``` text
User types in input
        ↓
onChange event fires
        ↓
handleChange(e) runs
        ↓
e.target.value gets input text
        ↓
setTodo(newText) updates state
        ↓
React re-renders component
        ↓
value={todo} displays updated value
```

## 8.4 Controlled component kya hai?

Jab React state input ki value control karti hai, us input ko
**controlled input/component** kehte hain.

``` jsx
<input value={todo} onChange={handleChange} />
```

-   `value` state se current value deta hai.
-   `onChange` user ke naye input ko state mein update karta hai.

Dono ka combination important hai. Sirf `value` dene par input read-only
jaisa ho sakta hai, agar state update karne ka handler nahi diya.

## 8.5 Input ki Tailwind classes

  -----------------------------------------------------------------------
  Class                               Meaning
  ----------------------------------- -----------------------------------
  `w-full`                            Parent ki available full width lene
                                      ki koshish

  `rounded-full`                      Corners ko fully rounded banana

  `px-5`                              Left-right padding

  `py-1`                              Top-bottom padding

  `outline`                           Outline style apply karna

  `outline-2`                         Outline ki thickness 2px

  `outline-violet-500`                Outline ka violet shade

  `focus:shadow-lg`                   Focus par large shadow

  `focus:shadow-violet-200`           Focus shadow ka violet shade

  `transition-all`                    Animatable properties ke changes ko
                                      transition karna

  `duration-200`                      Transition duration 200
                                      milliseconds
  -----------------------------------------------------------------------

### Border vs outline vs shadow

-   **Border:** Element ki actual boundary ka part.
-   **Outline:** Element ke bahar draw hone wali line; layout space
    normally occupy nahi karti.
-   **Shadow:** Element ke aas-paas shadow effect.

### `focus:` kya hai?

`focus:` Tailwind variant hai. Ye style tab apply hota hai jab element
focused ho.

Input par click karne ke baad aam taur par input focus mein aa jata hai.
Keyboard se Tab press karke bhi focus input par aa sakta hai.

Tumhare current code mein:

``` jsx
outline outline-2 outline-violet-500
```

Outline normal state mein bhi lag raha hai.

Agar tum chahte ho ki outline sirf focus par aaye, toh:

``` jsx
className="w-full rounded-full px-5 py-1 outline-none focus:outline focus:outline-2 focus:outline-violet-500 focus:shadow-lg focus:shadow-violet-200 transition-all duration-200"
```

-   `outline-none`: Default outline remove.
-   `focus:outline`: Focus par outline style.
-   `focus:outline-2`: Focus par 2px outline.
-   `focus:outline-violet-500`: Focus par violet outline.

**Accessibility tip:** Keyboard users ko focus clearly dikhna chahiye.
Focus indicator ko completely remove karke koi replacement na dena achha
practice nahi hai.

------------------------------------------------------------------------

# 9. Save button

Tumhara code:

``` jsx
<button
  onClick={handleAdd}
  disabled={todo.length <= 3}
  className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white"
>
  Save
</button>
```

Button ka purpose input mein likhe task ko add karna hai.

## 9.1 `onClick={handleAdd}`

`onClick` event tab fire hota hai jab user button activate/click karta
hai.

``` jsx
const handleAdd = () => {
  // Todo add karne ka logic
};
```

`handleAdd` function ka actual code tumhare component mein alag define
hota hai. JSX sirf us function ko call karta hai.

Difference samjho:

``` jsx
<button onClick={handleAdd}>Save</button>
```

Yahan function click par call hoga.

``` jsx
<button onClick={handleAdd()}>Save</button>
```

Yahan function render ke time hi call ho sakta hai. Normal click handler
ke liye pehla pattern use karo.

## 9.2 `disabled={todo.length <= 3}`

`disabled` HTML button attribute hai. Jab iska value `true` hota hai,
button disabled hota hai.

`todo.length` string mein characters ki count batata hai.

`<=` ka matlab less than or equal to, yani chhota ya barabar.

Condition:

``` js
todo.length <= 3
```

  Input       Length Condition   Button
  --------- -------- ----------- ----------
  `Hi`             2 true        Disabled
  `Hey`            3 true        Disabled
  `Hello`          5 false       Enabled
  `React`          5 false       Enabled

Dhyan do: Ye sirf length check hai. Spaces bhi length mein count hote
hain. Agar whitespace-only input rokna hai, toh handler mein
`todo.trim()` check karna useful hai.

## 9.3 Button ki Tailwind classes

  Class                      Meaning
  -------------------------- -------------------------------------------
  `bg-violet-800`            Dark violet background
  `mx-2`                     Left-right margin
  `rounded-full`             Fully rounded corners
  `hover:bg-violet-950`      Mouse hover par darker background
  `disabled:bg-violet-500`   Disabled state mein violet-500 background
  `p-4`                      All-side padding
  `py-2`                     Top-bottom padding
  `text-sm`                  Small text
  `font-bold`                Bold text
  `text-white`               White text

**Important:** - `hover:` = mouse pointer element ke upar aane par. -
`focus:` = element focused hone par. - `disabled:` = button disabled
hone par.

------------------------------------------------------------------------

# 10. Show Finished checkbox

Tumhara code:

``` jsx
<input
  className="my-4"
  id="show"
  onChange={toggleFinished}
  type="checkbox"
  checked={showFinished}
/>

<label className="mx-2" htmlFor="show">
  Show Finished
</label>
```

Is checkbox ka purpose completed todos ko list mein show ya hide karna
hai.

## 10.1 `type="checkbox"`

Browser ko checkbox input create karne ko kehta hai.

Checkbox ki value checked ya unchecked ho sakti hai.

## 10.2 `checked={showFinished}`

Suppose state:

``` jsx
const [showFinished, setShowFinished] = useState(true);
```

-   `true`: Checkbox checked.
-   `false`: Checkbox unchecked.

`checked` checkbox ki state control karta hai. Ye text input ke `value`
jaisa idea hai, lekin checkbox ke liye `checked` use hota hai.

## 10.3 `onChange={toggleFinished}`

Checkbox ki checked state change hone par `toggleFinished` function call
hota hai.

Example:

``` jsx
const toggleFinished = () => {
  setShowFinished(!showFinished);
};
```

`!` NOT operator hai:

``` js
!true  // false
!false // true
```

Isliye purani value ulat jaati hai.

  Old state   New state
  ----------- -----------
  `true`      `false`
  `false`     `true`

## 10.4 `id="show"` aur `htmlFor="show"`

``` jsx
<input id="show" type="checkbox" />
<label htmlFor="show">Show Finished</label>
```

`id` input ko unique identifier deta hai.

`htmlFor` label ko us input se connect karta hai.

Jab user label ke text par click karta hai, connected checkbox bhi
toggle ho sakta hai.

**Note:** JSX mein HTML ke `for` attribute ki jagah `htmlFor` likhte
hain.

## 10.5 Classes

-   `my-4`: Checkbox ke top aur bottom margin.
-   `mx-2`: Label ke left aur right margin.

------------------------------------------------------------------------

# 11. Horizontal divider

``` jsx
<div className="h-px bg-black opacity-15 w-[90%] mx-auto my-2"></div>
```

Ye ek thin horizontal line create karta hai. Iska purpose Add Todo
section aur Your Todos section ko visually separate karna hai.

  Class          Meaning
  -------------- ------------------------------------------
  `h-px`         Height 1 pixel
  `bg-black`     Black background
  `opacity-15`   15% opacity
  `w-[90%]`      Width 90%
  `mx-auto`      Left-right auto margin, center alignment
  `my-2`         Top-bottom margin

`w-[90%]` Tailwind arbitrary value syntax hai. Square brackets mein
custom CSS value likh sakte ho.

------------------------------------------------------------------------

# 12. Your Todos heading

``` jsx
<h2 className="text-2xl font-bold">
  Your Todos
</h2>
```

Ye saved tasks ki list ka section heading hai.

-   `h2`: Section heading.
-   `text-2xl`: Large text.
-   `font-bold`: Bold font.

------------------------------------------------------------------------

# 13. Empty list message -- Conditional rendering

Tumhara code:

``` jsx
<div className="todos">
  {todos.length === 0 && (
    <div className="m-5">
      No Todos to display
    </div>
  )}
</div>
```

Ye **conditional rendering** ka example hai.

Conditional rendering ka matlab: condition ke according UI show ya hide
karna.

Suppose:

``` jsx
const [todos, setTodos] = useState([]);
```

`[]` empty array hai.

## 13.1 `todos.length`

Array ki length batati hai ki usmein kitne items hain.

``` js
const todos = [];
todos.length; // 0
```

Agar array mein 2 items hain:

``` js
const todos = ["Learn React", "Practice DSA"];
todos.length; // 2
```

## 13.2 `===`

`===` strict equality operator hai. Ye value aur type dono compare karta
hai.

``` js
0 === 0; // true
0 === "0"; // false
```

## 13.3 `&&` operator

JavaScript mein `&&` logical AND operator hai. JSX mein ise condition
true hone par element render karne ke liye use kar sakte hain.

``` jsx
{true && <h1>Hello</h1>}
```

`Hello` render hoga.

``` jsx
{false && <h1>Hello</h1>}
```

Element render nahi hoga.

Tumhara code:

``` jsx
todos.length === 0 && <div>No Todos to display</div>
```

Meaning: - Agar todos array ki length zero hai, message show karo. -
Agar array empty nahi hai, message show mat karo.

`m-5` message ke around margin deta hai.

------------------------------------------------------------------------

# 14. `todos.map()` -- Array se UI banana

Tumhara code:

``` jsx
{todos.map(item => {
  return (
    ...
  );
})}
```

Ye React mein list render karne ka common pattern hai.

## 14.1 Pehle JavaScript `map()` samjho

``` js
const numbers = [1, 2, 3];

const result = numbers.map(item => {
  return item * 2;
});

console.log(result);
```

Output:

``` js
[2, 4, 6]
```

`map()`: 1. Array ke first item ko callback mein deta hai. 2. Callback
ka result banata hai. 3. Next item par jaata hai. 4. Har item ke result
ka naya array return karta hai.

Original array ko directly modify nahi karta.

## 14.2 Todo array ka example

Tumhare app mein todos kuch aise ho sakte hain:

``` js
const todos = [
  {
    id: 1,
    todo: "Learn React",
    isCompleted: false
  },
  {
    id: 2,
    todo: "Learn Node.js",
    isCompleted: true
  },
  {
    id: 3,
    todo: "Practice DSA",
    isCompleted: false
  }
];
```

Har object ek todo represent karta hai.

-   `id`: Todo ki unique identity.
-   `todo`: Todo ka text.
-   `isCompleted`: Task complete hua ya nahi.

Ab:

``` jsx
todos.map(item => {
  return <div>{item.todo}</div>;
})
```

React har object ke liye ek div banayega:

``` text
Learn React
Learn Node.js
Practice DSA
```

## 14.3 `item` kya hai?

`item` map callback ka parameter hai. Har iteration mein ismein current
todo object aata hai.

  Iteration   `item.todo`
  ----------- ---------------
  1           Learn React
  2           Learn Node.js
  3           Practice DSA

`item` variable ka naam tum kuch aur bhi rakh sakte ho, jaise
`todoItem`. Naam special nahi hai.

------------------------------------------------------------------------

# 15. Show Finished condition inside map

Tumhara code:

``` jsx
{(showFinished || !item.isCompleted) && (
  <div key={item.id}>
    ...
  </div>
)}
```

Is line ko dhyan se samjho. Ye decide karti hai ki current todo show
hoga ya nahi.

Ismein teen concepts hain: 1. `showFinished` 2. `!item.isCompleted` 3.
`||`

## 15.1 `||` logical OR operator

OR ka simple rule:

  Left    Right   Result
  ------- ------- --------
  true    true    true
  true    false   true
  false   true    true
  false   false   false

Agar kam se kam ek side true ho, result true hota hai.

## 15.2 `!` NOT operator

NOT value ko reverse karta hai:

``` js
!true  // false
!false // true
```

## 15.3 Puri condition ka meaning

``` js
showFinished || !item.isCompleted
```

-   Agar `showFinished` true hai, toh OR condition true ho jaati hai.
    Isliye current todo show hota hai, chahe completed ho ya pending.
-   Agar `showFinished` false hai, toh second condition check hoti hai:
    `!item.isCompleted`.
-   Is case mein sirf incomplete todos show hote hain.

### Dry run

Data:

``` js
const todos = [
  { id: 1, todo: "React", isCompleted: false },
  { id: 2, todo: "Node", isCompleted: true },
  { id: 3, todo: "DSA", isCompleted: false }
];
```

  Todo    `isCompleted`   `showFinished`   Condition        Show?
  ------- --------------- ---------------- ---------------- -------
  React   false           true             true OR true     Yes
  Node    true            true             true OR false    Yes
  DSA     false           true             true OR true     Yes
  React   false           false            false OR true    Yes
  Node    true            false            false OR false   No
  DSA     false           false            false OR true    Yes

**Important:** Ye expression `filter()` use nahi kar raha. Ye `map()` ke
andar condition check karke kuch elements ke liye JSX return karta hai
aur baaki ke liye `false`. React `false` ko UI mein render nahi karta.

Alternative approach:

``` jsx
{todos
  .filter(item => showFinished || !item.isCompleted)
  .map(item => (
    <div key={item.id}>
      {item.todo}
    </div>
  ))}
```

Dono approaches ka visible result is condition ke liye same ho sakta
hai.

------------------------------------------------------------------------

# 16. Har Todo ka outer container

Tumhara code:

``` jsx
<div
  key={item.id}
  className="todo flex my-3 justify-between"
>
  ...
</div>
```

Ye current todo ki complete row ka parent hai.

## 16.1 `key={item.id}`

React ko list ke har rendered element ki stable identity chahiye hoti
hai.

Example:

``` jsx
<div key={1}>React</div>
<div key={2}>Node</div>
<div key={3}>DSA</div>
```

React keys ki help se list mein items add, remove ya reorder hone par
changes track kar sakta hai.

Best practice: - Key unique honi chahiye sibling list ke andar. - Key
stable honi chahiye. - Array index ko key tabhi use karo jab list static
ho aur reorder/remove na hota ho. - Tumhare case mein `item.id` achha
choice hai, agar IDs unique aur stable hain.

`key` React ke liye hoti hai. Ye automatically child component ke props
mein available nahi hoti.

## 16.2 `flex`

Row ke children ko flex layout mein arrange karta hai.

## 16.3 `my-3`

Top aur bottom margin.

## 16.4 `justify-between`

Flex container ke main axis par first child aur last child ko opposite
ends par push karta hai.

Tumhare row mein: - First child: Checkbox + todo text. - Second child:
Edit + Delete buttons.

Isliye left par todo aur right par action buttons dikhte hain.

------------------------------------------------------------------------

# 17. Checkbox aur Todo text ka group

Tumhara code:

``` jsx
<div className="flex gap-5">
  <input
    name={item.id}
    onChange={handleCheckbox}
    type="checkbox"
    checked={item.isCompleted}
    id=""
  />

  <div className={item.isCompleted ? "line-through" : ""}>
    {item.todo}
  </div>
</div>
```

Ye current todo ke checkbox aur text ko ek group mein rakhta hai.

## 17.1 `flex gap-5`

-   `flex`: Checkbox aur text side-by-side.
-   `gap-5`: Dono ke beech spacing.

## 17.2 `name={item.id}`

Current todo ki ID checkbox ke `name` attribute mein set ho rahi hai.

Example: - First checkbox: `name={1}` - Second checkbox: `name={2}`

Event handler event target se `name` read kar sakta hai:

``` js
const id = e.target.name;
```

Lekin actual `handleCheckbox` implementation dekhe bina hum confirm nahi
kar sakte ki tumhara function ID isi tarah read karta hai.

**Note:** `name` attribute apne aap checkbox ko React state se connect
nahi karta. Tumhare code mein state-based checked value
`checked={item.isCompleted}` se control ho rahi hai.

## 17.3 `onChange={handleCheckbox}`

Jab user current todo ka checkbox check/uncheck karta hai,
`handleCheckbox` function execute hota hai.

Actual function kuch is tarah ka ho sakta hai, lekin tumhara exact logic
alag ho sakta hai:

``` jsx
const handleCheckbox = (e) => {
  // Event se selected todo ki ID aur checked state lo
  // Phir us todo ka isCompleted update karo
};
```

## 17.4 `checked={item.isCompleted}`

Ye checkbox ki checked/unchecked state current todo object se leta hai.

-   `item.isCompleted === true`: Checked.
-   `item.isCompleted === false`: Unchecked.

Iska matlab checkbox React state ke according display hota hai.

------------------------------------------------------------------------

# 18. Ternary operator -- completed todo par line-through

Tumhara code:

``` jsx
<div className={item.isCompleted ? "line-through" : ""}>
  {item.todo}
</div>
```

Yahan JavaScript ka ternary operator use hua hai.

Syntax:

``` js
condition ? valueIfTrue : valueIfFalse
```

Example:

``` js
const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
```

`result` ki value `"Adult"` hogi.

Tumhare case mein:

``` jsx
item.isCompleted ? "line-through" : ""
```

Meaning: - `item.isCompleted` true hai → `line-through` class. -
`item.isCompleted` false hai → empty class `""`.

`line-through` Tailwind class text ke beech se line draw karti hai.

Example:

``` text
Learn React
```

Completed hone par:

``` text
Learn React  (text struck through)
```

Ye sirf visual styling hai. Task ki actual completion state
`item.isCompleted` mein stored hai.

------------------------------------------------------------------------

# 19. Edit aur Delete buttons ka container

``` jsx
<div className="buttons flex h-full">
  ...
</div>
```

-   `buttons`: Custom class name.
-   `flex`: Buttons ko flex layout mein rakhta hai.
-   `h-full`: Parent ki available height lene ki koshish karta hai.

------------------------------------------------------------------------

# 20. Edit button

Tumhara code:

``` jsx
<button
  onClick={(e) => handleEdit(e, item.id)}
  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
>
  <FaEdit />
</button>
```

## 20.1 `onClick`

Button click hone par event handler call hota hai.

## 20.2 Arrow function kyun likha?

``` jsx
onClick={(e) => handleEdit(e, item.id)}
```

Ismein arrow function ek wrapper ki tarah kaam kar raha hai.

Click hone par: 1. Event object `e` milta hai. 2. Current item ki ID
`item.id` milti hai. 3. `handleEdit(e, item.id)` call hota hai.

Example:

``` js
handleEdit(event, 1);
```

Matlab ID `1` wale todo ke liye edit handler call hua.

Agar tum aise likhte:

``` jsx
onClick={handleEdit}
```

Toh React handler ko event argument deta, lekin tumhari current code
jaisi explicit `item.id` pass nahi hoti.

## 20.3 `FaEdit`

Ye React icon component hai, jo `react-icons` package se aata hai.

Import example:

``` jsx
import { FaEdit } from "react-icons/fa";
```

`<FaEdit />` edit/pencil icon display karta hai.

## 20.4 Edit button classes

-   `bg-violet-800`: Violet background.
-   `hover:bg-violet-950`: Hover par darker violet.
-   `p-2`: Padding.
-   `py-1`: Top-bottom padding.
-   `text-sm`: Small text size.
-   `font-bold`: Bold text.
-   `text-white`: White text.
-   `rounded-md`: Medium rounded corners.
-   `mx-1`: Left-right margin.

------------------------------------------------------------------------

# 21. Delete button

Tumhara code:

``` jsx
<button
  onClick={(e) => {
    handleDelete(e, item.id);
  }}
  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
>
  <AiFillDelete />
</button>
```

Iska structure Edit button jaisa hi hai.

Difference: - Ye `handleDelete` function call karta hai. - Ye current
todo ki ID pass karta hai. - Ismein delete icon hai.

Click hone par:

``` js
handleDelete(e, item.id);
```

Example:

``` js
handleDelete(event, 2);
```

Matlab ID `2` wale todo ko delete karne ke liye handler call hua.

Actual deletion ka logic function definition mein hota hai. JSX sirf
function ko call karta hai.

## 21.1 `AiFillDelete`

Ye `react-icons` ka icon component hai.

Import example:

``` jsx
import { AiFillDelete } from "react-icons/ai";
```

`<AiFillDelete />` delete/trash icon display karta hai.

------------------------------------------------------------------------

# 22. Tumhare complete JSX ka simplified version

Ab poora structure ek baar simplified form mein dekho:

``` jsx
return (
  <>
    {/* Navigation */}
    <Navbar />

    {/* Main app container */}
    <div className="main-container">

      {/* App heading */}
      <h1>iTask - Manage your todos at one place</h1>

      {/* Add Todo section */}
      <div>
        <h2>Add a Todo</h2>

        <input
          value={todo}
          onChange={handleChange}
        />

        <button
          onClick={handleAdd}
          disabled={todo.length <= 3}
        >
          Save
        </button>
      </div>

      {/* Show completed todos checkbox */}
      <input
        type="checkbox"
        checked={showFinished}
        onChange={toggleFinished}
      />

      <label>Show Finished</label>

      {/* Todo list heading */}
      <h2>Your Todos</h2>

      {/* Todo list */}
      <div>
        {todos.length === 0 && (
          <p>No Todos to display</p>
        )}

        {todos.map(item => (
          <div key={item.id}>

            {/* Complete / incomplete */}
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={handleCheckbox}
            />

            {/* Todo text */}
            <div>
              {item.todo}
            </div>

            {/* Edit */}
            <button onClick={(e) => handleEdit(e, item.id)}>
              <FaEdit />
            </button>

            {/* Delete */}
            <button onClick={(e) => handleDelete(e, item.id)}>
              <AiFillDelete />
            </button>

          </div>
        ))}
      </div>
    </div>
  </>
);
```

Ye simplified code sirf structure samjhane ke liye hai. Ismein tumhare
original code ki kuch Tailwind styling aur Show Finished filtering
condition omit ki gayi hai.

------------------------------------------------------------------------

# 23. Complete application flow -- ek story ki tarah

Imagine user tumhara iTask app open karta hai.

## Step 1: App render hota hai

React component ka `return` execute hota hai aur UI screen par aati hai.

## Step 2: User input mein task likhta hai

User types:

``` text
Learn React
```

Flow:

``` text
Input
  ↓
onChange
  ↓
handleChange(e)
  ↓
e.target.value
  ↓
setTodo("Learn React")
  ↓
State update
  ↓
Input displays "Learn React"
```

## Step 3: User Save click karta hai

``` jsx
onClick={handleAdd}
```

`handleAdd` call hota hai. Us function ka actual logic todo ko `todos`
state mein add karta hai, agar function sahi implement kiya gaya ho.

## Step 4: Todo list update hoti hai

React state update ke baad component re-render hota hai.

``` jsx
todos.map(...)
```

Array ke har todo ke liye UI create karta hai.

## Step 5: User checkbox click karta hai

``` jsx
onChange={handleCheckbox}
```

Handler selected todo ki completion state update karta hai.

## Step 6: Completed todo ka text strike hota hai

``` jsx
item.isCompleted ? "line-through" : ""
```

Completed task ke text par line aa jaati hai.

## Step 7: User Show Finished toggle karta hai

``` jsx
onChange={toggleFinished}
```

`showFinished` state change hoti hai.

Map ke andar wali condition decide karti hai ki completed tasks show
honge ya nahi.

## Step 8: User Edit ya Delete click karta hai

-   Edit → `handleEdit(e, item.id)`
-   Delete → `handleDelete(e, item.id)`

Current todo ki ID handler ko milti hai, jisse correct todo identify
kiya ja sakta hai.

------------------------------------------------------------------------

# 24. Important React and JavaScript concepts -- Revision table

  ----------------------------------------------------------------------------------------
  Concept                 Simple meaning          Tumhare code mein
  ----------------------- ----------------------- ----------------------------------------
  JSX                     JavaScript ke andar UI  `return (...)`
                          syntax                  

  Component               Reusable UI function    `<Navbar />`

  Fragment                Extra wrapper ke bina   `<>...</>`
                          elements group karna    

  State                   Component ka changing   `todo`, `todos`, `showFinished`
                          data                    

  `useState`              State banane ka Hook    `const [todo, setTodo] = useState("")`

  Event handling          User action par         `onClick`, `onChange`
                          function chalana        

  Controlled input        State se input control  `value={todo}`
                          karna                   

  Controlled checkbox     State se checkbox       `checked={showFinished}`
                          control karna           

  `map()`                 Array ke items se naya  `todos.map(...)`
                          array/UI banana         

  `key`                   List item ki stable     `key={item.id}`
                          identity                

  Conditional rendering   Condition ke basis par  `&&`
                          UI dikhana              

  OR `||`                 Kam se kam ek condition `showFinished || ...`
                          true ho                 

  NOT `!`                 Boolean value reverse   `!item.isCompleted`
                          karna                   

  Ternary `? :`           Condition ke basis par  `condition ? A : B`
                          value choose karna      

  Arrow function          Function likhne ka      `(e) => handleEdit(...)`
                          short syntax            

  `length`                Characters/items count  `todo.length`, `todos.length`

  `===`                   Strict equality check   `todos.length === 0`

  `id`                    Element ko identify     `id="show"`
                          karna                   

  `htmlFor`               Label ko input se       `htmlFor="show"`
                          connect karna           
  ----------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 25. Important Tailwind CSS prefixes

  Prefix        Meaning                    Example
  ------------- -------------------------- --------------------------
  `md:`         Medium screen aur larger   `md:w-[35%]`
  `hover:`      Mouse hover state          `hover:bg-violet-950`
  `focus:`      Focus state                `focus:shadow-lg`
  `disabled:`   Disabled state             `disabled:bg-violet-500`

Prefix ka matlab hota hai ki uske baad wali styling particular
condition/state mein apply hogi.

------------------------------------------------------------------------

# 26. Interview-level questions

### Q1. What is JSX?

JSX is a syntax extension for JavaScript that lets us write UI-like
markup inside JavaScript. React uses it to describe what should appear
on the screen.

### Q2. Why do we use `className` instead of `class`?

Because JSX uses JavaScript-compatible property names. In JSX, CSS
classes are assigned using `className`.

### Q3. What is a controlled component?

An input whose value is controlled by React state. For example:

``` jsx
<input value={todo} onChange={handleChange} />
```

### Q4. Why do we use `key` in React lists?

Keys help React identify list items across renders, especially when
items are added, removed or reordered.

### Q5. What is conditional rendering?

Displaying UI based on a condition. Example:

``` jsx
{todos.length === 0 && <p>No Todos</p>}
```

### Q6. What is the difference between `onClick={handleAdd}` and `onClick={() => handleAdd()}`?

Both call the function when clicked, but the second uses an arrow
function wrapper. The wrapper is useful when we need to pass custom
arguments.

### Q7. What is the difference between `value` and `checked`?

-   `value` controls the value of text-like inputs.
-   `checked` controls whether checkbox/radio inputs are selected.

### Q8. What does `map()` return?

`map()` returns a new array containing the result of the callback for
each original array item.

### Q9. What is the difference between `&&` and `||`?

-   `&&`: Both sides need to be truthy for the overall result to be
    truthy.
-   `||`: At least one side needs to be truthy.

### Q10. What does the ternary operator do?

It chooses one of two expressions based on a condition:

``` js
condition ? valueIfTrue : valueIfFalse;
```

------------------------------------------------------------------------

# 27. Practice questions -- khud solve karo

1.  Agar `todo = "Hi"` hai, toh `todo.length` kya hoga?
2.  `disabled={todo.length <= 3}` mein length 3 hone par button enabled
    hoga ya disabled?
3.  `value={todo}` ka input field par kya effect hai?
4.  `onChange` aur `onClick` mein kya difference hai?
5.  `checked={item.isCompleted}` kya control karta hai?
6.  `todos.length === 0` kya check karta hai?
7.  `todos.map(item => ...)` mein `item` kya represent karta hai?
8.  `key={item.id}` kyun use karte hain?
9.  `showFinished || !item.isCompleted` ka result kab true hota hai?
10. `item.isCompleted ? "line-through" : ""` ka output kya hoga jab
    `isCompleted` false ho?
11. `htmlFor="show"` ka connection kis attribute se hai?
12. `focus:shadow-lg` kab apply hota hai?
13. `hover:bg-violet-950` aur `focus:shadow-lg` mein kya difference hai?
14. `mx-3` aur `my-5` mein kya difference hai?
15. `p-5` aur `m-5` mein kya difference hai?

------------------------------------------------------------------------

# 28. Final mental model -- ye yaad rakhna

Tumhare iTask JSX ko samajhne ke liye bas ye five layers yaad rakho:

1.  **Structure:** `div`, `h1`, `h2`, `input`, `button` -- UI ka
    structure banate hain.
2.  **Styling:** `className` aur Tailwind classes -- UI ko beautiful
    banati hain.
3.  **State:** `todo`, `todos`, `showFinished` -- application ka
    changing data store karte hain.
4.  **Events:** `onChange`, `onClick` -- user actions par functions
    chalate hain.
5.  **Rendering logic:** `map`, `&&`, `||`, ternary -- decide karte hain
    ki kaunsa UI kab dikhna chahiye.

**Sabse important baat:** JSX khud todo add, edit ya delete nahi karta.
JSX UI banata hai aur event handlers ko call karta hai. Actual data
update ka logic `handleAdd`, `handleEdit`, `handleDelete`,
`handleCheckbox` jaise functions mein hota hai.

Agar tum in five layers ko samajh gaye, toh tum apne Todo App ke JSX ko
sirf dekh kar ratoge nahi --- tum explain bhi kar paoge ki har line kyun
likhi gayi hai.
