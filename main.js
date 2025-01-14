let ally = document.querySelector('#ally-quote');
let enemy = document.querySelector('#enemy-quote');
let character = document.querySelector('#character');
let quote = document.querySelector('#quote');

const allyQuotes = [{
  quote: '"Together! To victory!"',
  character: 'Captain America'
}, {
  quote: '"I unleash the Vishantis power.',
  character: 'Doctor Strange',
}, {
  quote: '"We are Groot!"',
  character: 'Groot',
}, {
  quote: '"My turn now!"',
  character: 'Bruce Banner'
}, {
  quote: '"NOW HULK MAD!"',
  character: 'Hulk'
}, {
  quote: '"For Mutankind!"',
  character: 'Magneto'
}, {
  quote: '"Spider mode!"',
  character: 'Peni Parker'
}, {
  quote: `"I am Asgard's MIGHT!"`,
  character: 'Thor'
}, {
  quote: '"We hunger!"',
  character: 'Venom'
}, {
  quote: '"Bast, grace us with victory!"',
  character: 'Black Panther'
}, {
  quote: '"Mind the exploding plastma."',
  character: 'Black Widow'
}, {
  quote: `"Here's how you shoot!"`,
  character: 'Hawkeye'
}, {
  quote: '"A feast for my crows!"',
  character: 'Hela'
}, {
  quote: '"The Dragon unleashed!"',
  character: 'Iron Fist'
}, {
  quote: '"Pulse charge - fire!"',
  character: 'Iron Man'
}, {
  quote: '"Limbo stands with you!"',
  character: 'Magik'
}, {
  quote: '"Haha! Problem solved!"',
  character: 'Mister Fantastic'
}, {
  quote: '"Leave them to Khonshu."',
  character: 'Moon Knight'
}, {
  quote: '*Horn Blast*',
  character: 'Namor'
}, {
  quote: '"Watch me soar!"',
  character: 'Psylocke'
}, {
  quote: '"The perfect...Hex!"',
  character: 'Scarlet Witch'
}, {
  quote: '"You get a web, and you get a web, and you get a web!"',
  character: 'Spider-Man'
}, {
  quote: '"My friends are here!"',
  character: 'Squirrel Girl'
}, {
  quote: '"Allllright!!"',
  character: 'Star-Lord'
}, {
  quote: '"Hurricane...Incoming!"',
  character: 'Storm'
}, {
  quote: `"I'm doing this my way!"`,
  character: 'The Punisher'
}, {
  quote: '"Stand down!"',
  character: 'Winter Soldier'
}, {
  quote: '"Berserker Rage!"',
  character: 'Wolverine'
}]

// dialogues: https://dotesports.com/marvel/news/all-marvel-rivals-ultimate-voice-lines