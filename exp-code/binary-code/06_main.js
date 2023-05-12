// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            instructions,
            instructions3,
            prolific_id,
            slider_rating,
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            // change below!!!
            // mturk submiterator, prolofic proliferate for hosting
            // proliferate is a script argument
            // data saved from github hosted pages is saved by netlify
            // proliferate/subiterator talks to mturk about participant number, payment, restrictions
            experimentID: "20",
            serverAppURL: "https://final-magpie.herokuapp.com/api/submit_experiment/",
            //https://magpie-demo.herokuapp.com/api/submit_experiment/
            // Possible deployment methods are:
            // !!!"debug" and "directLink" in order to collect data
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            // remember to change below!!!
            // run first one with 2-5 participants
            // "directLink" instead of "debug" will write data to database, can locally test if pipeline is working
            deployMethod: "debug",
            contact_email: "atticusg@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                // slider_rating.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
