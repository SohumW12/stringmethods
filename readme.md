````markdown
# StringMethods

This package provides a collection of utility methods for manipulating strings.

## Installation

```bash
npm install stringmethods
```
````

## Methods

- **`replaceCount(str, oldSubstr, newSubstr, count)`**

Replaces the first `count` occurrences of `oldSubstr` in `str` with `newSubstr`.

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str = "hello world hello world";
const newStr = StringMethods.replaceCount(str, "hello", "hi", 2);
console.log(newStr); // Output: hi world hello world
```

- **`count(str, substr)`**

Counts the number of occurrences of `substr` in `str`.

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str = "hello world hello world";
const count = StringMethods.count(str, "hello");
console.log(count); // Output: 2
```

- **`isAlnum(str)`**

Checks if `str` contains only alphanumeric characters (a-z, A-Z, 0-9).

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str1 = "hello123";
const str2 = "hello world";
console.log(StringMethods.isAlnum(str1)); // Output: true
console.log(StringMethods.isAlnum(str2)); // Output: false
```

- **`isDigit(str)`**

Checks if `str` contains only digits (0-9).

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str1 = "12345";
const str2 = "hello123";
console.log(StringMethods.isDigit(str1)); // Output: true
console.log(StringMethods.isDigit(str2)); // Output: false
```

- **`isLower(str)`**

Checks if `str` contains only lowercase letters (a-z).

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str1 = "hello";
const str2 = "Hello";
console.log(StringMethods.isLower(str1)); // Output: true
console.log(StringMethods.isLower(str2)); // Output: false
```

- **`isUpper(str)`**

Checks if `str` contains only uppercase letters (A-Z).

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str1 = "HELLO";
const str2 = "hello";
console.log(StringMethods.isUpper(str1)); // Output: true
console.log(StringMethods.isUpper(str2)); // Output: false
```

- **`isSpace(str)`**

Checks if `str` contains only whitespace characters.

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str1 = "   ";
const str2 = "hello";
console.log(StringMethods.isSpace(str1)); // Output: true
console.log(StringMethods.isSpace(str2)); // Output: false
```

- **`capitalize(str)`**

Capitalizes the first letter of `str` and converts the rest to lowercase.

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str = "hello world";
const capitalizedStr = StringMethods.capitalize(str);
console.log(capitalizedStr); // Output: Hello world
```

- **`title(str)`**

Capitalizes the first letter of each word in `str`.

**Usage:**

```javascript
const StringMethods = require("stringmethods");

const str = "hello world";
const titleStr = StringMethods.title(str);
console.log(titleStr); // Output: Hello World
```

```

```
#
