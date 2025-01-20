let ally = document.querySelector('#ally');
let enemy = document.querySelector('#enemy');
let character = document.querySelector('#character');
let quote = document.querySelector('#quote');
let ultimate = document.querySelector('#ultimate');

const allyQuotes = [{
  // Vanguards
  quote: '"Together! To victory!"',
  character: 'Captain America',
  ultimate: 'Freedom Charge'
}, {
  quote: '"I unleash the Vishantis power."',
  character: 'Doctor Strange',
  ultimate: 'Eye of Agomotto'
}, {
  quote: '"We are Groot!"',
  character: 'Groot',
  ultimate: 'Strangling Prison'
}, {
  quote: '"My turn now!"',
  character: 'Bruce Banner',
  ultimate: 'Puny Banner'
}, {
  quote: '"NOW HULK MAD!"',
  character: 'Hulk',
  ultimate: 'Hulk Smash'
}, {
  quote: '"For Mutankind!"',
  character: 'Magneto',
  ultimate: 'Meteor'
}, {
  quote: '"Spider mode!"',
  character: 'Peni Parker',
  ultimate: 'Spider-Sweeper'
}, {
  quote: `"I am Asgard's MIGHT!"`,
  character: 'Thor',
  ultimate: 'God of Thunder'
}, {
  quote: '"We hunger!"',
  character: 'Venom',
  ultimate: 'Feast of the Abyss'
}, {
  // Duelists
  quote: '"Bast, grace us with victory!"',
  character: 'Black Panther',
  ultimate: "Bast's Descent"
}, {
  quote: '"Mind the exploding plastma."',
  character: 'Black Widow',
  ultimate: 'Electro-Plasma Explosion'
}, {
  quote: `"Here's how you shoot!"`,
  character: 'Hawkeye',
  ultimate: "Hunter's Sight"
}, {
  quote: '"A feast for my crows!"',
  character: 'Hela',
  ultimate: 'Goddess of Death'
}, {
  quote: '"The Dragon unleashed!"',
  character: 'Iron Fist',
  ultimate: 'Living Chi'
}, {
  quote: '"Pulse charge - fire!"',
  character: 'Iron Man',
  ultimate: 'Invincible Pulse Cannon'
}, {
  quote: '"Limbo stands with you!"',
  character: 'Magik',
  ultimate: 'Darkchild'
}, {
  quote: '"Haha! Problem solved!"',
  character: 'Mister Fantastic',
  ultimate: 'Brainiac Bounce'
}, {
  quote: '"Leave them to Khonshu."',
  character: 'Moon Knight',
  ultimate: 'Hand of Khonshu'
}, {
  quote: '*Horn Blast*',
  character: 'Namor',
  ultimate: 'Horn of Proteus'
}, {
  quote: '"Watch me soar!"',
  character: 'Psylocke',
  ultimate: 'Dance of the Butterfly'
}, {
  quote: '"The perfect...Hex!"',
  character: 'Scarlet Witch',
  ultimate: 'Reality Erasure'
}, {
  quote: '"You get a web, and you get a web, and you get a web!"',
  character: 'Spider-Man',
  ultimate: 'Spectacular Spin'
}, {
  quote: '"My friends are here!"',
  character: 'Squirrel Girl',
  ultimate: 'Unbeatable Squirrel Tsunami'
}, {
  quote: '"Allllright!!"',
  character: 'Star-Lord',
  ultimate: 'Galactic Legend'
}, {
  quote: '"Hurricane...Incoming!"',
  character: 'Storm',
  ultimate: 'Omega Hurricane'
}, {
  quote: `"I'm doing this my way!"`,
  character: 'The Punisher',
  ultimate: 'Final Judgement'
}, {
  quote: '"Stand down!"',
  character: 'Winter Soldier',
  ultimate: 'Kraken Impact'
}, {
  quote: '"Berserker Rage!"',
  character: 'Wolverine',
  ultimate: 'Last Stand'
}, {
  // Strategists
  quote: '"Rise, my friends!"',
  character: 'Adam Warlock',
  ultimate: 'Karmic Revival'
}, {
  quote: `"It's co-op time!"`,
  character: 'Cloak & Dagger',
  ultimate: 'Eternal Bond'
}, {
  quote: '"Shields up!"',
  character: 'Invisible Woman',
  ultimate: 'Invisible Boundary'
}, {
  quote: '"Yummy, yummy!"',
  character: 'Jeff the Land Shark',
  ultimate: "It's Jeff!"
}, {
  quote: '"Bring on the chaos!"',
  character: 'Loki',
  ultimate: 'God of Mischief'
}, {
  quote: `"It's the grand finale!"`,
  character: 'Luna Snow',
  ultimate: 'Fate of Both Worlds'
}, {
  quote: '"Friends, gather around!"',
  character: 'Mantis',
  ultimate: 'Soul Resurgence'
}, {
  quote: '"Hey team! Enjoy the amplifier"',
  character: 'Rocket Raccoon',
  ultimate: 'C.Y.A.'
}]

const enemyQuotes = [{
  // Vanguards
  quote: '"Assemble!"',
  character: 'Captain America',
  ultimate: 'Freedom Charge'
}, {
  quote: '"By the Eye of Agamotto!"',
  character: 'Doctor Strange',
  ultimate: 'Eye of Agomotto'
}, {
  quote: '"I AM GROOOOT!"',
  character: 'Groot',
  ultimate: 'Strangling Prison'
}, {
  quote: `"I'm Hulking out!"`,
  character: 'Bruce Banner',
  ultimate: 'Puny Banner'
}, {
  quote: '"HULK SMASH!"',
  character: 'Hulk',
  ultimate: 'Hulk Smash'
}, {
  quote: '"Fear Magneto"',
  character: 'Magneto',
  ultimate: 'Meteor'
}, {
  quote: `"It's...Spider time!"`,
  character: 'Peni Parker',
  ultimate: 'Spider-Sweeper'
}, {
  quote: `"Behold, the God of Thunder"`,
  character: 'Thor',
  ultimate: 'God of Thunder'
}, {
  quote: '"We are Venom!"',
  character: 'Venom',
  ultimate: 'Feast of the Abyss'
}, {
  // Duelists
  quote: '"Tremble before Bast!"',
  character: 'Black Panther',
  ultimate: "Bast's Descent"
}, {
  quote: '"Plasma...Burst!"',
  character: 'Black Widow',
  ultimate: 'Electro-Plasma Explosion'
}, {
  quote: `"Woo! I never miss!"`,
  character: 'Hawkeye',
  ultimate: "Hunter's Sight"
}, {
  quote: '"Hell unleashed!"',
  character: 'Hela',
  ultimate: 'Goddess of Death'
}, {
  quote: '"Qì guàn cháng hóng!"',
  character: 'Iron Fist',
  ultimate: 'Living Chi'
}, {
  quote: '"Maximum Pulse!"',
  character: 'Iron Man',
  ultimate: 'Invincible Pulse Cannon'
}, {
  quote: '"Behold, Darkchild!"',
  character: 'Magik',
  ultimate: 'Darkchild'
}, {
  quote: '"Fantastic!"',
  character: 'Mister Fantastic',
  ultimate: 'Brainiac Bounce'
}, {
  quote: '"The moon haunts you!"',
  character: 'Moon Knight',
  ultimate: 'Hand of Khonshu'
}, {
  quote: '*Horn Blast*',
  character: 'Namor',
  ultimate: 'Horn of Proteus'
}, {
  quote: '"Chō no mai o kurāe!"',
  character: 'Psylocke',
  ultimate: 'Dancec of the Butterfly'
}, {
  quote: '"Pure! Chaos!"',
  character: 'Scarlet Witch',
  ultimate: 'Reality Erasure'
}, {
  quote: `"Don't mess with the Amazing Spider-Man!"`,
  character: 'Spider-Man',
  ultimate: 'Spectacular Spin'
}, {
  quote: '"Squirrel stampede!"',
  character: 'Squirrel Girl',
  ultimate: 'Unbeatable Squirrel Tsunami'
}, {
  quote: '"Le—gen—dary!"',
  character: 'Star-Lord',
  ultimate: 'Galactic Legend'
}, {
  quote: '"Feel the wrath of the Goddess!"',
  character: 'Storm',
  ultimate: 'Omega Hurricane'
}, {
  quote: `"Judge! Jury! Executioner!"`,
  character: 'The Punisher',
  ultimate: 'Final Judgement'
}, {
  quote: '"Armed and dangerous!"',
  character: 'Winter Soldier',
  ultimate: 'Kraken Impact'
}, {
  quote: '*Grunts*',
  character: 'Wolverine',
  ultimate: 'Last Stand'
}, {
  // Strategists
  quote: '"Born again!"',
  character: 'Adam Warlock',
  ultimate: 'Karmic Revival'
}, {
  quote: `"Us against the world!"`,
  character: 'Cloak & Dagger',
  ultimate: 'Eternal Bond'
}, {
  quote: '"Disappear!"',
  character: 'Invisible Woman',
  ultimate: 'Invisible Boundary'
}, {
  quote: '"Om, nom, nom"',
  character: 'Jeff the Land Shark',
  ultimate: "It's Jeff!"
}, {
  quote: '"Your powers are mine!"',
  character: 'Loki',
  ultimate: 'God of Mischief'
}, {
  quote: `"I am ready to put on a show!"`,
  character: 'Luna Snow',
  ultimate: 'Fate of Both Worlds'
}, {
  quote: '"We are undefeatable!"',
  character: 'Mantis',
  ultimate: 'Soul Resurgence'
}, {
  quote: '"This is REAL firepower!"',
  character: 'Rocket Raccoon',
  ultimate: 'C.Y.A.'
}]

ally.addEventListener('click', function(){
  let random = Math.floor(Math.random() * allyQuotes.length);

  quote.innerText = allyQuotes[random].quote;
  quote.style.color = 'green'
  character.innerText = allyQuotes[random].character;
  character.style.color = 'blue'
  ultimate.innerText = allyQuotes[random].ultimate;
  ultimate.style.color = 'orange'
})

enemy.addEventListener('click', function(){
  let random = Math.floor(Math.random() * enemyQuotes.length);

  quote.innerText = enemyQuotes[random].quote;
  quote.style.color = 'red'
  character.innerText = enemyQuotes[random].character;
  character.style.color = 'blue'
  ultimate.innerText = enemyQuotes[random].ultimate;
  ultimate.style.color = 'orange'
})