// 🏏 SPORTS QUIZ QUESTIONS (Updated with Hints)
const sportsQuestions = {
easy: [
{ question: "What color is a traditional basketball?",
options: ["Red", "Orange", "Yellow", "Brown"],
answer: "Orange",
hint: "It shares the same color as the most common citrus fruit." },
{ question: "What do players hit with in baseball?",
options: ["Racket", "Stick", "Bat", "Paddle"],
answer: "Bat",
hint: "This object is usually cylindrical and made of wood or aluminum." },
{ question: "What sport uses a goal net?",
options: ["Soccer", "Golf", "Baseball", "Tennis"],
answer: "Soccer",
hint: "This is also known as football in many parts of the world." },
{ question: "What shape is a soccer ball?",
options: ["Square", "Triangle", "Round", "Oval"],
answer: "Round",
hint: "It's the shape of a sphere." },
{ question: "How many legs does a racehorse have?",
options: ["2", "3", "4", "5"],
answer: "4",
hint: "Most mammals have this many legs." }
],

medium: [
{ question: "What is the national sport of Canada?",
options: ["Baseball", "Lacrosse", "Hockey", "Soccer"],
answer: "Lacrosse",
hint: "While Ice Hockey is the national winter sport, this is the national *summer* sport." },
{ question: "What color flag is shown to stop a Formula 1 race?",
options: ["Green", "Red", "Yellow", "Blue"],
answer: "Red",
hint: "It's the universal color for 'stop' or 'danger'." },
{ question: "In soccer, what part of your body can’t you touch the ball with?",
options: ["Feet", "Hands", "Legs", "Head"],
answer: "Hands",
hint: "Only the goalkeeper is generally allowed to use these." },
{ question: "How many players are on a basketball court for one team at a time?",
options: ["4", "5", "6", "7"],
answer: "5",
hint: "Think of a hand—it has this many fingers." },
{ question: "What do you call the area where baseball players score runs?",
options: ["Goal line", "Finish line", "Home plate", "Score box"],
answer: "Home plate",
hint: "The final base a runner must touch." }
],

hard: [
{ question: "What is the line in the middle of a basketball court called?",
options: ["Half court line", "Center ring", "Midline", "Court line"],
answer: "Half court line",
hint: "It clearly divides the court into two equal halves." },
{ question: "How many periods are there in a hockey game?",
options: ["2", "3", "4", "5"],
answer: "3",
hint: "More than two, less than four." },
{ question: "In soccer, what is it called when a player scores three goals in one game?",
options: ["Triple", "Hat-trick", "Power play", "Fast goal"],
answer: "Hat-trick",
hint: "The term is thought to come from cricket, where a bowler was rewarded for taking three wickets in a row." },
{ question: "What shape is a cricket bat?",
options: ["Round", "Flat on one side", "Completely flat", "Triangular"],
answer: "Flat on one side",
hint: "It must present a flat striking surface to the ball." },
{ question: "What is it called when a basketball player takes too many steps without dribbling?",
options: ["Traveling", "Running", "Carrying", "Jumping"],
answer: "Traveling",
hint: "It means the player has been moving illegally with the ball." }
]
};

// 🎬 MOVIES QUESTIONS (Updated with Hints)
const movieQuestions = {
easy: [
{question: "Who is the snowman in Frozen?",
options: ["Sven", "Olaf", "Kristoff", "Hans"],
answer: "Olaf",
hint: "He loves warm hugs."},
{question: "What color is Lightning McQueen in Cars?",
options: ["Blue", "Green", "Red", "Yellow"],
answer: "Red",
hint: "It's the color of a classic fire engine."},
{question: "What animal is Simba in The Lion King?",
options: ["Tiger", "Lion", "Leopard", "Cat"],
answer: "Lion",
hint: "The title of the movie gives away the answer."},
{question: "Who wears a black suit and has a deep voice in Star Wars?",
options: ["Luke Skywalker", "Yoda", "Darth Vader", "Han Solo"],
answer: "Darth Vader",
hint: "He is Luke Skywalker's father."},
{question: "In Toy Story, who says 'To infinity and beyond'?",
options: ["Woody", "Buzz Lightyear", "Mr. Potato Head", "Rex"],
answer: "Buzz Lightyear",
hint: "He's a space ranger action figure."}
],
medium: [
{question: "What’s the name of the wizard school in Harry Potter?",
options: ["Hogwarts", "Dragonstone", "Shadow High", "Magic Hall"],
answer: "Hogwarts",
hint: "It's where young witches and wizards are educated."},
{question: "Which movie features a big ship that hits an iceberg?",
options: ["Titanic", "Jaws", "Moana", "Finding Nemo"],
answer: "Titanic",
hint: "It's a famous historical event turned into a blockbuster film."},
{question: "Who plays Iron Man in the Marvel movies?",
options: ["Chris Evans", "Robert Downey Jr.", "Tom Holland", "Mark Ruffalo"],
answer: "Robert Downey Jr.",
hint: "His initials are R.D.J."},
{question: "In Jurassic Park, what kind of creatures are brought back to life?",
options: ["Robots", "Dinosaurs", "Aliens", "Monsters"],
answer: "Dinosaurs",
hint: "They are ancient reptiles with a history that spans millions of years."},
{question: "What kind of animal is Donkey’s best friend in Shrek?",
options: ["Ogre", "Dragon", "Cat", "Fairy"],
answer: "Ogre",
hint: "The main character is this creature."}
],
hard: [
{question: "In The Avengers, what is Captain America’s shield made of?",
options: ["Iron", "Vibranium", "Steel", "Adamantium"],
answer: "Vibranium",
hint: "This metal is primarily mined in the fictional African nation of Wakanda."},
{question: "Who directed the movie Avatar?",
options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "George Lucas"],
answer: "James Cameron",
hint: "He also directed the film *Titanic*."},
{question: "What is the name of the clown in It?",
options: ["Bozo", "Pennywise", "Ronald", "Joker"],
answer: "Pennywise",
hint: "The character is an ancient, shape-shifting evil."},
{question: "In Back to the Future, what kind of car is used to time travel?",
options: ["Ferrari", "DeLorean", "Mustang", "Corvette"],
answer: "DeLorean",
hint: "The car company went bankrupt shortly after the movie's release."},
{question: "Which movie has the line, 'I’m the king of the world!'?",
options: ["Titanic", "The Lion King", "Aladdin", "Frozen"],
answer: "Titanic",
hint: "This line is shouted by Leonardo DiCaprio's character, Jack, at the bow of the ship."}
]
};

// 🔬 SCIENCE QUESTIONS (Updated with Hints)
const scienceQuestions = {
easy: [
{ question: "What planet do we live on?",
options: ["Mars", "Venus", "Earth", "Jupiter"],
answer: "Earth",
hint: "It is the third planet from the Sun." },
{ question: "What do humans need to breathe?",
options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Helium"],
answer: "Oxygen",
hint: "It's the 'O' in H₂O." },
{ question: "What do bees make?",
options: ["Milk", "Honey", "Juice", "Butter"],
answer: "Honey",
hint: "It's a sweet, sticky food." },
{ question: "What does water turn into when it freezes?",
options: ["Ice", "Steam", "Snow", "Air"],
answer: "Ice",
hint: "This happens at 0°C or 32°F." },
{ question: "Which part of your body helps you see?",
options: ["Ears", "Eyes", "Nose", "Hands"],
answer: "Eyes",
hint: "You need these to read this hint." }
],

medium: [
{ question: "What gas do plants take in from the air?",
options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
answer: "Carbon dioxide",
hint: "This gas is released by humans and animals when they breathe out." },
{ question: "What is H₂O another name for?",
options: ["Salt", "Water", "Sugar", "Oxygen"],
answer: "Water",
hint: "It covers about 71% of the Earth's surface." },
{ question: "What force pulls things toward the ground?",
options: ["Gravity", "Magnetism", "Friction", "Electricity"],
answer: "Gravity",
hint: "Sir Isaac Newton is famously associated with its discovery when an apple fell on his head." },
{ question: "How many planets are in our solar system?",
options: ["7", "8", "9", "10"],
answer: "8",
hint: "Pluto is no longer counted." },
{ question: "What organ pumps blood through your body?",
options: ["Brain", "Heart", "Lungs", "Liver"],
answer: "Heart",
hint: "The circulatory system relies on this organ." }
],

hard: [
{ question: "What part of the cell controls its activities?",
options: ["Nucleus", "Membrane", "Cytoplasm", "Ribosome"],
answer: "Nucleus",
hint: "It's often referred to as the 'brain' of the cell." },
{ question: "What’s the nearest star to Earth?",
options: ["Alpha Centauri", "Polaris", "The Sun", "Betelgeuse"],
answer: "The Sun",
hint: "It is essential for life on Earth." },
{ question: "What is the boiling point of water in Celsius?",
options: ["0°C", "50°C", "100°C", "200°C"],
answer: "100°C",
hint: "At sea level, this is the temperature at which water turns to steam." },
{ question: "What planet is known as the “Red Planet”?",
options: ["Mars", "Jupiter", "Saturn", "Mercury"],
answer: "Mars",
hint: "It is the second smallest planet in the solar system." },
{ question: "What type of energy comes from moving air?",
options: ["Solar energy", "Wind energy", "Water energy", "Heat energy"],
answer: "Wind energy",
hint: "This energy is harnessed by turbines." }
]
};

// 🌟 CELEBRITIES QUESTIONS (Updated with Hints)
const celebrityQuestions = {
easy: [
{ question: "Who is known as the 'King of Pop'?",
options: ["Bruno Mars", "Michael Jackson", "Justin Bieber", "Elvis Presley"],
answer: "Michael Jackson",
hint: "He was famous for the 'moonwalk' dance." },
{ question: "Which singer is famous for the song Shake It Off?",
options: ["Selena Gomez", "Taylor Swift", "Katy Perry", "Ariana Grande"],
answer: "Taylor Swift",
hint: "She is currently re-recording her first six studio albums." },
{ question: "Who played 'Iron Man' in the Marvel movies?",
options: ["Chris Evans", "Robert Downey Jr.", "Tom Holland", "Chris Hemsworth"],
answer: "Robert Downey Jr.",
hint: "He also plays the title character in the Sherlock Holmes movies." },
{ question: "Which celebrity is famous for the song Baby?",
options: ["Justin Bieber", "Drake", "Ed Sheeran", "Shawn Mendes"],
answer: "Justin Bieber",
hint: "He is a famous Canadian singer." },
{ question: "Which famous soccer player is from Portugal?",
options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Mbappé"],
answer: "Cristiano Ronaldo",
hint: "He is often referred to by his initials and number, CR7." }
],

medium: [
{ question: "Which singer starred in the movie A Star Is Born?",
options: ["Lady Gaga", "Adele", "Dua Lipa", "Rihanna"],
answer: "Lady Gaga",
hint: "She is also known for her hit song 'Bad Romance'." },
{ question: "Who is known for the line 'You’re fired!' from The Apprentice?",
options: ["Simon Cowell", "Donald Trump", "Gordon Ramsay", "Mark Cuban"],
answer: "Donald Trump",
hint: "He was the 45th President of the United States." },
{ question: "Who plays Spider-Man in the recent Marvel movies?",
options: ["Andrew Garfield", "Tobey Maguire", "Tom Holland", "Chris Pratt"],
answer: "Tom Holland",
hint: "He is the third actor to play Peter Parker in major film adaptations since 2002." },
{ question: "Which celebrity couple is known as 'Bennifer'?",
options: ["Beyoncé and Jay-Z", "Ben Affleck and Jennifer Lopez", "Blake Lively and Ryan Reynolds", "Kim Kardashian and Kanye West"],
answer: "Ben Affleck and Jennifer Lopez",
hint: "This name is a portmanteau of their first names." },
{ question: "Which Canadian rapper made the song God’s Plan?",
options: ["Drake", "The Weeknd", "Justin Bieber", "Shawn Mendes"],
answer: "Drake",
hint: "He is a global ambassador for the Toronto Raptors." }
],

hard: [
{ question: "Who won an Oscar for Black Panther: Wakanda Forever?",
options: ["Angela Bassett", "Lupita Nyong’o", "Danai Gurira", "Letitia Wright"],
answer: "Angela Bassett",
hint: "She plays Queen Ramonda in the Marvel Cinematic Universe." },
{ question: "What’s the real name of rapper Eminem?",
options: ["Marshall Mathers", "Curtis Jackson", "Calvin Broadus", "Shawn Carter"],
answer: "Marshall Mathers",
hint: "His stage name is based on his initials." },
{ question: "Which actor played Jack in Titanic?",
options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Matt Damon"],
answer: "Leonardo DiCaprio",
hint: "He also starred in *The Wolf of Wall Street* and *Inception*." },
{ question: "Which actress voices Elsa in Frozen?",
options: ["Idina Menzel", "Kristen Bell", "Demi Lovato", "Mandy Moore"],
answer: "Idina Menzel",
hint: "She also starred in the Broadway musical *Wicked*." },
{ question: "Which celebrity founded the makeup brand Fenty Beauty?",
options: ["Kylie Jenner", "Selena Gomez", "Rihanna", "Ariana Grande"],
answer: "Rihanna",
hint: "This name is also her surname." }
]
};

// 🏺 HISTORY QUESTIONS (Updated with Hints)
const historyQuestions = {
easy: [
{ question: "Who was the first President of the United States?",
options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
answer: "George Washington",
hint: "He is often referred to as the 'Father of His Country'." },
{ question: "What are the ancient Egyptian rulers called?",
options: ["Kings", "Pharaohs", "Emperors", "Chiefs"],
answer: "Pharaohs",
hint: "They were believed to be gods on Earth." },
{ question: "What big wall was built in China long ago?",
options: ["Great Wall", "China Wall", "Long Wall", "Big Border"],
answer: "Great Wall",
hint: "It's one of the New Seven Wonders of the World." },
{ question: "Which ship sank after hitting an iceberg in 1912?",
options: ["The Queen Mary", "Titanic", "Mayflower", "The Ocean Star"],
answer: "Titanic",
hint: "The name means 'gigantic' or 'huge'." },
{ question: "Who discovered America in 1492?",
options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama"],
answer: "Christopher Columbus",
hint: "Two major holidays in the Americas are named after him." }
],

medium: [
{ question: "Who was the famous queen of ancient Egypt known for her beauty?",
options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"],
answer: "Cleopatra",
hint: "She had a famous relationship with the Roman leader, Mark Antony." },
{ question: "In which country did the Olympic Games start?",
options: ["Italy", "Greece", "Egypt", "France"],
answer: "Greece",
hint: "The capital of this country is Athens." },
{ question: "What year did World War II end?",
options: ["1942", "1943", "1945", "1948"],
answer: "1945",
hint: "It ended three years after the attack on Pearl Harbor." },
{ question: "Who was the U.S. president during the Civil War?",
options: ["George Washington", "Abraham Lincoln", "John F. Kennedy", "Theodore Roosevelt"],
answer: "Abraham Lincoln",
hint: "He is known for signing the Emancipation Proclamation." },
{ question: "What country built the Colosseum?",
options: ["Greece", "Egypt", "Rome (Italy)", "France"],
answer: "Rome (Italy)",
hint: "The capital city of this country has a famous leaning tower." }
],

hard: [
{ question: "What year did humans first land on the Moon?",
options: ["1965", "1969", "1972", "1975"],
answer: "1969",
hint: "Neil Armstrong took his 'giant leap for mankind' in July of this year." },
{ question: "Who wrote the Declaration of Independence?",
options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
answer: "Thomas Jefferson",
hint: "He was the third U.S. President." },
{ question: "What ancient city was buried under ash from Mount Vesuvius?",
options: ["Rome", "Pompeii", "Athens", "Troy"],
answer: "Pompeii",
hint: "The city was located near Naples, Italy." },
{ question: "Which empire was ruled by Genghis Khan?",
options: ["Roman Empire", "Mongol Empire", "Ottoman Empire", "Persian Empire"],
answer: "Mongol Empire",
hint: "This empire was the largest contiguous land empire in history." },
{ question: "Who was the first woman to fly solo across the Atlantic Ocean?",
options: ["Amelia Earhart", "Marie Curie", "Rosa Parks", "Queen Elizabeth I"],
answer: "Amelia Earhart",
hint: "She disappeared during a flight attempt around the globe in 1937." }
]
};

// 📱 TECHNOLOGY QUESTIONS (Updated with Hints)
const technologyQuestions = {
easy: [
{
question: "What does “WWW” stand for in a website address?",
options: ["World Wide Web", "Web World Window", "Wide World Website", "World Web Wave"],
answer: "World Wide Web",
hint: "It refers to the global system of interlinked hypertext documents."
},
{
question: "What device do you use to make phone calls and send texts?",
options: ["Computer", "Tablet", "Smartphone", "Smartwatch"],
answer: "Smartphone",
hint: "It's a mobile phone that also performs many functions of a computer."
},
{
question: "What symbol is used to tag people on social media?",
options: ["#", "@", "$", "&"],
answer: "@",
hint: "This symbol is also used in email addresses."
},
{
question: "What company makes the iPhone?",
options: ["Samsung", "Apple", "Google", "Microsoft"],
answer: "Apple",
hint: "Their logo is a piece of fruit."
},
{
question: "What do you click to open a website link?",
options: ["File", "Folder", "Icon", "Link"],
answer: "Link",
hint: "It's a clickable reference to data."
}
],
medium: [
{
question: "What does “USB” stand for?",
options: ["Universal System Base", "Universal Serial Bus", "User Shared Band", "Unified Storage Box"],
answer: "Universal Serial Bus",
hint: "It's a standard connector for computer devices."
},
{
question: "What is used to store data permanently on a computer?",
options: ["RAM", "Hard Drive", "CPU", "Cache"],
answer: "Hard Drive",
hint: "The name often includes the word 'Disk'."
},
{
question: "What do you call the main screen of a computer?",
options: ["Dashboard", "Desktop", "Homepage", "Folder"],
answer: "Desktop",
hint: "It's named after a common piece of office furniture."
},
{
question: "What search engine is most commonly used?",
options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
answer: "Google",
hint: "The company's corporate motto was 'Don't be evil'."
},
{
question: "What is the short term for “application”?",
options: ["App", "Appli", "Apper", "Apk"],
answer: "App",
hint: "You download these onto your phone."
}
],
hard: [
{
question: "What does “AI” stand for?",
options: ["Artificial Intelligence", "Advanced Internet", "Auto Input", "Active Interface"],
answer: "Artificial Intelligence",
hint: "It refers to the simulation of human processes by machines."
},
{
question: "Who founded Microsoft?",
options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
answer: "Bill Gates",
hint: "He co-founded the company with Paul Allen." },
{
question: "What is the brain of a computer called?",
options: ["GPU", "CPU", "RAM", "ROM"],
answer: "CPU",
hint: "The 'P' stands for processing."
},
{
question: "What programming language is mainly used for web pages?",
options: ["Python", "Java", "HTML", "C++"],
answer: "HTML",
hint: "It stands for HyperText Markup Language."
},
{
question: "What is the name of the robot voice assistant made by Amazon?",
options: ["Siri", "Alexa", "Google", "Cortana"],
answer: "Alexa",
hint: "It's commonly used with the Echo smart speaker."
}
]
};


// Load user-selected difficulty (existing code)
const selectedCategory = localStorage.getItem("selectedCategory") || "sports";
const selectedDifficulty = localStorage.getItem("selectedDifficulty") || "easy";

let categoryData;
if (selectedCategory === "sports") categoryData = sportsQuestions;
else if (selectedCategory === "movies") categoryData = movieQuestions;
else if (selectedCategory === "science") categoryData = scienceQuestions;
else if (selectedCategory === "celebrities") categoryData = celebrityQuestions;
else if (selectedCategory === "history") categoryData = historyQuestions;
else if (selectedCategory === "technology") categoryData = technologyQuestions;

const questions = categoryData[selectedDifficulty];

// 🔄 Shuffle Algorithm: Randomly reorders the questions array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Select a random index
    const j = Math.floor(Math.random() * (i + 1)); 
    // Swap current element with the random one
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the questions array when the script starts
shuffleArray(questions);

// Timer durations by difficulty (existing code)
let timeLeft;
if (selectedDifficulty === "easy") timeLeft = 60;
else if (selectedDifficulty === "medium") timeLeft = 45;
else timeLeft = 30;

let currentQuestion = 0;
let score = 0;

// NEW: Set initial hints based on difficulty
let hintsRemaining;
if (selectedDifficulty === "easy") hintsRemaining = 2;
else if (selectedDifficulty === "medium") hintsRemaining = 1;
else hintsRemaining = 0; // Hard level gets 0 hints

const timerDisplay = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsDiv = document.getElementById("options");
// Get the hint button element
const hintButtonEl = document.getElementById("hint-button");

// 🚩 FLAG: To ensure the timer warning modal is shown only once
let timerWarningShown = false; 

// 🚩 Function to show the animated timer warning modal
function showTimerWarning() {
 if (timerWarningShown) return; 

 const warningHTML = `
  <div id="timer-warning" class="timer-warning-modal">
   <p>🚨 YOU ARE RUNNING OUT OF TIME! 🚨</p>
  </div>
 `;

 document.body.insertAdjacentHTML('beforeend', warningHTML);
 timerWarningShown = true;
}


// Timer countdown 
timerDisplay.textContent = timeLeft; 
const timer = setInterval(() => {
timeLeft--;
timerDisplay.textContent = timeLeft;

 // Trigger warning when 10 seconds remain
 if (timeLeft === 10) {
  showTimerWarning();
 }

if (timeLeft <= 0) {
clearInterval(timer);
 // Remove warning modal if time runs out
 const warningEl = document.getElementById('timer-warning');
 if (warningEl) {
  warningEl.remove();
 }
endQuiz();
}
}, 1000);

// Function to show the hint pop-up
function showHintPopup() {
 let hintText;
 const currentQuestionData = questions[currentQuestion];
 let modalTitle = 'Hint';

 if (hintsRemaining > 0) {
  hintsRemaining--;
  updateHintDisplay();
  hintText = currentQuestionData.hint || "Sorry, no hint available for this question.";
 } else {
  modalTitle = 'Out of Hints';
  hintText = "Oops! You've run out of hints.";
  if (selectedDifficulty === 'hard') {
   updateHintDisplay(); 
  }
 }
 
 // Helper function to display the pop-up modal
 function showModal(message, title) {
  const popupHTML = `
   <div id="hint-modal" class="modal-backdrop">
    <div class="modal-content">
     <button class="close-btn" onclick="document.getElementById('hint-modal').remove()">
      &times;
     </button>
     <h3>${title}</h3>
     <p>${message}</p>
    </div>
   </div>
  `;
  document.body.insertAdjacentHTML('beforeend', popupHTML);
 }

 showModal(hintText, modalTitle);
}

// Function to update the hint button text and interactivity
function updateHintDisplay() {
 if (hintButtonEl) {
  hintButtonEl.textContent = `Hint: ${hintsRemaining}`;
  
  hintButtonEl.onclick = showHintPopup;

  // The hint button is NEVER disabled, 
    // ensuring the user can always click to get the "Out of Hints" modal 
    // when hintsRemaining is zero.
  hintButtonEl.disabled = false;
 }
}


// Show current question 
function showQuestion() {
const q = questions[currentQuestion];
questionEl.textContent = q.question;
optionsDiv.innerHTML = "";

q.options.forEach(option => {
const btn = document.createElement("button");
btn.textContent = option;

// Ensure the correct option text is passed for comparison
let optionValue = option;
 if (typeof q.answer === 'number') {
  optionValue = q.options[q.answer];
 }

btn.onclick = () => handleAnswer(optionValue);
optionsDiv.appendChild(btn);
});
 
// Update the hint display 
updateHintDisplay(); 
}

// Handle answer click 
function handleAnswer(selected) {
 const correctAnswer = questions[currentQuestion].answer;
 let isCorrect;

 if (typeof correctAnswer === 'number') {
  // Handle answers stored as array indices (e.g., in some movie questions)
  isCorrect = selected === questions[currentQuestion].options[correctAnswer];
 } else {
  // Handle answers stored as strings
  isCorrect = selected === correctAnswer;
 }

 if (isCorrect) score++;

 currentQuestion++;

 if (currentQuestion < questions.length) {
  showQuestion();
 } else {
  endQuiz();
 }
}

// End quiz (clears timer and displays results)
function endQuiz() {
clearInterval(timer);
 
 // Clean up the warning modal
 const warningEl = document.getElementById('timer-warning');
 if (warningEl) {
  warningEl.remove();
 }
 
document.body.innerHTML = `
<div id="quiz-container" style="text-align:center; font-family: 'Poppins', sans-serif;">
<h2>Quiz Completed</h2>
<p>Your Score: ${score} / ${questions.length}</p>
<p>Percentage: ${(score / questions.length * 100).toFixed(1)}%</p>
<button class="back-btn" onclick="location.href='difficulty.html'">Play Again</button>
<button class="back-btn" onclick="location.href='categories.html'">Home Page</button>
</div>

`;
}

showQuestion();