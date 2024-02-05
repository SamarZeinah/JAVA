let chosen=3;
let myfriends=[
{title:"osama",age:39,avaliable:true,skills:["html","css"]},
{title:"Ahmed",age:25,avaliable:false,skills:["py","Dj"]},
{title:"sayed",age:33,avaliable:true,skills:["php","lar"]},
];
let [obj1, obj2, obj3] = myfriends;

if(chosen===1){
let{title:t,age:a,avaliable:av,skills:[,two]}=obj1;
console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(`${two}`);
}
else if(chosen===2){
let{title:t,age:a,avaliable:av,skills:[,two]}=obj2;
console.log(t);
console.log(a);
console.log(av?"avaliable":"notavaliable");
console.log(`${two}`);
}
else{
    let{title:t,age:a,avaliable:av,skills:[,two]} =obj3;
    console.log(t);
    console.log(a);
    console.log(av?"avaliable":"notavaliable");
    console.log(`${two}`);
    }


