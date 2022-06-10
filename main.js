/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
  {
    id: 1,
    text: "Tom Sawyer",
    author: "Twain",
    date: "1876",
    topics: ["poetry", "history", "fiction", "cats"],
  },
  {
    id: 2,
    text: "The Fountainhead",
    author: "Rand",
    date: "1957",
    topics: ["fiction", "philosphy", "hats"],
  },
  {
    id: 3,
    text: "Animal Farm",
    author: "Orwell",
    date: "1945",
    topics: ["political", "satire"],
  },
];

// const emptyObject = {}
// let emptyString = ""
// let currentNumber = 0

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

notes.push({
  id: 4,
  text: "Cat in the Hat",
  author: "Dr. Suess",
  date: "unknown",
  topics: ["cats", "hats"],
});

notes.push({
  id: 5,
  text: "Pet Semetary",
  author: "Steven King",
  date: "1983",
  topics: ["cats", "zombies"],
});

const cats = {
  id: 6,
  text: "Cats",
  author: "Andrew Webber",
  date: "1986",
  topics: ["cats", "memories", "more cats"],
};

notes.push(cats);

//   console.log(notes)

// Iterate the array with a for..of loop and use console.log() to display only the text property of each object - not the full object.

//   for(const singleObject of notes){
//       console.log(singleObject.text)
//   }

// console.log("*** All Note Topics ***")
//   for(const singleObject of notes){

//     for(const singleString of singleObject.topics){
//         console.log(singleString)
//     }
// }

// console.log("*** Average Topics Per Note ***")

//how many many things are in each topic array?  Add them up divide by the number of objects?

// prob gonna use .length learn to spell

// need for ... of loooop

// how do I store my total ?

let totalTopics = 0;

for (const singleObject of notes) {
  //I want the length of singleObject.topics

  totalTopics = totalTopics + singleObject.topics.length;

  totalTopics += singleObject.topics.length;
}

const avg = totalTopics / notes.length;

// console.log(avg)

console.log("***  Note Articles  ***");

// Then iterate the notes array again. On each iteration, use console.log() to display the text of each note, but surrounded by an article HTML element. Refer back to the previous projects to review how to build a string template and interpolate JavaScript variables inside it.

// for(let i=0; i < notes.length; i++){

//     console.log(`<article>${notes[i].text}</article>`)
// }

// Update the code that you wrote in the last section to include each topic, contained in a child <section> element for each note. You will need to use a nested for..of loop again. Also, update the output to be a multi-line string using string templates.
let htmlString = "";
for (const singleObject of notes) {
  let sections = "";
  for (const singleString of singleObject.topics) {
    sections += `\n<section>${singleString}</section>`;
  }
  htmlString += `\n<article>${singleObject.text}${sections}</article>`;

  console.log("first way");
  console.log(htmlString);
}
console.log("v2 --------------------------");
let v2HTMLString = "";
for (const singleObject of notes) {
  v2HTMLString += `\n<article>${
    singleObject.text
  }<section>${singleObject.topics.join(
    "</section>\n<section>"
  )}</section></article>`;
}
console.log(v2HTMLString);
