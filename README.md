<h1 align='center'>Proah / প্রোআহ</h1>

### Proah কি?

এটি একটি ছোট্টো লাইব্রেরি। যেটা HTTP Request & Resposne টাকে কিছুটা সহজ করে দেয়। যেটা Proah তার ব্যক্তিগত কাজের জন্য বানিয়েছে। তবে এটা উন্মুক্ত চাইলে যে কেউ ব্যবহার করতে পারে।

## যেভাবে ব্যবহার করা যাবে,

### Installation / ইন্সটেলেশন:

```bash
npm install proah  # Or yarn add proah
```

### Proah instance তৈরি করুনঃ

```js
import Proah from "proah";

const proah = new Proah({
  baseURL: "https://jsonplaceholder.typicode.com",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
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

```js
const result = await proah.get("/posts", {
  query: { _limit: 1, _start: 9 },
  cache: "default",
});

const { data, status, statusText } = result;
```

### 2. POST

```js
const result = await proah.post("/posts", {
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
});

const { data, status, statusText } = result;
```

### 3. PUT

```js
const result = await proah.put("/posts/1", {
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
});

const { data, status, statusText } = result;
```

### 4. PATCH

```js
const result = await proah.patch("/posts/1", {
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-Type": "application/json",
  },
});

const { data, status, statusText } = result;
```

### 5. DELETE

```js
const result = await proah.delete("/posts/1", {
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-Type": "application/json",
  },
});

const { data, status, statusText } = result;
```
