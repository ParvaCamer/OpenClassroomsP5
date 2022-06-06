function getStarWars() {
    return [
        ["La peur mène à la colère, la colère mène à la haine,",
            "Ce n’est pas parce que tu parles,",
            "Quand 900 ans comme moi tu auras,",
            "Que la Force soit,",
            "Personne par la guerre,",
            "Tu sais contrôler ta peur… maintenant libère ta colère,",
            "La taille importe peu… Regarde moi,",
            "Hello there,",
            "Ce baiser que tu m’as donné hante mes jours et mes nuits,",
            "Tu apprendras que beaucoup de vérités auxquelles nous tenons,",
            "Il était devenu tellement puissant que la seule chose qui lui faisait encore peur était de perdre son pouvoir, ce qui, arriva un jour,",
            "La prophétie voulait que tu détruises les Sith,",
            "Je vous attendais, Obi-Wan. Enfin nous nous retrouvons,",
            "Souviens-toi : la puissance d’un Jedi provient de la Force,"],
        [" est-ce par ma taille que tu peux me juger",
            " dans mes cauchemars il ne m’en reste plus qu’une cicatrice qui ne se refermera jamais,",
            " il fit l’erreur d’enseigner à son jeune apprenti son savoir, et tous ses secrets. Et cet apprenti le tua pendant qu’il dormait,",
            " la boucle est maintenant bouclée. Quand je vous ai quitté, j’étais votre disciple,",
            " mais prends garde à la colère, la peur, l’agression : elles forment le côté obscur,"],
        [" la haine mène à la souffrance.",
            " que tu es intelligent.",
            " moins en forme tu seras.",
            " avec toi.",
            " ne devient grand.",
            " seule ta haine peut me détruire.",
            " et bien tu ne le dois pas.",
            " General Kenobi.",
            " tu t’es emparée de mon cœur et tu le mets au supplice.",
            " dépendent avant tout de notre propre point de vue.",
            " quelle ironie ! Il avait vaincu la mort pour les autres, mais la sienne il n’a pas su l’éviter.",
            " pas que tu deviennes comme eux.",
            " aujourd’hui, je suis le maître.",
            " une fois que tu t’engages sur le chemin du côté obscur, à jamais il dominera ton destin."]
    ]
}

function getMarvel() {
    return [
        ["Tout le monde a envie d’un happy end, non ? Mais ça ne finit pas toujours comme ça,",
            "On peut me prendre ma maison, tout mes trucs et mes jouets,",
            "Un homme célèbre a dit un jour « nous créons nos propres démons »,",
            "Je commets constamment des erreurs monumentales,",
            "N’oubliez pas que je suis à moitié humain,",
            "Thor, fils d’Odin je t’accuse d’avoir trahi le commandement de ton roi, par ton arrogance et stupidité,",
            "Ah c’est une couronne,"],
        [" cette fois peut-être. J’espère que si tu… si tu écoutes ça, ce sera pour une célébration,",
            " y a une chose qu’on ne m’enlèvera pas,",
            " qui a dit ça ? Ça veut dire quoi ? Peu importe. Je le dis parce qu’il l’a dit, voilà tout,",
            " ce qui fait que je suis à moitié stupide,",
            " tu as livré ce paisible royaume et ces vies innocentes à l’horreur et à la désolation de la guerre,",
            " j’espère que des familles seront réunies, j’espère qu’on aura réussi et qu’on aura restauré cette planète dans une version à peu près normale,"],
        [" je suis Iron Man.",
            " et comme il était célèbre, ça fait deux types connus qui disent la même chose.",
            " et à la fin, ça se termine toujours bien.",
            " alors que vous, vous l’êtes à 100%.",
            " tu es indigne de ces royaumes, tu es indigne de ton rang, indigne de la famille que tu viens de trahir.",
            " je croyais que c’était un gros mono-sourcil."]]
}

//pick a random number
function randomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


//repeat the function to have the number of quote
function again() {
    let repeat = true;
    document.getElementById("message").innerHTML = "";
    document.getElementById("message2").innerHTML = "";
    while (repeat === true) {
        let firstPart = "";
        let secondPart = "";
        let thirdPart = "";
        let sentence = "";
        let generator = 0;
        let total = 0;
        //pick the used generator
        generator = 0;
        while (generator == 0) {
            generator = prompt("Choisir un générateur (1 pour StarWars, 2 pour Marvel)");

            if (generator === "1" || generator === "StarWars") {
                let g1 = "Vous avez choisi le générateur StarWars";
                generator = "1";
                document.getElementById("message").innerHTML += g1;
            } else if (generator === "2" || generator === "Marvel") {
                let g2 = "Vous avez choisi le générateur Marvel";
                generator = "2";
                document.getElementById("message").innerHTML += g2;
            } else {
                generator = 0;
            };
        }

        //pick the number of quotes
        total = 0;
        while (total == 0) {
            total = prompt("Choisir un nombre de citations entre 1 et 5");

            if (total >= 1 && total <= 5) {
                let t2 = "Le chiffre choisi est";
                document.getElementById("message2").innerHTML += t2 + " " + total;
            } else {
                total = 0;
            };
        }

        //create the random quote
        quote(generator, total)
        function quote(generator, total) {
            document.getElementById("txt").value = "";
            let StarWars = getStarWars();
            let Marvel = getMarvel();
            for (i = 0; i < total; i++) {
                if (generator === "1") {
                    firstPart = randomIndex(0, StarWars[0].length - 1);
                    secondPart = randomIndex(0, StarWars[1].length - 1);
                    thirdPart = randomIndex(0, StarWars[2].length - 1);
                    sentence = StarWars[0][firstPart] + StarWars[1][secondPart] + StarWars[2][thirdPart];
                } else if (generator === "2") {
                    firstPart = randomIndex(0, Marvel[0].length - 1);
                    secondPart = randomIndex(0, Marvel[1].length - 1);
                    thirdPart = randomIndex(0, Marvel[2].length - 1);
                    sentence = Marvel[0][firstPart] + Marvel[1][secondPart] + Marvel[2][thirdPart];
                }
                document.getElementById("txt").value += i + 1 + ") " + sentence + "\n";
            }
            document.getElementById("button").innerHTML = "Relancer de nouvelles citations";
        }
        repeat = false;
    }
};

