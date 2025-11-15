let user = {
    name: "Гість",
    surname: "Гість",
    age: "—"
};

let savedUser = localStorage.getItem("currentUser");
if(savedUser) user = JSON.parse(savedUser);



function greet(currentUser) {
    return `Привіт, ${currentUser.name} ${currentUser.surname}!\nВік: ${currentUser.age} років.`;
}

function showGreeting() {
    user.name = (document.getElementById("name")?.value.trim()) || "Гість";
    user.surname = (document.getElementById("surnameInput")?.value.trim()) || "Гість";
    
    let ageValue = parseInt(document.getElementById("ageInput")?.value);
    user.age = (!isNaN(ageValue) && ageValue > 0) ? ageValue : "—";

    localStorage.setItem("currentUser", JSON.stringify(user));

    const profileText = document.getElementById("profileText");
    if(profileText){
        profileText.innerText = `Ім'я: ${user.name}\nПрізвище: ${user.surname}\nВік: ${user.age}`;
    }

    showFriends();
}



let friends = [
    { name: "Володимир", age: 30, hobby: "Риболовля" },
    { name: "Максим", age: 15, hobby: "Футбол" },
    { name: "Генадій", age: 78, hobby: "Садівництво" },
    { name: "Іван", age: 12, hobby: "Ігри" },
    { name: "Ліза", age: 13, hobby: "Малювання" }
];


let savedFriends = localStorage.getItem("friendsList");
if(savedFriends) friends = JSON.parse(savedFriends);

function showFriends() {
    const listElement = document.getElementById("friendsList");
    if(!listElement) return;
    listElement.innerText = "";
    friends.forEach(friend => {
        let item = document.createElement("li");
        item.innerText = `${friend.name} — ${friend.age} років | Хобі: ${friend.hobby}`;
        listElement.appendChild(item);
    });
}

function addFriends() {
    let name = document.getElementById("friendName")?.value.trim();
    let age = parseInt(document.getElementById("friendAge")?.value.trim());
    let hobby = document.getElementById("friendHobby")?.value.trim();
    const messageBox = document.getElementById("done");

    if(!messageBox) return;

    messageBox.innerText = "";
    messageBox.style.color = "red";

    if (!name || !hobby || isNaN(age) || age <= 0) {
        messageBox.innerText = "Будь ласка, заповніть усі поля правильно!";
        return;
    }

    friends.push({ name, age, hobby });
    showFriends();
    localStorage.setItem("friendsList", JSON.stringify(friends));

    document.getElementById("friendName").value = "";
    document.getElementById("friendAge").value = "";
    document.getElementById("friendHobby").value = "";

    messageBox.style.color = "green";
    messageBox.innerText = "Друга додано!";
}


function showVisitMessage() {
    const visitInfo = document.getElementById("visitInfo");
    if(!visitInfo) return;

    let visitCount = localStorage.getItem("visitCount");
    if(!visitCount){
        visitCount = 1;
        visitInfo.innerText = "Вітаємо! Це твій перший візит на сайт!";
    } else {
        visitCount = parseInt(visitCount) + 1;
        visitInfo.innerText = `Ти вже заходив на сайт ${visitCount} рази!`;
    }
    localStorage.setItem("visitCount", visitCount);
}
window.addEventListener("load", showVisitMessage);


function toggleStyle() {
    const infoBox = document.getElementById("infoBox");
    if(infoBox) infoBox.classList.toggle("activateStyle");
}

function changeStyle() {
    const colorBox = document.getElementById("colorBox");
    if(colorBox) colorBox.classList.toggle("colored");
}


const toggleStyleBtn = document.getElementById("toggleStyleBtn");
if(toggleStyleBtn) toggleStyleBtn.addEventListener("click", toggleStyle);

const changeStyleBtn = document.getElementById("changeStyleBtn");
if(changeStyleBtn) changeStyleBtn.addEventListener("click", changeStyle);


const form = document.getElementById("contactForm");
if(form){
    form.addEventListener("submit", function(event){
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const topicInput = document.getElementById("topic");
        const messageInput = document.getElementById("message");
        const feedbackBox = document.getElementById("feedback");

        if(!nameInput || !emailInput || !topicInput || !messageInput || !feedbackBox) return;

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();
        const topicValue = topicInput.value.trim();

        if(!nameValue || !emailValue || !messageValue || !topicValue){
            feedbackBox.innerText = "Будь ласка, вкажіть усі данні!";
            feedbackBox.style.color = "red";
        } else {
            feedbackBox.innerText = `Дякуємо, ${nameValue}! Ваше повідомлення на тему "${topicValue}" надіслано.`;
            feedbackBox.style.color = "green";
            nameInput.value = "";
	        emailInput.value = "";
	        messageInput.value = "";
        	topicInput.value = "";
        }
    });
}


localStorage.setItem("user_browser", "Google Chrome");
localStorage.setItem("user_OS", "Windows");
localStorage.setItem("user_ip", "25.88.133.88");

showFriends();
