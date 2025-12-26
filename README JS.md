Here's a comprehensive list organized by patterns:

---

## 1. Polyfills — Array Methods

| Question |
|----------|
| Array.prototype.map |
| Array.prototype.filter |
| Array.prototype.reduce |
| Array.prototype.forEach |
| Array.prototype.find |
| Array.prototype.findIndex |
| Array.prototype.some |
| Array.prototype.every |
| Array.prototype.includes |
| Array.prototype.flat |
| Array.prototype.flatMap |
| Array.prototype.at |
| Array.prototype.fill |
| Array.prototype.from |
| Array.prototype.concat |
| Array.prototype.slice |
| Array.prototype.splice |
| Array.prototype.indexOf |
| Array.prototype.lastIndexOf |

---

## 2. Polyfills — Function Methods

| Question |
|----------|
| Function.prototype.call |
| Function.prototype.apply |
| Function.prototype.bind |
| Function composition (compose / pipe) |

---

## 3. Polyfills — Promise Methods

| Question |
|----------|
| Promise (from scratch) |
| Promise.all |
| Promise.allSettled |
| Promise.race |
| Promise.any |
| Promise.resolve |
| Promise.reject |
| Promise.finally |
| Promise.withResolvers |

---

## 4. Polyfills — Object Methods

| Question |
|----------|
| Object.assign |
| Object.keys |
| Object.values |
| Object.entries |
| Object.fromEntries |
| Object.freeze (deep) |
| Object.create |
| instanceof operator |
| new operator |

---

## 5. Polyfills — Other Built-ins

| Question |
|----------|
| JSON.stringify |
| JSON.parse |
| typeof (enhanced version) |
| String.prototype.trim |
| String.prototype.repeat |
| setInterval using setTimeout |
| clearAllTimers |
| structuredClone |

---

## 6. Function Utilities — Timing

| Question |
|----------|
| Debounce |
| Debounce with leading/trailing options |
| Debounce with cancel |
| Throttle |
| Throttle with leading/trailing options |
| Throttle with cancel |
| Sleep / Delay |
| Timeout wrapper for Promise |
| Retry with exponential backoff |
| Rate limiter |
| Request scheduler (max concurrent) |

---

## 7. Function Utilities — Transformation

| Question |
|----------|
| Memoize (basic) |
| Memoize with TTL (expiry) |
| Memoize with max size (LRU) |
| Curry |
| Partial application |
| Once (call only once) |
| Negate |
| Flip arguments |
| Pipe |
| Compose |

---

## 8. Async Patterns

| Question |
|----------|
| Promisify (callback to promise) |
| Callbackify (promise to callback) |
| Serial async execution |
| Parallel async execution |
| Parallel with limit (concurrency control) |
| Async queue |
| Batch async requests |
| Auto-retry failed promises |
| Cancellable promise |
| Lazy promise (execute on .then) |
| Promise pool |
| Async map / filter / reduce |
| Waterfall execution |
| Race with timeout |
| First successful promise (ignore failures) |

---

## 9. Deep Operations — Objects

| Question |
|----------|
| Deep clone |
| Deep equal / comparison |
| Deep merge |
| Deep freeze |
| Deep omit keys |
| Deep pick keys |
| Deep get (lodash _.get) |
| Deep set (lodash _.set) |
| Deep unset |
| Deep diff (find differences) |
| Deep map values |
| Deep find by key/value |

---

## 10. Deep Operations — Arrays

| Question |
|----------|
| Flatten array (recursive) |
| Flatten to specific depth |
| Flatten object |
| Unflatten object |
| Chunk array |
| Group by |
| Count by |
| Key by |
| Unique / dedupe |
| Unique by key |
| Intersection of arrays |
| Difference of arrays |
| Union of arrays |
| Shuffle array |
| Sample random items |
| Compact (remove falsy) |
| Partition (split by condition) |
| Zip / Unzip arrays |
| Range generator |

---

## 11. DOM Utilities (Vanilla JS)

| Question |
|----------|
| getElementsByClassName (recursive) |
| getElementsByTagName |
| querySelector implementation |
| DOM traversal (find all text nodes) |
| Get all siblings |
| Get all ancestors |
| Find closest ancestor |
| Check if element is visible |
| Get element dimensions/position |
| Create element from HTML string |
| Event delegation handler |
| Serialize form to object |
| Deserialize object to form |
| Copy to clipboard |

---

## 12. Event Handling Patterns

| Question |
|----------|
| Event Emitter / PubSub |
| Event Emitter with once |
| Event Emitter with wildcard |
| Observable pattern |
| Mediator pattern |
| Custom addEventListener with options |
| Event bus |

---

## 13. Data Structures

| Question |
|----------|
| Stack |
| Queue |
| Priority Queue |
| Linked List |
| Doubly Linked List |
| Hash Map |
| LRU Cache |
| LFU Cache |
| Trie (autocomplete) |
| Tree / Binary Tree |
| Graph (adjacency list) |
| Set (from scratch) |
| Circular buffer |

---

## 14. Design Patterns

| Question |
|----------|
| Singleton |
| Factory |
| Builder |
| Observer |
| Pub/Sub |
| Command pattern (undo/redo) |
| State machine |
| Middleware pattern |
| Chain of responsibility |
| Dependency injection container |

---

## 15. Class & Inheritance

| Question |
|----------|
| Implement class syntax using function |
| Implement extends (inheritance) |
| Implement super |
| Prototypal inheritance |
| Mixins |
| Private variables (closure / WeakMap) |
| Static methods |

---

## 16. Utility Functions — Misc

| Question |
|----------|
| UUID generator |
| Random string generator |
| Hash function (simple) |
| Templating engine (mini) |
| Query string parser |
| Query string stringify |
| URL parser |
| Cookie get/set/delete |
| LocalStorage with expiry |
| Type checker (isArray, isObject, etc.) |
| Empty checker (isEmpty) |
| Clamp number |
| Format number (currency, commas) |
| Pluralize word |
| Truncate string |
| Slugify string |
| Camel to snake / snake to camel |
| Escape HTML |
| Unescape HTML |

---

## 17. Timers & Scheduling

| Question |
|----------|
| setInterval using setTimeout |
| Pausable timer |
| Resumable timer |
| Countdown |
| Stopwatch |
| setTimeout with clear-all |
| Idle callback |
| requestAnimationFrame polyfill |
| Scheduler (run at specific time) |
| Cron-like scheduler |

---

## 18. String Algorithms

| Question |
|----------|
| Palindrome check |
| Anagram check |
| Longest common substring |
| String permutations |
| String compression |
| Count vowels/consonants |
| Reverse words in sentence |
| First non-repeating character |
| Bracket matching |
| Caesar cipher |
| Levenshtein distance |

---

## 19. Number / Math

| Question |
|----------|
| Fibonacci (iterative, recursive, memoized) |
| Factorial |
| Prime check |
| Generate primes (Sieve) |
| GCD / LCM |
| Power function |
| Square root (Newton's method) |
| Roman to integer / Integer to Roman |
| Add large numbers (string) |
| Multiply large numbers (string) |

---

## 20. Advanced / Tricky

| Question |
|----------|
| Virtual DOM implementation |
| Virtual DOM diff algorithm |
| Simple reactive system (like Vue) |
| Simple Redux (store, dispatch, subscribe) |
| Simple React useState |
| Simple useEffect |
| Two-way data binding |
| Dependency injection |
| Module system (simple require/export) |
| Proxy-based validation |
| Proxy-based negative array index |
| Generators & Iterators |
| Custom iterable object |
| Async iterator |
| Web worker communication wrapper |
| Throttled fetch with cache |

---

## Top 15 Most Asked (Must Do)

| # | Question |
|---|----------|
| 1 | Debounce |
| 2 | Throttle |
| 3 | Promise.all |
| 4 | Deep clone |
| 5 | Memoize |
| 6 | Curry |
| 7 | Flatten array |
| 8 | Event Emitter |
| 9 | call / apply / bind |
| 10 | LRU Cache |
| 11 | Retry with backoff |
| 12 | Deep equal |
| 13 | Array.prototype.reduce |
| 14 | Promisify |
| 15 | getElementsByClassName |

