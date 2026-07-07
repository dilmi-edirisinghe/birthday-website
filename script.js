 function startJourney() {
    show("letter");
    typeLetter();
}

function showGallery() {
    show("gallery");
}

function showCake() {
    show("cake");
}

function show(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* typing effect */
function typeLetter() {
     let text = `Happy Birthday My Love ❤️

From the day we met on 21 December 2019,
You became my everything.
Even though you are in Dubai,
You are always in my heart.
I love you forever, ever and ever ❤️

මම ගොඩක් ආදරෙයි මැණිකෙ ඔයාට...😘

මට ඕනෙ මේ ජීවිතේ ඉවර වෙනකම් ඔයා එක්ක ඉන්න.
ඔයා ආස හැමදේම ලස්සන කරන්න.
ඇත්තම කිව්වොත් ඔයාට හීන පාට කරන්න උදව් කරන්න.
ඔයා එක්ක අපි දැකපු හීන ඇත්තටම දකින්නයි මට ඕනෙ 😔😘🌷

💖 Dilmi 💖`;

    let i = 0;
    let speed = 25;

    function typing() {
        if (i < text.length) {
            document.getElementById("typeText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

/* music */
function playMusic() {
    document.getElementById("music").play();
}

/* image popup */
function openImg(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = img.src;
}

function closeImg() {
    document.getElementById("popup").style.display = "none";
}

/* cake action */
function blowCandles() {
    // celebratory message on the cake screen
    const cakeSection = document.getElementById("cake");
    const msg = document.createElement("p");
    msg.textContent = "🎉 Happy Birthday Mage Manike ❤️";
    msg.style.fontSize = "24px";
    msg.style.color = "#FFD700";
    msg.style.animation = "fade 1s ease";
    cakeSection.appendChild(msg);

    // confetti burst
    launchConfetti();

    setTimeout(() => {
        show("final");
    }, 2000); // gives confetti time to be seen before transitioning
}

function launchConfetti() {
    const emojis = ["🎉", "❤️", "💖", "🎊", "✨", "💕"];
    const confettiCount = 40;

    for (let i = 0; i < confettiCount; i++) {
        const el = document.createElement("span");
        el.className = "confetti";
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = (Math.random() * 2 + 2) + "s"; // 2-4s fall
        el.style.fontSize = (Math.random() * 16 + 16) + "px"; // 16-32px
        document.body.appendChild(el);

        // clean up after animation finishes
        setTimeout(() => el.remove(), 4000);
    }
}