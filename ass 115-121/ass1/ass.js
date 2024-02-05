//ass1
let myNumbers = [1, 2, 3, 4, 5];
let[a, , , ,e]=myNumbers;
console.log(a * e); // 5
console.log(`.............`);

//ass2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
[a, b, c, [d, f, [, g]]]=mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
console.log(`.............`);

// ass3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
arr3.push(arr1);
[, a, b,[c, ,]]=arr3;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed
console.log(`............`);

//ass4
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

({ age:a ,working:w  }=member);
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
({ country:c  }=member);
console.log(`I Live in ${c}`);
  // I Live in Egypt
({hobbies: [h1, , h3]  }=member);
console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
console.log(`.........`);  

//ass5
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
    },
    Origin: "30 USD",
    },
};

const{title:t}=game;
const{developer:D}=game;
const[o,A]=Object.keys(game.releases);
const[u,j]=Object.values(game.releases)[0];
const { US: u_price, JAP: j_price } = Object.values(game.releases)[1];
const { Origin: or } = game.releases;


console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
console.log(`And I Love ${D} Games`);
  // And I Love Falcom Games
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
console.log(`Although I Love ${A}`);
  // Although I Love Ark Of Napishtim
console.log(`${A} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD
console.log(`${A} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD