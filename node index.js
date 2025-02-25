
#### index.js

```javascript
#!/usr/bin/env node

const riddles = [
  "What has keys but can't open locks?",
  "What has a head, a tail, is brown, and has no legs?",
  "I speak without a mouth and hear without ears. What am I?",
  "What gets wetter as it dries?"
];

function getRandomRiddle() {
  return riddles[Math.floor(Math.random() * riddles.length)];
}

console.log("Welcome to the Impulse Riddle Generator!");
console.log("Here's a riddle for you:");
console.log(getRandomRiddle());
