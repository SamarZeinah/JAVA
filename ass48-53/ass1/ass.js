//Assimante One
let start = 10;
let end = 100;
let exclude = 40;
for(let i=start;i<=end;i+=start){
    if(i===exclude){
        continue;
    }
    console.log(i);
    
}
console.log(`................`);


//Assimante Two
let Start = 10;
let End = 0;
let Stop = 3;
for(let i=Start;i>=Stop;i--){
    if(i<Start){
        console.log(`0${i}`);
       
}
}
console.log(`................`);


//Assimante four
let index = 10;
let jump = 2;
for (;;) {
    console.log(index);
    index-=jump;
    if(index===jump)
    break;
}
// Output
10
8
6
4
console.log(`................`);

//Assiment five
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newArray=[];
    
for (i = 0; i < friends.length; i++) {
    if (friends[i][0] != letter.toUpperCase()) {
    newArray.push(friends[i])
    }
    }
    for (j = 0; j < newArray.length; j++) {
    console.log(`"${j + 1} => ${newArray[j]}`)
    }
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
console.log(`................`);

//Assiment six
let start1 = 0;
let swappedName = "elZerO";
let changeChar=[];
for( i=start1;i<swappedName.length;i++){
    if(swappedName[i]==swappedName[i].toUpperCase()){
        changeChar.push(swappedName[i].toLowerCase());
}
else {
    changeChar.push(swappedName[i].toUpperCase());
}
}
console.log(changeChar.join(""));
//output
"ELzERo"
console.log(`................`);

//Assiment seven
let start2 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i=start2;i<mix.length;i++){
    if(mix[i]==1||typeof mix[i] == "string" ){
        continue;
    }
    console.log(mix[i]);
}
// Output
2
3
4