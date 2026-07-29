// --- 1. THE LETTERS & DATES ---
const letterData = [
    {
        id: "letter-bday",
        title: "To be opened on the evening of your birthday.",
        targetDate: "2026-08-02T20:00:00", 
        content: "Write your birthday message here..."
    },
    {
        id: "letter-freezing",
        title: "For the nights when the Georgian winter feels too cold.",
        targetDate: "2026-12-01T00:00:00", 
        content: "Write what you want to say when she's cold and homesick..."
    },
    {
        id: "letter-bds-hard",
        title: "When the weight of BDS feels insurmountable.",
        targetDate: "2026-10-15T00:00:00", 
        content: "Write some encouragement for her dental exams here..."
    },
    {
        id: "letter-food",
        title: "On the absence of proper Goan cuisine.",
        targetDate: "2026-09-20T00:00:00", 
        content: "Write something about food here..."
    },
    {
        id: "letter-doubt",
        title: "A reminder of why you crossed 5,000 kilometers.",
        targetDate: "2026-09-10T00:00:00", 
        content: "Write a reality check on how proud you are of her..."
    },
    {
        id: "letter-win",
        title: "Upon the successful completion of your first practical.",
        targetDate: "2026-10-30T00:00:00", 
        content: "Write your celebration message here..."
    }
];

// --- 2. GENERATE THE LUXURY CARDS ---
const grid = document.getElementById("letters-grid");

letterData.forEach((letter) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${letter.id}`;
    
    card.innerHTML = `
        <span class="locked-icon" id="icon-${letter.id}">✧</span>
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
            cdElement.innerHTML = "AVAILABLE TO READ";
            cdElement.style.color = "#d4c4a8"; // Champagne gold text
            iconElement.innerHTML = "✦"; // Changed icon
            iconElement.style.color = "#d4c4a8";
            card.style.borderColor = "rgba(212, 196, 168, 0.4)";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            // Minimalist countdown display
            if (days > 0) {
                 cdElement.innerHTML = `UNLOCKS IN ${days} DAYS`;
            } else {
                 cdElement.innerHTML = `UNLOCKS IN ${hours} HOURS`;
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
        // Minimalist shake
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = null; 
        card.classList.add("shake");
        setTimeout(() => card.classList.remove("shake"), 400);
    }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}
