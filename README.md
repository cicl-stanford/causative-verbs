# A Semantics for Causing, Enabling, and Preventing Verbs using Structural Causal Models

This repository contains the experiments, data, analyses, and figures for the paper ["A Semantics for Causing, Enabling, and Preventing Verbs using Structural Causal Models"](https://google.com) by Angela Cao* (angelacao@outlook.com), Atticus Geiger*, Elisa Kreiss*, Thomas Icard, and Tobias Gerstenberg (gerstenberg@stanford.edu).

(* indicates equal contribution)

## Abstract
When choosing how to describe what happened, we have a number of causal verbs at our disposal. In this paper, we develop a model-theoretic formal semantics for nine causal verbs that span the categories of CAUSE, ENABLE, and PREVENT. We use structural causal models (SCMs) to represent participants' mental construction of a scene when assessing the correctness of causal expressions relative to a presented context. Furthermore, SCMs enable us to model events relating both the physical world as well as agents' mental states. In experimental evaluations, we find that the proposed semantics exhibits a closer alignment with human evaluations in comparison to prior accounts of the verb families.

## Demo
You can see a demo of the experiment [here](https://mellifluous-semifreddo-3bdde2.netlify.app/).

## Repo structure
```
.
├── exp-code
│   ├── binary-code
|   ├── scale-code
│   └── videos
├── analysis
│   ├── R script
│   ├── data1
│   ├── data2
│   └── figures
└── video-generation
    ├── script
    ├── script-output
    └── images
```

### exp-code

#### binary-code

- Experimental backend for our binary-choice experiment, using [_magpie](https://magpie-ea.github.io/magpie-site/). It was hosted using [Netlifly](https://app.netlify.com/), with the backend hosted on [Heroku](https://www.heroku.com/).

#### scale-code

- Prior to running our binary-choice experiment, we also ran a similar version where participants additional had to indicate "how confident" they were in their choice. Data from our paper only reports on the binary-choice experiment, as the results from the scale version showed similar results.

#### videos

- GIFs used in the experiment were first pdfs generated by our video generation script, and then converted to GIF form using a [GIF converter](https://ezgif.com/maker).

### analysis

#### R script

- analysis script for reported results and corresponding pre-processing

#### data1

- data collected from the experiment reported in the paper (worker IDs are replaced with a unique number)

#### data2

- data collected from a preliminary scale version of our experiment (worker IDs are replaced with a unique number)

#### figures

- figures outputted from the analysis script

### video generation

#### script

- Python script used to generate .tex for compilation into pdf versions of the video stimuli

#### script-output

- pdf outpts from the script

#### images

- copyright-free images of entities needed for the script, such as the farmer, wizard, and rock

