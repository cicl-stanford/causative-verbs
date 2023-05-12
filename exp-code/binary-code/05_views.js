// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

var answer_type = "binary";
//scale, binary, or both


var alt_key = [];
alt_key.push(0);
alt_key.push(1);
alt_key.push(2);
alt_key.push(3);
alt_key.push(5);
alt_key.push(6);
// alt_key.push(7);
// alt_key.push(8);

// for (let i = 0; i<7; i++) {
//   key.push(i);
// }
alt_key = _.shuffle(alt_key);




// In the post test questionnaire you can ask your participants addtional questions
const prolific_id = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'prolific_id',
  title: '',
  text: 'Please enter your Prolific ID to continue.'
},
{
  answer_container_generator: function(config, CT) {
    const quest = magpieUtils.view.fill_defaults_post_test(config);
    return `<form>
                <script>
                function updateProlificID() {
                  $("#next").removeClass("magpie-nodisplay");
                }
                </script>
                <p class='magpie-view-text'>
                    <label for="prolific_id" name="prolific_id_text">Prolific ID:<br /></label>
                    <input type="text" id="prolific_id" oninput='updateProlificID()'/>
                    </p>
                </p>

                <button id="next" class='magpie-view-button magpie-nodisplay'>${config.button}</button>

        </form>`
},
      handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            magpie.global_data.prolificid = $("#prolific_id").val();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
        },
        )
    },
  }
);

const choose_type = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'choose_type',
  data: trial_info.sentence_choice_trials,
  buttonText: 'Start survey!',
  text: `<h1 id="contexttitle2"> What is your Prolific ID?</h1>`
},
{
      answer_container_generator: function (config, CT) {
       return `
          <p class="center">
          <input type="radio" onclick="" id="bothradio" onchange='updateButtonToBoth()' name="begin" class="h1">
          <label for="bothradio">Both</label>
          </br>
          <input type="radio" onclick="" id="scaleradio" onchange='updateButtonToScale()' name="begin">
          <label for="scaleradio">Scale</label>
          </br>
          <input type="radio" onclick="" id="binaryradio" onchange='updateButtonToBinary()' name="begin">
          <label for="binaryradio">Binary</label>
          </p>
          <div id = "nextbutton">
         <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
         </div>

          <script>
          function updateButtonToBoth() {
            answer_type = "both";
            $("#next").removeClass("magpie-nodisplay");
          }
          function updateButtonToBinary() {
            answer_type = "binary";
            $("#next").removeClass("magpie-nodisplay");
          }
          function updateButtonToScale() {
            answer_type = "scale";
            $("#next").removeClass("magpie-nodisplay");
          }
          </script>
               `;
  },
  handle_response_function(config, CT, magpie, answer_container_generator, startingTime) {
    $(".magpie-view").append(answer_container_generator(config, CT));

            $("#next").on("click", function() {
                magpie.findNextView();
            });
    },
  }
);
const instructions3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions3',
  data: trial_info.sentence_choice_trials,
  buttonText: 'Begin!',
  text: `<h1 id="contexttitle2">  </h1>
  <div id="firstinstructions">
  <h1 id="wronganswer" style="display:none;" class="center">
  <p style="color:red;">
  That is incorrect. Please reread the instructions and try again.
  </p>
  </h1>
  <p style="font-size: 27px">
  In this study, you will see 7 short video clips in total. Like in the picture below, each video clip shows a <strong>long hallway</strong> that contains <strong>a banana</strong>, <strong>an apple</strong>, and <strong>a farmer</strong> who can move freely through the room to collect one of them. Outside the room is <strong>a wizard</strong> who has the <strong>power to make a rock appear or disappear</strong> in the <strong>bolded grid cell</strong>, which potentially blocks or frees the farmer's path.
  </p>
  <br />
  <br />
  <div>
  <p>
    <img id="ex-png" src="images/example.png" class="center" height = "180px">
  </p>
  </div>
  <br />
  <p style="font-size: 27px">
  Each short video is paired with 5 sentences.
  Your task is to assess how well these sentences capture the situation depicted in the video clip.
  </p>
  </div>`
},
{
      answer_container_generator: function (config, CT) {
       return `
        <p><input type="button" id="initialNext" value="I've finished reading!" onclick="initialButton()" width = "50px" class="center"></p>
       <div class='magpie-view-answer-container' id='forcedchoicequestion'>
       <script>
       var forcedchoicequestion = document.getElementById('forcedchoicequestion');
       $("#forcedchoicequestion").css("display", "none");
       </script>
              <p style="font-size: 32px;" class='magpie-view-question'><strong>${config.data[CT].question}</strong></p>
               <input type="radio" onclick="" name="test-radio" id="o1" value="${config.data[CT].option1}">
               <label style="font-size: 22px;">
               ${config.data[CT].option1}
               </label>
               <br />
               <input type="radio" onclick="" name="test-radio" id="o2" value="${config.data[CT].option2}">
               <label style="font-size: 22px;">
               ${config.data[CT].option2}
               </label>
               <br />
               <input type="radio" onclick="" name="test-radio" id="o3" value="${config.data[CT].option3}">
               <label style="font-size: 22px;">
               ${config.data[CT].option3}
               </label>
               <br />
               <input type="radio" onclick="" name="test-radio" id="o4" value="${config.data[CT].option4}">
               <label style="font-size: 22px;">
               ${config.data[CT].option4}
               </label>
               </div>
               <p><input type="button" id="check" value="Check my answer!" style="display:none" onclick="myFunction()" width = "40px" class="center"></p>
               <div id = "nextbutton">
              <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
              </div>
               <script>
               var answer2 = "The wizard can make a rock appear and disappear."
               function initialButton(){
                   var x = document.getElementById('forcedchoicequestion');
                   var y = document.getElementById('check');
                   var z = document.getElementById('firstinstructions');
                   var a = document.getElementById('initialNext');
                   var b = document.getElementById('contexttitle2');
                   var c = document.getElementById('forcedchoicequestion');
                   x.style.display = 'block';
                   y.style.display = 'block';
                   z.style.display = 'none';
                   a.style.display = 'none';
                   b.style.display = 'none';
               }
              function myFunction() {
                var x = document.getElementById('wronganswer');
                var c = document.getElementById('forcedchoicequestion');
                var y = document.getElementById('nextbutton');
                var z = document.getElementById('check');
                var a = document.getElementById('firstinstructions');
                var b = document.getElementById('contexttitle2');
                var d = document.getElementById('initialNext');
                var response = $("input[name='test-radio']:checked").val();
                if (response != answer2) {
                  x.style.display = 'block';
                  b.style.display = 'block';
                  a.style.display = 'block';
                  c.style.display = 'none';
                  d.style.display = 'block';
                  z.style.display = 'none';
                  const clear_variable1 = document.getElementById('o1');
                  const clear_variable2 = document.getElementById('o2');
                  const clear_variable3 = document.getElementById('o3');
                  const clear_variable4 = document.getElementById('o4');
                  clear_variable1.checked = false;
                  clear_variable2.checked = false;
                  clear_variable3.checked = false;
                  clear_variable4.checked = false;
                }
              }
              </script>
               `;
    },
  handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
      $(".magpie-view").append(answer_container_generator(config, CT));
      var answer2 = "The wizard can make a rock appear and disappear."
      $("#check").on("click", function () {
          if (document.querySelector('input[name="test-radio"]:checked').value == answer2) {
          magpie.findNextView();
        }
        }
        );
    },
    }
);
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to our experiment!
  This experiment will take approximately x minutes.
  Please only participate on a laptop screen; do not participate on a mobile phone or tablet.
  Also legal information.`,
  buttonText: 'begin the experiment'
});

{/* <br>Please
  only participate once in this series of HITs.<br>Please do <strong>not</strong> participate on a mobile device since
  the page won't display properly.<br></br> */}

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Welcome!',
  text: `
  <p style="color:red;">
  Please do not take this survey using Firefox.
  </p>
  Thank you for participating in our study!<br><br>In this study, you will be asked to <strong>watch 7 short
  videos and answer questions</strong> about them. This study will take about <strong>10 minutes</strong>.<br>


  <small>If you have any questions or concerns, don't hesitate to contact me at
  atticusg@gmail.com.</small>
  <br />
  <br />
  <hr>
  <br />
  <strong>LEGAL INFORMATION</strong>:<br><br>We invite you to participate in a research study on language production and comprehension.<br>Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game.<br><br>You will be paid for your participation at the posted rate.<br><br>There are no risks or benefits of any kind involved in this study.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study.<br>You may print this form for your records.<br><br>CONTACT INFORMATION:<br>If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at <br>(650)-725-9336<br><br>If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.
  `,
  buttonText: 'Begin!'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
},
{
  answer_container_generator: function(config, CT) {
    const quest = magpieUtils.view.fill_defaults_post_test(config);
    return `<form>
                <p class='magpie-view-text'>
                    <label for="age">${quest.age.title}:</label>
                    <input type="number" name="age" min="18" max="110" id="age" />
                </p>
                <p class='magpie-view-text'>
                    <label for="gender" name="gender">Gender:<br /></label>
                    <input type="text" id="gender"/>
                    </p>
                </p>
                <p class='magpie-view-text'>
                    <label for="education">${quest.edu.title}:</label>
                    <select id="education" name="education">
                        <option></option>
                        <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                        <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                        <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                    </select>
                </p>
                <p class='magpie-view-text'>
                    <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                    <input type="text" id="languages"/>
                </p>
                <p class="magpie-view-text">
                    <label for="comments">${quest.comments.title}</label>
                    <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                </p>
                <button id="next" class='magpie-view-button'>${config.button}</button>
        </form>`
},
      handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            // magpie.global_data.prolificid = $("#prolific_id").val();
            magpie.global_data.age = $("#age").val();
            magpie.global_data.gender = $("#gender").val();
            magpie.global_data.education = $("#education").val();
            magpie.global_data.languages = $("#languages").val();
            magpie.global_data.comments = $("#comments")
            .val()
            .trim();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
        },
        )
    },
  }
);

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment! Your completion code is 10B8F625. ',
  prolificConfirmText: 'Press the button'
});

// trial_info.slider_rating = _.shuffle(trial_info.slider_rating);
// function newShuffle(questions, key) {
//   var newQuestions = [];
//   if (key[0]==1) {
//     key = _.shuffle(key);
//   }
//   for (let i = 0; i<7; i++) {
//     newQuestions.push(questions[key[i]]);
//   }
//   return newQuestions;
//

// this is for shuffling question order on a single page
// for (let page=0; page<5; page++) {
//   trial_info.slider_rating[page]=_.shuffle(trial_info.slider_rating[page]);
//   }

var new_alt_key = [];
new_alt_key.push(1);
new_alt_key.push(2);
new_alt_key.push(3);
new_alt_key.push(4);
new_alt_key.push(5);
new_alt_key.push(6);
new_alt_key.push(7);
new_alt_key.push(8);
new_alt_key.push(9);
new_alt_key = _.shuffle(new_alt_key);
new_alt_key.pop();
new_alt_key.pop();
new_alt_key.pop();
new_alt_key.pop();
new_alt_key.pop();
new_alt_key.push(0);
new_alt_key = _.shuffle(new_alt_key);

const slider_rating = magpieViews.view_generator("slider_rating", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 7,
  // name should be identical to the variable name
  // name: {'slider_rating1','slider_rating2', 'slider_rating2', 'slider_rating3','slider_rating4','slider_rating5','slider_rating6','slider_rating7'},
  name: 'slider_rating',
  data: trial_info.slider_rating
},
    {
            stimulus_container_generator: function (config, CT) {
                if (CT==0) {
                  gif_index=4;
                }
                else (gif_index=alt_key[CT-1]);
                return `<div class='magpie-view' align="center">
                       <div style="float: right;"><i>This is page ${CT+1} of 7</i></div>
                          <div class=''>
                          <div class='centered'>
                          <p>
                            <img id="stim-gif" class="animated-gif" src="${config.data[gif_index][0].picture}" class="center" height = "0.99*${screen.width}" height = "550px">
                          </p>
                          </div>
                          </div>
                        </div>`;},
        answer_container_generator: function(config, CT) {
        var option1 = "";
        var option2 = "";
        var font_size = 0;
        if (answer_type==="both") {
        option1 = "Not confident";
        option2 = "Very confident";
        font_size = 12;
        }
        else if (answer_type==="scale") {
        option1 = "Not accurate";
        option2 = "Very accurate";
        font_size = 12;
        }
        if (answer_type==="both"||answer_type==="binary") {
          // console.log(config.data[gif_index][0].picture);
        var output = `<div class=''>
              <div class=''>
                  <p><strong>For each of the following sentences, mark whether it is an accurate description of the scene.</strong></p>`;
        }
        else if (answer_type=="scale") {
          var output = `<div class=''>
                <div class=''>
                    <p><strong>For each of the following sentences, mark how accurately the description describes the scene.</strong></p>
                `;
        }
            if (answer_type == "scale") {
              for (let i = 0; i < 8; i++) {
                  const q = config.data[CT][i].question;
                  output = output + `
                      <p style="font-size:16px;max-width:800px;" class='magpie-view-question'>
                      ${q}
                       </br>
                       </br>
                       &nbsp
                       &nbsp
                       <script>
                       var isClicked = {"0":false, "1":false, "2":false, "3":false, "4":false, "5":false, "6":false, "7":false, "8":false};
                       function updateSlider(i) {
                         isClicked[i.toString()] = true;
                         for (var j=0; j<8; j++) {
                           if (!isClicked[j.toString()]) {
                             return;
                          }
                        }
                        $("#next").removeClass("magpie-nodisplay");
                       }
                       </script>
                      <span class='magpie-response-slider-option'>${option1}</span> \
                            <input type='range' id='response${i}' class='magpie-response-slider' min='0' max='100' value='50' onchange='updateSlider(${i})' /> \
                            <span class='magpie-response-slider-option'>${option2}</span>
                      <div id="slider${i}">
                      </div>
                      <hr>
                      </p>`
              }
        }
        else if (answer_type=="both") {
         for (let i=0; i<8; i++) {
          // q is the question in randomized order
          const q = config.data[CT][i].question;
          output = output + `
            <p style="font-size:16px;max-width:800px;" class='magpie-view-question'>
            ${q}
                        <input type="radio" onclick="yescheck${i}()" name="choice-radio${i}" id="yeschoice-radio${i}" value="yes">
                        Yes
                        &nbsp
                        &nbsp
                        <input type="radio" onclick="nocheck${i}()" name="choice-radio${i}" id="nochoice-radio${i}" value="no">
                        No
                        <script>
                        var isClicked = {"0":false, "1":false, "2":false, "3":false, "4":false, "5":false, "6":false, "7":false, "8":false};
                        function updateSlider(i) {
                          isClicked[i.toString()] = true;
                          for (var j=0; j<8; j++) {
                            if (!isClicked[j.toString()]) {
                              return;
                           }
                         }
                         $("#next").removeClass("magpie-nodisplay");
                        }
                        </script>
                        <script>
                        function yescheck${i}() {
                          document.getElementById("slider${i}").innerHTML="How confident are you? \
                          <span class='magpie-response-slider-option'>${option1}</span> \
                          <input type='range' id='response${i}' class='magpie-response-slider' min='0' max='100' value='50' onchange='updateSlider(${i})' /> \
                          <span class='magpie-response-slider-option'>${option2}</span>";
                        }
                        </script>
                        <script>
                        function nocheck${i}() {
                          document.getElementById("slider${i}").innerHTML="How confident are you? \
                          <span class='magpie-response-slider-option'>${option1}</span> \
                          <input type='range' id='response${i}' class='magpie-response-slider' min='0' max='100' value='50' onchange='updateSlider(${i})' /> \
                          <span class='magpie-response-slider-option'>${option2}</span>";
                        }
                        </script>
                        <div id="slider${i}">
                        </div>
                        </p>
           <hr>`;
         }
       }
       else if (answer_type=="binary") {
         for (let i=0; i<5; i++) {
          console.log(new_alt_key[i])
          var q = config.data[gif_index][new_alt_key[i]].question;
          output = output + `
                      <p style="font-size:16px" class='magpie-view-question'> </p>
                      ${q}
                      </br>
                       <input type="radio" onclick="" name="choice-radio${i}" id="yeschoice-radio${i}" value="yes" onchange='updateSlider(${i})'>
                       <label for="yeschoice-radio${i}">Accurate</label>
                       &nbsp;
                       &nbsp;
                       &nbsp;
                       &nbsp;

                       <input type="radio" onclick="" name="choice-radio${i}" id="nochoice-radio${i}" value="no" onchange='updateSlider(${i})'>
                       <label for="nochoice-radio${i}">Inaccurate</label>
                       <script>
                       var isClicked = {"0":false, "1":false, "2":false, "3":false, "4":false};
                       function updateSlider(i) {
                         isClicked[i.toString()] = true;
                         for (var j=0; j<5; j++) {
                           if (!isClicked[j.toString()]) {
                             return;
                          }
                        }
                        $("#next").removeClass("magpie-nodisplay");
                       }
                       </script>

                       <div id="slider${i}">
                       </div>
          <hr>`;
        }
      }
          output = output + `

                <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
                </br>
                </br>
                </br>
                <p style="color:blue;">
                Psst... don't see a NEXT button? Make sure you've answered every question!
                </p>
                </div>
                </div>
                </div>`;
          return output;
        },

        handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime){
        let response;
        $(".magpie-view").append(answer_container_generator(config, CT));
        response = $("#response");
        // checks if the slider has been changed
        response.on("change", function() {
                    if (response.val() == config.data[CT].answer) {
                        $("#next").removeClass("magpie-nodisplay");
                    }
                });

        $("#next").on("click", function() {
            const RT = Date.now() - startingTime; // measure RT before anything else
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                // response: response.val(),
                RT: RT
            };
            for (var i = 0; i<5; i++) {
              trial_data["response" + i.toString()] = $("#response" + i.toString()).val();
              if ($("#yeschoice-radio" + i.toString() + ":checked").val() == "yes") {
                trial_data["yesno-choice" + i.toString()] = "yes";
              }
              else {
                trial_data["yesno-choice" + i.toString()] = "no";
              }
              trial_data["picture"] = config.data[gif_index][new_alt_key[i]]["picture"];
              // var q = config.data[gif_index][new_alt_key[i]].question;
              // trial_data["question" + i.toString()] = config.data[CT][i]["question"];
              trial_data["question" + i.toString()] = config.data[gif_index][new_alt_key[i]]["question"];
              //add picture and question ID
            }
            //trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
            magpie.trial_data.push(trial_data);
            magpie.findNextView();
        });
        },
      }
    );
// }

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
