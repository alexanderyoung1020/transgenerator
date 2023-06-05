const randomNames = {
    masculine: ["Alex", "Sam", "Charlie", "Max", "Ryan", "Liam", "Ethan", "Noah", "Benjamin", "Caleb", "Isaac", "Nathan", "Gabriel", "Elijah", "Owen", "Henry", "Jack", "Oliver", "William", "James", "Daniel", "Samuel", "Leo", "David", "Joseph"],
    feminine: ["Emma", "Sophia", "Olivia", "Ava", "Isabella", "Mia", "Harper", "Emily", "Abigail", "Grace", "Lily", "Chloe", "Victoria", "Stella", "Amelia", "Charlotte", "Ella", "Scarlett", "Penelope", "Aurora", "Hazel"],
    androgynous: ["Taylor", "Jordan", "Casey", "Jamie", "Skyler", "Cameron", "Morgan", "Avery", "Charlie", "Quinn", "Reese", "Sidney", "Finley", "Sage", "Hayden"]
  };
  
  function updateOutput() {
    const name = document.getElementById("nameInput").value;
    const pronouns = document.getElementById("pronounInput").value;
    const pronounParts = pronouns.split("/");
    const subjectPronoun = pronounParts[0];
    const objectPronoun = pronounParts[1];
    const possessivePronoun = pronounParts[2];
  
    let outputText = "";
    if (name) {
      outputText = `${name} is a wonderful person and ${subjectPronoun} should be proud of ${objectPronoun}self so the world is ${possessivePronoun}!`;
    }
  
    document.getElementById("output").textContent = outputText;
  }
  
  function clearInput() {
    document.getElementById("nameInput").value = "";
    document.getElementById("pronounInput").selectedIndex = 0;
    document.getElementById("output").textContent = "";
  }
  
  function getRandomName() {
    const gender = document.getElementById("genderInput").value;
    const names = randomNames[gender];
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    document.getElementById("nameInput").value = name;
  }
  
  document.getElementById("updateButton").addEventListener("click", updateOutput);
  document.getElementById("clearButton").addEventListener("click", clearInput);
  document.getElementById("randomNameButton").addEventListener("click", getRandomName);
  