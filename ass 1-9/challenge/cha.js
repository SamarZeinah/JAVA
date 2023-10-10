let title="Elzero";
let Description="Elzero web school";
let Date="25/10";

let card=`
<div class="Card">
<div class="child">
<h1>hello ${title}</h1>
<p>${Description}</p>
<span>${Date}</span>
</div>
</div>`;
document.write(card.repeat(4));
