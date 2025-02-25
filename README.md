<h1 align='center'>Proah / প্রোআহ</h1>

### Proah কি?

এটি একটি ছোট্টো লাইব্রেরি। যেটা HTTP Request পাঠানো এবং Resposne প্রক্রিয়াকরণ কে কিছুটা সহজ করে দেয়। যেটা Proah তার ব্যক্তিগত কাজের জন্য বানিয়েছে। তবে এটা উন্মুক্ত চাইলে যে কেউ ব্যবহার করতে পারে।

## যেভাবে ব্যবহার করা যাবে,

### Installation / ইন্সটেলেশন:

```bash
npm install proah  # Or yarn add proah
```

### Includes in Project

```js
/*For ESM*/
import Proah from "proah";

/*For CJS*/
const Proah = require("proah");
```

### Proah instance তৈরিঃ

```js
const proah = new Proah({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 12000,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  mode: "cors",
  cache: "force-cache",
  credentials: "include",
  // resultProps: "myData",
});
```

### Proah Config Props :

| Property    | Description                                                                                                                         | Default | Optional |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| methods     | **methods** Array-র মধ্যে যুক্ত করুন, যেসব HTTP Request method ব্যবহার করবেন                                                        |         | No       |
| baseURL     | API রিকুয়েস্ট এর জন্য baseURL                                                                                                       |         | YES      |
| resultProps | এখানে ডিফাইন্ড করা যাবে, চূড়ান্ত Response Data যেখানে প্রাপ্ত হবে                                                                   | data    | YES      |
| credentials | এখানে [credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) value যুক্ত করা যাবে HTTP Request এর জন্য | omit    | YES      |
| cache       | এখানে [cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) value যুক্ত করা যাবে HTTP Request এর জন্য             | default | YES      |
| mode        | এখানে [mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode) value যুক্ত করা যাবে HTTP Request এর জন্য               | cors    | YES      |
| timeout     | এখানে timeout(মিলি সেকেন্ড) value যুক্ত করা যাবে HTTP Request এর জন্য,                                                              | 5000    | YES      |

### Proah instance methods (6)

1. **proah.get()**  
   **Syntax**: proah.get('/path-to-endpoint', {options})

2. **proah.post()**  
   **Syntax:** proah.post('/path-to-endpoint', {options})
3. **proah.put()**  
   **Syntax:** proah.put('/path-to-endpoint', {options})
4. **proah.patch()**  
   **Syntax:** proah.patch('/path-to-endpoint', {options})
5. **proah.delete()**  
   **Syntax:** proah.delete('/path-to-endpoint', {options})
6. **proah.extra()**  
   **Syntax:** proah.extra('/path-to-endpoint', {options})

   ***

   ### options object properties:

   | Property    | Default                                                 | Optional | Replaceable |
   | ----------- | ------------------------------------------------------- | :------: | :---------: |
   | body        | nothing                                                 |   YES    |     YES     |
   | query       | nothing                                                 |   YES    |     YES     |
   | headers     | {'Content-Type':'application/json', ...default headers} |   YES    |     YES     |
   | timeout     | from Proah config if available, otherwise default       |   YES    |     YES     |
   | baseURL     | from Proah config if available, otherwise nothing       |   YES    |     YES     |
   | credentials | from Proah config if available, otherwise default       |   YES    |     YES     |
   | mode        | from Proah config if available, otherwise default       |   YES    |     YES     |
   | cache       | from Proah config if available, otherwise default       |   YES    |     YES     |
   | resultProps | from Proah config if available, otherwise default       |   YES    |     YES     |
   | method      | from Proah library                                      |   YES    |     NO      |

   and more....

## Example Request

### 1. GET

```js
const result = await proah.get("/posts", {
  query: { _limit: 1, _start: 9 },
});

const { data, status, statusText } = result;
```

### 2. POST

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

```js
const result = await proah.patch("/posts/1", {
  body: JSON.stringify({
    title: "foo",
  }),
});

const { data, status, statusText } = result;
```

### 5. DELETE

```js
const result = await proah.delete("/posts/1");

const { data, status, statusText } = result;
```

<h2 align='center'>EXTRA - Methods</h2>

এই mehod এর মাধ্যমে যেকোনো HTTP Request handle করা যাবে। এবং এটা Developer কে আরও বেশি নিয়ন্ত্রণ দেয়। তবে `extra` method টা Promise Response Returns করে, সুতরাং এটি ব্যবহার করলে Promise Response টাকে নীজ দায়িত্বে handle করতে হবে।

উল্লেখ্য `extra` method এর মাধ্যমে **HEAD**, **OPTIONS**, এই রিকুয়েস্ট গুলোও ব্যবহার করা যাবে।

**GET** request with extra method:

```js
const response = await proah.extra("/posts", {
  method: "GET",
  query: {
    _limit: 1,
    _start: 2,
  },
});

const { status, statusText, ok /*... and more*/ } = response;

if (!ok) {
  // Some Error handling Logic
} else {
  // manipulate respone data using response method e.g. response.text(),response.json()
}
```

**একই ভাবে অন্যান্য রিকুয়েস্ট মেথড গুলো প্রয়োগ করা যাবে এই `extra` মেথড এর মাধ্যমে**

<h2 align='center'> Error and Exceptions / ত্রুটি এবং ব্যতিক্রম :</h2>

যেসব proah instance method ব্যবহার করবেন। সেটার অনুরূপ HTTP method Proah Confguaration এ যুক্ত করতে হবে।
যেমনঃ

আপনি যদি `proah.get()` মেথড ব্যবহার করতে চান তবে, Proah Configuration সে সেটা যুক্ত করতে হবে

```js
const proah = new Proah({
  methods: ["GET"],
  ...others,
});
```

Proah config এ "GET" methods না যুক্ত করেই যদি proah.get() method call করেন তবেই নিম্নক্ত Error টি দেখতে পারবেন।

![](https://i.ibb.co.com/sp1LvSYZ/1.png)

একই ভাবে যেসব HTTP Request মেথড ব্যবহার করতে ইচ্ছুক সেগুলো Proah Configuration methods Array তে যুক্ত করতে হবে।

---

আপনি যদি ভুলবসত HTTP Request এর method পরিবর্তন করেন তবে নিম্নক্ত Error টি দেখতে পারবেন।  
যেমনঃ

```js
const result = await proah.get("/posts", {
  method: "POST",
  ...others,
});
```

![](https://i.ibb.co.com/rKQmKnPF/2.png)

**নোটঃ** `proah.get()`, `proah.post()`, `proah.put()`, `proah.patch()`, `proah.delete()` এই পাঁচটি instance method এর Request method স্পর্শ করা অর্থহীন।

---

আপনি যদি `proah.extra()` মেথড ব্যবহার করেন তবে options এর মধ্যে অবশ্যই Request Method যুক্ত করতে হবে।
যেমন:

```js
const response = await proah.extra("/posts", {
  method: "GET",
  ...others,
});

const { status, statusText, ok /*... and more*/ } = response;

if (!ok) {
  // Some Error handling Logic
} else {
  // manipulate respone data using response method e.g. response.text(),response.json()
}
```

আপনি যদি এটা না করেন তবে নিম্নক্ত Error টি দেখতে পারবেন: যেমন

```js
const response = await proah.extra("/posts", {
  ...othes,
});
```

![](https://i.ibb.co.com/VcGnkrsJ/3.png)

---

## `resultProps` in Proah Config:

আপনি চাইলে চূড়ান্ত ফলাফলে কোন প্রোপারটিস এর মধ্যে রেসপন্স এর ডেটা আসবে এটা `resultProps` এর মাধ্যে বলে দিতে পারবেন। by default এটির ভালু "data" থাকে।
যেমন এক্ষেত্রে default value "data" কে "myData" দিয়ে পুনর্স্থাপন করা হলো। এখন চূড়ান্ত ফলাফলের "myData" এর মধ্যে সার্ভার থেকে গ্রহণকৃত ডেটা প্রাপ্ত হবে।

```js
const proah = new Proah({
  baseURL: "https://jsonplaceholder.typicode.com",
  methods: ["GET"],
  resultProps: "myData",
});
```

```js
const result = await proah.get("/posts", {
  query: {
    _limit: 1,
  },
});

console.log(result);
/*
  {
    status: 200,
    statusText: 'OK',
    url: 'https://jsonplaceholder.typicode.com/posts?_limit=1',
    myData: [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\n' +
          'suscipit recusandae consequuntur expedita et cum\n' +
          'reprehenderit molestiae ut ut quas totam\n' +
          'nostrum rerum est autem sunt rem eveniet architecto'
      }
    ]
  }
*/
```

---

### Bodyless HTTP request for Proah:

```
 GET HEAD OPTIONS DELETE
```

উল্লেখিত Bodyless HTTP request গুলোর জন্য option এ যদি body property যুক্ত করা হয় তবে। নিম্নক্ত Error লক্ষ করতে পারবেন।
যেমনঃ

```js
(async () => {
  try {
    const response = await proah.extra("/posts/1", {
      method: "HEAD",
      body: JSON.stringify({ name: "Proah", age: undefined }),
    });
    if (response.ok) {
      console.log(await response.headers);
    }
  } catch (error) {
    console.log(error);
  }
})();
```

![](https://i.ibb.co.com/67VY5j9S/4.png)

### Supported HTTP Methods for Proah

```
GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS ✔️
```

---

---

<h3 align='center'>Thanks to you, and take care of your eyes.</h3>
<p align='center'>❤️😊</p>
