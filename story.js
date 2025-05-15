const storyData = {
    start: {
        text: "Il est 3h du matin. Vous êtes plongé dans votre code, les yeux rivés sur l'écran de votre ordinateur. Soudain, un fichier mystérieux apparaît sur votre bureau : 'code_obscure.py'. La date de création indique votre date d'anniversaire, qui est dans quelques heures...",
        choices: [
            { text: "Ouvrir le fichier avec curiosité", next: "prologue" },
            { text: "Ignorer le fichier et continuer à coder", next: "ignoreFile" },
            { text: "Redémarrer l'ordinateur", next: "restartRisk" }
        ]
    },
    prologue: {
        text: "Vous double-cliquez sur 'code_obscure.py'. L'écran devient noir, puis des lignes de code vertes défilent à toute vitesse. Vous sentez une force étrange vous aspirer à travers l'écran. Vous tombez, tombez... et atterrissez dans un univers fait de chiffres et de symboles. Une voix résonne : 'Bienvenue dans la Matrice. Ici, seul le code te sauvera.'",
        choices: [
            { text: "Continuer...", next: "firstChallenge" }
        ]
    },
    ignoreFile: {
        text: "Vous essayez d'ignorer le fichier, mais il s'ouvre tout seul. Le Matrix ne vous laisse pas le choix...",
        next: "prologue"
    },
    restartRisk: {
        text: "Le redémarrage prend une éternité. Quand l'ordinateur revient, le fichier est toujours là, mais maintenant il clignote...",
        next: "prologue"
    },
    // --- First Python Enigma ---
    firstChallenge: {
        text: `Un terminal s'ouvre :\n\ndef f(n):\n    if n == 0:\n        return 1\n    return n * f(n-1)\n\nprint(f(3))\n\nQue va afficher ce code Python ?`,
        choices: [
            { text: "6", next: "firstCorrect" },
            { text: "Erreur de récursion", next: "firstRisky" },
            { text: "0", next: "firstDeath" }
        ]
    },
    firstCorrect: {
        text: "Bonne réponse. Vous sentez le Matrix vibrer, mais il vous laisse passer.",
        choices: [ { text: "Continuer", next: "secondChallenge" } ]
    },
    firstRisky: {
        text: "Ce n'est pas le cas ici, mais la récursion peut être dangereuse... Le Matrix vous donne une seconde chance, mais la prochaine question sera plus difficile.",
        choices: [ { text: "Continuer", next: "secondChallengeHard" } ]
    },
    firstDeath: {
        text: "[MORT] 0 n'est pas la bonne réponse. Le Matrix n'aime pas les erreurs d'initialisation.",
        choices: [ { text: "Recommencer l'aventure", next: "start" } ]
    },
    // --- Second Python Enigma (normal) ---
    secondChallenge: {
        text: `Que fait ce code ?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n\nQu'affiche-t-on ?`,
        choices: [
            { text: "[1, 2, 3, 4]", next: "secondCorrect" },
            { text: "[1, 2, 3]", next: "secondRisky" },
            { text: "Erreur : b n'existe pas", next: "secondDeath" }
        ]
    },
    secondCorrect: {
        text: "Exact. Les listes sont mutables, et le Matrix apprécie votre vigilance.",
        choices: [ { text: "Continuer", next: "thirdChallenge" } ]
    },
    secondRisky: {
        text: "Attention, b et a pointent vers la même liste. Le Matrix vous observe, mais vous pouvez continuer.",
        choices: [ { text: "Continuer", next: "thirdChallenge" } ]
    },
    secondDeath: {
        text: "[MORT] Le Matrix n'aime pas les variables fantômes.",
        choices: [ { text: "Recommencer l'aventure", next: "start" } ]
    },
    // --- Second Python Enigma (hard) ---
    secondChallengeHard: {
        text: `Version difficile :\n\ndef g(x, l=[]):\n    l.append(x)\n    return l\n\nprint(g(1))\nprint(g(2))\n\nQu'affiche-t-on ?`,
        choices: [
            { text: "[1] puis [1, 2]", next: "secondHardCorrect" },
            { text: "[1] puis [2]", next: "secondHardRisky" },
            { text: "Erreur : argument manquant", next: "secondHardDeath" }
        ]
    },
    secondHardCorrect: {
        text: "Bien vu ! Les arguments mutables sont piégeux en Python.",
        choices: [ { text: "Continuer", next: "thirdChallenge" } ]
    },
    secondHardRisky: {
        text: "Ce serait vrai si la liste n'était pas partagée entre les appels. Le Matrix vous laisse passer, mais reste vigilant.",
        choices: [ { text: "Continuer", next: "thirdChallenge" } ]
    },
    secondHardDeath: {
        text: "[MORT] Le Matrix n'aime pas les fonctions incomplètes.",
        choices: [ { text: "Recommencer l'aventure", next: "start" } ]
    },
    // --- Third Python Enigma ---
    thirdChallenge: {
        text: `Que fait ce code ?\n\nfor i in range(3):\n    print(i)\nelse:\n    print('Done')\n\nQu'affiche-t-on ?`,
        choices: [
            { text: "0\n1\n2\nDone", next: "thirdCorrect" },
            { text: "0\n1\n2", next: "thirdRisky" },
            { text: "Done", next: "thirdDeath" }
        ]
    },
    thirdCorrect: {
        text: "Bravo. Le Matrix vous accorde un passage vers l'énigme suivante.",
        choices: [ { text: "Continuer", next: "finalChallenge" } ]
    },
    thirdRisky: {
        text: "Vous avez oublié le else du for. Le Matrix vous laisse passer, mais vous sentez une légère instabilité...",
        choices: [ { text: "Continuer", next: "finalChallenge" } ]
    },
    thirdDeath: {
        text: "[MORT] Le Matrix n'affiche pas 'Done' sans la boucle. Vous disparaissez dans le néant.",
        choices: [ { text: "Recommencer l'aventure", next: "start" } ]
    },
    // --- Final Python/Physics Enigma ---
    finalChallenge: {
        text: `Dernière énigme :\n\ndef fly(speed):\n    if speed > 299792458:\n        return 'Impossible'\n    return 'En vol'\n\nprint(fly(340))\n\nQue va-t-on afficher ?`,
        choices: [
            { text: "'En vol'", next: "victory" },
            { text: "'Impossible'", next: "finalRisky" },
            { text: "Erreur : NameError", next: "finalDeath" }
        ]
    },
    victory: {
        text: "[VICTOIRE] Vous avez percé les secrets du Matrix et de la physique. Joyeux anniversaire !",
        choices: [ { text: "Voir l'épilogue", next: "epilogue" } ]
    },
    finalRisky: {
        text: "Ce n'est pas la vitesse de la lumière, mais le Matrix vous laisse filer cette fois.",
        choices: [ { text: "Continuer", next: "victory" } ]
    },
    finalDeath: {
        text: "[MORT] Le Matrix n'aime pas les variables non définies.",
        choices: [ { text: "Recommencer l'aventure", next: "start" } ]
    },
    epilogue: {
        text: "Vous ouvrez les yeux devant votre ordinateur. Le soleil se lève. Sur l'écran, un message : 'Bravo, tu as survécu à Code Obscure. Le vrai monde t'attend... et aussi ton gâteau d'anniversaire.' Vous souriez, prêt à affronter la journée, Matrix ou pas Matrix.",
        choices: [ { text: "Un dernier message...", next: "finalMessage" } ]
    },
    finalMessage: {
        text: "Love you Papa ! Joyeux anniversaire !!! J'espère que tu aimes bien mon cadeau et que tu as passé une super journée ! Tu es intelligent, fou, drôle et encore mille autres merveilles, et je ne voudrais personne d'autre comme papa car tu es le meilleur Papa de l'univers entier ! Bisous bisous et énormes câlins, Maya Reinaudi-Monzier, le 13 mai 2025 !!",
        choices: [ { text: "Recommencer l'aventure", next: "start" } ]
    }
}; 