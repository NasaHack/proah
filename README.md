<h1 align='center'>Proah / প্রোআহ</h1>

### Proah কি?

এটি একটি ছোট্টো লাইব্রেরি। যেটা HTTP Request & Resposne টাকে কিছুটা সহজ করে দেয়। যেটা Proah তার ব্যক্তিগত কাজের জন্য বানিয়েছে। তবে এটা উন্মুক্ত চাইলে যে কেউ ব্যবহার করতে পারে।

## যেভাবে ব্যবহার করা যাবে,

### Installation / ইন্সটেলেশন:

```bash
npm install proah  # Or yarn add proah
```

### Proah instance তৈরিঃ

```js
import Proah from "proah";

const proah = new Proah({
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  baseURL: "https://jsonplaceholder.typicode.com",
  // resultProps: "myData",
  credentials: "include",
  cache: "force-cache",
  mode: "same-origin",
});
```

| Property    | Description                                                                                                                         | Default | Optional |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| methods     | **methods** Array-র মধ্যে যুক্ত করুন, যেসব HTTP Request method ব্যবহার করবেন                                                        |         | ❎       |
| baseURL     | API রিকুয়েস্ট এর জন্য baseURL                                                                                                       |         | ✅       |
| resultProps | এখানে ডিফাইন্ড করো যাবে, চূড়ান্ত Response Data যেখানে যুক্ত হবে                                                                    | data    | ✅       |
| credentials | এখানে [credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) value যুক্ত করা যাবে HTTP Request এর জন্য | omit    | ✅       |
| cache       | এখানে [cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) value যুক্ত করা যাবে HTTP Request এর জন্য             | default | ✅       |
| mode        | এখানে [cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode) value যুক্ত করা যাবে HTTP Request এর জন্য              | cors    | ✅       |

## Example Request

### 1. GET

Syntax: `proah.get('/path-to-endpoint', {options})`

```js
const result = await proah.get("/posts", {
  query: { _limit: 1, _start: 9 },
});

const { data, status, statusText } = result;
```

### 2. POST

Syntax: `proah.post('/path-to-endpoint', {options})`

```js
const result = await proah.post("/posts", {
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
});

const { data, status, statusText } = result;
```

### 3. PUT

Syntax: `proah.put('/path-to-endpoint', {options})`

```js
const result = await proah.put("/posts/1", {
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
});

const { data, status, statusText } = result;
```

### 4. PATCH

Syntax: `proah.patch('/path-to-endpoint', {options})`

```js
const result = await proah.patch("/posts/1", {
  body: JSON.stringify({
    title: "foo",
  }),
});

const { data, status, statusText } = result;
```

### 5. DELETE

Syntax: `proah.delete('/path-to-endpoint', {options})`

```js
const result = await proah.delete("/posts/1");

const { data, status, statusText } = result;
```

<h2 align='center'>EXTRA - Methods</h2>

এই mehod এর মাধ্যমে যেকোনো HTTP Request handle করা যাবে। এবং এটা Developer কে আরও বেশি নিয়ন্ত্রণ দেয়। তবে `extra` method টা Promise Response Returns করে, সুতরাং এটি ব্যবহার করলে Promise Response টাকে নীজ দায়িত্বে handle করতে হবে।

> উল্লেখ্য `extra` method এর মাধ্যমে **HEAD**, **OPTIONS**, **TRACE**, **CONNECT** এই রিকুয়েস্ট গুলোও ব্যবহার করা যাবে।

Syntax: `proah.extra('/path-to-endpoint', {options})`

### Example Request / Extra

- **GET** request with extra method:

  ```js
  const response = await proah.extra("/posts", {
    method: "GET",
    query: {
      _limit: 1,
      _start: 2,
    },
  });

  const { status, statusText, ok /*... and so on*/ } = response;

  if (!ok) {
    // Some Error handling Logic
  } else {
    // manipulate respone data using response method e.g. response.text(),response.json()
  }
  ```

  **একই ভাবে অন্যান্য রিকুয়েস্ট মেথড গুলো প্রয়োগ করা যাবে এই `extra` মেথড এর মাধ্যমে**
