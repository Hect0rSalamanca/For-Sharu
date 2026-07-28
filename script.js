// --- 1. THE LETTERS & DATES ---
// Change the targetDate to when you want her to be able to open them.
// Format must be: "YYYY-MM-DDTHH:MM:SS"
const letterData = [
     {
        id: "letter-test",
        title: "Open this night 🎉",
        targetDate: "2026-07-01T00:00:00", 
        content: "nlah blah ",
        joke: "nlah blah"
    },
    {
        id: "letter-bday",
        title: "Open on your birthday night 🎉",
        targetDate: "2026-08-02T20:00:00", 
        content: "nlah blah ",
        joke: "nlah blah"
    },
    {
        id: "letter-freezing",
        title: "Open when you miss me in freezing Georgia 🥶",
        targetDate: "2026-12-01T00:00:00", 
        content: "",
        joke: ""
    },
    {
        id: "letter-bds-hard",
        title: "Open when BDS is kicking your ass 📚",
        targetDate: "2026-10-15T00:00:00", 
        content: "",
        joke: ""
    },
    {
        id: "letter-food",
        title: "Open when you are craving Goan food 🍛",
        targetDate: "2026-09-20T00:00:00", 
        content: "",
        joke: ""
    },
    {
        id: "letter-fight",
        title: "Open after our first stupid time-zone fight 🙄",
        targetDate: "2026-11-01T00:00:00", 
        content: "",
        joke: ""
    },
    {
        id: "letter-doubt",
        title: "Open when you question why you moved 5,000 km away ✈️",
        targetDate: "2026-09-10T00:00:00", 
        content: "",
        joke: ""
    },
    {
        id: "letter-win",
        title: "Open when you ace your first practical at SEU 🏆",
        targetDate: "2026-10-30T00:00:00", 
        content: "",
        joke: ""
    }
];

// --- 2. GENERATE THE CARDS ---
const grid = document.getElementById("letters-grid");

letterData.forEach((letter) => {
    const card = document.createElement("div");
    card.className = "card glass-panel";
    card.id = `card-${letter.id}`;
    
    card.innerHTML = `
        <span class="locked-icon" id="icon-${letter.id}">🔒</span>
        <h3>${letter.title}</h3>
        <div class="countdown" id="cd-${letter.id}">Loading...</div>
    `;
    
    // Click event for the card
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

        if (distance <= 0) {
            // UNLOCKED
            cdElement.innerHTML = "✨ Click to open!";
            cdElement.style.background = "#d4edda";
            cdElement.style.color = "#155724";
            iconElement.innerHTML = "💌";
        } else {
            // LOCKED - Calculate time left
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            cdElement.innerHTML = `Unlocks in: ${days}d ${hours}h ${mins}m`;
        }
    });
}
// Run immediately, then update every minute
updateCountdowns();
setInterval(updateCountdowns, 60000);

// --- 4. MODAL (POPUP) LOGIC ---
const modal = document.getElementById("letter-modal");
const closeBtn = document.querySelector(".close-btn");

function handleCardClick(letter) {
    const now = new Date().getTime();
    const target = new Date(letter.targetDate).getTime();

    if (now >= target) {
        // Open Letter
        document.getElementById("modal-title").innerText = letter.title;
        document.getElementById("modal-body").innerText = letter.content;
        document.getElementById("modal-joke").innerText = letter.joke;
        modal.style.display = "flex";
    } else {
        // Locked - Shake animation
        const card = document.getElementById(`card-${letter.id}`);
        card.classList.remove("shake"); // reset
        void card.offsetWidth; // trigger reflow
        card.classList.add("shake");
    }
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- 5. FLOATING STICKERS GENERATOR ---
const stickers = ['🦷', '✨', '✈️', '🤍', '🌸', '🩺', '☕'];
const container = document.getElementById("floating-stickers");

for (let i = 0; i < 15; i++) {
    let span = document.createElement("span");
    span.innerText = stickers[Math.floor(Math.random() * stickers.length)];
    span.className = "sticker";
    
    // Random positioning
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    
    // Random animation delay and duration to make it look organic
    span.style.animationDelay = (Math.random() * 5) + "s";
    span.style.animationDuration = (6 + Math.random() * 4) + "s";
    
    container.appendChild(span);
}
