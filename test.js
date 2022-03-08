const cryto = require("crypto");
const start = Date.now();

function logHashTime() {
    cryto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash: ${Date.now() - start}`);
    });
};

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
