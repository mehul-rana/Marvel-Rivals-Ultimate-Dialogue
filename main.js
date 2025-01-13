let ally = document.querySelector('#ally-quote');
let enemy = document.querySelector('#enemy-quote');
let character = document.querySelector('#character');
let quote = document.querySelector('#quote');

const allyQuotes = [{
  quote: '"Together! To victory!"',
  character: 'Captain America',
  ultimate: 'Freedom Charge'
}, {
  quote: '"I unleash the Vishantis power.',
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
  ultimate: 'Dancec of the Butterfly'
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
}]

// dialogues: https://dotesports.com/marvel/news/all-marvel-rivals-ultimate-voice-lines