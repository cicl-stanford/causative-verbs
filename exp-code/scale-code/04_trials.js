// // In this file you can specify the trial data for your experiment

// const answer = "The wizard can make a rock appear and disappear.";
// const string_two = "The wizard can appear either below or above the room.";
// const string_three = "The wizard can go into the room to block the farmer from moving.";
// const string_four = "The wizard can change the color of a fruit.";

// const strings = [answer, string_two, string_three, string_four];

// //gives you random index in the strings array
// var random_int = Math.floor(Math.random() * strings.length);

// const vars = ["", "", "", ""];

// for (let i = 0; i<4; i++) {
//   vars[i] = strings[random_int];
//   random_int++;
//   random_int = random_int%4;
// }

// const trial_info = { slider_rating: [
//     [
// // The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 UP
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// //The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 DOWN
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard removing the rock <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard removing the rock <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard removing the rock <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard removing the rock <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard removing the rock <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard removing the rock <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//               question: `The wizard removing the rock <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//               picture: "images/DOWNHazard100DOWNHazard0.gif",
//               optionleft: 'Not confident',
//               optionright: 'Very confident'
//           },
// ],
// // //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 UP 0 UP
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `
//             The wizard leaving the path unblocked <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `
//             The wizard leaving the path unblocked <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `
//             The wizard leaving the path unblocked <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// // //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 DOWN 0 DOWN
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path unblocked <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// [
// // The wizard placing a rock {} the farmer to go for the apple. + 0 UP 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing the rock <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// [
// // // The wizard placing a rock {} the farmer to go for the apple. + 0 DOWN 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing a rock <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard placing the rock <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//       ],
//       [
// // //The wizard leaving the path blocked {} the farmer to go for the apple. + 100 DOWN 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard leaving the path blocked <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//       ]
//     ],

//     sentence_choice_trials: [
//     {
//         //picture: 'path/to/picture_of_bread.jpg',
//         question: "What can the wizard do?",
//         option1: vars[0],
//         option2: vars[1],
//         option3: vars[2],
//         option4: vars[3],
//         answer: answer
//     }
//     // {
//     //     picture: 'path/to/picture_of_bread.jpg',
//     //     option1: 'jam',
//     //     option2: 'ham'
//     // },
//     // {
//     //     question: "What's the weather like?",
//     //     option1: 'shiny',
//     //     option2: 'rainbow'
//     // }
//   ]
//   };


// !!!below is with just agent-verb-event
// // In this file you can specify the trial data for your experiment

// const answer = "The wizard can make a rock appear and disappear.";
// const string_two = "The wizard can appear either below or above the room.";
// const string_three = "The wizard can go into the room to block the farmer from moving.";
// const string_four = "The wizard can change the color of a fruit.";

// const strings = [answer, string_two, string_three, string_four];

// //gives you random index in the strings array
// var random_int = Math.floor(Math.random() * strings.length);

// const vars = ["", "", "", ""];

// for (let i = 0; i<4; i++) {
//   vars[i] = strings[random_int];
//   random_int++;
//   random_int = random_int%4;
// }

// const trial_info = { slider_rating: [
//     [
// // The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 UP
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// //The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 DOWN
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//               question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//               picture: "images/DOWNHazard100DOWNHazard0.gif",
//               optionleft: 'Not confident',
//               optionright: 'Very confident'
//           },
// ],
// // //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 UP 0 UP
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `
//             The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `
//             The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `
//             The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// // //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 DOWN 0 DOWN
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// [
// // The wizard placing a rock {} the farmer to go for the apple. + 0 UP 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// [
// // // The wizard placing a rock {} the farmer to go for the apple. + 0 DOWN 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//       ],
//       [
// // //The wizard leaving the path blocked {} the farmer to go for the apple. + 100 DOWN 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>caused</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>got</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>enabled</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>allowed</strong> the farmer to go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>let</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>prevented</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>stopped</strong> the farmer from going for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The wizard <strong>made</strong> the farmer go for the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//       ]
//     ],

//     sentence_choice_trials: [
//     {
//         //picture: 'path/to/picture_of_bread.jpg',
//         question: "What can the wizard do?",
//         option1: vars[0],
//         option2: vars[1],
//         option3: vars[2],
//         option4: vars[3],
//         answer: answer
//     }
//   ]
//   };

//!!!below is with relClause-verb-event
// In this file you can specify the trial data for your experiment
//
// const answer = "The wizard can make a rock appear and disappear.";
// const string_two = "The wizard can appear either below or above the room.";
// const string_three = "The wizard can go into the room to block the farmer from moving.";
// const string_four = "The wizard can change the color of a fruit.";
//
// const strings = [answer, string_two, string_three, string_four];
//
// //gives you random index in the strings array
// var random_int = Math.floor(Math.random() * strings.length);
//
// const vars = ["", "", "", ""];
//
// for (let i = 0; i<4; i++) {
//   vars[i] = strings[random_int];
//   random_int++;
//   random_int = random_int%4;
// }
//
// const trial_info = { slider_rating: [
//     [
// // The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 UP
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// //The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 DOWN
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The disappearance of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The disappearance of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The disappearance of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The disappearance of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The disappearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The disappearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//             question: `The disappearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//           },
//           {
//               question: `The disappearance of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//               picture: "images/DOWNHazard100DOWNHazard0.gif",
//               optionleft: 'Not confident',
//               optionright: 'Very confident'
//           },
// ],
// // //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 UP 0 UP
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0UPHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// // //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 DOWN 0 DOWN
// [
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The absence of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard0.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// [
// // The wizard placing a rock {} the farmer to go for the apple. + 0 UP 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/UPHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
// ],
// [
// // // The wizard placing a rock {} the farmer to go for the apple. + 0 DOWN 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The appearance of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard0DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//       ],
//       [
// // //The wizard leaving the path blocked {} the farmer to go for the apple. + 100 DOWN 100 DOWN
//         {
//             question: `The wizard <strong>moved</strong> his wand.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>caused</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>got</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>enabled</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>allowed</strong> the farmer to reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>let</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>prevented</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>stopped</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>blocked</strong> the farmer from reaching the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//         {
//             question: `The presence of the rock <strong>made</strong> the farmer reach the <strong>apple</strong>.`,
//             picture: "images/DOWNHazard100DOWNHazard100.gif",
//             optionleft: 'Not confident',
//             optionright: 'Very confident'
//         },
//       ]
//     ],
//
//     sentence_choice_trials: [
//     {
//         //picture: 'path/to/picture_of_bread.jpg',
//         question: "What can the wizard do?",
//         option1: vars[0],
//         option2: vars[1],
//         option3: vars[2],
//         option4: vars[3],
//         answer: answer
//     }
//   ]
//   };


//!!!below is with rock-verb-banana
// In this file you can specify the trial data for your experiment

const answer = "The wizard can make a rock appear and disappear.";
const string_two = "The wizard can appear either below or above the room.";
const string_three = "The wizard can go into the room to block the farmer from moving.";
const string_four = "The wizard can change the color of a fruit.";

const strings = [answer, string_two, string_three, string_four];

//gives you random index in the strings array
var random_int = Math.floor(Math.random() * strings.length);

const vars = ["", "", "", ""];

for (let i = 0; i<4; i++) {
  vars[i] = strings[random_int];
  random_int++;
  random_int = random_int%4;
}

const trial_info = { slider_rating: [
    [
// The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 UP
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
],
//The wizard removing the rock {} the farmer to go for the apple. + 100 DOWN 0 DOWN
[
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The disappearance of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
            question: `The disappearance of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
            question: `The disappearance of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
            question: `The disappearance of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
            question: `The disappearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
            question: `The disappearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
            question: `The disappearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
          },
          {
              question: `The disappearance of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
              picture: "images/DOWNHazard100DOWNHazard0.gif",
              optionleft: 'Not confident',
              optionright: 'Very confident'
          },
],
// //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 UP 0 UP
[
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0UPHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
],
// //The wizard leaving the path unblocked {} the farmer to go for the apple. + 0 DOWN 0 DOWN
[
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The absence of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard0.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
],
[
// The wizard placing a rock {} the farmer to go for the apple. + 0 UP 100 DOWN
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/UPHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
],
[
// // The wizard placing a rock {} the farmer to go for the apple. + 0 DOWN 100 DOWN
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The appearance of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard0DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
// //The wizard leaving the path blocked {} the farmer to go for the apple. + 100 DOWN 100 DOWN
        {
            question: `The wizard <strong>moved</strong> his wand.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>caused</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>got</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>enabled</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>allowed</strong> the farmer to reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>let</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>prevented</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>stopped</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>blocked</strong> the farmer from reaching the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `The presence of the rock <strong>made</strong> the farmer reach the <strong>banana</strong>.`,
            picture: "images/DOWNHazard100DOWNHazard100.gif",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ]
    ],

    sentence_choice_trials: [
    {
        //picture: 'path/to/picture_of_bread.jpg',
        question: "What can the wizard do?",
        option1: vars[0],
        option2: vars[1],
        option3: vars[2],
        option4: vars[3],
        answer: answer
    }
  ]
  };
