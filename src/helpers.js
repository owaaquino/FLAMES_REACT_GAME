export function nameToArray(name) {
  let updatedName = name.toUpperCase();
  //remove spaces on the name
  updatedName = updatedName.replace(/\s+/g, "");
  //convert string to array
  return updatedName.split("");
}

export function flames(n) {
  let flames = ["f", "l", "a", "m", "e", "s"];
  let match = "";
  if (n === 0) {
    match = "f";
  }
  for (let i = 0; i < n; i++) {
    match = flames[i];
  }
  return match;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getResult(n) {
  const posibleAnswer = [
    "friend 😐",
    "friendzoned 💔",
    "flirting 👫",
    "fling 👫",
    "frenimies 🤼‍♀️",
    "lover 💑",
    "luluha 😭",
    "angry 😡",
    "adorable 😍",
    "asuwang 👹",
    "marriage 💒",
    "may kabit 🤦‍♂️",
    "may kahati 😒",
    "maybe 💁‍♀️",
    "enemy 🔫",
    "engage 💍",
    "sweet 🍬",
    "suntukan 👊"
  ];

  let filteredResult = posibleAnswer.filter(result => result[0] === n);

  return rando(filteredResult);
}

// export function countNames(list) {
//   return list.reduce((acc, curr) => {
//     if (acc[curr]) {
//       acc[curr] += 1;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {});
// }

// export function removeDuplicates(array) {
//   const nameCounts = countNames(array); // { John: 3, Bean: 1, Mike: 1, Rose: 1 }
//   return Object.keys(nameCounts).filter(name => nameCounts[name] === 1);
// }
