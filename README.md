<h1 align='center'>Proah / প্রোআহ</h1>

### Proah কি?

এটি একটি ছোট্টো লাইব্রেরি। যেটা HTTP Request পাঠানো এবং Resposne প্রক্রিয়াকরণ কে কিছুটা সহজ করে দেয়। যেটা Proah তার ব্যক্তিগত কাজের জন্য বানিয়েছে। তবে এটা উন্মুক্ত চাইলে যে কেউ ব্যবহার করতে পারে।

## 🚀 Proah - Lightweight & Customizable HTTP Client

| Feature                       | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| 🌟 **Lightweight**            | খুবই হলকা একটি library                                     |
| ⚡ **Fast & Simple**          | সহজেই ব্যবহার যোগ্য                                        |
| 🔄 **Auto Parsing**           | JSON, text, blobs, স্বয়ংক্রিয় ভাবে পার্স করা               |
| 🎯 **Customizable**           | ইচ্ছে মতো পরিবর্তন ও সংযোজন যোগ্য                          |
| 🔥 **Modern Fetch-Based**     | এটি আধুনিক `fetch` API এর উপর ভিত্তিতে তৈরি                |
| 🛠 **Supports Extra Requests** | `proah.extra()` ইন্সট্যান্স মেথড পরিপুর্ণ নিয়ন্ত্রণের জন্য |
| ⏳ **Timeout Support**        | global অথবা নির্দিষ্ট ইন্সট্যান্স মেথড এ timeout যুক্ত করা |

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
  baseURL: "https://proah-post.vercel.app",
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
| methods     | **methods** Array-র মধ্যে যুক্ত করুন, যেসব HTTP Request method ব্যবহার করবেন                                                        | []      | No       |
| baseURL     | API রিকুয়েস্ট এর জন্য baseURL                                                                                                       | nothing | YES      |
| resultProps | এখানে ডিফাইন্ড করা যাবে, চূড়ান্ত Response Data যেখানে প্রাপ্ত হবে                                                                   | data    | YES      |
| credentials | এখানে [credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) value যুক্ত করা যাবে HTTP Request এর জন্য | omit    | YES      |
| cache       | এখানে [cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) value যুক্ত করা যাবে HTTP Request এর জন্য             | default | YES      |
| mode        | এখানে [mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode) value যুক্ত করা যাবে HTTP Request এর জন্য               | cors    | YES      |
| timeout     | এখানে timeout(মিলি সেকেন্ড) value যুক্ত করা যাবে HTTP Request এর জন্য,                                                              | 5000    | YES      |

### Proah instance methods (6)

1. **proah.get()**  
   **Syntax**: proah.get('/path-to-endpoint', { Request options })
2. **proah.post()**  
   **Syntax:** proah.post('/path-to-endpoint', { Request options })
3. **proah.put()**  
   **Syntax:** proah.put('/path-to-endpoint', { Request options })
4. **proah.patch()**  
   **Syntax:** proah.patch('/path-to-endpoint', { Request options })
5. **proah.delete()**  
   **Syntax:** proah.delete('/path-to-endpoint', { Request options })
6. **proah.extra()**  
    **Syntax:** proah.extra('/path-to-endpoint', { Request options })

   ***

   ### Request options properties:

   | Property    | Default                                             | Optional | Replaceable |
   | ----------- | --------------------------------------------------- | :------: | :---------: |
   | body        | কিছুই না                                            |  হ্যাঁ   |    হ্যাঁ    |
   | query       | কিছুই না                                            |  হ্যাঁ   |    হ্যাঁ    |
   | headers     | {'Content-Type':'application/json', ...}            |  হ্যাঁ   |    হ্যাঁ    |
   | timeout     | Proah কনফিগারেশন থেকে নেওয়া হবে, অন্যথায় ডিফল্ট   |  হ্যাঁ   |    হ্যাঁ    |
   | baseURL     | Proah কনফিগারেশন থেকে নেওয়া হবে, অন্যথায় কিছুই না |  হ্যাঁ   |    হ্যাঁ    |
   | credentials | Proah কনফিগারেশন থেকে নেওয়া হবে, অন্যথায় ডিফল্ট   |  হ্যাঁ   |    হ্যাঁ    |
   | mode        | Proah কনফিগারেশন থেকে নেওয়া হবে, অন্যথায় ডিফল্ট   |  হ্যাঁ   |    হ্যাঁ    |
   | cache       | Proah কনফিগারেশন থেকে নেওয়া হবে, অন্যথায় ডিফল্ট   |  হ্যাঁ   |    হ্যাঁ    |
   | resultProps | Proah কনফিগারেশন থেকে নেওয়া হবে, অন্যথায় ডিফল্ট   |  হ্যাঁ   |    হ্যাঁ    |
   | method      | Proah লাইব্রেরির থেকে নেওয়া হবে                    |  হ্যাঁ   |     না      |

   and more....

## Example Request

**Create a Basic Instance**

```js
const proah = new Proah({
  baseURL: "https://proah-post.vercel.app",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  timeout: 12000,
});
```

### 1. GET

**Example Success Response handling:**

```js
const { data, error, status, statusText } = await proah.get("/api/posts", {
  timeout: 8000,
});

if (data) {
  console.log(data);
} else {
  console.log(error);
}
```

```js
// Console Output
{
  success: true,
  status: 200,
  message: 'All Posts here',
  data: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\n' +
        'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
        'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
        'qui aperiam non debitis possimus qui neque nisi nulla'
    },
    ...more
  ]
}
```

**Example Failed Response handling:**

```js
const { data, error, status, statusText } = await proah.get("/api/postss"); // Invalid endpoint

if (data) {
  console.log(data);
} else {
  console.log(error); // Error output in the console
}
```

```js
// Console Output
{
  success: false,
  status: 404,
  message: 'Requested data will not be found'
}
```

---

### 2. POST

```js
const post = {
  title: "তবে গল্পটা যদি আরও কিছুটা দুরে যেতো",
  body: "মনে আছে? একদিন আমরা আঁকাশের তারা গুনছিলাম। তুমি বোকার মত বলেছিলে হ্যাঁ। আমি তোমাকে একটা খোঁচা দিলাম। অমনি তোমার হুঁশ ফিরলো আর বললে, ধুর দিনের বেলা কে তাঁরা গুনলো?",
  userId: 1,
};

const { data, error, status, statusText } = await proah.post("/api/posts", {
  body: JSON.stringify(post),
});

if (data) {
  console.log(data);
} else {
  console.log(error); // No Error
}
```

```js
// Console Output
{
  success: true,
  status: 201,
  message: 'Post Successfully created',
  data: {
    title: 'তবে গল্পটা যদি আরও কিছুটা দুরে যেতো',
    body: 'মনে আছে? একদিন আমরা আঁকাশের তারা গুনছিলাম। তুমি বোকার মত বলেছিলে হ্যাঁ। আমি তোমাকে একটা খোঁচা দিলাম। অমনি তোমার হুঁশ ফিরলো আর বললে, ধুর দিনের বেলা কে তাঁরা গুনলো?',
    userId: 1,
    id: 101
  }
}
```

---

### 3. PUT

```js
const { data, error, status, statusText } = await proah.put("/api/posts/1", {
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
});

if (data) {
  console.log(data);
} else {
  console.log(error); // No Error
}
```

```js
// Console Output
{
  success: true,
  status: 202,
  message: 'Post updated successfully',
  data: { title: 'foo', body: 'bar', userId: 1, id: 1 }
}
```

---

### 4. PATCH

```js
const { data, error, status, statusText } = await proah.patch("/api/posts/1", {
  body: JSON.stringify({
    title: "তুমি আমায় ডেকেছিলে এক মেঘে ঢাকা দিনে।",
  }),
});

if (data) {
  console.log(data);
} else {
  console.log(error); // No Error
}
```

```js
// Console Output
{
  success: true,
  status: 202,
  message: 'Post partially updated!',
  data: {
    userId: 1,
    id: 1,
    title: 'তুমি আমায় ডেকেছিলে এক মেঘে ঢাকা দিনে।',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
}
```

---

### 5. DELETE

```js
const { data, error, status, statusText } = await proah.delete("/api/posts/5");

if (data) {
  console.log(data);
} else {
  console.log(error); // No Error
}
```

```js
// Console Output
{ success: true, status: 200, message: 'Post deleted id: 5' }
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
  baseURL: "https://proah-post.vercel.app",
  methods: ["GET"],
  resultProps: "myData", // ⚠️ এটা না করাই ভালো!
});
```

```js
const { myData, error } = await proah.get("/api/posts", {
  query: {
    _limit: 1,
  },
});

if (myData) {
  console.log(myData);
} else {
  console.log(error);
}
```

```js
{
  success: true,
  status: 200,
  message: 'All Posts here',
  data: [
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

## সাধারণ HTML এ যেভাবে ব্যবহার করার যাবে

**app.js**

```js
// import proah library
import Proah from "https://www.unpkg.com/proah@1.1.11/dist/index.mjs";

// create proah instance
const proah = new Proah({
  methods: ["GET"],
  baseURL: "https://proah-post.vercel.app/",
  timeout: 10000,
});

// use intance method
proah
  .get("/api/posts", {
    query: {
      _limit: 3,
      _start: 10,
    },
  })
  .then(console.log)
  .catch(console.log);
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- linkup app.js in html -->
    <script type="module" src="./app.js"></script>
  </body>
</html>
```

**Inside browser console**

![](https://i.ibb.co.com/k6VLvG8P/5.png)

### Supported HTTP Methods for Proah

```
GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS ✔️
```

---

---

<h3 align='center'>Thanks to you, and take care of your eyes.</h3>
<p align='center'>❤️😊</p>
