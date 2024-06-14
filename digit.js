function updateClock() {
    const clock = document.getElementById('clock');
    const result = new Date();
    console.log("now")
    const hours = String(result.getHours()).padStart(2, '0');
    const minutes = String(result.getMinutes()).padStart(2, '0');
    const seconds = String(result.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

// db.serialize(() => {
//     db.run("CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY, timezone TEXT, format TEXT)");
//     db.run("INSERT INTO settings (timezone, format) VALUES ('UTC', '24h')");
// });

// db.close();


