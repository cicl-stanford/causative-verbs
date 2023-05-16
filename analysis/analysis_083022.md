Causal Verbs Analysis for Binary Rock Exp
================

## Load libraries

``` r
library(tidyverse)
```

    ## ── Attaching packages ─────────────────────────────────────── tidyverse 1.3.2 ──
    ## ✔ ggplot2 3.4.0     ✔ purrr   0.3.4
    ## ✔ tibble  3.1.8     ✔ dplyr   1.1.0
    ## ✔ tidyr   1.2.0     ✔ stringr 1.4.0
    ## ✔ readr   2.1.2     ✔ forcats 0.5.1
    ## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
    ## ✖ dplyr::filter() masks stats::filter()
    ## ✖ dplyr::lag()    masks stats::lag()

``` r
library(here)
```

    ## here() starts at /Users/angelacao/Desktop/github_repo/Causative-Verbs

``` r
library(writexl)

theme_set(theme_bw())
```

## Load data

``` r
df_import=read_csv("data1.csv", show_col_types = TRUE) %>%
  filter(submission_id>292) 
```

    ## Rows: 560 Columns: 24
    ## ── Column specification ────────────────────────────────────────────────────────
    ## Delimiter: ","
    ## chr (17): comments, education, gender, languages, picture, question0, questi...
    ## dbl  (7): submission_id, RT, age, endTime, startTime, timeSpent, trial_number
    ## 
    ## ℹ Use `spec()` to retrieve the full column specification for this data.
    ## ℹ Specify the column types or set `show_col_types = FALSE` to quiet this message.

``` r
df_postQuest = df_import %>%
  select(submission_id,comments, education, gender, languages)
unique(df_postQuest$comments)
```

    ##  [1] NA                                                                                                                                                                                                                                                                                                                                         
    ##  [2] "Thank you"                                                                                                                                                                                                                                                                                                                                
    ##  [3] "No, thank you."                                                                                                                                                                                                                                                                                                                           
    ##  [4] "N/A"                                                                                                                                                                                                                                                                                                                                      
    ##  [5] "none"                                                                                                                                                                                                                                                                                                                                     
    ##  [6] "Had no issues. Thanks!"                                                                                                                                                                                                                                                                                                                   
    ##  [7] "The study was effective with no issues."                                                                                                                                                                                                                                                                                                  
    ##  [8] "No"                                                                                                                                                                                                                                                                                                                                       
    ##  [9] "I thought that the word \"got\" implied that the presence or absence of the rock made the farmer go and get the apple. However, the farmer did not always get the apple when the rock was not present. So in either case the rock did not cause the farmer to get the apple."                                                             
    ## [10] "Don't know if intentional or not but every time you'd go to the next page it would start from the very bottom of the page requiring me to scroll up. Not a big deal but kind of annoying.\n\nThanks for doing studies like these. I use the money to feed my cats and myself and every little bit helps. Best of luck with your research!"
    ## [11] "n/a"                                                                                                                                                                                                                                                                                                                                      
    ## [12] "No further comments."                                                                                                                                                                                                                                                                                                                     
    ## [13] "Really enjoyed this study. Good luck with the analysis. I hope the input provided proves useful."                                                                                                                                                                                                                                         
    ## [14] "No issues, all is well."                                                                                                                                                                                                                                                                                                                  
    ## [15] "I thought the study was interesting."                                                                                                                                                                                                                                                                                                     
    ## [16] "Nothing else to add.  Thanks."                                                                                                                                                                                                                                                                                                            
    ## [17] "Great study"                                                                                                                                                                                                                                                                                                                              
    ## [18] "No additional comments"                                                                                                                                                                                                                                                                                                                   
    ## [19] "In the instances where there was no rock but the farmer went to the banana, it was hard to decide which sentences were accurate or inaccurate. Without the rock there, the farmer was allowed to get the apple, but the term \"enabled\" feels similar to \"motivated\"."                                                                 
    ## [20] "Videos never played"                                                                                                                                                                                                                                                                                                                      
    ## [21] "I marked that the wizard didnt move his wand for the one. No idea why I did that, but he moved his wand everytime whether it was to put a rock there or remove it."                                                                                                                                                                       
    ## [22] "Thank you."                                                                                                                                                                                                                                                                                                                               
    ## [23] "Interesting! I've never seen a study like this before- very cool and the animation was charming. I don't know what you're studying- visual comprehension, vocabulary? But I enjoyed it, and I appreciated that you had a status bar (questions X of X) at the top- we always appreciate that. Thanks and good luck!"                      
    ## [24] "None"

## Gentle preprocessing

``` r
library(plyr)
```

    ## ------------------------------------------------------------------------------

    ## You have loaded plyr after dplyr - this is likely to cause problems.
    ## If you need functions from both plyr and dplyr, please load plyr first, then dplyr:
    ## library(plyr); library(dplyr)

    ## ------------------------------------------------------------------------------

    ## 
    ## Attaching package: 'plyr'

    ## The following object is masked from 'package:here':
    ## 
    ##     here

    ## The following objects are masked from 'package:dplyr':
    ## 
    ##     arrange, count, desc, failwith, id, mutate, rename, summarise,
    ##     summarize

    ## The following object is masked from 'package:purrr':
    ## 
    ##     compact

``` r
df_main = df_import %>%
 
  dplyr::rename(anon_worker_id = submission_id,
          choice0 = `yesno-choice0`,
          choice1 = `yesno-choice1`,
          choice2 = `yesno-choice2`,
          choice3 = `yesno-choice3`,
          choice4 = `yesno-choice4`) %>%
  select(anon_worker_id, RT, startTime, endTime, picture, question0, question1, question2, question3, question4, 
          trial_number, choice0, choice1, choice2, choice3, choice4) %>%
  mutate_at(vars(picture), funs(str_replace_all(., "(images/|\\.gif)", ""))) %>%
  mutate(condition = case_when(
    picture == 'DOWNHazard100UPHazard0' ~ "Removes rock, prefers apple, reaches apple.",
    picture == 'DOWNHazard100DOWNHazard0' ~ "Removes rock, prefers banana, reaches banana.",
    picture == 'UPHazard0DOWNHazard100' ~ "Places rock, prefers apple, reaches banana.",
    picture == "DOWNHazard0DOWNHazard100" ~ "Places rock, prefers banana, reaches banana.",
    picture == 'DOWNHazard100DOWNHazard100' ~ "Doesn't remove rock, prefers ?, reaches banana.",
    picture == 'UPHazard0UPHazard0' ~ "Doesn't place rock, prefers apple, reaches apple.", 
    picture == "DOWNHazard0DOWNHazard0" ~ "Doesn't place rock, prefers banana, reaches banana."
  ))
```

    ## Warning: `funs()` was deprecated in dplyr 0.8.0.
    ## ℹ Please use a list of either functions or lambdas:
    ## 
    ## # Simple named list: list(mean = mean, median = median)
    ## 
    ## # Auto named with `tibble::lst()`: tibble::lst(mean, median)
    ## 
    ## # Using lambdas list(~ mean(., trim = .2), ~ median(., na.rm = TRUE))

``` r
glimpse(df_import) 
```

    ## Rows: 560
    ## Columns: 24
    ## $ submission_id   <dbl> 293, 293, 293, 293, 293, 293, 293, 294, 294, 294, 294,…
    ## $ RT              <dbl> 67857, 49031, 37783, 34441, 38425, 35449, 33031, 40892…
    ## $ age             <dbl> 43, 43, 43, 43, 43, 43, 43, 45, 45, 45, 45, 45, 45, 45…
    ## $ comments        <chr> NA, NA, NA, NA, NA, NA, NA, "Thank you", "Thank you", …
    ## $ education       <chr> "Higher Degree", "Higher Degree", "Higher Degree", "Hi…
    ## $ endTime         <dbl> 1.66185e+12, 1.66185e+12, 1.66185e+12, 1.66185e+12, 1.…
    ## $ gender          <chr> "FEMALE", "FEMALE", "FEMALE", "FEMALE", "FEMALE", "FEM…
    ## $ languages       <chr> "ENGLISH", "ENGLISH", "ENGLISH", "ENGLISH", "ENGLISH",…
    ## $ picture         <chr> "images/UPHazard0DOWNHazard100.gif", "images/DOWNHazar…
    ## $ question0       <chr> "The appearance of the rock <strong>allowed</strong> t…
    ## $ question1       <chr> "The appearance of the rock <strong>got</strong> the f…
    ## $ question2       <chr> "The appearance of the rock <strong>stopped</strong> t…
    ## $ question3       <chr> "The appearance of the rock <strong>caused</strong> th…
    ## $ question4       <chr> "The wizard <strong>moved</strong> his wand.", "The wi…
    ## $ startDate       <chr> "Tue Aug 30 2022 05:14:32 GMT-0500 (Central Daylight T…
    ## $ startTime       <dbl> 1.66185e+12, 1.66185e+12, 1.66185e+12, 1.66185e+12, 1.…
    ## $ timeSpent       <dbl> 6.259417, 6.259417, 6.259417, 6.259417, 6.259417, 6.25…
    ## $ trial_name      <chr> "slider_rating", "slider_rating", "slider_rating", "sl…
    ## $ trial_number    <dbl> 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, …
    ## $ `yesno-choice0` <chr> "no", "no", "no", "yes", "no", "yes", "no", "yes", "no…
    ## $ `yesno-choice1` <chr> "no", "no", "no", "yes", "no", "yes", "no", "no", "no"…
    ## $ `yesno-choice2` <chr> "yes", "no", "no", "no", "no", "no", "no", "yes", "yes…
    ## $ `yesno-choice3` <chr> "no", "no", "no", "yes", "no", "no", "no", "no", "no",…
    ## $ `yesno-choice4` <chr> "yes", "yes", "no", "yes", "no", "no", "yes", "yes", "…

# Attention check function

Ignores the trials where participants did not pass the attention check

``` r
movedpictures <- c('DOWNHazard100UPHazard0','DOWNHazard100DOWNHazard0','UPHazard0DOWNHazard100',"DOWNHazard0DOWNHazard100")
  nomovedpictures <- c('DOWNHazard100DOWNHazard100','UPHazard0UPHazard0', "DOWNHazard0DOWNHazard0")
  
  df_attention <- df_main %>%
    mutate(attention_answer = case_when(
      str_detect(question0, "<strong>moved</strong>") ~ choice0,
      str_detect(question1, "<strong>moved</strong>") ~ choice1,
      str_detect(question2, "<strong>moved</strong>") ~ choice2,    
      str_detect(question3, "<strong>moved</strong>") ~ choice3,
      str_detect(question4, "<strong>moved</strong>") ~ choice4,
      TRUE ~ "NA")) %>%
    mutate(attention_check = case_when(
      attention_answer == "yes" & picture %in% movedpictures ~ TRUE,
      attention_answer == "no" & picture %in% nomovedpictures ~ TRUE,
      TRUE ~ FALSE)) %>%
    group_by(anon_worker_id) %>%
    mutate(trialsPassed = sum(attention_check)) %>%
    ungroup() %>%
    filter(trialsPassed>6)
  
  table(df_attention$picture,df_attention$attention_check)
```

    ##                             
    ##                              FALSE TRUE
    ##   DOWNHazard0DOWNHazard0         1   79
    ##   DOWNHazard0DOWNHazard100       1   79
    ##   DOWNHazard100DOWNHazard0       2   78
    ##   DOWNHazard100DOWNHazard100     2   78
    ##   DOWNHazard100UPHazard0         2   78
    ##   UPHazard0DOWNHazard100         4   76
    ##   UPHazard0UPHazard0             1   79

``` r
  # view(df_attention)
```

# Checking how many instances of each verb

``` r
allowed_length=length(grep("<strong>allowed</strong>", df_attention$question0))+
  length(grep("<strong>allowed</strong>", df_attention$question1))+
  length(grep("<strong>allowed</strong>", df_attention$question2))+
  length(grep("<strong>allowed</strong>", df_attention$question3))+
  length(grep("<strong>allowed</strong>", df_attention$question4))
print(paste("Allowed = ", toString(allowed_length)))
```

    ## [1] "Allowed =  266"

``` r
let_length=length(grep("<strong>let</strong>", df_attention$question0))+
  length(grep("<strong>let</strong>", df_attention$question1))+
  length(grep("<strong>let</strong>", df_attention$question2))+
  length(grep("<strong>let</strong>", df_attention$question3))+
  length(grep("<strong>let</strong>", df_attention$question4))
print(paste("Let = ", toString(let_length)))
```

    ## [1] "Let =  273"

``` r
enabled_length=length(grep("<strong>enabled</strong>", df_attention$question0))+
  length(grep("<strong>enabled</strong>", df_attention$question1))+
  length(grep("<strong>enabled</strong>", df_attention$question2))+
  length(grep("<strong>enabled</strong>", df_attention$question3))+
  length(grep("<strong>enabled</strong>", df_attention$question4))
print(paste("Enabled = ", toString(enabled_length)))
```

    ## [1] "Enabled =  238"

``` r
caused_length=length(grep("<strong>caused</strong>", df_attention$question0))+
  length(grep("<strong>caused</strong>", df_attention$question1))+
  length(grep("<strong>caused</strong>", df_attention$question2))+
  length(grep("<strong>caused</strong>", df_attention$question3))+
  length(grep("<strong>caused</strong>", df_attention$question4))
print(paste("Caused = ", toString(caused_length)))
```

    ## [1] "Caused =  217"

``` r
made_length=length(grep("<strong>made</strong>", df_attention$question0))+
  length(grep("<strong>made</strong>", df_attention$question1))+
  length(grep("<strong>made</strong>", df_attention$question2))+
  length(grep("<strong>made</strong>", df_attention$question3))+
  length(grep("<strong>made</strong>", df_attention$question4))
print(paste("Made = ", toString(made_length)))
```

    ## [1] "Made =  217"

``` r
got_length=length(grep("<strong>got</strong>", df_attention$question0))+
  length(grep("<strong>got</strong>", df_attention$question1))+
  length(grep("<strong>got</strong>", df_attention$question2))+
  length(grep("<strong>got</strong>", df_attention$question3))+
  length(grep("<strong>got</strong>", df_attention$question4))
print(paste("Got = ", toString(got_length)))
```

    ## [1] "Got =  294"

``` r
prevented_length=length(grep("<strong>prevented</strong>", df_attention$question0))+
  length(grep("<strong>prevented</strong>", df_attention$question1))+
  length(grep("<strong>prevented</strong>", df_attention$question2))+
  length(grep("<strong>prevented</strong>", df_attention$question3))+
  length(grep("<strong>prevented</strong>", df_attention$question4))
print(paste("Prevented = ", toString(prevented_length)))
```

    ## [1] "Prevented =  294"

``` r
stopped_length=length(grep("<strong>stopped</strong>", df_attention$question0))+
  length(grep("<strong>stopped</strong>", df_attention$question1))+
  length(grep("<strong>stopped</strong>", df_attention$question2))+
  length(grep("<strong>stopped</strong>", df_attention$question3))+
  length(grep("<strong>stopped</strong>", df_attention$question4))
print(paste("Stopped = ", toString(stopped_length)))
```

    ## [1] "Stopped =  224"

``` r
blocked_length=length(grep("<strong>blocked</strong>", df_attention$question0))+
  length(grep("<strong>blocked</strong>", df_attention$question1))+
  length(grep("<strong>blocked</strong>", df_attention$question2))+
  length(grep("<strong>blocked</strong>", df_attention$question3))+
  length(grep("<strong>blocked</strong>", df_attention$question4))
print(paste("Blocked = ", toString(blocked_length)))
```

    ## [1] "Blocked =  217"

``` r
#Allowed: 259
#Let: 225
#Enabled: 189
#Caused: 182
#Made: 196
#Got: 280
#Prevented: 273
#Stopped: 196
#Blocked: 203
```

# Plotting RT against trial number

Does the trial number that the participant is completing affect how long
it takes them to complete the trial?

``` r
df_main %>%
  select(trial_number, RT) %>%
  ggplot(., aes(x=trial_number, y=RT)) +
    geom_point(size=3, alpha=0.5) +
    stat_summary(fun.data = "mean_cl_boot",
                 geom = "errorbar",
                 width = 0.2,
                 color = "grey") +
    stat_summary(fun = "mean", 
                 geom = "point",
                 color = "red",
                 size = 5) +
    xlab("Trial Number") +
    ylab("Reaction Time\n(in milliseconds)") +
    theme(axis.text = element_text(size=12),
          axis.title = element_text(size=15))
```

![](analysis_083022_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->

``` r
# glimpse(df_main)

df_clean = df_main %>%
  select(anon_worker_id, question0, question1, question2, question3, question4, 
        choice0, choice1, choice2, choice3, choice4, picture, condition) %>%
  mutate(got = case_when(
    str_detect(question0, "<strong>got</strong>") ~ choice0,
    str_detect(question1, "<strong>got</strong>") ~ choice1,
    str_detect(question2, "<strong>got</strong>") ~ choice2,
    str_detect(question3, "<strong>got</strong>") ~ choice3,
    str_detect(question4, "<strong>got</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(allowed = case_when(
    str_detect(question0, "<strong>allowed</strong>") ~ choice0,
    str_detect(question1, "<strong>allowed</strong>") ~ choice1,
    str_detect(question2, "<strong>allowed</strong>") ~ choice2,
    str_detect(question3, "<strong>allowed</strong>") ~ choice3,
    str_detect(question4, "<strong>allowed</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  # TODO: to the other verbs
  mutate(made = case_when(
    str_detect(question0, "<strong>made</strong>") ~ choice0,
    str_detect(question1, "<strong>made</strong>") ~ choice1,
    str_detect(question2, "<strong>made</strong>") ~ choice2,
    str_detect(question3, "<strong>made</strong>") ~ choice3,
    str_detect(question4, "<strong>made</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(caused = case_when(
    str_detect(question0, "<strong>caused</strong>") ~ choice0,
    str_detect(question1, "<strong>caused</strong>") ~ choice1,
    str_detect(question2, "<strong>caused</strong>") ~ choice2,
    str_detect(question3, "<strong>caused</strong>") ~ choice3,
    str_detect(question4, "<strong>caused</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(enabled = case_when(
    str_detect(question0, "<strong>enabled</strong>") ~ choice0,
    str_detect(question1, "<strong>enabled</strong>") ~ choice1,
    str_detect(question2, "<strong>enabled</strong>") ~ choice2,
    str_detect(question3, "<strong>enabled</strong>") ~ choice3,
    str_detect(question4, "<strong>enabled</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(let = case_when(
    str_detect(question0, "<strong>let</strong>") ~ choice0,
    str_detect(question1, "<strong>let</strong>") ~ choice1,
    str_detect(question2, "<strong>let</strong>") ~ choice2,
    str_detect(question3, "<strong>let</strong>") ~ choice3,
    str_detect(question4, "<strong>let</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(prevented = case_when(
    str_detect(question0, "<strong>prevented</strong>") ~ choice0,
    str_detect(question1, "<strong>prevented</strong>") ~ choice1,
    str_detect(question2, "<strong>prevented</strong>") ~ choice2,
    str_detect(question3, "<strong>prevented</strong>") ~ choice3,
    str_detect(question4, "<strong>prevented</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(stopped = case_when(
    str_detect(question0, "<strong>stopped</strong>") ~ choice0,
    str_detect(question1, "<strong>stopped</strong>") ~ choice1,
    str_detect(question2, "<strong>stopped</strong>") ~ choice2,
    str_detect(question3, "<strong>stopped</strong>") ~ choice3,
    str_detect(question4, "<strong>stopped</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  mutate(blocked = case_when(
    str_detect(question0, "<strong>blocked</strong>") ~ choice0,
    str_detect(question1, "<strong>blocked</strong>") ~ choice1,
    str_detect(question2, "<strong>blocked</strong>") ~ choice2,
    str_detect(question3, "<strong>blocked</strong>") ~ choice3,
    str_detect(question4, "<strong>blocked</strong>") ~ choice4,
    TRUE ~ "NA"
  )) %>%
  select(anon_worker_id, got, allowed, made, caused, enabled, let, prevented, stopped, blocked, picture, condition)

  glimpse(df_clean)
```

    ## Rows: 560
    ## Columns: 12
    ## $ anon_worker_id <dbl> 293, 293, 293, 293, 293, 293, 293, 294, 294, 294, 294, …
    ## $ got            <chr> "no", "no", "no", "yes", "no", "yes", "no", "NA", "NA",…
    ## $ allowed        <chr> "no", "no", "no", "yes", "no", "yes", "no", "NA", "NA",…
    ## $ made           <chr> "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "…
    ## $ caused         <chr> "no", "no", "no", "yes", "no", "no", "no", "no", "no", …
    ## $ enabled        <chr> "NA", "NA", "NA", "NA", "NA", "NA", "NA", "no", "no", "…
    ## $ let            <chr> "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "…
    ## $ prevented      <chr> "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "…
    ## $ stopped        <chr> "yes", "no", "no", "no", "no", "no", "no", "yes", "no",…
    ## $ blocked        <chr> "NA", "NA", "NA", "NA", "NA", "NA", "NA", "yes", "yes",…
    ## $ picture        <chr> "UPHazard0DOWNHazard100", "DOWNHazard100DOWNHazard0", "…
    ## $ condition      <chr> "Places rock, prefers apple, reaches banana.", "Removes…

``` r
  write.csv(df_clean,"english_cleaned.csv", row.names = FALSE)
```

``` r
fun_mean <- function(x){return(round(data.frame(y=mean(x),label=mean(x,na.rm=T)),digit=2))}

df_tidy = df_clean %>%
  gather(verbs, rating, -anon_worker_id, -picture, -condition) %>%
  filter(rating != "NA") %>%
  mutate_at(vars(rating), funs(case_when(
    rating == "no" ~ 0,
    rating == "yes" ~ 1,
    TRUE ~ 404
  ))) 
```

    ## Warning: `funs()` was deprecated in dplyr 0.8.0.
    ## ℹ Please use a list of either functions or lambdas:
    ## 
    ## # Simple named list: list(mean = mean, median = median)
    ## 
    ## # Auto named with `tibble::lst()`: tibble::lst(mean, median)
    ## 
    ## # Using lambdas list(~ mean(., trim = .2), ~ median(., na.rm = TRUE))

``` r
df_tidy %>%
  mutate_at(vars(verbs), funs(fct_relevel(.,c("caused", "got", "made", "enabled", "let", "allowed", "prevented", "stopped", "blocked")))) %>%
  mutate_at(vars(condition), funs(fct_relevel(.,c("Places rock, prefers apple, reaches banana.", 
                                                  "Places rock, prefers banana, reaches banana.",
                                                  "Removes rock, prefers apple, reaches apple.",
                                                  "Removes rock, prefers banana, reaches banana.",
                                                  "Doesn't place rock, prefers apple, reaches apple.",
                                                  "Doesn't place rock, prefers banana, reaches banana.")))) %>%
  ggplot(., aes(x=verbs, y=rating)) +
    facet_wrap(vars(condition), nrow=4) +
    stat_summary(fun = "mean", 
                 geom = "bar",
                 color = "black",
                 fill = "lightblue",
                 width = .5) +
    # stat_summary(fun.data = fun_mean, geom="text", vjust=-0.7, size=1) +
    stat_summary(fun.data = "mean_cl_boot",
                   geom = "errorbar",
                   width = 0.2,
                   color = "grey")
```

    ## Warning: `funs()` was deprecated in dplyr 0.8.0.
    ## ℹ Please use a list of either functions or lambdas:
    ## 
    ## # Simple named list: list(mean = mean, median = median)
    ## 
    ## # Auto named with `tibble::lst()`: tibble::lst(mean, median)
    ## 
    ## # Using lambdas list(~ mean(., trim = .2), ~ median(., na.rm = TRUE))

    ## Warning: `funs()` was deprecated in dplyr 0.8.0.
    ## ℹ Please use a list of either functions or lambdas:
    ## 
    ## # Simple named list: list(mean = mean, median = median)
    ## 
    ## # Auto named with `tibble::lst()`: tibble::lst(mean, median)
    ## 
    ## # Using lambdas list(~ mean(., trim = .2), ~ median(., na.rm = TRUE))

![](analysis_083022_files/figure-gfm/unnamed-chunk-7-1.png)<!-- --> \#
Long Form Gets long form of data by combining verb columns

``` r
df_clean %>%
  gather(verbs, rating, -anon_worker_id, -picture) %>%
  filter(rating != "NA") %>%
  ggplot(., aes(x=verbs, fill=rating)) +
    facet_wrap(vars(picture), nrow=4) +
    geom_bar(stat="count", position=position_dodge())
```

![](analysis_083022_files/figure-gfm/unnamed-chunk-8-1.png)<!-- -->

``` r
averages <- tapply(df_tidy$rating, list(df_tidy$verbs, df_tidy$condition), mean)

std <- tapply(df_tidy$rating, list(df_tidy$verbs, df_tidy$condition), sd)

se <- std/sqrt(72)

alpha <- 0.05
degrees.freedom = 72 - 1
t.score = qt(p=alpha/2, df=degrees.freedom,lower.tail=F)

margin_error <- t.score * se

df_prevent_ex <- filter(df_tidy, verbs == "prevented" & condition=="Places rock, prefers banana, reaches banana.")
  
df_stopped_ex <- filter(df_tidy, verbs == "stopped" & condition=="Places rock, prefers banana, reaches banana.")
```

``` r
unique(df_tidy$condition)
```

    ## [1] "Places rock, prefers apple, reaches banana."        
    ## [2] "Removes rock, prefers banana, reaches banana."      
    ## [3] "Doesn't remove rock, prefers ?, reaches banana."    
    ## [4] "Removes rock, prefers apple, reaches apple."        
    ## [5] "Doesn't place rock, prefers banana, reaches banana."
    ## [6] "Doesn't place rock, prefers apple, reaches apple."  
    ## [7] "Places rock, prefers banana, reaches banana."

``` r
unique(df_tidy$verbs)
```

    ## [1] "got"       "allowed"   "made"      "caused"    "enabled"   "let"      
    ## [7] "prevented" "stopped"   "blocked"

``` r
glimpse(df_tidy)
```

    ## Rows: 2,240
    ## Columns: 5
    ## $ anon_worker_id <dbl> 293, 293, 293, 293, 293, 293, 293, 298, 298, 298, 298, …
    ## $ picture        <chr> "UPHazard0DOWNHazard100", "DOWNHazard100DOWNHazard0", "…
    ## $ condition      <chr> "Places rock, prefers apple, reaches banana.", "Removes…
    ## $ verbs          <chr> "got", "got", "got", "got", "got", "got", "got", "got",…
    ## $ rating         <dbl> 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0…

``` r
# average_e_cause <- tapply(df_tidy$rating, list(df_tidy$verbs=="caused" or "made" or "got", df_tidy$condition=="Doesn't place rock, prefers apple, reaches apple."), mean)
average_e_cause <- tapply(df_tidy$rating==TRUE, list(df_tidy$verbs %in% c("caused", "made", "got"), df_tidy$condition=="Doesn't place rock, prefers apple, reaches apple."), mean)
average_e_cause
```

    ##           FALSE      TRUE
    ## FALSE 0.3695988 0.5092593
    ## TRUE  0.1522436 0.7980769

``` r
average_e_enable <- tapply(df_tidy$rating==TRUE, list(df_tidy$verbs %in% c("enabled", "allowed", "let"), df_tidy$condition=="Doesn't place rock, prefers apple, reaches apple."), mean)
average_e_enable
```

    ##           FALSE      TRUE
    ## FALSE 0.2854864 0.4066986
    ## TRUE  0.3243243 0.9729730

``` r
average_f_enable <- tapply(df_tidy$rating==TRUE, list(df_tidy$verbs %in% c("enabled", "allowed", "let"), df_tidy$condition=="Doesn't place rock, prefers banana, reaches banana."), mean)
average_f_enable
```

    ##           FALSE       TRUE
    ## FALSE 0.3500797 0.01913876
    ## TRUE  0.4159159 0.42342342

``` r
average_g_prevent <- tapply(df_tidy$rating==TRUE, list(df_tidy$verbs %in% c("stopped", "prevented", "blocked"), df_tidy$condition=="Doesn't remove rock, prefers ?, reaches banana."), mean)
average_g_prevent
```

    ##           FALSE     TRUE
    ## FALSE 0.3891473 0.000000
    ## TRUE  0.2952381 0.752381

## Hypothesis 1

``` r
#figure e
result1 = df_tidy %>% 
  filter(condition=="Doesn't place rock, prefers apple, reaches apple.") %>% 
  filter(verbs %in% c("caused", "made", "got")) 

result1 = result1 %>%
  aggregate(rating ~ anon_worker_id, FUN = mean)

result1$condition <- "Doesn't place rock, prefers apple, reaches apple."
result1$verbs <- "causing"

#figure e
result2 = df_tidy %>%
  filter(condition=="Doesn't place rock, prefers apple, reaches apple.") %>%
  filter(verbs %in% c("enabled", "allowed", "let"))

result2 = result2 %>%
  aggregate(rating ~ anon_worker_id, FUN = mean)

result2$condition <- "Doesn't place rock, prefers apple, reaches apple."
result2$verbs = "enabling"

#figure f
result3 = df_tidy %>%
  filter(condition=="Doesn't place rock, prefers banana, reaches banana.") %>%
  filter(verbs %in% c("enabled", "allowed", "let"))

result3 = result3 %>%
  aggregate(rating ~ anon_worker_id, FUN = mean)

result3$condition <- "Doesn't place rock, prefers banana, reaches banana."
result3$verbs = "enabling"

#figure g
result4 = df_tidy %>%
  filter(condition=="Doesn't remove rock, prefers ?, reaches banana.") %>%
  filter(verbs %in% c("prevented", "stopped", "blocked"))

result4 = result4 %>%
  aggregate(rating ~ anon_worker_id, FUN = mean)

result4$condition <- "Doesn't remove rock, prefers ?, reaches banana."
result4$condition <- "preventing"
```

``` r
prop_test_e_cause <- t.test(result1$rating, alternative = "greater", mu=0)
# Calculate degrees of freedom
length(result1$rating) - 1
```

    ## [1] 71

``` r
prop_test_e_cause$p.value
```

    ## [1] 6.525155e-28

``` r
prop_test_e_cause$statistic
```

    ##        t 
    ## 17.60641

``` r
prop_test_e_enable <- t.test(result2$rating, alternative = "greater", mu=0)
# Calculate degrees of freedom
length(result2$rating) - 1
```

    ## [1] 71

``` r
prop_test_e_enable$p.value
```

    ## [1] 2.697493e-57

``` r
prop_test_e_enable$statistic
```

    ##        t 
    ## 49.84977

``` r
# also relevant to hypothesis 2
prop_test_f_enable <- t.test(result3$rating, alternative = "greater", mu=0)
length(result3$rating) - 1
```

    ## [1] 71

``` r
prop_test_f_enable$p.value
```

    ## [1] 6.985232e-11

``` r
prop_test_f_enable$statistic
```

    ##        t 
    ## 7.502132

``` r
#also relevant to hypothesis 3
prop_test_g_prevent <- t.test(result4$rating, alternative = "greater", mu=0)
length(result4$rating) - 1
```

    ## [1] 70

``` r
prop_test_g_prevent$p.value
```

    ## [1] 1.719198e-26

``` r
prop_test_g_prevent$statistic
```

    ##     t 
    ## 16.75

## Hypothesis 2

``` r
#figure d
result5 = df_tidy %>% 
  filter(condition=="Removes rock, prefers banana, reaches banana.") %>% 
  filter(verbs %in% c("enabled", "allowed", "let"))

result5 = result5 %>%
  aggregate(rating ~ anon_worker_id, FUN = mean)

result5$condition <- "Removes rock, prefers banana, reaches banana."
result5$verbs <- "enabling"

prop_test_d_enable <- t.test(result5$rating, alternative = "greater", mu=0)
length(result5$rating) - 1
```

    ## [1] 71

``` r
prop_test_d_enable$p.value
```

    ## [1] 3.089506e-14

``` r
prop_test_d_enable$statistic
```

    ##        t 
    ## 9.314364

## Hypothesis 3

``` r
#figure b
result6 = df_tidy %>%
  filter(condition=="Places rock, prefers banana, reaches banana.") %>%
  filter(verbs %in% c("prevented", "stopped", "blocked")) 

result6 = result6 %>%
  aggregate(rating ~ anon_worker_id, FUN = mean)

result6$condition <- "Places rock, prefers banana, reaches banana."
result6$verbs <- "preventing"

prop_test_b_prevent <- t.test(result6$rating, alternative = "greater", mu=0)
length(result6$rating) - 1
```

    ## [1] 70

``` r
prop_test_b_prevent$p.value
```

    ## [1] 1.006166e-20

``` r
prop_test_b_prevent$statistic
```

    ##        t 
    ## 13.04901
