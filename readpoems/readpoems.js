let darkMode = localStorage.getItem("darkMode");
const darkModeBtn = document.getElementById("darkModeBtn");

const enabledarkMode = () => {
  document.body.classList.add("darkMode")
  localStorage.setItem("darkMode", "active")
}
const disabledarkMode = () => {
  document.body.classList.remove("darkMode")
  localStorage.setItem("darkMode", null)
}

if(darkMode === "active") enabledarkMode()

darkModeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode")
  darkMode !== "active" ? enabledarkMode() : disabledarkMode()
})




const poemTitle = document.getElementById("poemTitle");
const thePoem = document.getElementById("thePoem");
const prevPoem = document.getElementById("prevPoem");
const nextPoem = document.getElementById("nextPoem");

let currentPoem = 0;
let poem= [
  {
  poemTitle: "Intrusive Thoughts",
  thePoem: `Despodence slowly, surely seeps in,
Unveiling one at a time nightmares.
Frigid thoughts make me shudder and grin.
I swim as much in black as it stares. 

To be alone is to be shrouded.
In solitude there is disturbance.
To walk freely is to be shackled.
In light, shadows make their appearance. 

Woe is the occupied by the none,
But the mad, bad, and sad back in mind.
The unsightly doom, not by someone.
But by myself, whose own teeth I grind.`
  },
  {
  poemTitle: "Find your Way",
  thePoem: `Sadness be manifest, for those who 
Rose from doom, to doom must be the end. Threads of Fate, from dark cannot eschew.
Unwilled birth; to will of the threads bond.

Cognizant of the futilities, 
Those from dust rose, to dust must return.
But, must one yield to Threads: miseries?
Stray and stay not with whose Threads stern.

Burn the Threads, with the Fire in the heart. From the ashes, aspire to rise and fly. 
Living awaits not Death,  Life must start 
With oneself only, so live to try.

Become free, for a snake does not eat 
Its tail, it lives and eats as will it.`
  },
  {
  poemTitle: "Simoun",
  thePoem: `Suppress my seethe and cool the boil, 
Swear to my name I need not turmoil. 
Between myself and the loathe some others 
I shall join and myself become perpetrator.

To peace, to forgiveness, to harmony. 
The bittersweet taste of reconcilation. 
I may have not seen ith full form 
But compared to vengeance they are forlorn.

Let future be ripe and clock tick 
Biding time never mates me sick. 
The longer I bide the sweeter is my wrath 
To shed blood with blood I should grant.`
  },
  {
  poemTitle: "Demise",
  thePoem: `Pray. I prayed and pray for my perpetual plight, 
Unyielding, under my my unhappy and and unrested bosom 
To thwart not and twist my twinkling light 
As achievements and adversaries are all I fathom. 
No, nightmares! Nestle not longer than night!
Grope not my only grotesque glory that I grow some.

I, my incorrigibility and inexorable ill fate 
Nescient and nasty, null and no fight 
Asinine! Addicted to affectation from the "affectionate"
Nonchalant to reality, the gray never known right.
Gone, my growth, as ghoulish as self-grandeur is great.

Bludgeoned and been told to be bold and to 
Undo my understated and unhinged "universal" truth. 
Hastened in kind to wholly hear my heart and mind too. 
Alas! Why anticipate the awry aftermath with no soothe? 
"You know how this would end, do you?"`
  }
];

poemTitle.textContent = poem[currentPoem].poemTitle;
thePoem.textContent = poem[currentPoem].thePoem;

nextPoem.onclick = function() {
  currentPoem++;
  poemTitle.textContent = poem[currentPoem].poemTitle;
  thePoem.textContent = poem[currentPoem].thePoem;
};

prevPoem.onclick = function() {
  currentPoem--;
  poemTitle.textContent = poem[currentPoem].poemTitle;
  thePoem.textContent = poem[currentPoem].thePoem;
};