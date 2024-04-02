#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    // Game variables
    const enemies = ["Skeleton", "Zombies", "Warrios", "Assassin"];
    const maxEnemyHealth = 75;
    const maxEnemyAttackDamage = 25;
    // Player variables
    let playerHealth = 100;
    const playerAttackDamage = 25;
    let totalHealthPotions = 3;
    const healthPotionAmount = 30;
    const healthPotionDropChance = 50; // percentage
    let running = true;
    console.log("Welcome to the Adventure Game:");
    while (running) {
        console.log("---------------------------------------------------------");
        // Code for enemy encounter and combat
        let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
        let randomEnemyIndex = Math.floor(Math.random() * enemies.length);
        let currentEnemy = enemies[randomEnemyIndex];
        console.log(` ${currentEnemy} has appeared.`);
        let continueLoop = true;
        while (enemyHealth > 0 && continueLoop) {
            console.log(` Your HP: ${playerHealth}`);
            console.log(` ${currentEnemy}'s HP: ${enemyHealth}`);
            const { options } = await inquirer.prompt({
                type: "list",
                name: "options",
                message: `What would you like to do?`,
                choices: [
                    { name: "Attack", value: "attack" },
                    { name: "Take Health Potion", value: "takeHealthPotion" },
                    { name: "Run", value: "run" },
                ],
            });
            if (options === "attack") {
                let damageDealt = Math.floor(Math.random() * (playerAttackDamage + 1));
                let damageTaken = Math.floor(Math.random() * (maxEnemyAttackDamage + 1));
                enemyHealth -= damageDealt;
                playerHealth -= damageTaken;
                console.log(` You strike the ${currentEnemy} for ${damageDealt} damage.`);
                console.log(` You receive ${damageTaken} damage in retaliation.`);
                if (playerHealth < 1) {
                    console.log(` You have died! Your HP is ${playerHealth}`);
                    continueLoop = false;
                    break;
                }
            }
            else if (options === "takeHealthPotion") {
                if (totalHealthPotions > 0) {
                    playerHealth += healthPotionAmount;
                    totalHealthPotions--;
                    console.log(` You have taken a health potion healing yourself for ${healthPotionAmount}.`);
                    console.log(` You now have ${playerHealth} HP.`);
                    console.log(` You have ${totalHealthPotions} health potions left.`);
                }
                else {
                    console.log(` You do not have any health potions left. Defeat enemies for a chance to get one!`);
                }
            }
            else if (options === "run") {
                console.log(` You have run away from the ${currentEnemy}!`);
                continueLoop = false;
            }
            else {
                console.log(" Invalid choice.");
            }
        }
        if (playerHealth < 0) {
            console.log(` You limp out of the game, weak from battle.`);
            break;
        }
        console.log("---------------------------------------------------------");
        console.log(`${currentEnemy} was defeated!`);
        console.log(`You have ${playerHealth} HP left.`);
        if (Math.floor(Math.random() * (healthPotionDropChance + 1)) <
            healthPotionDropChance) {
            totalHealthPotions++;
            console.log(`The ${currentEnemy} dropped a health potion!`);
            console.log(`Now, You have ${totalHealthPotions} health potion(s).`);
        }
        console.log("---------------------------------------------------------");
        const { choices } = await inquirer.prompt({
            type: "list",
            name: "choices",
            message: `What would you like to do?`,
            choices: [
                { name: "Continue Playing", value: "continuePlaying" },
                { name: "Exit the Adventure Game", value: "exit" },
            ],
        });
        if (choices === "continuePlaying") {
            console.log(`You continue on your adventure!`);
        }
        else if (choices === "exit") {
            console.log(`You exit the game successfully from your adventure.`);
            break;
        }
        console.log(`You continue on your adventure!`);
    }
    console.log("Thank you for Playing!");
}
main();
