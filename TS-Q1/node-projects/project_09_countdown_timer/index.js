#! /usr/bin/env node
import inquirer from "inquirer";
async function startTimer() {
    const { duration } = await inquirer.prompt([
        {
            type: "input",
            name: "duration",
            message: "Enter the duration of the countdown timer (in seconds(only write duration no symbols), minutes(m), hours(h), days(d), months(M), years(y), or as YYYY-MM-DD HH:mm:ss):",
        },
    ]);
    let countdownDate;
    if (!isNaN(duration)) {
        // If user inputs only seconds
        const now = new Date().getTime();
        const seconds = parseInt(duration, 10);
        countdownDate = now + seconds * 1000; // Convert seconds to milliseconds and add to current time
    }
    else if (duration.includes("m")) {
        // If user inputs only minutes
        const now = new Date().getTime();
        const minutes = parseInt(duration, 10);
        countdownDate = now + minutes * 60 * 1000; // Convert minutes to milliseconds and add to current time
    }
    else if (duration.includes("h")) {
        // If user inputs only hours
        const now = new Date().getTime();
        const hours = parseInt(duration, 10);
        countdownDate = now + hours * 60 * 60 * 1000; // Convert hours to milliseconds and add to current time
    }
    else if (duration.includes("d")) {
        // If user inputs only days
        const now = new Date().getTime();
        const days = parseInt(duration, 10);
        countdownDate = now + days * 24 * 60 * 60 * 1000; // Convert days to milliseconds and add to current time
    }
    else if (duration.includes("M")) {
        // If user inputs only months
        const now = new Date();
        countdownDate = new Date(now.getFullYear(), now.getMonth() + parseInt(duration), now.getDate()).getTime();
    }
    else if (duration.includes("y")) {
        // If user inputs only years
        const now = new Date();
        countdownDate = new Date(now.getFullYear() + parseInt(duration), now.getMonth(), now.getDate()).getTime();
    }
    else {
        countdownDate = new Date(duration).getTime();
    }
    const now = new Date().getTime();
    let totalSeconds = Math.floor((countdownDate - now) / 1000);
    console.log(`Countdown started for ${totalSeconds} seconds...`);
    const interval = setInterval(() => {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / (60 * 60)) % 24;
        let days = Math.floor(totalSeconds / (60 * 60 * 24));
        if (totalSeconds <= 0) {
            clearInterval(interval);
            console.log("Countdown finished!");
        }
        else {
            console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining...`);
        }
        totalSeconds--;
    }, 1000);
}
startTimer();
