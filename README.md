# 🚀 Express Error Handling System (MERN Backend)

## 📌 Overview

This project demonstrates a **production-ready error handling architecture** in an Express.js backend using modern JavaScript practices.

It focuses on handling both **synchronous and asynchronous errors** efficiently using:

* Custom Error Classes
* Async Wrapper Functions
* Global Error Middleware

---

## 🎯 What I Learned

### ✅ 1. Async Error Handling in Express

* Learned that Express does **not automatically catch async errors**
* Implemented a custom `asyncWrapper` to handle rejected Promises
* Avoided repetitive `try...catch` blocks

---

### ✅ 2. Creating a Custom Error Class

* Extended the built-in `Error` class using `class AppError extends Error`
* Added custom properties:

  * `statusCode`
  * `status`
  * `isOperational`
* Used it to create structured and meaningful errors

---

### ✅ 3. Global Error Handling Middleware

* Created centralized error handler using:

  ```js
  (err, req, res, next)
  ```
* Differentiated between:

  * Operational errors (trusted)
  * Programming errors (unexpected)
* Sent consistent JSON responses to the client

---

### ✅ 4. Understanding `instanceof`

* Used `instanceof` to check error types
* Enabled conditional handling of custom vs unknown errors

---

### ✅ 5. Middleware Flow in Express

* Learned how `next(err)` works
* Understood how Express skips normal middleware and jumps to error middleware

---

### ✅ 6. Promise & Async/Await Deep Understanding

* Learned how `throw` inside async becomes `Promise.reject()`
* Understood how `.catch(next)` forwards errors

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript (ES6+)

---

## 📁 Project Structure

```
/utils
  asyncWrapper.js
  AppError.js

/middleware
  errorMiddleware.js

/routes
  testRoutes.js

app.js
server.js
```

---

## ⚙️ Key Implementations

### 🔹 Async Wrapper

```js
const asyncWrapper = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};
```

---

### 🔹 Custom Error Class

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
```

---

### 🔹 Global Error Middleware

```js
const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message
  });
};
```

---

## 🔥 Example Route

```js
router.get('/test-error', asyncWrapper(async (req, res) => {
  throw new AppError("This is a test error", 400);
}));
```

---

## 🧠 Key Takeaways

* Clean error handling improves **scalability and maintainability**
* Async errors must be handled manually in Express (v4)
* Custom error classes make debugging easier
* Centralized error handling is a **best practice in backend development**

---

## 📌 Future Improvements

* Add JWT authentication error handling
* Handle Mongoose validation errors
* Add environment-based error responses (dev vs production)
* Logging with tools like Winston or Morgan

---

## 🙌 Author

Lakshya Gupta

---
