import random

start = r"""


        \documentclass[10pt,letterpaper]{article}
\usepackage[papersize={17in, 7in},total={15in, 1.5in}]{geometry}
\usepackage{tikz}
\usepackage{amsmath}
\usepackage{booktabs}
\usepackage{pifont}
\usepackage{amssymb}
\usepackage{amsfonts}




\begin{document}
"""

end = " \\end{document}"


def write_slide(setting):
        message = r"""
        \pagenumbering{gobble}
        \centering
        \resizebox{\textwidth}{!}{
        \begin{tikzpicture}[%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        box/.style={rectangle,draw=black,thick, minimum height=2cm, minimum width=1.5cm},
            ]%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

        \def\sizebig{36}

        \foreach \y in {8}{
            \foreach \x in {0,1,...,17}
                \node[box] at (\x*1.5,\y){};
            \foreach \x in {19,...,24}
                \node[box] at (\x*1.5,\y){};

        }

        \node[box, line width=0.15cm] at (18*1.5,8){};

        \node at (2*1.5,8){\includegraphics[scale=0.06]{green apple.png}};


        \def\indone{16}
        \def\indtwo{20}

        \node at (\sizebig-3,8){\includegraphics[scale=0.05]{redapple.png}};
        """
        if setting["wizard_setting"] == 1:
            message += "\n \\node at (17*1.5,3.5){{\\includegraphics[scale=0.035]{{wizard1.png}}}};"
        if setting["wizard_setting"] == 2:
            message += "\n \\node at (17*1.5,3.5){{\\includegraphics[scale=0.035]{{wizard2.png}}}};"
        if setting["wizard_setting"] == 3:
            message += "\n \\node at (17*1.5,3.5){{\\includegraphics[scale=0.035]{{wizard2.png}}}};"
            message += "\n \\node at (18.01*1.5,7){{\\includegraphics[scale=0.01]{{lightning.jpg}}}};"
        if setting["hazard_setting"]== 1:
            if setting['hazard'] != 0:
                message += "\n \\node at (18.01*1.5,8){{\\includegraphics[scale=0.03]{{skull.png}}}};"
                # message += f"\n \\node at (8.07,18.29){{\small {setting['hazard']}\%}};"
        if setting["hazard_setting"] == 2:
            if setting['hazard2'] != 0:
                message += "\n \\node at (18.01*1.5,8){{\\includegraphics[scale=0.03]{{skull.png}}}};"
                # message += f"\n \\node at (8.07,18.29){{\small {setting['hazard2']}\%}};"
        if not setting["dead"]:
            message += f" \n \\node at ({setting['fy']}*1.5,{setting['fx']}){{\includegraphics[scale=0.093]{{farmer.png}}}};"
        message += "\n \\end{tikzpicture}}"
        return message



def move(object, dir, increment, turn=None):
    def movefunc(locs):
        if object == "o":
            locs["turn"] = ""
            locs["scale"] = "18"
        locs[object+dir] += increment
        if turn is not None:
            locs["r"+dir] += increment
            locs["turn"] = turn
            locs["scale"] = "75"
        return locs
    return movefunc

def flip(type):
    def flipfunc(locs):
        if locs[type] == 1:
            locs[type] = 2
        else:
            locs[type] = 1
        return locs
    return flipfunc

def increment(type):
    def incrementfunc(locs):
        locs[type] = locs[type] +1
        return locs
    return incrementfunc

def decrement(type):
    def decrementfunc(locs):
        locs[type] = locs[type] -1
        return locs
    return decrementfunc

def compose(f, f2):
    def composefunc(x):
        x = f2(f(x))
        return x
    return composefunc

def scenario(hazard,goes_up,goes_up2,hazard2,dies=None):
    if dies is None:
        dies = random.randint(0,100) < hazard2
    setting = {"fx":8,"fy":12,"hazard_setting":1,"wizard_setting":1, "hazard2":hazard2,"hazard":hazard, "dead":False}
    moves = []
    if goes_up:
        moves += [move("f", "y", 1)]
        moves += [move("f", "y", 1)]
    else:
        moves += [move("f", "y", -1)]
        moves += [move("f", "y", -1)]
    if setting["hazard2"] != setting["hazard"]:
        moves += [increment("wizard_setting")]
        moves += [increment("wizard_setting")]
        moves += [compose(flip("hazard_setting"),decrement("wizard_setting")) ]
        moves += [decrement("wizard_setting") ]
    if goes_up2:
        if goes_up:
            moves += [move("f", "y", 1) for _ in range(8)]
        else:
            moves += [move("f", "y", 1) for _ in range(12)]
    else:
        if goes_up:
            moves += [move("f", "y", -1) for _ in range(12)]
        else:
            moves += [move("f", "y", -1) for _ in range(8)]
    slide = ""
    for move1 in moves:
        slide += write_slide(setting)
        setting = move1(setting)
        if (setting["fx"],setting["fy"]) == (8,18) and dies:
                setting["dead"] = True
                break
    slide += write_slide(setting)
    return start + slide + end

for goes_up in [True, False]:
    for goes_up2 in [True, False]:
        for hazard in [100,0]:
            for hazard2 in [100,0]:
                danger_level = 65
                if (goes_up and hazard == 100) or (goes_up2 and hazard2 == 100) :
                    continue
                if (hazard == hazard2) and (goes_up != goes_up2):
                    continue
                if goes_up == True:
                    s_goes_up = "UP"
                else:
                    s_goes_up = "DOWN"
                if goes_up2 == True:
                    s_goes_up2 = "UP"
                else:
                    s_goes_up2 = "DOWN"
                with open( f"{s_goes_up}Hazard{hazard}{s_goes_up2}Hazard{hazard2}.tex", "w") as f:
                    f.write(scenario(hazard,goes_up,goes_up2,hazard2))
