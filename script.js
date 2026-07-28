// --- 1. THE LETTERS & DATES ---
const letterData = [
    {
        id: "letter-bday",
        title: "Open on your birthday night 🎉",
        targetDate: "2026-08-02T20:00:00", 
        content: "Write your birthday message here...",
        joke: "Type a joke or sweet sign-off here..."
    },
    {
        id: "letter-freezing",
        title: "Open when you miss me in freezing Georgia 🥶",
        targetDate: "2026-12-01T00:00:00", 
        content: "Write what you want to say when she's cold and homesick...",
        joke: ""
    },
    {
        id: "letter-bds-hard",
        title: "Open when BDS is kicking your ass 📚",
        targetDate: "2026-10-15T00:00:00", 
        content: "Write some encouragement for her dental exams here...",
        joke: ""
    },
    {
        id: "letter-food",
        title: "Open when you are craving Goan food 🍛",
        targetDate: "2026-09-20T00:00:00", 
        content: "Write something about food here...",
        joke: ""
    },
    {
        id: "letter-fight",
        title: "Open after our first stupid time-zone fight 🙄",
        targetDate: "2026-11-01T00:00:00", 
        content: "Write your apology or grounding message here...",
        joke: ""
    },
    {
        id: "letter-doubt",
        title: "Open when you question why you moved 5,000 km away ✈️",
        targetDate: "2026-09-10T00:00:00", 
        content: "Write a reality check on how proud you are of her...",
        joke: ""
    },
    {
        id: "letter-win",
        title: "Open when you ace your first practical at SEU 🏆",
        targetDate: "2026-10-30T00:00:00", 
        content: "Write your celebration message here...",
        joke: ""
    }
];

// --- 2. GENERATE THE CARDS WITH RANDOM ROTATIONS ---
const grid = document.getElementById("letters-grid");

letterData.forEach((letter) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${letter.id}`;
    
    // Gives each card that messy scrapbook tilt
    const randomRotation = (Math.random() * 8) - 4; 
    card.style.transform = `rotate(${randomRotation}deg)`;
    
    card.innerHTML = `
        <span class="locked-icon" id="icon-${letter.id}">🔒</span>
        <h3>${letter.title}</h3>
        <div class="countdown" id="cd-${letter.id}">Loading...</div>
    `;
    
    card.addEventListener("click", () => handleCardClick(letter));
    grid.appendChild(card);
});

// --- 3. COUNTDOWN & UNLOCK LOGIC ---
function updateCountdowns() {
    const now = new Date().getTime();

    letterData.forEach((letter) => {
        const target = new Date(letter.targetDate).getTime();
        const distance = target - now;
        const cdElement = document.getElementById(`cd-${letter.id}`);
        const iconElement = document.getElementById(`icon-${letter.id}`);
        const card = document.getElementById(`card-${letter.id}`);

        if (distance <= 0) {
            cdElement.innerHTML = "✨ Click to open!";
            cdElement.style.background = "#d4edda";
            cdElement.style.color = "#155724";
            iconElement.innerHTML = "💌";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            cdElement.innerHTML = `Unlocks in: ${days}d ${hours}h ${mins}m`;
        }
    });
}
updateCountdowns();
setInterval(updateCountdowns, 60000);

// --- 4. MODAL LOGIC ---
const modal = document.getElementById("letter-modal");
const closeBtn = document.querySelector(".close-btn");

function handleCardClick(letter) {
    const now = new Date().getTime();
    const target = new Date(letter.targetDate).getTime();
    const card = document.getElementById(`card-${letter.id}`);

    if (now >= target) {
        document.getElementById("modal-title").innerText = letter.title;
        document.getElementById("modal-body").innerText = letter.content;
        
        const jokeBox = document.getElementById("modal-joke");
        if(letter.joke !== "") {
            jokeBox.style.display = "block";
            jokeBox.innerText = letter.joke;
        } else {
            jokeBox.style.display = "none";
        }
        
        modal.style.display = "flex";
    } else {
        // Reset animation so it can shake multiple times
        card.style.animation = 'none';
        card.offsetHeight; /* trigger reflow */
        card.style.animation = null; 
        card.classList.add("shake");
        setTimeout(() => card.classList.remove("shake"), 400);
    }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// --- 5. AUTOMATIC HIGH-QUALITY CDN STICKERS ---
// I sourced high-res 3D assets for her interests: Money, Cats, Flowers, Sushi, Ramen
const stickerURLs = [
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Money%20with%20Wings.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Tulip.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Sushi.png",
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Steaming%20Bowl.png"
];

const container = document.getElementById("floating-stickers");

for (let i = 0; i < 18; i++) {
    let img = document.createElement("img");
    img.src = stickerURLs[Math.floor(Math.random() * stickerURLs.length)];
    img.className = "floating-sticker";
    
    // Vary the sizes slightly
    let size = Math.floor(Math.random() * 40) + 40; 
    img.style.width = size + "px";
    
    // Random placement across the screen
    img.style.left = (Math.random() * 90) + "vw";
    img.style.top = (Math.random() * 95) + "vh";
    
    // Random animation delays so they don't move in sync
    img.style.animationDelay = (Math.random() * 5) + "s";
    img.style.animationDuration = (8 + Math.random() * 7) + "s";
    
    container.appendChild(img);
}
