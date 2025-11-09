let user={
	name: "Гість",
	surname: "Гість",
	age: "—"
}




function greet(currentUser){
	return "Привіт, " + currentUser.name + " " + currentUser.surname + "!\nВік: " + currentUser.age + " років.";
}


function showGreeting(){
	let nameValue = document.getElementById("name").value;
	user.name = nameValue;
	if(user.name===""){
		user.name = "Гість";
	}else{
		user.name = nameValue;
	}


	let surnameValue = document.getElementById("surnameInput").value;
	user.surname = surnameValue;
	if(user.surname===""){
		user.surname = "Гість";
	}else{
		user.surname=surnameValue;
	}

	let ageValue = document.getElementById("ageInput").value;
	user.age = ageValue;
	if(user.age===""){
		user.age = "—";
	}else{
		user.age=ageValue;
	}


	let message = greet(user);

//document.getElementById("done").innerText = message;


let profileInfo = "Ім'я: " + user.name +"\nПрізвище: "+ user.surname +"\nВік: "+ user.age;
document.getElementById("profileText").innerText = profileInfo;
showFriends();
}











//let hero ={
//	name: "John",
//	class: "Warrior",
//	weapon: "Sword"
//}

//console.log(hero.name);
//console.log(hero.class);
//hero.class ="Hero Warrior";
//hero.achiv="First kil";
//console.log(hero.class);
//console.log(hero.achiv);

//delete hero.achiv;
//console.log(hero);

















let friends =[
	{name:"Володимир", age: 30},
	{name:"Максим", age: 15},
	{name:"Генадій", age: 78},
	{name: "Іван", age: 12 },
    {name: "Ліза", age: 13 }
];

function showFriends() {
	let listElement = document.getElementById("friendsList");
	listElement.innerText = "";

	friends.forEach(function(friend){
		let item = document.createElement("li");
		item.innerText = friend.name + " - " + friend.age + " років";
		listElement.appendChild(item);

	});
}


function addFriends(){
	let name = document.getElementById("friendName").value;
	let age = document.getElementById("friendAge").value;
	let hobby = document.getElementById("friendHobby").value;
	if (name !== "" && age !== "" && hobby !==""){
		let item = document.createElement("li");
		item.innerText = name + " - " + age + " років" + " - " + "Хобі: "  + hobby  ;
		let list = document.getElementById("friendsList");
		list.appendChild(item);
		let new_friend = {friend_name: name, friend_age: age};
		// friends.push();
		// localStorage.setItem("new_friend_name", name);
		// localStorage.setItem("new_friend_age", age);
		// localStorage.setItem("new_friend_hobby",hobby);
		localStorage.setItem("friendsList",JSON.stringify(friends));
		JSON.parse()		
	} else{
		alert("Будь ласка вкажіть ім'я, вік друга та хобі");
	}
}


const infoBox = document.getElementById("infoBox");
const toggleStyleBtn = document.getElementById("toggleStyleBtn");



function toggleStyle() {
	infoBox.classList.toggle("activateStyle");

}

const colorBox = document.getElementById("colorBox");
const changeStyleBtn = document.getElementById("changeStyleBtn");



function changeStyle() {
	colorBox.classList.toggle("colored");

}


const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const feedbackBox = document.getElementById("feedback");
const topicInput = document.getElementById("topic");


if(form){
form.addEventListener("submit", function(event){
	event.preventDefault();

	const nameValue= nameInput.value.trim();
	const emailValue= emailInput.value.trim();
	const messageValue= messageInput.value.trim();
	const topicValue = topicInput.value.trim()

	if (nameValue === "" || emailValue ==="" || messageValue==="" || topicValue===""){
		feedbackBox.innerText = "Будь ласка, вкажіть усі данні!";
		feedbackBox.style.color= "red";
	} else{
		feedbackBox.innerText = "Дякуємо, " +nameValue +"! Ваше повідомлення на тему " +topicValue+" надіслано.";
		feedbackBox.style.color="green";

	}
	nameInput.value = "";
	emailInput.value = "";
	messageInput.value = "";
	topicInput.value = "";
	

});
}


let browser = "Google Chrome";
let OS = "Windows";
let ip = "25.88.133.88";


localStorage.setItem("user_browser", browser);
localStorage.setItem("user_OS", OS);
localStorage.setItem("user_ip", ip);





function showVisitMessage() {
	let visitCount = localStorage.getItem("visitCount");

	if (visitCount === null) {
		visitCount = 1;
		localStorage.setItem("visitCount", visitCount);
		document.getElementById("visitInfo").innerText= "Вітаємо! Це твій перший візит на сайт!";
	} else {
		visitCount = parseInt(visitCount) + 1;
		localStorage.setItem("visitCount", visitCount);
		document.getElementById("visitInfo").innerText = "Ти вже заходив на сайт " + visitCount + " рази!";
	}
}

window.addEventListener("load", showVisitMessage);