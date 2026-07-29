// --- 0. BACKGROUND POLAROIDS (Faded background décor) ---
const bgPhotos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"];

// --- 1. THE 50 REASONS WHY I LOVE YOU (Natural boyfriend English!) ---
const reasonsList = [
    "Your eyes when youre looking at me and trying not to smile.",
    "The way you care about the people you love without hesitating.",
    "How cute you look when youre super focused.",
    "Your laugh. I LOVE your smile and seeing you happy.",
    "You are you with me.",
    "Your pretty eyes when they are 😏.",
    "The way you randomly call me.",
    "How hard you're working towards your goal.",
    "You have the softest vibe. Being around you just feels like im in a womb.",
    "How adorable you get when you're excited about food.",
    "Your smile (teeth) it is effortlessly the prettiest thing I've ever seen.",
    "The goofy little faces you make randomly.",
    "How proud I feel just getting to tell people that you're my girl.",
    "You listen to me rant and never make me feel stupid.",
    "Even when you're stressed out, you still treat people with kindness (except me jk).",
    "You actually find me funny yayy.",
    "How you make 5,000 km of distance feel like nothing when we talk.",
    "You're not just my girlfriend, you're wallahi my best friend.",
    "The cute way you argue when you know you're 100% right.",
    "Everything about you.",
    "How understood you make me feel.",
    "The fact that you're brave enough to move to Georgia to chase your dream.",
    "Your smile when you laugh really hard.",
    "How honest you are with me, even when it's hard things to say.",
    "How theres not a single moment of awkardness bw us.",
    "The way you say my name when you're trying to get my attention (yadavvvv).",
    "How passionate you are about your future and becoming a dentist.",
    "You never let me give up on us.",
    "How you always keep me updated about your life.",
    "How comfortable we can be in complete silence together.",
    "You're gorgeous even when you just woke up drooling, puffy and with messy hair.",
    "The way you get mad at me when I don't take care of myself.",
    "You always are so considerate on tiny things.",
    "Your voice is my favorite sound to hear.",
    "How smart you are—you surprise me with the most creative gifts all the time.",
    "The way you always know when something is bothering me before I even say it.",
    "How patient you are with me when I'm being annoying.",
    "You make me want to be a better man for you every single day.",
    "The way you look at me like I actually matter.",
    "How you can be super soft and sweet, but also total boss bih.",
    "Your little habits that you don't even realize you do.",
    "How much grateful you are for your privelage.",
    "The way you support me without me ever having to ask.",
    "You give the absolute best hugs.",
    "Your butt.",
    "How you manage to stay strong even when you're homesick.",
    "You're literally the most beautiful girl in any room you walk into.",
    "The way you make every memory we have together so special.",
    "You're my favorite person to annoy.",
    "Just because you are you. I wouldn't change a single thing about you."
];

// --- 2. LOVE COUPONS DATA ---
const couponsData = [
    { id: 1, title: "1 Free Food Delivery 🍕", desc: "I'll order whatever you're craving straight to your hostel." },
    { id: 2, title: "1 Hour College Yap Session 🦷", desc: "Rant about dental anatomy, professors, or exams. I will just listen and nod." },
    { id: 3, title: "1 Free Argument Win 🏳️", desc: "Even if I'm right, you win this one. Zero questions asked." },
    { id: 4, title: "1 Persistent Wake-Up Call ⏰", desc: "I will spam call your phone so you don't oversleep for your practicals." },
    { id: 5, title: "1 Virtual Movie Date 🍿", desc: "We pick a movie and hit play at the exact same second on video call." },
    { id: 6, title: "1 Late Night Study Buddy 📚", desc: "I'll stay on video call while you study just to keep you company." }
];

// --- 3. FLIP POLAROIDS (#10 to #30 = 21 Photos) ---
const polaroidsData = [];
const sampleNotes = [
    "The reason we are together.",
    "One of my favorite memories with you ever.",
    "In case you forgot how much i adore you.",
    "One of my favorite memories with you ever",
    "Felt like those college couples on the scooter, I love this day.",
    "My absolute favorite look on you.",
    "We look good (you are the one making us look good).",
    "Deserve it all.",
    "Pure happiness right here.",
    "I brag about you to everyone, just so you know.",
    "If I could pause time, I would’ve paused it right here. 😚",
    "Chivalry cleary not dead.",
    "😏😏😏😏",
    "Love you YOUR life (sushi).",
    "They cant even comprehend how far we have come.",
    "BEST TIME OF MY LIFE. PERIOD" 
];

for (let i = 10; i <= 25; i++) {
    polaroidsData.push({
        num: i,
        img: `photo${i}.jpg`, // Ensure you have photo10.jpg to photo30.jpg, or they will fallback cleanly
        note: sampleNotes[(i - 10) % sampleNotes.length]
    });
}

// --- 4. TIME CAPSULE LETTERS DATA ---
const letterData = [
    {
        id: "letter-bday",
        title: "Open on your birthday night 🎂",
        targetDate: "2026-08-02T20:00:00",
        content: "Happy birthday my love! Even though you're in Tbilisi..."
    },
    {
        id: "letter-freezing",
        title: "Open when Georgia gets freezing cold 🥶",
        targetDate: "2026-12-01T00:00:00",
        content: "Put on a hoodie, make some hot tea, and read this..."
    },
    {
        id: "letter-bds-hard",
        title: "Open when acedamics get hard 🦷",
        targetDate: "2026-10-15T00:00:00",
        content: "I know dentistry is brutal right now, but remember how hard you worked..."
    },
    {
        id: "letter-food",
        title: "Open when craving sushi & ramen 🍜",
        targetDate: "2026-09-20T00:00:00",
        content: "Hostel food sucks, I know. But the second you're back..."
    },
    {
        id: "letter-doubt",
        title: "Open when questioning moving 5,000 km away ✈️",
        targetDate: "2026-09-10T00:00:00",
        content: "Moving to another country at our age is scary as hell, but I am so proud..."
    },
    {
        id: "letter-win",
        title: "Open when you ace your first test 🏆",
        targetDate: "2026-10-30T00:00:00",
        content: "I TOLD YOU SO! You're going to be the best dentist ever..."
    }
];

// --- 5. AUDIO PLAYER ---
const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicText = document.getElementById("music-text");
let isPlaying = false;

function startMusic() {
    if (!isPlaying && audio) {
        audio.play().then(() => {
            isPlaying = true;
            musicText.innerText = "Playing Our Song 🎶";
        }).catch(() => {});
    }
}
document.body.addEventListener("click", startMusic, { once: true });

musicToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        musicText.innerText = "Music Paused 🔇";
    } else {
        audio.play();
        isPlaying = true;
        musicText.innerText = "Playing Our Song 🎶";
    }
});

// --- 6. RENDER 50 REASONS JAR ---
const jarBtn = document.getElementById("jar-btn");
const reasonDisplay = document.getElementById("reason-display");
const reasonText = document.getElementById("reason-text");
const anotherReasonBtn = document.getElementById("another-reason-btn");

function showRandomReason() {
    const randomIndex = Math.floor(Math.random() * reasonsList.length);
    reasonText.innerText = `"${reasonsList[randomIndex]}"`;
    reasonDisplay.classList.remove("hidden");
}

jarBtn.addEventListener("click", showRandomReason);
anotherReasonBtn.addEventListener("click", showRandomReason);

// --- 7. RENDER LOVE COUPONS ---
const couponsGrid = document.getElementById("coupons-grid");

couponsData.forEach((coupon) => {
    const card = document.createElement("div");
    card.className = "coupon-card";
    card.innerHTML = `
        <div class="coupon-info">
            <h4>${coupon.title}</h4>
            <p>${coupon.desc}</p>
        </div>
        <div class="coupon-status">TAP TO REDEEM</div>
    `;
    
    card.addEventListener("click", () => {
        if (!card.classList.contains("redeemed")) {
            card.classList.add("redeemed");
            card.querySelector(".coupon-status").innerText = "💖 REDEEMED!";
        }
    });
    
    couponsGrid.appendChild(card);
});

// --- 8. RENDER HORIZONTAL FLIP POLAROIDS (#10 to #30) ---
const polaroidSlider = document.getElementById("polaroid-slider");

polaroidsData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${item.img}" alt="Memory #${item.num}" onerror="this.src='https://placehold.co/200x220/ffe3eb/e64980?text=Photo+${item.num}';">
                <div class="polaroid-number">#${item.num}</div>
            </div>
            <div class="flip-card-back">
                <div class="polaroid-note">"${item.note}"</div>
                <div class="flip-hint">Tap to flip back</div>
            </div>
        </div>
    `;
    
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
    
    polaroidSlider.appendChild(card);
});

// --- 9. RENDER LETTERS & COUNTDOWNS ---
const lettersGrid = document.getElementById("letters-grid");

letterData.forEach((letter) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${letter.id}`;
    card.innerHTML = `
        <span class="card-icon" id="icon-${letter.id}">🔒</span>
        <h3>${letter.title}</h3>
        <div class="countdown" id="cd-${letter.id}">Checking...</div>
    `;
    card.addEventListener("click", () => handleCardClick(letter));
    lettersGrid.appendChild(card);
});

function updateCountdowns() {
    const now = new Date().getTime();
    letterData.forEach((letter) => {
        const target = new Date(letter.targetDate).getTime();
        const distance = target - now;
        const cdElement = document.getElementById(`cd-${letter.id}`);
        const iconElement = document.getElementById(`icon-${letter.id}`);

        if (distance <= 0) {
            cdElement.innerHTML = "✨ READY TO OPEN";
            cdElement.style.background = "#d3f9d8";
            cdElement.style.color = "#2b8a3e";
            iconElement.innerHTML = "💌";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            cdElement.innerHTML = days > 0 ? `Unlocks in ${days}d ${hours}h` : `Unlocks in ${hours}h`;
        }
    });
}
updateCountdowns();
setInterval(updateCountdowns, 60000);

// --- 10. MODAL POPUP LOGIC ---
const modal = document.getElementById("letter-modal");
const closeBtn = document.querySelector(".close-btn");

function handleCardClick(letter) {
    const now = new Date().getTime();
    const target = new Date(letter.targetDate).getTime();
    const card = document.getElementById(`card-${letter.id}`);

    if (now >= target) {
        document.getElementById("modal-title").innerText = letter.title;
        document.getElementById("modal-body").innerText = letter.content;
        modal.style.display = "flex";
    } else {
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
    }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// --- 11. SCATTERED BACKGROUND POLAROIDS (Ambient Décor) ---
const bgContainer = document.getElementById("bg-photos-container");
const polaroidPositions = [
    { top: "6%", left: "3%", rotate: "-10deg" },
    { top: "68%", left: "4%", rotate: "8deg" },
    { top: "10%", right: "4%", rotate: "10deg" },
    { top: "72%", right: "5%", rotate: "-6deg" }
];

bgPhotos.forEach((src, index) => {
    if (index >= polaroidPositions.length) return;
    const pos = polaroidPositions[index];
    const div = document.createElement("div");
    div.className = "bg-polaroid";
    div.style.top = pos.top;
    if (pos.left) div.style.left = pos.left;
    if (pos.right) div.style.right = pos.right;
    div.style.transform = `rotate(${pos.rotate})`;
    div.innerHTML = `<img src="${src}" alt="Memory" onerror="this.parentElement.style.display='none';">`;
    bgContainer.appendChild(div);
});

// --- 12. FLOATING CUTESY INTERACTIVE STICKERS ---
const stickerAssets = [
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bouquet.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Steaming%20Bowl.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Sushi.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Two%20Hearts.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Health%20Worker.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Airplane.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Sparkles.png"
];

const stickerContainer = document.getElementById("floating-stickers");

for (let i = 0; i < 14; i++) {
    let img = document.createElement("img");
    img.src = stickerAssets[i % stickerAssets.length];
    img.className = "floating-sticker";
    
    let size = Math.floor(Math.random() * 18) + 38;
    img.style.width = size + "px";
    img.style.left = (Math.random() * 86 + 5) + "vw";
    img.style.top = (Math.random() * 86 + 5) + "vh";
    img.style.animationDelay = (Math.random() * 4) + "s";
    img.style.animationDuration = (6 + Math.random() * 5) + "s";
    
    img.addEventListener("mouseover", () => {
        const randomX = (Math.random() - 0.5) * 140;
        const randomY = (Math.random() - 0.5) * 140;
        img.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.15)`;
    });

    img.addEventListener("click", () => {
        img.style.transform = "scale(1.4) rotate(360deg)";
        setTimeout(() => img.style.transform = "scale(1) rotate(0deg)", 400);
    });

    stickerContainer.appendChild(img);
}
