'use strict';

/* =========================
   1) Hello / code structure
   ========================= */
{
  alert("I'm JavaScript!");

  alert('Hello');
  alert('World');

  alert('Hello');
  [1, 2].forEach(alert);

  alert('This is a single-line comment example');
  alert('Code structure chapter completed');
}

/* =========================
   2) Variables
   ========================= */
{
  let admin;
  let name1;

  name1 = "John";
  admin = name1;

  alert(admin);

  let ourPlanetName = "Earth";
  let currentUserName = "Visitor";

  const BIRTHDAY = '18.04.1982';
  // const age = someCode(BIRTHDAY); // ОСТАВЬ, если someCode реально существует
}

/* =========================
   3) Strings
   ========================= */
{
  let name2 = "Ilya";

  alert(`hello ${1}`);
  alert(`hello ${"name"}`);
  alert(`hello ${name2}`);
}

/* =========================
   4) prompt
   ========================= */
{
  let name3 = prompt("What is your name?", "");
  alert(name3);
}

/* =========================
   5) Prefix/Postfix
   ========================= */
{
  let a1 = 1;
  let b1 = 1;

  let c1 = ++a1;
  let d1 = b1++;

  alert(a1);
  alert(b1);
  alert(c1);
  alert(d1);

  a1 = 2;
  let x1 = 1 + (a1 *= 2);

  alert(a1);
  alert(x1);
}

/* =========================
   6) Type conversions
   ========================= */
{
  alert("" + 1 + 0);
  alert("" - 1 + 0);
  alert(true + false);
  alert(6 / "3");
  alert("2" * "3");
  alert(4 + 5 + "px");
  alert("$" + 4 + 5);
  alert("4" - 2);
  alert("4px" - 2);
  alert("  -9  " + 5);
  alert("  -9  " - 5);
  alert(null + 1);
  alert(undefined + 1);
  alert(" \t \n" - 2);

  let a2 = Number(prompt("First number?", 1));
  let b2 = Number(prompt("Second number?", 2));
  alert(a2 + b2);
}

/* =========================
   7) Comparisons
   ========================= */
{
  alert(5 > 4);
  alert("apple" > "pineapple");
  alert("2" > "12");
  alert(undefined == null);
  alert(undefined === null);
  alert(null == "\n0\n");
  alert(null === +"\n0\n");
}

/* =========================
   8) IF / ternary
   ========================= */
{
  if ("0") {
    alert('Hello');
  }

  let answer = prompt('What is the "official" name of JavaScript?', '');

  if (answer === 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don’t know? ECMAScript!");
  }

  let number = Number(prompt('Enter a number:', ''));

  if (number > 0) {
    alert(1);
  } else if (number < 0) {
    alert(-1);
  } else {
    alert(0);
  }

  let a3 = 1;
  let b3 = 2;
  let result = (a3 + b3 < 4) ? 'Below' : 'Over';
  alert(result);

  let login1 = prompt('login?', '');
  let message =
    (login1 === 'Employee') ? 'Hello' :
    (login1 === 'Director') ? 'Greetings' :
    (login1 === '') ? 'No login' :
    '';
  alert(message);
}

/* =========================
   9) Logical operators tasks
   ========================= */
{
  alert(null || 2 || undefined);
  alert(alert(1) || 2 || alert(3));
  alert(1 && null && 2);
  alert(alert(1) && alert(2));
  alert(null || 2 && 3 || 4);

  let age1 = 50;

  if (age1 >= 14 && age1 <= 90) alert('in range');
  if (!(age1 >= 14 && age1 <= 90)) alert('out of range');
  if (age1 < 14 || age1 > 90) alert('out of range');

  if (-1 || 0) alert('first');
  if (-1 && 0) alert('second');
  if (null || (-1 && 1)) alert('third');

  let login2 = prompt('Who are you?', '');
  if (login2 === 'Admin') {
    let password = prompt('Password?', '');
    if (password === 'TheMaster') alert('Welcome!');
    else if (password === '' || password === null) alert('Canceled');
    else alert('Wrong password');
  } else if (login2 === '' || login2 === null) {
    alert('Canceled');
  } else {
    alert("I don’t know you");
  }
}

/* =========================
   10) Nullish coalescing
   ========================= */
{
  let user1;
  alert(user1 ?? "Anonymous");

  user1 = "John";
  alert(user1 ?? "Anonymous");

  let firstName = null;
  let lastName = null;
  let nickName = "Supercoder";
  alert(firstName ?? lastName ?? nickName ?? "Anonymous");

  let height = 0;
  alert(height || 100);
  alert(height ?? 100);

  height = null;
  let width = null;
  let area = (height ?? 100) * (width ?? 50);
  alert(area);

  let x2 = (1 && 2) ?? 3;
  alert(x2);
}

/* =========================
   11) Loops
   ========================= */
{
  let i1 = 3;
  while (i1) alert(i1--);

  let i2 = 0;
  while (++i2 < 5) alert(i2);

  let i3 = 0;
  while (i3++ < 5) alert(i3);

  for (let i = 0; i < 5; i++) alert(i);
  for (let i = 0; i < 5; ++i) alert(i);

  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) alert(i);
  }

  let i4 = 0;
  while (i4 < 3) {
    alert(`number ${i4}!`);
    i4++;
  }

  let num;
  do {
    num = prompt('Enter a number greater than 100:', '');
  } while (num !== null && num !== '' && Number(num) <= 100);

  let n1 = Number(prompt('Enter n:', '10'));
  for (let i = 2; i <= n1; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) { isPrime = false; break; }
    }
    if (isPrime) alert(i);
  }
}

/* =========================
   12) Switch tasks
   ========================= */
{
  let browser = prompt('browser?', '');

  if (browser === 'Edge') {
    alert("You've got the Edge!");
  } else if (
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ) {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }

  let a4 = +prompt('a?', '');

  switch (a4) {
    case 0: alert(0); break;
    case 1: alert(1); break;
    case 2:
    case 3: alert('2,3'); break;
    default: alert('other');
  }
}

/* =========================
   13) Functions tasks
   ========================= */
{
  function checkAge(age) {
    if (age > 18) return true;
    return confirm('Did parents allow you?');
  }

  const checkAgeQ = age => age > 18 ? true : confirm('Did parents allow you?');
  const checkAgeOr = age => age > 18 || confirm('Did parents allow you?');

  function min(a, b) {
    return a < b ? a : b;
  }

  function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) result *= x;
    return result;
  }

  let x3 = Number(prompt('x?', ''));
  let n2 = Number(prompt('n?', ''));

  if (Number.isInteger(n2) && n2 >= 1) {
    alert(pow(x3, n2));
  } else {
    alert('n must be a natural number (integer >= 1)');
  }
}

/* =========================
   14) Arrow functions task
   ========================= */
{
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    'Do you agree?',
    () => alert('You agreed.'),
    () => alert('You canceled the execution.')
  );
}

/* =========================
   15) Debugging demo
   ========================= */
{
  function hello(name) {
    let phrase = `Hello, ${name}!`;
    debugger;
    say(phrase);
  }

  function say(text) {
    alert(text);
  }

  for (let i = 0; i < 5; i++) {
    console.log('value,', i);
  }

  // hello("debugger");
}

/* =========================
   16) IMPORTANT: убери "..." из кода
   ========================= */
// ВНИМАНИЕ: вот это НЕ код и ломает файл:
// function pow(x, n) { ... }
// Если хочешь показать "заглушку", пиши так:
{
  function powDocExample(x, n) {
    // TODO: implement
    return x ** n;
  }
  console.log(powDocExample(2, 3));
}
