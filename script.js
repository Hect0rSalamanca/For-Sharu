// --- 0. YOUR CUSTOM MEDIA CONFIG ---
// Put your picture filenames here (in the same folder as index.html)
const bgPhotos = [
    "photo1.jpg", 
    "photo2.jpg", 
    "photo3.jpg", 
    "photo4.jpg"
];

// --- 1. LETTERS DATA ---
const letterData = [
    {
        id: "letter-bday",
        title: "Open on your birthday night 🎂",
        targetDate: "2026-08-02T20:00:00", 
        content: "Write your birthday message here..."
    },
    {
        id: "letter-freezing",
        title: "Open when you miss me in freezing Georgia 🥶",
        targetDate: "2026-12-01T00:00:00", 
        content: "Write what you want to say when she's cold and homesick..."
    },
    {
        id: "letter-bds-hard",
        title: "Open when BDS is kicking your ass 🦷",
        targetDate: "2026-10-15T00:00:00", 
        content: "Write some encouragement for her dental exams here..."
    },
    {
        id: "letter-food",
        title: "Open when craving Goan food & ramen 🍜",
        targetDate: "2026-09-20T00:00:00", 
        content: "Write something about food here..."
    },
    {
        id: "letter-doubt",
        title: "Open when questioning moving 5,000 km away ✈️",
        targetDate: "2026-09-10T00:00:00", 
        content: "Write a reality check on how proud you are of her..."
    },
    {
        id: "letter-win",
        title: "Open when you ace your first practical at SEU 🏆",
        targetDate: "2026-10-30T00:00:00", 
        content: "Write your celebration message here..."
    }
];

// --- 2. AUDIO PLAYER LOGIC ---
const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicText = document.getElementById("music-text");
let isPlaying = false;

function startMusic() {
    if (!isPlaying && audio) {
        audio.play().then(() => {
            isPlaying = true;
            musicText.innerText = "Playing Our Song 🎶";
        }).catch(() => {
            // Browser autoplay restrictions handled gracefully
        });
    }
}

// Auto-start music on first interaction anywhere on the page
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

// --- 3. RENDER CARDS & COUNTDOWNS ---
const grid = document.getElementById("letters-grid");

letterData.forEach((letter) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${letter.id}`;
    
    card.innerHTML = `
        <span class="card-icon" id="icon-${letter.id}">🔒</span>
        <h3>${letter.title}</h3>
        <div class="countdown" id="cd-${letter.id}">Checking date...</div>
    `;
    
    card.addEventListener("click", () => handleCardClick(letter));
    grid.appendChild(card);
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
            
            if (days > 0) {
                cdElement.innerHTML = `Unlocks in ${days}d ${hours}h`;
            } else {
                cdElement.innerHTML = `Unlocks in ${hours} hours`;
            }
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

// --- 5. SCATTERED BACKGROUND POLAROIDS ---
const bgContainer = document.getElementById("bg-photos-container");
const polaroidPositions = [
    { top: "8%", left: "3%", rotate: "-12deg" },
    { top: "65%", left: "4%", rotate: "8deg" },
    { top: "12%", right: "4%", rotate: "10deg" },
    { top: "70%", right: "5%", rotate: "-7deg" }
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

// --- 6. INTERACTIVE FLOATING STICKERS ---
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

for (let i = 0; i < 16; i++) {
    let img = document.createElement("img");
    img.src = stickerAssets[i % stickerAssets.length];
    img.className = "floating-sticker";
    
    let size = Math.floor(Math.random() * 22) + 42; // 42px to 64px
    img.style.width = size + "px";
    img.style.left = (Math.random() * 88 + 4) + "vw";
    img.style.top = (Math.random() * 88 + 4) + "vh";
    img.style.animationDelay = (Math.random() * 4) + "s";
    img.style.animationDuration = (6 + Math.random() * 5) + "s";
    
    // Interactive: stickers bounce away / spin when touched or hovered
    img.addEventListener("mouseover", () => {
        const randomX = (Math.random() - 0.5) * 160;
        const randomY = (Math.random() - 0.5) * 160;
        const randomRotate = (Math.random() - 0.5) * 360;
        img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(1.2)`;
    });

    img.addEventListener("click", () => {
        img.style.transform = "scale(1.5) rotate(360deg)";
        setTimeout(() => {
            img.style.transform = "scale(1) rotate(0deg)";
        }, 500);
    });

    stickerContainer.appendChild(img);
}
