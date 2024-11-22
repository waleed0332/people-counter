let incrementEl = document.getElementById("increment-btn");

let countEl = document.getElementById("counting");

let saveEl = document.getElementById("save-btn");

let preEntries = document.getElementById("Entries");

let resetEl = document.getElementById("reset-btn");

let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    preEntries.textContent +=   countEl.textContent + "-";
    count = 0 ;
    countEl.innerText = count;
}


function reset() {
    count = 0; // Reset the counter
    countEl.textContent = count; // Update the count display
    preEntries.textContent = "Previous Entries:"; // Clear previous entries
}
