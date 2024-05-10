import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('コマンドを入力してください:', (name) => {
    switch(name) {
        case "greet":
            console.log("Hello");
            break;
        case "cat":
            console.log("do you prefer cat ?");
            console.log("i prefer dog.");
            break;
        default:
            console.log(`we cant recognize \"${name}\" command.`);
    }
    rl.close();
});