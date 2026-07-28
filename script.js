// --- 1. THE LETTERS & DATES ---
// Change the targetDate to when you want her to be able to open them.
// Format must be: "YYYY-MM-DDTHH:MM:SS"
const letterData = [
    {
        id: "letter-1",
        title: "Open Before You Leave Goa 🌴",
        targetDate: "2026-07-01T00:00:00", // Past date so you can test opening it!
        content: "Hey beautiful,\n\nI wanted you to have this open right away. You are about to embark on the craziest 5 years of your life. Leaving Goa for Georgia is a massive step, but you are more than ready for it. \n\nWhenever things get tough, I want you to come back to this website. I've written you a bunch of letters for the specific moments I know you'll need them. I'm so incredibly proud of you.",
        joke: "Why do dentists make good problem solvers? Because they always get to the root of the problem. 🦷"
    },
    {
        id: "letter-2",
        title: "Open When You Land in Tbilisi ✈️",
        targetDate: "2026-08-15T12:00:00", // Adjust to her flight date
        content: "Dr. Sharayu has officially touched down!\n\nTake a deep breath. Look at the mountains. I know it's overwhelming right now, but you made it. Unpack your bags, wrap yourself in that cozy blanket I gave you, and get some sleep. \n\nYour new life starts today.",
        joke: "I know you're tired, but don't forget to brush tonight! Plaque doesn't care about time zones."
    },
    {
        id: "letter-3",
        title: "First Day at SEU 🏫",
        targetDate: "2026-09-01T07:00:00", // Adjust to SEU start date
        content: "Happy first day of university!\n\nWalk into Georgian National University like you own the place. You worked so hard to get into this BDS program, and you deserve to be exactly where you are today. \n\nGo crush those anatomy labs.",
        joke: "Remember: Enamel is the hardest substance in the human body, but your stubbornness is a close second. 😉"
    },
    {
        id: "letter-4",
        title: "When You're Freezing & Homesick ❄️",
        targetDate: "2026-11-20T00:00:00", // Winter date
        content: "Is it sub-zero over there? I'm sitting here in Goa missing you like crazy.\n\nI know the cold makes being far from home feel a hundred times worse. But remember why you went there. Every freezing morning walking to SEU is one step closer to becoming a dentist. \n\nCall me when you read this, I don't care what time it is.",
        joke: "Why did the tooth go to the snowstorm? To get a little cap! 🥶 (I know, awful. But it made you smile)."
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
