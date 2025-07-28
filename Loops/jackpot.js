const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask questions in readline (Promise-based for easy chaining)
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, ans => resolve(ans)));
}

async function startGame() {
  console.log("🎰 Welcome to the Jackpot Number Guessing Game 🎰");
  console.log("Choose difficulty level:");
  console.log("1️⃣ Easy (20 attempts)");
  console.log("2️⃣ Medium (10 attempts)");
  console.log("3️⃣ Difficult (5 attempts)");

  let level = await askQuestion("Enter choice (1/2/3): ");

  let attempts;
  if (level === "1") {
    attempts = 20;
    console.log("\n✅ You selected EASY mode.");
  } else if (level === "2") {
    attempts = 10;
    console.log("\n✅ You selected MEDIUM mode.");
  } else if (level === "3") {
    attempts = 5;
    console.log("\n✅ You selected DIFFICULT mode.");
  } else {
    console.log("❌ Invalid choice! Defaulting to EASY mode.");
    attempts = 20;
  }

  // Generate random number between 1 and 100
  const jackpot = Math.floor(Math.random() * 100) + 1;
  console.log("\n💡 Guess the jackpot number between 1 and 100!");
  console.log(`🎯 You have ${attempts} attempts.\n`);

  let guessedCorrectly = false;

  for (let i = 1; i <= attempts; i++) {
    let guess = await askQuestion(`👉 Attempt ${i}: Enter your guess: `);
    guess = Number(guess);

    if (guess === jackpot) {
      console.log(`🎉 CONGRATULATIONS! You guessed the jackpot number ${jackpot} in ${i} attempts! 🏆`);
      guessedCorrectly = true;
      break;
    } else if (guess < jackpot) {
      console.log("📈 Too low! Try again.\n");
    } else if (guess > jackpot) {
      console.log("📉 Too high! Try again.\n");
    } else {
      console.log("❌ Invalid input! Please enter a number.");
    }
  }

  if (!guessedCorrectly) {
    console.log(`😢 Sorry! You ran out of attempts. The jackpot number was: ${jackpot}`);
  }

  rl.close();
}

startGame();
