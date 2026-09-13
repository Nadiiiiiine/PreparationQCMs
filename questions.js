// questions.js
// Toutes les questions officielles. Ajoutez ou modifiez des objets dans ce tableau.
// Le flag "situational" est automatiquement détecté via la fonction ci-dessous,
// mais vous pouvez aussi le forcer manuellement (true/false).

function isSituationalQuestion(q) {
    const text = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    const keywords = [
        'peut', 'doit', 'en tant que', 'parent', 'employeur', 'victime', 'accident',
        'école', 'mariage', 'divorce', 'mairie', 'plainte', 'déclarer', 'assurance',
        'SMIC', 'travail', 'santé', 'carte Vitale', 'urgence', 'pompiers', 'SAMU',
        'élections', 'voter', 'inscrit', 'déchets', 'recyclage', 'autorité parentale',
        'refuser', 'majeure', 'naissance', 'congé', 'grève', 'syndical', 'bail',
        'prud\'hommes', 'handicap', 'discrimination', 'religion', 'laïcité', 'école publique'
    ];
    return keywords.some(kw => text.includes(kw));
}

// Liste des questions
const QUESTIONS = [
  // ===== Questions issues du premier fichier (questions-nat-CLd_0mzA.js) =====
  {
    id: "nat1",
    theme: "systeme-institutionnel",
    question: "Qu'est-ce que l'État de droit ?",
    options: [
      "Un État dirigé par un dictateur",
      "Un État où la loi s'impose à tous, y compris au gouvernement",
      "Un État sans gouvernement",
      "Un État théocratique"
    ],
    correctAnswer: 1,
    explanation: "L'État de droit est un État où la loi s'impose à tous les pouvoirs, y compris le gouvernement. C'est le fondement d'une démocratie et garantit le respect des droits fondamentaux.",
    difficulty: "moyen"
  },
  {
    id: "nat2",
    theme: "systeme-institutionnel",
    question: "Le président de la République a commis un crime. Quelle proposition est correcte ?",
    options: [
      "Il bénéficie d'une immunité absolue",
      "Il peut être jugé après son mandat comme tout autre citoyen",
      "Il ne peut pas être jugé en France",
      "Seul le Sénat peut le juger"
    ],
    correctAnswer: 1,
    explanation: "Le Président bénéficie d'une immunité pendant son mandat, mais peut être jugé après son départ du pouvoir pour les actes commis pendant sa présidence.",
    difficulty: "moyen"
  },
  {
    id: "nat3",
    theme: "systeme-institutionnel",
    question: "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    options: [
      "Pour accélérer les décisions",
      "Pour éviter la concentration du pouvoir et garantir l'équilibre des pouvoirs",
      "Pour réduire le nombre de ministres",
      "Pour augmenter le rôle du Parlement"
    ],
    correctAnswer: 1,
    explanation: "La séparation des pouvoirs prévient la concentration de l'autorité et garantit le respect des droits et libertés des citoyens.",
    difficulty: "moyen"
  },
  {
    id: "nat4",
    theme: "systeme-institutionnel",
    question: "Qu'est-ce que l'Hôtel de Matignon ?",
    options: [
      "Un musée à Paris",
      "La résidence officielle du Premier ministre",
      "Un ministère",
      "Un palais royal"
    ],
    correctAnswer: 1,
    explanation: "L'Hôtel de Matignon, situé à Paris, est la résidence et le siège officiel du Premier ministre français.",
    difficulty: "moyen"
  },
  {
    id: "nat5",
    theme: "histoire-geographie",
    question: "Quel était le surnom de Louis XIV ?",
    options: ["Le Sage", "Le Grand", "Le Roi Soleil", "Le Bien-Aimé"],
    correctAnswer: 2,
    explanation: "Louis XIV, roi de France de 1643 à 1715, était surnommé « Le Roi Soleil » en raison de sa splendeur et de sa puissance.",
    difficulty: "moyen"
  },
  {
    id: "nat6",
    theme: "histoire-geographie",
    question: "De quand date l'appel à la résistance du général de Gaulle ?",
    options: ["10 mai 1940", "18 juin 1940", "14 juillet 1940", "1er septembre 1939"],
    correctAnswer: 1,
    explanation: "Le 18 juin 1940, depuis Londres, le Général de Gaulle a lancé son appel à la résistance face à l'occupation nazie.",
    difficulty: "moyen"
  },
  {
    id: "nat7",
    theme: "histoire-geographie",
    question: "Quel roi de France a été exécuté pendant la Révolution française ?",
    options: ["Louis XIII", "Louis XIV", "Louis XVI", "Louis XVII"],
    correctAnswer: 2,
    explanation: "Louis XVI, roi de France, a été arrêté puis exécuté par guillotine le 21 janvier 1793 pendant la Révolution française.",
    difficulty: "moyen"
  },
  {
    id: "nat8",
    theme: "droits-devoirs",
    question: "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?",
    options: [
      '"Liberté, égalité, fraternité"',
      '"Les hommes naissent libres et égaux en droits"',
      '"Vive la liberté !"',
      '"La liberté guide le peuple"'
    ],
    correctAnswer: 1,
    explanation: `L'article 1er de la Déclaration stipule : "Les hommes naissent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune."`,
    difficulty: "moyen"
  },
  {
    id: "nat9",
    theme: "droits-devoirs",
    question: "Que signifie PMA ?",
    options: [
      "Protection Médicale de l'Armée",
      "Procréation Médicalement Assistée (techniques médicales pour aider la reproduction)",
      "Police Municipale d'Application",
      "Programme Monétaire Alternatif"
    ],
    correctAnswer: 1,
    explanation: "La PMA signifie Procréation Médicalement Assistée. Il s'agit d'un ensemble de techniques médicales visant à aider les couples ou les femmes seules confrontés à des difficultés de procréation, comme l'insémination artificielle ou la fécondation in vitro.",
    difficulty: "moyen"
  },
  {
    id: "nat10",
    theme: "principes-valeurs",
    question: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    options: [
      "L'État doit privilégier une religion",
      "L'État ne doit favoriser aucune religion et rester impartial",
      "L'État doit interdire les religions",
      "L'État doit soutenir le catholicisme"
    ],
    correctAnswer: 1,
    explanation: "La neutralité de l'État signifie qu'il ne favorise aucune conviction religieuse ou philosophique. Il respecte et protège la liberté de conscience.",
    difficulty: "moyen"
  },
  {
    id: "nat11",
    theme: "principes-valeurs",
    question: "À quoi sert un titre de séjour ?",
    options: [
      "À voyager en vacances",
      "À justifier la résidence régulière en France",
      "À obtenir un emploi",
      "À demander la nationalité automatiquement"
    ],
    correctAnswer: 1,
    explanation: "Un titre de séjour est un document officiel qui justifie la présence et la résidence régulière d'une personne étrangère en France.",
    difficulty: "moyen"
  },
  {
    id: "nat12",
    theme: "systeme-institutionnel",
    question: "La loi est l'expression de :",
    options: [
      "La volonté du Président",
      "La volonté générale du peuple",
      "Les traditions religieuses",
      "Les grandes entreprises"
    ],
    correctAnswer: 1,
    explanation: "La loi est l'expression de la volonté générale du peuple, votée par ses représentants au Parlement.",
    difficulty: "moyen"
  },
  {
    id: "nat13",
    theme: "droits-devoirs",
    question: "Un salarié peut-il être licencié sans raison ?",
    options: [
      "Oui, si l'employeur décide de rompre le contrat seul",
      "Non, il faut obligatoirement un motif réel et sérieux",
      "Seulement si le salarié est en période d'essai initiale",
      "Seulement pour les contrats signés dans le secteur privé"
    ],
    correctAnswer: 1,
    explanation: "Tout licenciement doit être justifié par un motif réel et sérieux (sauf rupture en période d'essai). C'est une protection du droit du travail.",
    difficulty: "moyen"
  },
  {
    id: "nat14",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle du Défenseur des droits ?",
    options: [
      "Juger les criminels",
      "Préparer les lois",
      "Protéger les droits et libertés des citoyens",
      "Diriger le Gouvernement"
    ],
    correctAnswer: 2,
    explanation: "Le Défenseur des droits est une autorité indépendante qui protège les droits et libertés des citoyens face aux administrations publiques.",
    difficulty: "moyen"
  },
  {
    id: "nat15",
    theme: "histoire-geographie",
    question: "En quelle année la Communauté Économique Européenne (CEE) a-t-elle été fondée ?",
    options: ["1945", "1951", "1957", "1960"],
    correctAnswer: 2,
    explanation: "La CEE a été fondée en 1957 avec le Traité de Rome, établissant le marché commun européen.",
    difficulty: "moyen"
  },
  {
    id: "nat16",
    theme: "histoire-geographie",
    question: "Quel est le patrimoine culturel immatériel de la France reconnu mondialement ?",
    options: [
      "Uniquement l'architecture",
      "Uniquement les monuments",
      "La gastronomie, la culture, l'art de vivre à la française",
      "Uniquement la littérature"
    ],
    correctAnswer: 2,
    explanation: "La France est réputée pour son patrimoine culturel immatériel incluant sa gastronomie raffinée, ses arts et sa culture d'excellence, reconnus mondialement comme éléments majeurs de l'art de vivre à la française (ex. repas gastronomique des Français inscrit à l'UNESCO).",
    difficulty: "moyen"
  },
  {
    id: "nat17",
    theme: "droits-devoirs",
    question: "Concernant le droit de se marier, quelle proposition est correcte ?",
    options: [
      "Seuls les hétérosexuels peuvent se marier",
      "Le mariage doit être célébré à l'église",
      "Toute personne majeure peut se marier devant l'officier d'état civil",
      "Le mariage nécessite l'approbation du préfet"
    ],
    correctAnswer: 2,
    explanation: "En France, toute personne majeure peut se marier devant l'officier d'état civil de la mairie. C'est un acte administratif et civique.",
    difficulty: "moyen"
  },
  {
    id: "nat18",
    theme: "droits-devoirs",
    question: "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    options: [
      "Au nom de la tradition",
      "Au nom de l'ordre public et de l'intérêt général",
      "Au nom de la religion",
      "Au nom du profit économique"
    ],
    correctAnswer: 1,
    explanation: "L'État peut restreindre certaines libertés au nom de l'ordre public et de l'intérêt général, pour protéger les droits d'autrui.",
    difficulty: "moyen"
  },
  {
    id: "nat19",
    theme: "droits-devoirs",
    question: "Que doit faire une victime de violences ?",
    options: [
      "Garder le silence",
      "Déposer plainte auprès de la police ou gendarmerie",
      "Essayer de se réconcilier seule",
      "Attendre que d'autres témoins signalent"
    ],
    correctAnswer: 1,
    explanation: "Une victime de violences doit déposer plainte auprès de la police ou de la gendarmerie pour signaler le crime et obtenir protection.",
    difficulty: "moyen"
  },
  {
    id: "nat20",
    theme: "systeme-institutionnel",
    question: "Qui nomme le Premier ministre ?",
    options: [
      "Le Parlement",
      "Les citoyens français",
      "Le Président de la République",
      "Le Conseil Constitutionnel"
    ],
    correctAnswer: 2,
    explanation: "Le Président de la République nomme le Premier ministre, qui dirige le Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "nat21",
    theme: "systeme-institutionnel",
    question: "Le Parlement est composé :",
    options: [
      "D'une seule chambre",
      "De l'Assemblée nationale et du Sénat",
      "Du Gouvernement et du Président",
      "Des ministres"
    ],
    correctAnswer: 1,
    explanation: "Le Parlement français est composé de deux chambres : l'Assemblée nationale et le Sénat.",
    difficulty: "moyen"
  },
  {
    id: "nat22",
    theme: "systeme-institutionnel",
    question: "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :",
    options: [
      "De voter les lois",
      "De juger les criminels",
      "D'appliquer et d'exécuter les lois",
      "De contrôler les finances publiques"
    ],
    correctAnswer: 2,
    explanation: "Le pouvoir exécutif est la capacité d'appliquer et d'exécuter les lois, exercée par le Président et le Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "nat23",
    theme: "systeme-institutionnel",
    question: "Les dirigeants sont élus par les citoyens dans :",
    options: [
      "Un système dictatorial",
      "Une démocratie élective",
      "Une monarchie absolue",
      "Un système totalitaire"
    ],
    correctAnswer: 1,
    explanation: "En France, un système démocratique permet aux citoyens d'élire leurs dirigeants au suffrage universel.",
    difficulty: "moyen"
  },
  {
    id: "nat24",
    theme: "systeme-institutionnel",
    question: "A-t-on le droit de ne pas respecter une loi ?",
    options: [
      "Oui, si on ne l'aime pas",
      "Non, tout le monde doit respecter la loi",
      "Oui, si on a une bonne raison",
      "Non, seulement si elle est injuste"
    ],
    correctAnswer: 1,
    explanation: "Non, en France, tout le monde doit respecter la loi, même si on ne l'aime pas. La loi s'impose à tous.",
    difficulty: "moyen"
  },
  {
    id: "nat25",
    theme: "systeme-institutionnel",
    question: "Qui doit respecter la loi ?",
    options: [
      "Seulement les citoyens",
      "Seulement le Gouvernement",
      "Tout le monde : citoyens, fonctionnaires, et gouvernants",
      "Seulement les étrangers"
    ],
    correctAnswer: 2,
    explanation: "Tout le monde doit respecter la loi : les citoyens, les résidents, les fonctionnaires, et les gouvernants.",
    difficulty: "moyen"
  },
  {
    id: "nat26",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle de l'autorité judiciaire ?",
    options: [
      "Voter les lois",
      "Gouverner le pays",
      "Juger les litiges et les infractions",
      "Collecter les impôts"
    ],
    correctAnswer: 2,
    explanation: "L'autorité judiciaire juge les litiges civils et les infractions criminelles, rendant la justice.",
    difficulty: "moyen"
  },
  {
    id: "nat27",
    theme: "systeme-institutionnel",
    question: "Quel pouvoir détient un juge ? Le pouvoir :",
    options: ["Législatif", "Exécutif", "Judiciaire", "Administratif"],
    correctAnswer: 2,
    explanation: "Un juge détient le pouvoir judiciaire, c'est-à-dire le pouvoir de rendre la justice et de juger.",
    difficulty: "moyen"
  },
  {
    id: "nat28",
    theme: "systeme-institutionnel",
    question: "L'autorité judiciaire est exercée par :",
    options: [
      "Le Président seul",
      "Le Gouvernement",
      "Les juges et les tribunaux",
      "Le Parlement"
    ],
    correctAnswer: 2,
    explanation: "L'autorité judiciaire est exercée par les juges et les tribunaux, qui jugent les litiges et les infractions.",
    difficulty: "moyen"
  },
  {
    id: "nat29",
    theme: "systeme-institutionnel",
    question: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    options: [
      "Rien, il est au-dessus des lois",
      "Il peut être poursuivi en justice",
      "Le Président le remplace",
      "Il perd son mandat"
    ],
    correctAnswer: 1,
    explanation: "Un ministre qui ne respecte pas la loi peut être poursuivi en justice comme tout citoyen.",
    difficulty: "moyen"
  },
  {
    id: "nat30",
    theme: "systeme-institutionnel",
    question: "Qui est élu lors des élections législatives ?",
    options: [
      "Le Président de la République",
      "Les sénateurs",
      "Les députés",
      "Les juges"
    ],
    correctAnswer: 2,
    explanation: "Les élections législatives élisent les députés qui composent l'Assemblée nationale.",
    difficulty: "moyen"
  },
  {
    id: "nat31",
    theme: "systeme-institutionnel",
    question: "Combien de députés composent l'Assemblée nationale ?",
    options: ["300", "400", "577", "700"],
    correctAnswer: 2,
    explanation: "L'Assemblée nationale est composée de 577 députés élus au suffrage universel direct.",
    difficulty: "moyen"
  },
  {
    id: "nat32",
    theme: "systeme-institutionnel",
    question: "Quand sont élus les sénateurs ?",
    options: ["Tous les 5 ans", "Tous les 6 ans, par tiers", "Tous les 4 ans", "Tous les 9 ans"],
    correctAnswer: 1,
    explanation: "Les sénateurs sont élus pour 6 ans, avec un renouvellement par tiers tous les 3 ans.",
    difficulty: "moyen"
  },
  {
    id: "nat33",
    theme: "systeme-institutionnel",
    question: "Qui est élu lors des élections municipales ?",
    options: [
      "Le Président",
      "Les députés",
      "Les conseillers municipaux",
      "Les sénateurs"
    ],
    correctAnswer: 2,
    explanation: "Les électeurs choisissent directement les conseillers municipaux. Le conseil élit ensuite le maire et les adjoints lors de sa première réunion.",
    difficulty: "moyen"
  },
  {
    id: "nat34",
    theme: "systeme-institutionnel",
    question: "Qui est élu lors des élections présidentielles ?",
    options: [
      "Le Gouvernement",
      "Le Premier ministre",
      "Le Président de la République",
      "Les ministres"
    ],
    correctAnswer: 2,
    explanation: "Les élections présidentielles élisent le Président de la République au suffrage universel direct.",
    difficulty: "moyen"
  },
  {
    id: "nat35",
    theme: "systeme-institutionnel",
    question: "À partir de quel âge a-t-on le droit de voter ?",
    options: ["16 ans", "18 ans", "21 ans", "25 ans"],
    correctAnswer: 1,
    explanation: "En France, l'âge de voter est 18 ans pour tous les scrutins électoraux.",
    difficulty: "moyen"
  },
  {
    id: "nat36",
    theme: "systeme-institutionnel",
    question: "Pour combien de temps est élu le président de la République française ?",
    options: ["3 ans", "5 ans", "7 ans", "10 ans"],
    correctAnswer: 1,
    explanation: "Le Président de la République est élu pour 5 ans (depuis la révision constitutionnelle de 2000).",
    difficulty: "moyen"
  },
  {
    id: "nat37",
    theme: "systeme-institutionnel",
    question: "Pour combien de temps sont élus les députés ?",
    options: ["3 ans", "4 ans", "5 ans", "6 ans"],
    correctAnswer: 2,
    explanation: "Les députés sont élus pour 5 ans à l'Assemblée nationale.",
    difficulty: "moyen"
  },
  {
    id: "nat38",
    theme: "systeme-institutionnel",
    question: "Pour combien de temps sont élus les sénateurs ?",
    options: ["3 ans", "5 ans", "6 ans", "9 ans"],
    correctAnswer: 2,
    explanation: "Les sénateurs sont élus pour 6 ans, avec renouvellement par tiers tous les 3 ans.",
    difficulty: "moyen"
  },
  {
    id: "nat39",
    theme: "systeme-institutionnel",
    question: "Qui possède le pouvoir exécutif ?",
    options: [
      "Le Parlement",
      "Le Président et le Gouvernement",
      "Les juges",
      "Les citoyens"
    ],
    correctAnswer: 1,
    explanation: "Le pouvoir exécutif est exercé par le Président de la République et le Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "nat40",
    theme: "systeme-institutionnel",
    question: "Quelle condition est nécessaire pour voter aux élections ?",
    options: [
      "Être riche",
      "Être citoyen français, majeur et inscrit sur les listes électorales",
      "Avoir un diplôme",
      "Être marié"
    ],
    correctAnswer: 1,
    explanation: "Pour voter, il faut être citoyen français, âgé d'au moins 18 ans et inscrit sur les listes électorales.",
    difficulty: "moyen"
  },
  {
    id: "nat41",
    theme: "systeme-institutionnel",
    question: "Qui peut voter aux élections en France ?",
    options: [
      "Seulement les hommes",
      "Seulement les propriétaires",
      "Tout citoyen français majeur inscrit sur les listes électorales",
      "Seulement les salariés"
    ],
    correctAnswer: 2,
    explanation: "Tout citoyen français âgé d'au moins 18 ans et inscrit sur les listes électorales peut voter.",
    difficulty: "moyen"
  },
  {
    id: "nat42",
    theme: "systeme-institutionnel",
    question: "Que signifie « suffrage universel » ?",
    options: [
      "Le droit de vote d'une minorité",
      "Le droit de vote de tous les citoyens majeurs",
      "Le droit de voter plusieurs fois",
      "Le droit des riches à voter"
    ],
    correctAnswer: 1,
    explanation: "Le suffrage universel signifie le droit de vote de tous les citoyens majeurs, sans discrimination.",
    difficulty: "moyen"
  },
  {
    id: "nat43",
    theme: "systeme-institutionnel",
    question: "Concernant les partis politiques, quelle proposition est correcte ?",
    options: [
      "Il n'y a qu'un seul parti politique en France",
      "Les partis politiques sont interdits",
      "Plusieurs partis politiques peuvent coexister librement",
      "Les partis politiques sont contrôlés par l'État"
    ],
    correctAnswer: 2,
    explanation: "En France, plusieurs partis politiques peuvent coexister librement et concourir aux élections.",
    difficulty: "moyen"
  },
  {
    id: "nat44",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle des députés ?",
    options: [
      "Juger les criminels",
      "Voter les lois et représenter leurs électeurs",
      "Diriger les communes",
      "Nommer le Président"
    ],
    correctAnswer: 1,
    explanation: "Les députés votent les lois à l'Assemblée nationale et représentent leurs électeurs.",
    difficulty: "moyen"
  },
  {
    id: "nat45",
    theme: "systeme-institutionnel",
    question: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    options: [
      "Politique, économique, social",
      "Législatif, exécutif, judiciaire",
      "National, régional, local",
      "Public, privé, militaire"
    ],
    correctAnswer: 1,
    explanation: "La séparation des pouvoirs repose sur trois piliers : le pouvoir législatif (Parlement), exécutif (Président et Gouvernement) et judiciaire (Juges).",
    difficulty: "moyen"
  },
  {
    id: "nat46",
    theme: "systeme-institutionnel",
    question: "Qui possède le pouvoir législatif ?",
    options: [
      "Le Président",
      "Le Gouvernement",
      "Le Parlement",
      "Les citoyens"
    ],
    correctAnswer: 2,
    explanation: "Le pouvoir législatif est exercé par le Parlement (Assemblée nationale et Sénat), qui vote les lois.",
    difficulty: "moyen"
  },
  {
    id: "nat47",
    theme: "systeme-institutionnel",
    question: "Qui sanctionne l'auteur d'un vol ?",
    options: [
      "La police",
      "Le Gouvernement",
      "Le juge ou le tribunal",
      "Le maire"
    ],
    correctAnswer: 2,
    explanation: "Un juge ou un tribunal juge et sanctionne l'auteur d'un vol après un procès régulier.",
    difficulty: "moyen"
  },
  {
    id: "nat48",
    theme: "systeme-institutionnel",
    question: "Qui élit les députés ?",
    options: [
      "Le Président",
      "Le Gouvernement",
      "Les citoyens français majeurs",
      "Le Sénat"
    ],
    correctAnswer: 2,
    explanation: "Les députés sont élus par les citoyens français majeurs au suffrage universel direct.",
    difficulty: "moyen"
  },
  {
    id: "nat49",
    theme: "systeme-institutionnel",
    question: "Qui vote les lois ?",
    options: [
      "Le Président seul",
      "Le Gouvernement",
      "Le Parlement",
      "Les juges"
    ],
    correctAnswer: 2,
    explanation: "Le Parlement (Assemblée nationale et Sénat) vote les lois.",
    difficulty: "moyen"
  },
  {
    id: "nat50",
    theme: "systeme-institutionnel",
    question: "Qui réside au palais de l'Élysée ?",
    options: [
      "Le Premier ministre",
      "Le Président de la République",
      "Le chef du Sénat",
      "Le leader de l'opposition"
    ],
    correctAnswer: 1,
    explanation: "Le Président de la République réside et travaille au Palais de l'Élysée, situé à Paris.",
    difficulty: "moyen"
  },
  {
    id: "nat51",
    theme: "systeme-institutionnel",
    question: "Combien y a-t-il de départements en France ?",
    options: ["80", "90", "101", "120"],
    correctAnswer: 2,
    explanation: "La France compte 101 départements au total : 96 en métropole (y compris la Corse divisée en 2 départements) et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion et Mayotte).",
    difficulty: "moyen"
  },
  {
    id: "nat52",
    theme: "systeme-institutionnel",
    question: "Qui représente l'État dans un département ?",
    options: ["Le maire", "Le préfet", "Le gouverneur", "Le sénateur"],
    correctAnswer: 1,
    explanation: "Le préfet représente l'État dans un département et assure l'application des lois.",
    difficulty: "moyen"
  },
  {
    id: "nat53",
    theme: "systeme-institutionnel",
    question: "Qui dirige la commune ?",
    options: ["Le préfet", "Le gouverneur", "Le maire", "Le sénateur"],
    correctAnswer: 2,
    explanation: "Le maire, élu par le conseil municipal, dirige la commune.",
    difficulty: "moyen"
  },
  {
    id: "nat54",
    theme: "systeme-institutionnel",
    question: "Est-ce que le président de la République a tous les pouvoirs ?",
    options: [
      "Oui, il est absolument souverain",
      "Non, le pouvoir est séparé entre le Président, le Gouvernement et le Parlement",
      "Oui, il gouverne seul",
      "Non, seul le Gouvernement a du pouvoir"
    ],
    correctAnswer: 1,
    explanation: "Non, le pouvoir est séparé entre le Président, le Gouvernement et le Parlement. Aucun n'a tous les pouvoirs.",
    difficulty: "moyen"
  },
  {
    id: "nat55",
    theme: "systeme-institutionnel",
    question: "Qui est le préfet ?",
    options: [
      "Un représentant élu",
      "Un haut fonctionnaire nommé qui représente l'État",
      "Un ministre",
      "Un juge"
    ],
    correctAnswer: 1,
    explanation: "Le préfet est un haut fonctionnaire nommé par le Gouvernement qui représente l'État dans un département.",
    difficulty: "moyen"
  },
  {
    id: "nat56",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle du Parlement ?",
    options: [
      "Gouverner le pays",
      "Voter les lois et contrôler le Gouvernement",
      "Juger les crimes",
      "Nommer le Président"
    ],
    correctAnswer: 1,
    explanation: "Le Parlement vote les lois et exerce un contrôle démocratique sur le Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "nat57",
    theme: "systeme-institutionnel",
    question: "Quel est le régime politique de la France aujourd'hui ?",
    options: [
      "Une monarchie",
      "Un régime semi-présidentiel",
      "Une dictature",
      "Une théocratie"
    ],
    correctAnswer: 1,
    explanation: "La France est un régime semi-présidentiel avec un Président (pouvoir exécutif) et un Parlement (pouvoir législatif).",
    difficulty: "moyen"
  },
  {
    id: "nat58",
    theme: "systeme-institutionnel",
    question: "Combien d'États font partie de l'Union européenne au 1er janvier 2026 ?",
    options: ["24", "27", "28", "30"],
    correctAnswer: 1,
    explanation: "L'Union européenne compte 27 États membres. Ce nombre est stable depuis le départ du Royaume-Uni (Brexit) en 2020.",
    difficulty: "moyen"
  },
  {
    id: "nat59",
    theme: "systeme-institutionnel",
    question: "Quel État n'est pas membre de l'Union européenne ?",
    options: ["La France", "L'Allemagne", "La Norvège", "L'Italie"],
    correctAnswer: 2,
    explanation: "La Norvège n'est pas membre de l'Union européenne, bien qu'elle soit très intégrée économiquement.",
    difficulty: "moyen"
  },
  {
    id: "nat60",
    theme: "systeme-institutionnel",
    question: "Quelle condition est nécessaire pour voter aux élections européennes ?",
    options: [
      "Être riche",
      "Être citoyen de l'UE, majeur et inscrit sur les listes électorales",
      "Avoir un diplôme",
      "Être propriétaire"
    ],
    correctAnswer: 1,
    explanation: "Pour voter aux élections européennes, il faut être citoyen d'un État membre de l'UE, majeur et inscrit sur les listes électorales.",
    difficulty: "moyen"
  },
  {
    id: "nat61",
    theme: "systeme-institutionnel",
    question: "À quelle fréquence les élections européennes sont-elles organisées ?",
    options: ["Tous les 3 ans", "Tous les 5 ans", "Tous les 7 ans", "Tous les 10 ans"],
    correctAnswer: 1,
    explanation: "Les élections européennes pour élire le Parlement européen se déroulent tous les 5 ans.",
    difficulty: "moyen"
  },
  {
    id: "nat62",
    theme: "systeme-institutionnel",
    question: "Quel pays est un pays fondateur de l'Union européenne ?",
    options: ["La Suisse", "La France", "La Norvège", "La Suède"],
    correctAnswer: 1,
    explanation: "La France est un pays fondateur de ce qui allait devenir l'Union européenne avec le Traité de Rome de 1957.",
    difficulty: "moyen"
  },
  {
    id: "nat63",
    theme: "systeme-institutionnel",
    question: "Quelle est la monnaie utilisée en France ?",
    options: ["Le franc", "La livre", "L'euro", "Le dollar"],
    correctAnswer: 2,
    explanation: "L'euro est la monnaie officielle de la France depuis 2002.",
    difficulty: "moyen"
  },
  {
    id: "nat64",
    theme: "systeme-institutionnel",
    question: "Qui élit les députés européens ?",
    options: [
      "Le Gouvernement de l'UE",
      "Les citoyens de l'UE",
      "Le Conseil européen",
      "La Commission européenne"
    ],
    correctAnswer: 1,
    explanation: "Les citoyens des États membres de l'UE élisent les députés au Parlement européen au suffrage universel direct.",
    difficulty: "moyen"
  },
  {
    id: "nat65",
    theme: "systeme-institutionnel",
    question: "Quand célèbre-t-on la journée de l'Europe ?",
    options: ["1er janvier", "14 juillet", "9 mai", "25 décembre"],
    correctAnswer: 2,
    explanation: "La journée de l'Europe est célébrée le 9 mai, commémorant la Déclaration Schuman de 1950.",
    difficulty: "moyen"
  },
  {
    id: "nat66",
    theme: "droits-devoirs",
    question: "Comment s'appelle la Constitution actuelle de la France ?",
    options: [
      "Constitution de 1789",
      "Constitution de 1871",
      "Constitution de la Ve République",
      "Constitution napoléonienne"
    ],
    correctAnswer: 2,
    explanation: "La Constitution actuelle est celle de la Ve République, adoptée le 4 octobre 1958.",
    difficulty: "moyen"
  },
  {
    id: "nat67",
    theme: "droits-devoirs",
    question: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    options: [
      "La Déclaration des droits de l'homme",
      "La Constitution",
      "Le Préambule de la Constitution",
      "Le Code civil"
    ],
    correctAnswer: 1,
    explanation: "La Constitution énonce les principes fondamentaux, tandis que la Déclaration des droits de l'homme et du citoyen (1789) énonce les droits fondamentaux.",
    difficulty: "moyen"
  },
  {
    id: "nat68",
    theme: "droits-devoirs",
    question: "Concernant les droits individuels, quelle proposition est correcte ?",
    options: [
      "Chacun a tous les droits",
      "Les droits individuels sont absolus et sans limites",
      "Les droits individuels existent mais peuvent être limités pour protéger l'ordre public",
      "Les droits individuels n'existent pas en France"
    ],
    correctAnswer: 2,
    explanation: "Les droits individuels existent mais peuvent être limités quand c'est nécessaire pour protéger l'ordre public ou les droits d'autrui.",
    difficulty: "moyen"
  },
  {
    id: "nat69",
    theme: "droits-devoirs",
    question: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    options: ["1789", "1799", "1848", "1945"],
    correctAnswer: 0,
    explanation: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789 pendant la Révolution française.",
    difficulty: "moyen"
  },
  {
    id: "nat70",
    theme: "droits-devoirs",
    question: "Lequel de ces droits est un droit fondamental ?",
    options: [
      "Le droit de devenir riche",
      "Le droit d'insulter les autres",
      "Le droit à la vie, la liberté et la sécurité",
      "Le droit de ne pas payer ses impôts"
    ],
    correctAnswer: 2,
    explanation: "Le droit à la vie, la liberté et la sécurité sont des droits fondamentaux reconnus universellement.",
    difficulty: "moyen"
  },
  {
    id: "nat71",
    theme: "droits-devoirs",
    question: "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    options: [
      "Le Coran",
      "La Constitution et la Déclaration des droits de l'homme",
      "La Bible",
      "Un simple décret"
    ],
    correctAnswer: 1,
    explanation: "La Constitution et la Déclaration des droits de l'homme et du citoyen de 1789 garantissent les droits et libertés en France.",
    difficulty: "moyen"
  },
  {
    id: "nat72",
    theme: "droits-devoirs",
    question: "Qu'est-ce que la liberté d'expression ?",
    options: [
      "Le droit de mentir",
      "Le droit de diffamer quelqu'un",
      "Le droit de pouvoir s'exprimer librement sans censure",
      "Le droit d'être violent verbalement"
    ],
    correctAnswer: 2,
    explanation: "La liberté d'expression est le droit fondamental de pouvoir s'exprimer librement, dans le respect de la loi.",
    difficulty: "moyen"
  },
  {
    id: "nat73",
    theme: "droits-devoirs",
    question: "Quel droit permet à une personne de se défendre devant la justice ?",
    options: [
      "Le droit au silence",
      "Le droit d'avoir un avocat",
      "Le droit à un procès équitable avec un avocat",
      "Le droit de ne pas parler"
    ],
    correctAnswer: 2,
    explanation: "Le droit à un procès équitable, incluant l'accès à un avocat, permet à une personne de se défendre en justice.",
    difficulty: "moyen"
  },
  {
    id: "nat74",
    theme: "droits-devoirs",
    question: "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?",
    options: [
      "La Charte de 1830",
      "La Déclaration des droits de l'homme et du citoyen de 1789",
      "Le Traité de Versailles",
      "Le Code Napoléon"
    ],
    correctAnswer: 1,
    explanation: "La Déclaration des droits de l'homme et du citoyen de 1789 est le texte fondateur des droits et devoirs en France.",
    difficulty: "moyen"
  },
  {
    id: "nat75",
    theme: "droits-devoirs",
    question: "Quel texte a été adopté pendant la Révolution française ?",
    options: [
      "La Constitution de 1958",
      "La Déclaration des droits de l'homme et du citoyen de 1789",
      "Le Traité de Rome",
      "La loi de 1901"
    ],
    correctAnswer: 1,
    explanation: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789 pendant la Révolution française.",
    difficulty: "moyen"
  },
  {
    id: "nat76",
    theme: "droits-devoirs",
    question: "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    options: [
      "La liberté d'association",
      "La liberté d'expression",
      "La liberté de conscience",
      "La liberté de circulation"
    ],
    correctAnswer: 2,
    explanation: "La liberté de conscience garantit à chacun le droit de ne pas avoir de religion ou de changer de religion.",
    difficulty: "moyen"
  },
  {
    id: "nat77",
    theme: "droits-devoirs",
    question: "Une femme peut avorter :",
    options: [
      "Non, c'est toujours interdit en France",
      "Oui, c'est un droit dans la limite légale",
      "Seulement avec l'autorisation du mari",
      "Seulement avant 2 semaines de grossesse"
    ],
    correctAnswer: 1,
    explanation: "En France, l'avortement est légal. Le délai légal est actuellement de 14 semaines de grossesse (ou 84 jours).",
    difficulty: "moyen"
  },
  {
    id: "nat78",
    theme: "droits-devoirs",
    question: "Est-il toujours possible de divorcer ?",
    options: [
      "Non, le divorce est interdit",
      "Oui, le divorce est possible",
      "Seulement avec l'accord du mari",
      "Seulement pour raison de tromperie"
    ],
    correctAnswer: 1,
    explanation: "Oui, le divorce est possible en France. Il existe plusieurs types de divorces (consentement mutuel, rupture de vie commune, etc.).",
    difficulty: "moyen"
  },
  {
    id: "nat79",
    theme: "droits-devoirs",
    question: "La peine de mort est :",
    options: [
      "Toujours appliquée en France",
      "Autorisée pour les crimes graves",
      "Abolie depuis 1981 en France",
      "Applicable seulement aux étrangers"
    ],
    correctAnswer: 2,
    explanation: "La peine de mort a été abolie en France le 18 septembre 1981 sous le Président François Mitterrand.",
    difficulty: "moyen"
  },
  {
    id: "nat80",
    theme: "histoire-geographie",
    question: "En quelle année a débuté la Révolution française ?",
    options: ["1788", "1789", "1790", "1791"],
    correctAnswer: 1,
    explanation: "La Révolution française a débuté en 1789 avec la prise de la Bastille le 14 juillet.",
    difficulty: "moyen"
  },
  {
    id: "nat81",
    theme: "histoire-geographie",
    question: "Qui était Napoléon Ier ?",
    options: [
      "Un roi de France",
      "Un général français qui devint Empereur",
      "Un président de la République",
      "Un ministre"
    ],
    correctAnswer: 1,
    explanation: "Napoléon Ier (1769-1821) était un général français qui devint Empereur des Français de 1804 à 1815.",
    difficulty: "moyen"
  },
  {
    id: "nat82",
    theme: "histoire-geographie",
    question: "Lequel de ces personnages historiques est français ?",
    options: ["Albert Einstein", "Jules Verne", "Isaac Newton", "Wolfgang Mozart"],
    correctAnswer: 1,
    explanation: "Jules Verne (1828-1905) était un écrivain et romancier français de science-fiction.",
    difficulty: "moyen"
  },
  {
    id: "nat83",
    theme: "histoire-geographie",
    question: "Dans quelle République est-on aujourd'hui ?",
    options: [
      "La IIe République",
      "La IIIe République",
      "La IVe République",
      "La Ve République"
    ],
    correctAnswer: 3,
    explanation: "La France est actuellement dans la Ve République, établie en 1958 par le Général de Gaulle.",
    difficulty: "moyen"
  },
  {
    id: "nat84",
    theme: "histoire-geographie",
    question: "Qu'est-ce que la Shoah ?",
    options: [
      "Une période historique",
      "L'Holocauste : le génocide des juifs perpétré par les nazis pendant la Seconde Guerre mondiale",
      "Une conférence politique",
      "Une bataille militaire"
    ],
    correctAnswer: 1,
    explanation: "La Shoah est l'Holocauste : le génocide systématique de six millions de juifs par les nazis (1941-1945).",
    difficulty: "moyen"
  },
  {
    id: "nat85",
    theme: "histoire-geographie",
    question: "Quel pays ou région du monde a été colonisé par la France ?",
    options: [
      "L'Afrique du Nord (Algérie, Maroc, Tunisie)",
      "L'Indochine (Vietnam, Cambodge, Laos)",
      "L'Afrique occidentale française",
      "Tous les ci-dessus"
    ],
    correctAnswer: 3,
    explanation: "La France a colonisé plusieurs régions : l'Afrique du Nord (Algérie, Maroc, Tunisie), l'Indochine, l'Afrique occidentale et équatoriale.",
    difficulty: "moyen"
  },
  {
    id: "nat86",
    theme: "histoire-geographie",
    question: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    options: ["Napoléon", "Jules Ferry", "Voltaire", "Louis XIV"],
    correctAnswer: 1,
    explanation: "Jules Ferry (1832-1893) a promulgué les lois (1881-1882) rendant l'école gratuite, laïque et obligatoire en France.",
    difficulty: "moyen"
  },
  {
    id: "nat87",
    theme: "histoire-geographie",
    question: "Quand a eu lieu la Seconde Guerre mondiale ?",
    options: ["1914-1918", "1939-1945", "1945-1950", "1950-1960"],
    correctAnswer: 1,
    explanation: "La Seconde Guerre mondiale s'est déroulée de 1939 à 1945. La France a été occupée de 1940 à 1944.",
    difficulty: "moyen"
  },
  {
    id: "nat88",
    theme: "histoire-geographie",
    question: "Quand a eu lieu la Première Guerre mondiale ?",
    options: ["1900-1910", "1914-1918", "1920-1925", "1930-1940"],
    correctAnswer: 1,
    explanation: "La Première Guerre mondiale s'est déroulée de 1914 à 1918.",
    difficulty: "moyen"
  },
  {
    id: "nat89",
    theme: "histoire-geographie",
    question: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    options: ["1945", "1951", "1957", "1960"],
    correctAnswer: 2,
    explanation: "La Communauté Économique Européenne (CEE) a été fondée en 1957 avec le Traité de Rome.",
    difficulty: "moyen"
  },
  {
    id: "nat90",
    theme: "histoire-geographie",
    question: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    options: [
      "La fête de la moisson",
      "La fin de la Première Guerre mondiale (1918)",
      "L'anniversaire de Napoléon",
      "La fête de la Bastille"
    ],
    correctAnswer: 1,
    explanation: "Le 11 novembre 1918 marque l'armistice et la fin de la Première Guerre mondiale.",
    difficulty: "moyen"
  },
  {
    id: "nat91",
    theme: "histoire-geographie",
    question: "Qui a été le premier Président élu sous la Ve République ?",
    options: [
      "Georges Pompidou",
      "Le Général de Gaulle",
      "Valéry Giscard d'Estaing",
      "François Mitterrand"
    ],
    correctAnswer: 1,
    explanation: "Le Général de Gaulle a été le premier Président de la Ve République (1959-1969).",
    difficulty: "moyen"
  },
  {
    id: "nat92",
    theme: "histoire-geographie",
    question: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    options: ["1848", "1804", "1789", "1762"],
    correctAnswer: 0,
    explanation: "L'esclavage a été aboli définitivement en France en 1848 par la République.",
    difficulty: "moyen"
  },
  {
    id: "nat93",
    theme: "histoire-geographie",
    question: "Depuis quelle année l'école publique est-elle gratuite ?",
    options: ["1789", "1848", "1881", "1945"],
    correctAnswer: 2,
    explanation: "L'école publique est gratuite depuis 1881 avec les lois Jules Ferry.",
    difficulty: "moyen"
  },
  {
    id: "nat94",
    theme: "histoire-geographie",
    question: "Combien y a-t-il eu de républiques en France ?",
    options: ["Trois", "Quatre", "Cinq", "Six"],
    correctAnswer: 2,
    explanation: "Il y a eu cinq républiques en France : la Ire (1792-1804), la IIe (1848-1852), la IIIe (1870-1940), la IVe (1946-1958) et la Ve (depuis 1958).",
    difficulty: "moyen"
  },
  {
    id: "nat95",
    theme: "histoire-geographie",
    question: "Qui était le roi de France au moment de la Révolution française ?",
    options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVIII"],
    correctAnswer: 2,
    explanation: "Louis XVI était le roi de France au moment de la Révolution française (1789). Il a été exécuté en 1793.",
    difficulty: "moyen"
  },
  {
    id: "nat96",
    theme: "histoire-geographie",
    question: "Qui a fondé la Ve République ?",
    options: [
      "François Mitterrand",
      "Le Général de Gaulle",
      "Georges Pompidou",
      "Valéry Giscard d'Estaing"
    ],
    correctAnswer: 1,
    explanation: "Le Général de Gaulle a fondé la Ve République en 1958, mettant fin à la IVe République en crise.",
    difficulty: "moyen"
  },
  {
    id: "nat97",
    theme: "histoire-geographie",
    question: "Que célèbre-t-on le 14 juillet ?",
    options: [
      "La fin de la Seconde Guerre mondiale",
      "La prise de la Bastille et la fête nationale",
      "L'anniversaire du Président",
      "La fin de la Révolution"
    ],
    correctAnswer: 1,
    explanation: "Le 14 juillet célèbre la fête nationale française, commémorant classiquement à la fois la prise de la Bastille le 14 juillet 1789, symbole de la Révolution française, et la Fête de la Fédération du 14 juillet 1790, célébration de l'unité nationale.",
    difficulty: "moyen"
  },
  {
    id: "nat98",
    theme: "histoire-geographie",
    question: "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    options: [
      "La Guerre de Cent ans",
      "La Révolution française",
      "La Première Guerre mondiale",
      "La Seconde Guerre mondiale"
    ],
    correctAnswer: 2,
    explanation: "La Première Guerre mondiale s'est déroulée de 1914 à 1918.",
    difficulty: "moyen"
  },
  {
    id: "nat99",
    theme: "histoire-geographie",
    question: "Pourquoi l'année 1958 est importante pour la France ?",
    options: [
      "Fin de la Seconde Guerre mondiale",
      "Création de la Ve République et arrivée au pouvoir du Général de Gaulle",
      "Début de la Révolution",
      "Indépendance de la France"
    ],
    correctAnswer: 1,
    explanation: "1958 est l'année de création de la Ve République et du retour au pouvoir du Général de Gaulle.",
    difficulty: "moyen"
  },
  {
    id: "nat100",
    theme: "histoire-geographie",
    question: "Quel fleuve coule en France ?",
    options: ["Le Danube", "La Loire", "La Tamise", "Le Tibre"],
    correctAnswer: 1,
    explanation: "La Loire est le plus long fleuve de France, s'écoulant vers l'océan Atlantique.",
    difficulty: "moyen"
  },
  {
    id: "nat101",
    theme: "histoire-geographie",
    question: "Quelle ville est française ?",
    options: ["Londres", "Paris", "Rome", "Berlin"],
    correctAnswer: 1,
    explanation: "Paris est la capitale et la plus grande ville de France.",
    difficulty: "moyen"
  },
  {
    id: "nat102",
    theme: "histoire-geographie",
    question: "Quel océan borde la côte ouest française ?",
    options: [
      "L'océan Indien",
      "L'océan Pacifique",
      "L'océan Atlantique",
      "L'océan Arctique"
    ],
    correctAnswer: 2,
    explanation: "L'océan Atlantique borde la côte ouest de la France.",
    difficulty: "moyen"
  },
  {
    id: "nat103",
    theme: "histoire-geographie",
    question: "Qu'est-ce que Paris ?",
    options: [
      "Une région de France",
      "Une province",
      "La capitale et la plus grande ville de France",
      "Un monument"
    ],
    correctAnswer: 2,
    explanation: "Paris est la capitale de la France, située au centre du bassin parisien sur la Seine.",
    difficulty: "moyen"
  },
  {
    id: "nat104",
    theme: "histoire-geographie",
    question: "Quelle est la capitale de la France ?",
    options: ["Lyon", "Marseille", "Paris", "Toulouse"],
    correctAnswer: 2,
    explanation: "Paris est la capitale de la France depuis des siècles.",
    difficulty: "moyen"
  },
  {
    id: "nat105",
    theme: "histoire-geographie",
    question: "Sur quel continent se situe la France métropolitaine ?",
    options: ["En Asie", "En Afrique", "En Europe", "En Amérique"],
    correctAnswer: 2,
    explanation: "La France métropolitaine se situe en Europe, en partie en Europe occidentale.",
    difficulty: "moyen"
  },
  {
    id: "nat106",
    theme: "histoire-geographie",
    question: "Quelle île est un département d'outre-mer français ?",
    options: ["La Corse", "La Martinique", "Tahiti", "L'île Maurice"],
    correctAnswer: 1,
    explanation: "La Martinique est l'un des 5 départements d'outre-mer (DOM) avec la Guadeloupe, la Guyane, la Réunion et Mayotte.",
    difficulty: "moyen"
  },
  {
    id: "nat107",
    theme: "histoire-geographie",
    question: "Combien y a-t-il de régions en France métropolitaine ?",
    options: ["10", "13", "18", "22"],
    correctAnswer: 1,
    explanation: "Il y a 13 régions en France métropolitaine depuis la réforme territoriale entrée en vigueur le 1er janvier 2016 (il y en avait 22 auparavant). Le total de 18 régions correspond à la France entière, incluant les 5 régions d'outre-mer.",
    difficulty: "moyen"
  },
  {
    id: "nat108",
    theme: "histoire-geographie",
    question: "Quelle est la première ville portuaire française par son trafic maritime ?",
    options: ["Bordeaux", "Marseille", "Nantes", "Le Havre"],
    correctAnswer: 1,
    explanation: "Marseille est le premier port de commerce français par son trafic (2e européen), gérant conteneurs, croisières et pétrole. Bordeaux et Nantes ont des ports fluviaux-maritimes actifs mais moindres ; Le Havre est spécialisé dans les conteneurs.",
    difficulty: "moyen"
  },
  {
    id: "nat109",
    theme: "histoire-geographie",
    question: "Quelle est la mer au sud de la France métropolitaine ?",
    options: ["La mer du Nord", "La Manche", "La mer Méditerranée", "La mer Noire"],
    correctAnswer: 2,
    explanation: "La mer Méditerranée borde la côte sud de la France métropolitaine.",
    difficulty: "moyen"
  },
  {
    id: "nat110",
    theme: "histoire-geographie",
    question: "Quelle ville est située au bord de la mer Méditerranée ?",
    options: ["Paris", "Lyon", "Nice", "Lille"],
    correctAnswer: 2,
    explanation: "Nice est une grande ville française située sur la Côte d'Azur (Méditerranée).",
    difficulty: "moyen"
  },
  {
    id: "nat111",
    theme: "histoire-geographie",
    question: "Où se situe la Corse ?",
    options: ["En Espagne", "En Italie", "En Méditerranée, entre la France et l'Italie", "En Afrique"],
    correctAnswer: 2,
    explanation: "La Corse est une île française située en Méditerranée, entre la France continentale et l'Italie.",
    difficulty: "moyen"
  },
  {
    id: "nat112",
    theme: "histoire-geographie",
    question: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    options: ["Les Alpes", "Les Vosges", "Le Jura", "les Pyrénées"],
    correctAnswer: 0,
    explanation: "Les Alpes constituent la chaîne de montagnes entre la France et l'Italie.",
    difficulty: "moyen"
  },
  {
    id: "nat113",
    theme: "histoire-geographie",
    question: "Qui était Molière ?",
    options: [
      "Un peintre français",
      "Un dramaturge et acteur français majeur du XVIIe siècle",
      "Un musicien français",
      "Un scientifique français"
    ],
    correctAnswer: 1,
    explanation: 'Molière (1622-1673) était un dramaturge et acteur français majeur, auteur de comédies comme "Tartuffe" et "Le Malade Imaginaire".',
    difficulty: "moyen"
  },
  {
    id: "nat114",
    theme: "histoire-geographie",
    question: "Qui était Charles Baudelaire ?",
    options: [
      "Un peintre français",
      "Un poète français majeur du XIXe siècle",
      "Un musicien français",
      "Un scientifique français"
    ],
    correctAnswer: 1,
    explanation: 'Charles Baudelaire (1821-1867) était un poète et critique d\'art français majeur, auteur de "Les Fleurs du Mal".',
    difficulty: "moyen"
  },
  {
    id: "nat115",
    theme: "histoire-geographie",
    question: "Qui était George Sand ?",
    options: [
      "Un homme politique",
      "Une écrivaine française majeure du XIXe siècle",
      "Une actrice de théâtre",
      "Une reine de France"
    ],
    correctAnswer: 1,
    explanation: "George Sand (1804-1876) était une écrivaine française majeure du XIXe siècle, pionnière du mouvement littéraire romantique.",
    difficulty: "moyen"
  },
  {
    id: "nat116",
    theme: "histoire-geographie",
    question: "Qui était Simone de Beauvoir ?",
    options: [
      "Une reine de France",
      "Une écrivaine et philosophe féministe française majeure",
      "Une actrice de cinéma",
      "Une scientifique"
    ],
    correctAnswer: 1,
    explanation: 'Simone de Beauvoir (1908-1986) était une écrivaine, philosophe et féministe française majeure, auteure du "Deuxième Sexe".',
    difficulty: "moyen"
  },
  {
    id: "nat117",
    theme: "histoire-geographie",
    question: "Qui était Albert Camus ?",
    options: [
      "Un sculpteur français",
      "Un écrivain et philosophe français majeur du XXe siècle",
      "Un musicien français",
      "Un peintre impressionniste"
    ],
    correctAnswer: 1,
    explanation: 'Albert Camus (1913-1960) était un écrivain et philosophe français majeur, auteur de "L\'Étranger" et "La Peste".',
    difficulty: "moyen"
  },
  {
    id: "nat118",
    theme: "histoire-geographie",
    question: "Qui était Paul Cézanne ?",
    options: [
      "Un écrivain français",
      "Un peintre postimpressionniste français majeur",
      "Un musicien français",
      "Un sculpteur"
    ],
    correctAnswer: 1,
    explanation: "Paul Cézanne (1839-1906) était un peintre postimpressionniste français majeur qui a influencé le cubisme.",
    difficulty: "moyen"
  },
  {
    id: "nat119",
    theme: "histoire-geographie",
    question: "Qui était Marc Chagall ?",
    options: [
      "Un écrivain",
      "Un peintre et sculpteur français d'origine russe",
      "Un musicien",
      "Un scientifique"
    ],
    correctAnswer: 1,
    explanation: "Marc Chagall (1887-1985) était un peintre et sculpteur d'origine russe ayant travaillé en France, connu pour son style surréaliste.",
    difficulty: "moyen"
  },
  {
    id: "nat120",
    theme: "histoire-geographie",
    question: "Qui était Joséphine Baker ?",
    options: [
      "Une reine de France",
      "Une danseuse et chanteuse française d'origine américaine",
      "Une écrivaine",
      "Une actrice de théâtre"
    ],
    correctAnswer: 1,
    explanation: "Joséphine Baker (1906-1975) était une danseuse, chanteuse et actrice française d'origine américaine, icône des années 1920.",
    difficulty: "moyen"
  },
  {
    id: "nat121",
    theme: "histoire-geographie",
    question: "Qui était une chanteuse française célèbre ?",
    options: ["Maria Callas", "Édith Piaf", "Joan Baez", "Ella Fitzgerald"],
    correctAnswer: 1,
    explanation: 'Édith Piaf (1915-1963) était une chanteuse française mondialement célèbre, notamment pour "La Vie en rose".',
    difficulty: "moyen"
  },
  {
    id: "nat122",
    theme: "histoire-geographie",
    question: "Qu'est-ce que le Louvre ?",
    options: [
      "Un château royal",
      "Le plus grand musée de France et du monde",
      "Une région de France",
      "Un monument médiéval"
    ],
    correctAnswer: 1,
    explanation: "Le Louvre est le plus grand musée de France et l'un des plus importants du monde, situé à Paris.",
    difficulty: "moyen"
  },
  {
    id: "nat123",
    theme: "histoire-geographie",
    question: "Qui était Jean de la Fontaine ?",
    options: [
      "Un peintre",
      "Un fabuliste et poète français majeur du XVIIe siècle",
      "Un musicien",
      "Un sculpteur"
    ],
    correctAnswer: 1,
    explanation: 'Jean de la Fontaine (1621-1695) était un fabuliste et poète français majeur, auteur des "Fables".',
    difficulty: "moyen"
  },
  {
    id: "nat124",
    theme: "histoire-geographie",
    question: "Quel écrivain est français ?",
    options: ["Dante Alighieri", "Victor Hugo", "Shakespeare", "Goethe"],
    correctAnswer: 1,
    explanation: 'Victor Hugo (1802-1885) était un écrivain français majeur du XIXe siècle, auteur de "Les Misérables" et "Notre-Dame de Paris".',
    difficulty: "moyen"
  },
  {
    id: "nat125",
    theme: "histoire-geographie",
    question: "Dans quelle ville se trouve la tour Eiffel ?",
    options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
    correctAnswer: 2,
    explanation: "La tour Eiffel se trouve à Paris. Elle a été construite pour l'Exposition universelle de 1889.",
    difficulty: "moyen"
  },
  {
    id: "nat126",
    theme: "histoire-geographie",
    question: "Quand célèbre-t-on Noël ?",
    options: ["1er janvier", "14 juillet", "25 décembre", "1er novembre"],
    correctAnswer: 2,
    explanation: "Noël est célébré le 25 décembre en France et dans la plupart des pays chrétiens.",
    difficulty: "moyen"
  },
  {
    id: "nat127",
    theme: "vie-societe",
    question: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    options: ["17", "18", "15", "112"],
    correctAnswer: 2,
    explanation: "Le 15 est le numéro d'urgence pour appeler le SAMU (Service d'Aide Médicale d'Urgence).",
    difficulty: "moyen"
  },
  {
    id: "nat128",
    theme: "vie-societe",
    question: "Quel numéro d'urgence permet d'appeler les pompiers ?",
    options: ["15", "17", "18", "112"],
    correctAnswer: 2,
    explanation: "Le 18 est le numéro d'urgence pour appeler les pompiers (sapeurs-pompiers).",
    difficulty: "moyen"
  },
  {
    id: "nat129",
    theme: "vie-societe",
    question: "Après avoir obtenu le permis de conduire, quelles sont les obligations pour circuler légalement avec son propre véhicule ?",
    options: [
      "Obtenir un certificat d'immatriculation (carte grise) et souscrire à une assurance automobile",
      "Apposer le signe distinctif 'A' à l'arrière du véhicule",
      "Rien, le permis de conduire suffit en lui-même pour circuler",
      "Les deux premières propositions sont obligatoires"
    ],
    correctAnswer: 3,
    explanation: "En droit français, tout véhicule terrestre à moteur doit être immatriculé et couvert par une assurance responsabilité civile (au tiers) pour circuler. Par ailleurs, un nouveau titulaire du permis est soumis au régime du permis probatoire et a l'obligation d'apposer le disque 'A' à l'arrière de son véhicule.",
    difficulty: "moyen"
  },
  {
    id: "nat130",
    theme: "vie-societe",
    question: "À quelles conditions un mariage est-il reconnu juridiquement ?",
    options: [
      "À titre privé seulement",
      "S'il a lieu à l'église",
      "S'il est célébré par un officier d'état civil (maire)",
      "S'il est signé par les deux familles"
    ],
    correctAnswer: 2,
    explanation: "Un mariage est reconnu juridiquement en France s'il est célébré par un officier d'état civil (maire) devant des témoins.",
    difficulty: "moyen"
  },
  {
    id: "nat131",
    theme: "vie-societe",
    question: "Quel est le délai légal pour déclarer la naissance d'un enfant à la mairie ?",
    options: [
      "Dans les 5 jours suivant la naissance",
      "Dans les 15 jours suivant la naissance",
      "Dans les 30 jours suivant la naissance",
      "Il n'y a pas de délai légal"
    ],
    correctAnswer: 0,
    explanation: "En France, la déclaration de naissance est obligatoire et doit être faite dans les 5 jours suivant l'accouchement auprès de l'officier d'état civil de la mairie du lieu de naissance.",
    difficulty: "moyen"
  },
  {
    id: "nat132",
    theme: "vie-societe",
    question: "Le travail non déclaré est :",
    options: [
      "Autorisé s'il est payant",
      "Illégal et pénalisé",
      "Un type d'emploi précaire",
      "Une forme d'aide"
    ],
    correctAnswer: 1,
    explanation: "Le travail non déclaré est illégal en France. L'employeur qui rémunère un employé sans le déclarer encourt de lourdes pénalités.",
    difficulty: "moyen"
  },
  {
    id: "nat133",
    theme: "vie-societe",
    question: "Que doit faire un employeur pour fixer un salaire ?",
    options: [
      "Payer ce qu'il veut",
      "Respecter le SMIC (salaire minimum interprofessionnel de croissance)",
      "Faire une évaluation personnelle",
      "Consulter les syndicats"
    ],
    correctAnswer: 1,
    explanation: "Un employeur doit respecter le SMIC (salaire minimum) et les conventions collectives applicables au secteur.",
    difficulty: "moyen"
  },
  {
    id: "nat134",
    theme: "vie-societe",
    question: "Qu'est-ce que le SMIC ?",
    options: [
      "Un système de santé",
      "Le salaire minimum interprofessionnel de croissance",
      "Une taxe gouvernementale",
      "Une assurance sociale"
    ],
    correctAnswer: 1,
    explanation: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire minimum légal en France.",
    difficulty: "moyen"
  },
  {
    id: "nat135",
    theme: "vie-societe",
    question: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    options: [
      "Envoyer des CV à tous les employeurs",
      "S'inscrire auprès de France Travail",
      "Demander un prêt à la banque",
      "Changer de région"
    ],
    correctAnswer: 1,
    explanation: "Pour chercher un emploi en France, la première étape est de s'inscrire auprès de France Travail (anciennement Pôle Emploi).",
    difficulty: "moyen"
  },
  {
    id: "nat136",
    theme: "vie-societe",
    question: "Quelle est la durée légale du temps de travail par semaine ?",
    options: ["35 heures", "40 heures", "45 heures", "50 heures"],
    correctAnswer: 0,
    explanation: "La durée légale du temps de travail en France est de 35 heures par semaine depuis 2000.",
    difficulty: "moyen"
  },
  {
    id: "nat137",
    theme: "vie-societe",
    question: "Qui est aidé par France Travail ?",
    options: [
      "Seulement les jeunes",
      "Uniquement les femmes",
      "Les personnes en recherche d'emploi",
      "Seulement les cadres"
    ],
    correctAnswer: 2,
    explanation: "France Travail aide toutes les personnes en recherche d'emploi à trouver un travail.",
    difficulty: "moyen"
  },
  {
    id: "nat138",
    theme: "vie-societe",
    question: "Une personne étrangère en situation régulière peut créer son entreprise :",
    options: [
      "Non, c'est réservé aux Français",
      "Oui, elle peut créer une entreprise",
      "Seulement avec l'accord du préfet",
      "Seulement si elle a un diplôme"
    ],
    correctAnswer: 1,
    explanation: "Oui, une personne étrangère en situation régulière peut créer une entreprise en France.",
    difficulty: "moyen"
  },
  {
    id: "nat139",
    theme: "vie-societe",
    question: "Une femme peut-elle créer son entreprise ?",
    options: [
      "Non, c'est réservé aux hommes",
      "Oui, elle a le même droit que les hommes",
      "Seulement avec l'autorisation de son mari",
      "Seulement dans certains secteurs"
    ],
    correctAnswer: 1,
    explanation: "Oui, une femme peut créer une entreprise en France. L'égalité homme-femme garantit ce droit.",
    difficulty: "moyen"
  },
  {
    id: "nat140",
    theme: "vie-societe",
    question: "À partir de quel âge un mineur peut-il travailler ?",
    options: [
      "Dès 10 ans",
      "À partir de 14 ans (avec restrictions)",
      "À partir de 18 ans",
      "À partir de 16 ans"
    ],
    correctAnswer: 1,
    explanation: "Un mineur peut commencer à travailler à partir de 14 ans en France, avec des restrictions légales sur les horaires et types de travail.",
    difficulty: "moyen"
  },
  {
    id: "nat141",
    theme: "vie-societe",
    question: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    options: [
      "La mairie",
      "France Travail",
      "L'Assurance maladie",
      "La préfecture"
    ],
    correctAnswer: 2,
    explanation: "L'Assurance maladie (Sécurité sociale) rembourse les frais de santé en France.",
    difficulty: "moyen"
  },
  {
    id: "nat142",
    theme: "vie-societe",
    question: "Qu'est-ce qu'un numéro d'urgence ?",
    options: [
      "Un numéro de bus",
      "Un numéro à appeler en cas de danger ou d'urgence",
      "Un numéro de téléphone classique",
      "Un code postal"
    ],
    correctAnswer: 1,
    explanation: "Un numéro d'urgence (15, 17, 18, 112) est un numéro à appeler gratuitement en cas de danger ou d'urgence.",
    difficulty: "moyen"
  },
  {
    id: "nat143",
    theme: "vie-societe",
    question: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    options: [
      "Seuls les Français peuvent accéder aux soins",
      "Tous les résidents en situation régulière ont accès à un système de santé",
      "Les soins sont payants pour tout le monde",
      "Les étrangers ne peuvent pas se faire soigner"
    ],
    correctAnswer: 1,
    explanation: "Tous les résidents en France, français ou étrangers en situation régulière, ont accès au système de santé.",
    difficulty: "moyen"
  },
  {
    id: "nat144",
    theme: "vie-societe",
    question: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    options: [
      "À l'hôpital",
      "Au médecin traitant",
      "À la pharmacie",
      "À l'ambulance"
    ],
    correctAnswer: 1,
    explanation: "Pour un problème de santé non urgent, il faut d'abord consulter un médecin traitant qui orientera si nécessaire.",
    difficulty: "moyen"
  },
  {
    id: "nat145",
    theme: "vie-societe",
    question: "Quel est le rôle du médecin traitant ?",
    options: [
      "Juger les maladies graves",
      "Soigner et coordonner les soins du patient",
      "Vacciner obligatoirement",
      "Vendre des médicaments"
    ],
    correctAnswer: 1,
    explanation: "Le médecin traitant soigne le patient et coordonne ses soins avec d'autres médecins si nécessaire.",
    difficulty: "moyen"
  },
  {
    id: "nat146",
    theme: "vie-societe",
    question: "Dans quel cas doit-on aller aux urgences de l'hôpital ?",
    options: [
      "Pour un simple rhume",
      "En cas de danger vital, accident grave ou accouchement",
      "Pour un contrôle médical de routine",
      "Pour demander une simple ordonnance"
    ],
    correctAnswer: 1,
    explanation: "Les urgences sont réservées aux cas graves (accidents, malaises, accouchements). Pour une ordonnance ou un rhume, il faut consulter son médecin traitant.",
    difficulty: "moyen"
  },
  {
    id: "nat147",
    theme: "vie-societe",
    question: "Quel est l'objectif des vaccinations obligatoires ?",
    options: [
      "D'enrichir les pharmaciens",
      "De protéger la santé publique et d'éradiquer les maladies graves",
      "De contrôler les naissances",
      "D'imposer des règles"
    ],
    correctAnswer: 1,
    explanation: "Les vaccinations obligatoires protègent la santé publique en prévenant les maladies graves et contagieuses.",
    difficulty: "moyen"
  },
  {
    id: "nat148",
    theme: "vie-societe",
    question: "À quoi sert la carte Vitale ?",
    options: [
      "À voyager en Europe",
      "À justifier la résidence régulière",
      "À accéder aux soins et au remboursement par la Sécurité sociale",
      "À avoir des réductions commerciales"
    ],
    correctAnswer: 2,
    explanation: "La carte Vitale permet aux assurés de la Sécurité sociale d'accéder aux soins et de se faire rembourser.",
    difficulty: "moyen"
  },
  {
    id: "nat149",
    theme: "vie-societe",
    question: "À quoi sert une mutuelle santé ?",
    options: [
      "À voter",
      "À rembourser les frais non couverts par la Sécurité sociale",
      "À obtenir un emploi",
      "À voyager"
    ],
    correctAnswer: 1,
    explanation: "Une mutuelle santé complète la couverture de la Sécurité sociale en remboursant les frais non pris en charge.",
    difficulty: "moyen"
  },
  {
    id: "nat150",
    theme: "vie-societe",
    question: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    options: ["14 ans", "16 ans", "18 ans", "20 ans"],
    correctAnswer: 1,
    explanation: "L'école est obligatoire en France jusqu'à 16 ans.",
    difficulty: "moyen"
  },
  {
    id: "nat151",
    theme: "vie-societe",
    question: "L'autorité parentale prévoit l'obligation :",
    options: [
      "De travailler",
      "De voter",
      "D'éduquer et de protéger les enfants",
      "De payer des impôts"
    ],
    correctAnswer: 2,
    explanation: "L'autorité parentale inclut l'obligation d'éduquer, de protéger et de subvenir aux besoins des enfants.",
    difficulty: "moyen"
  },
  {
    id: "nat152",
    theme: "vie-societe",
    question: "Pour qui l'école est-elle obligatoire ?",
    options: [
      "Pour tous les enfants de 3 à 16 ans",
      "Seulement pour les filles",
      "Seulement pour les garçons",
      "Seulement pour les riches"
    ],
    correctAnswer: 0,
    explanation: "L'école est obligatoire pour tous les enfants en France à partir de 3 ans jusqu'à 16 ans.",
    difficulty: "moyen"
  },
  {
    id: "nat153",
    theme: "vie-societe",
    question: "Quel diplôme obtient-on à la fin du lycée ?",
    options: ["Le Brevet", "Le BTS", "Le Baccalauréat", "La Licence"],
    correctAnswer: 2,
    explanation: "Le Baccalauréat est le diplôme obtenu à la fin des études au lycée en France.",
    difficulty: "moyen"
  },
  {
    id: "nat154",
    theme: "vie-societe",
    question: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    options: [
      "À l'université",
      "Au collège",
      "Au lycée professionnel",
      "À l'école maternelle"
    ],
    correctAnswer: 1,
    explanation: "Après l'école élémentaire, les élèves vont au collège (4 ans), puis au lycée (3 ans).",
    difficulty: "moyen"
  },
  {
    id: "nat155",
    theme: "vie-societe",
    question: "Un enfant inscrit à l'école :",
    options: [
      "Peut rester à la maison s'il le veut",
      "Doit se présenter régulièrement et respecter le règlement scolaire",
      "Peut faire l'école à distance",
      "N'a pas d'obligations"
    ],
    correctAnswer: 1,
    explanation: "Un enfant inscrit à l'école doit se présenter régulièrement et respecter le règlement scolaire, sinon l'absence peut être signalée.",
    difficulty: "moyen"
  },
  {
    id: "nat156",
    theme: "vie-societe",
    question: "Les enfants qui ne parlent pas français :",
    options: [
      "Ne peuvent pas aller à l'école",
      "Peuvent suivre l'école avec un soutien linguistique",
      "Doivent attendre d'apprendre le français",
      "Vont dans une école spéciale"
    ],
    correctAnswer: 1,
    explanation: "Les enfants allophones (qui ne parlent pas français) peuvent suivre l'école régulière avec un soutien en français langue seconde.",
    difficulty: "moyen"
  },

  // ===== Questions issues du second fichier (questions-fFZID6kj.js) =====
  {
    id: "pv1",
    theme: "principes-valeurs",
    question: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "Unité, Force, Progrès",
      "Liberté, Justice, Solidarité",
      "Égalité, Travail, Patrie"
    ],
    correctAnswer: 0,
    explanation: "La devise de la République française est « Liberté, Égalité, Fraternité ». Elle figure sur les bâtiments publics et les documents officiels.",
    difficulty: "facile"
  },
  {
    id: "pv2",
    theme: "principes-valeurs",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "Le coq gaulois",
      "La Marseillaise",
      "La fleur de lys",
      "Le bonnet phrygien"
    ],
    correctAnswer: 1,
    explanation: "La Marseillaise, le drapeau tricolore et Marianne sont des symboles officiels de la République française.",
    difficulty: "facile"
  },
  {
    id: "pv3",
    theme: "principes-valeurs",
    question: '"Liberté, égalité, fraternité", c\'est :',
    options: [
      "Le préambule de la Constitution",
      "L'article premier du Code civil",
      "La devise de la République française",
      "Le titre de la Déclaration des droits de l'homme"
    ],
    correctAnswer: 2,
    explanation: "« Liberté, Égalité, Fraternité » est la devise de la République française, inscrite dans la Constitution.",
    difficulty: "facile"
  },
  {
    id: "pv4",
    theme: "principes-valeurs",
    question: "Lequel de ces symboles représente officiellement la République française ?",
    options: [
      "Le coq gaulois",
      "La fleur de lys",
      "Marianne",
      "Le bonnet phrygien"
    ],
    correctAnswer: 2,
    explanation: "Marianne est la figure allégorique de la République française. Son buste est présent dans toutes les mairies.",
    difficulty: "facile"
  },
  {
    id: "pv5",
    theme: "principes-valeurs",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Sur les pièces de monnaie uniquement",
      "Sur les documents d'identité uniquement",
      "Sur les bâtiments publics (mairies, écoles…)",
      "Dans les textes de loi uniquement"
    ],
    correctAnswer: 2,
    explanation: "La devise « Liberté, Égalité, Fraternité » est inscrite sur les frontons des bâtiments publics : mairies, écoles, tribunaux.",
    difficulty: "facile"
  },
  {
    id: "pv6",
    theme: "principes-valeurs",
    question: "Quels sont des symboles officiels de la République française ?",
    options: [
      "Le drapeau tricolore, la Marseillaise, Marianne",
      "Le coq, la fleur de lys, la couronne",
      "Le drapeau européen, l'euro, Strasbourg",
      "La Bastille, le Panthéon, Notre-Dame"
    ],
    correctAnswer: 0,
    explanation: "Le drapeau tricolore (bleu, blanc, rouge), la Marseillaise (hymne national) et Marianne sont les symboles officiels de la République.",
    difficulty: "facile"
  },
  {
    id: "pv7",
    theme: "principes-valeurs",
    question: "Quel animal est un symbole de la France ?",
    options: ["L'aigle", "Le lion", "L'abeille", "Le coq"],
    correctAnswer: 3,
    explanation: "Le coq est un symbole traditionnel de la France, bien que non officiel. Il représente la fierté et la vigilance.",
    difficulty: "facile"
  },
  {
    id: "pv8",
    theme: "principes-valeurs",
    question: "Quel est le nom de l'hymne national ?",
    options: ["L'Internationale", "La Marseillaise", "Le Chant du départ", "La Parisienne"],
    correctAnswer: 1,
    explanation: "La Marseillaise est l'hymne national français, composé par Rouget de Lisle en 1792.",
    difficulty: "facile"
  },
  {
    id: "pv9",
    theme: "principes-valeurs",
    question: "Quel symbole de la République française est tricolore ?",
    options: ["Marianne", "Le drapeau", "Le bonnet phrygien", "La cocarde"],
    correctAnswer: 1,
    explanation: "Le drapeau français est tricolore : bleu, blanc, rouge. Il est le symbole officiel de la République.",
    difficulty: "facile"
  },
  {
    id: "pv10",
    theme: "principes-valeurs",
    question: "Quelle est la date de la fête nationale française ?",
    options: ["Le 1er mai", "Le 11 novembre", "Le 14 juillet", "Le 8 mai"],
    correctAnswer: 2,
    explanation: "La fête nationale est célébrée le 14 juillet, en mémoire de la prise de la Bastille (1789) et de la Fête de la Fédération (1790).",
    difficulty: "facile"
  },
  {
    id: "pv11",
    theme: "principes-valeurs",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "L'armistice de la Première Guerre mondiale",
      "La fête nationale française",
      "La proclamation de la Ve République",
      "La fin de la Seconde Guerre mondiale"
    ],
    correctAnswer: 1,
    explanation: "Le 14 juillet est la fête nationale française, commémorant la prise de la Bastille en 1789.",
    difficulty: "facile"
  },
  {
    id: "pv12",
    theme: "principes-valeurs",
    question: "Quelles sont les couleurs du drapeau français ?",
    options: ["Rouge, jaune, vert", "Bleu, blanc, rouge", "Noir, rouge, or", "Bleu, jaune, rouge"],
    correctAnswer: 1,
    explanation: "Le drapeau français est composé de trois bandes verticales : bleue, blanche et rouge.",
    difficulty: "facile"
  },
  {
    id: "pv13",
    theme: "principes-valeurs",
    question: "Qu'est-ce que la Marseillaise ?",
    options: [
      "Un chant révolutionnaire devenu hymne régional",
      "L'hymne national français",
      "Un poème de Victor Hugo mis en musique",
      "Un chant militaire du XIXe siècle"
    ],
    correctAnswer: 1,
    explanation: "La Marseillaise est l'hymne national de la France, composé en 1792 par Rouget de Lisle.",
    difficulty: "facile"
  },
  {
    id: "pv14",
    theme: "principes-valeurs",
    question: "Qu'est ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet pour célébrer la fête nationale ?",
    options: [
      "Un marathon populaire",
      "Un défilé militaire",
      "Un concert de musique classique",
      "Une foire internationale"
    ],
    correctAnswer: 1,
    explanation: "Chaque 14 juillet, un défilé militaire est organisé sur les Champs-Élysées en présence du président de la République.",
    difficulty: "moyen"
  },
  {
    id: "pv15",
    theme: "principes-valeurs",
    question: "Qui est Marianne ?",
    options: [
      "Une héroïne de la Révolution française",
      "Le symbole de la République française",
      "La première femme élue députée",
      "La fondatrice de la Croix-Rouge française"
    ],
    correctAnswer: 1,
    explanation: "Marianne est la figure allégorique de la République française, symbole de liberté et de démocratie.",
    difficulty: "facile"
  },
  {
    id: "pv16",
    theme: "principes-valeurs",
    question: "Quelle est la langue officielle de la République française ?",
    options: [
      "Le français et les langues régionales",
      "Le français",
      "Le français et l'anglais",
      "Il n'y a pas de langue officielle définie"
    ],
    correctAnswer: 1,
    explanation: "L'article 2 de la Constitution dispose que « la langue de la République est le français ».",
    difficulty: "facile"
  },
  {
    id: "pv17",
    theme: "principes-valeurs",
    question: "Quelle est la place de la langue française dans la République ?",
    options: [
      "Elle est une langue parmi d'autres langues reconnues",
      "Elle est la langue officielle de la République",
      "Elle est protégée mais pas officielle",
      "Elle est obligatoire uniquement dans l'administration"
    ],
    correctAnswer: 1,
    explanation: "Le français est la langue officielle de la République, inscrite à l'article 2 de la Constitution.",
    difficulty: "moyen"
  },
  {
    id: "pv18",
    theme: "principes-valeurs",
    question: "De quand date la Constitution de la Ve République ?",
    options: ["1946", "1848", "1958", "1969"],
    correctAnswer: 2,
    explanation: "La Constitution de la Ve République a été adoptée le 4 octobre 1958, sous l'impulsion du général de Gaulle.",
    difficulty: "moyen"
  },
  {
    id: "pv19",
    theme: "principes-valeurs",
    question: "Le régime de la France est :",
    options: [
      "Une monarchie constitutionnelle",
      "Une république",
      "Une fédération d'États",
      "Un régime parlementaire sans président"
    ],
    correctAnswer: 1,
    explanation: "La France est une république démocratique. Son régime est défini par la Constitution de 1958.",
    difficulty: "facile"
  },
  {
    id: "pv20",
    theme: "principes-valeurs",
    question: "Le principe d'égalité signifie que :",
    options: [
      "Tout le monde reçoit les mêmes revenus de l'État",
      "Les hommes ont plus de droits que les femmes dans certains domaines",
      "Toutes les personnes ont les mêmes droits et les mêmes devoirs",
      "Seuls les citoyens français bénéficient de droits fondamentaux"
    ],
    correctAnswer: 2,
    explanation: "Le principe d'égalité signifie que toutes les personnes ont les mêmes droits et les mêmes devoirs, sans distinction d'origine, de sexe ou de religion.",
    difficulty: "facile"
  },
  {
    id: "pv21",
    theme: "principes-valeurs",
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe…) ?",
    options: [
      "Oui, c'est couvert par la liberté d'expression",
      "Non, c'est interdit par la loi",
      "Oui, tant que ce n'est pas par écrit",
      "Cela dépend du contexte et de l'intention"
    ],
    correctAnswer: 1,
    explanation: "Les injures discriminatoires sont interdites par la loi. La liberté d'expression ne permet pas d'insulter ou de discriminer.",
    difficulty: "facile"
  },
  {
    id: "pv22",
    theme: "principes-valeurs",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: [
      "Oui, pour les métiers liés à la sécurité",
      "Oui, pour les métiers nécessitant de la force physique",
      "Non, tous les métiers sont ouverts aux femmes et aux hommes",
      "Oui, si une convention collective le prévoit"
    ],
    correctAnswer: 2,
    explanation: "En France, aucun métier ne peut être réservé aux hommes. L'égalité professionnelle entre femmes et hommes est garantie par la loi.",
    difficulty: "facile"
  },
  {
    id: "pv23",
    theme: "principes-valeurs",
    question: "Qu'est-ce que l'égalité ?",
    options: [
      "Tout le monde doit avoir le même mode de vie",
      "Tous les citoyens ont les mêmes droits et devoirs devant la loi",
      "L'État redistribue toutes les richesses de façon identique",
      "Les différences entre les personnes sont supprimées"
    ],
    correctAnswer: 1,
    explanation: "L'égalité est le principe selon lequel tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi.",
    difficulty: "facile"
  },
  {
    id: "pv24",
    theme: "principes-valeurs",
    question: "Que signifie la liberté ?",
    options: [
      "Faire tout ce que l'on veut sans aucune restriction",
      "Pouvoir agir librement dans le respect des lois et des droits d'autrui",
      "Ne pas être soumis à l'autorité de l'État",
      "Avoir le droit de ne pas respecter les règles collectives"
    ],
    correctAnswer: 1,
    explanation: "La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui, dans le cadre fixé par la loi.",
    difficulty: "facile"
  },
  {
    id: "pv25",
    theme: "principes-valeurs",
    question: 'Que signifie le mot "fraternité" dans la devise française ?',
    options: [
      "Le lien familial entre les citoyens",
      "Le respect des traditions nationales",
      "La solidarité et l'entraide entre les citoyens",
      "L'obligation de s'entraider financièrement"
    ],
    correctAnswer: 2,
    explanation: "La fraternité exprime la solidarité et l'entraide entre les citoyens, le sentiment d'appartenance à une même communauté.",
    difficulty: "facile"
  },
  {
    id: "pv26",
    theme: "principes-valeurs",
    question: "Quel est l'un des rôles des associations ?",
    options: [
      "Légiférer au niveau local",
      "Représenter l'État dans les départements",
      "Aider les personnes en difficulté et contribuer à la vie sociale",
      "Percevoir les impôts pour les communes"
    ],
    correctAnswer: 2,
    explanation: "Les associations jouent un rôle essentiel dans la vie sociale : aide aux personnes en difficulté, culture, sport, défense des droits.",
    difficulty: "moyen"
  },
  {
    id: "pv27",
    theme: "principes-valeurs",
    question: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    options: [
      "La liberté de réunion",
      "La liberté d'expression",
      "La liberté de circulation",
      "La liberté de conscience"
    ],
    correctAnswer: 1,
    explanation: "La liberté d'expression permet à chacun d'exprimer librement ses idées et opinions, dans le respect de la loi.",
    difficulty: "facile"
  },
  {
    id: "pv28",
    theme: "principes-valeurs",
    question: "Quelle proposition est correcte ? La liberté d'expression :",
    options: [
      "Permet de tout dire sans aucune limite",
      "Est réservée aux citoyens français",
      "Permet de s'exprimer librement dans le respect de la loi",
      "Ne concerne que la presse et les médias"
    ],
    correctAnswer: 2,
    explanation: "La liberté d'expression permet de s'exprimer librement mais elle a des limites : interdiction de l'injure, de la diffamation, de l'incitation à la haine.",
    difficulty: "moyen"
  },
  {
    id: "pv29",
    theme: "principes-valeurs",
    question: "Une personne peut-elle changer librement de religion ?",
    options: [
      "Non, on garde la religion de sa naissance",
      "Oui, la liberté de conscience le permet",
      "Seulement avec une autorisation administrative",
      "Seulement si elle renonce à sa nationalité"
    ],
    correctAnswer: 1,
    explanation: "La liberté de conscience permet à chacun de croire ou de ne pas croire, et de changer de religion librement.",
    difficulty: "facile"
  },
  {
    id: "pv30",
    theme: "principes-valeurs",
    question:
      '"La France est une République indivisible, ..., démocratique et sociale". Complétez cette phrase extraite de l\'article 1er de la Constitution :',
    options: ["religieuse", "laïque", "fédérale", "souveraine"],
    correctAnswer: 1,
    explanation: "L'article 1er de la Constitution dispose : « La France est une République indivisible, laïque, démocratique et sociale ».",
    difficulty: "moyen"
  },
  {
    id: "pv31",
    theme: "principes-valeurs",
    question: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    options: ["1881", "1905", "1946", "1958"],
    correctAnswer: 1,
    explanation: "La loi de séparation des Églises et de l'État a été votée le 9 décembre 1905. Elle garantit la liberté de conscience et le libre exercice des cultes.",
    difficulty: "difficile"
  },
  {
    id: "pv32",
    theme: "principes-valeurs",
    question: "Que permet le principe de laïcité ?",
    options: [
      "De supprimer toute pratique religieuse dans l'espace public",
      "De vivre ensemble en respectant la liberté de croyance de chacun",
      "D'établir une religion officielle reconnue par l'État",
      "De limiter le nombre de lieux de culte en France"
    ],
    correctAnswer: 1,
    explanation: "La laïcité garantit la liberté de conscience et permet à chacun de croire ou de ne pas croire, tout en assurant la neutralité de l'État.",
    difficulty: "moyen"
  },
  {
    id: "pv33",
    theme: "principes-valeurs",
    question: "Quel droit est garanti par la laïcité ?",
    options: [
      "Le droit de vote",
      "La liberté de croire ou de ne pas croire",
      "Le droit à l'éducation",
      "Le droit au travail"
    ],
    correctAnswer: 1,
    explanation: "La laïcité garantit la liberté de conscience : chacun est libre de croire ou de ne pas croire en une religion.",
    difficulty: "moyen"
  },
  {
    id: "pv34",
    theme: "principes-valeurs",
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: [
      "Pour interdire l'enseignement des religions",
      "Pour promouvoir les valeurs athées auprès des enfants",
      "Pour garantir un enseignement neutre et le respect de toutes les croyances",
      "Pour que les enfants n'aient pas de convictions personnelles"
    ],
    correctAnswer: 2,
    explanation: "À l'école publique, la laïcité garantit un enseignement neutre, sans prosélytisme, et le respect de toutes les croyances.",
    difficulty: "moyen"
  },
  {
    id: "pv35",
    theme: "principes-valeurs",
    question: "Qu'est-ce que la laïcité ?",
    options: [
      "L'interdiction de pratiquer une religion en France",
      "La séparation des Églises et de l'État et la liberté de croyance",
      "La reconnaissance officielle de certaines religions par l'État",
      "L'obligation pour l'État de financer les lieux de culte"
    ],
    correctAnswer: 1,
    explanation: "La laïcité est le principe de séparation des Églises et de l'État. Elle garantit la liberté de croyance et la neutralité de l'État envers les religions.",
    difficulty: "moyen"
  },
  {
    id: "pv36",
    theme: "principes-valeurs",
    question: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    options: [
      "Oui, si ses parents en font la demande",
      "Non, l'école est obligatoire pour tous les enfants",
      "Oui, avec une attestation de l'autorité religieuse",
      "Oui, pendant les fêtes religieuses uniquement"
    ],
    correctAnswer: 1,
    explanation: "L'instruction est obligatoire pour tous les enfants de 3 à 16 ans, quelle que soit leur religion.",
    difficulty: "facile"
  },
  {
    id: "pv37",
    theme: "principes-valeurs",
    question: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    options: [
      "Non, chaque citoyen doit déclarer une religion",
      "Oui, la liberté de conscience le permet",
      "Seulement si elle a été élevée sans religion",
      "Non, la loi impose le respect d'une croyance"
    ],
    correctAnswer: 1,
    explanation: "La liberté de conscience, garantie par la laïcité, permet à chacun de croire ou de ne pas croire en une religion.",
    difficulty: "facile"
  },
  {
    id: "si1",
    theme: "systeme-institutionnel",
    question: "Qui nomme le Premier ministre ?",
    options: [
      "Le Parlement",
      "Le Conseil constitutionnel",
      "Le président de la République",
      "L'Assemblée nationale"
    ],
    correctAnswer: 2,
    explanation: "Le président de la République nomme le Premier ministre, qui dirige l'action du Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "si2",
    theme: "systeme-institutionnel",
    question: "Qu'est-ce que le pouvoir exécutif ?",
    options: [
      "Le pouvoir de voter les lois",
      "Le pouvoir de juger les litiges",
      "Le pouvoir de faire appliquer les lois",
      "Le pouvoir de contrôler la constitutionnalité des lois"
    ],
    correctAnswer: 2,
    explanation: "Le pouvoir exécutif est le pouvoir de faire appliquer les lois. Il est exercé par le président de la République et le Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "si3",
    theme: "systeme-institutionnel",
    question: "Qui possède le pouvoir exécutif ?",
    options: [
      "Le Parlement",
      "Le Conseil d'État",
      "Le président de la République et le Gouvernement",
      "Les préfets et les maires"
    ],
    correctAnswer: 2,
    explanation: "Le pouvoir exécutif est exercé par le président de la République et le Gouvernement (Premier ministre et ministres).",
    difficulty: "moyen"
  },
  {
    id: "si4",
    theme: "systeme-institutionnel",
    question: "Qui réside au palais de l'Élysée ?",
    options: [
      "Le Premier ministre",
      "Le président du Sénat",
      "Le président de la République",
      "Le président de l'Assemblée nationale"
    ],
    correctAnswer: 2,
    explanation: "Le palais de l'Élysée, situé à Paris, est la résidence officielle du président de la République française.",
    difficulty: "facile"
  },
  {
    id: "si5",
    theme: "systeme-institutionnel",
    question: "Est-ce que le président de la République a tous les pouvoirs ?",
    options: [
      "Oui, il concentre tous les pouvoirs de l'État",
      "Non, les pouvoirs sont séparés entre exécutif, législatif et judiciaire",
      "Oui, mais uniquement en période de crise",
      "Oui, car il est élu directement par le peuple"
    ],
    correctAnswer: 1,
    explanation: "Non. La France repose sur la séparation des pouvoirs : le président a le pouvoir exécutif, le Parlement le pouvoir législatif, et les juges le pouvoir judiciaire.",
    difficulty: "moyen"
  },
  {
    id: "si6",
    theme: "systeme-institutionnel",
    question: "Qui est élu lors des élections présidentielles ?",
    options: [
      "Le Premier ministre",
      "Les députés",
      "Le président de la République",
      "Les sénateurs"
    ],
    correctAnswer: 2,
    explanation: "Le président de la République est élu au suffrage universel direct pour un mandat de 5 ans.",
    difficulty: "facile"
  },
  {
    id: "si7",
    theme: "systeme-institutionnel",
    question: "Pour combien de temps est élu le président de la République française ?",
    options: ["4 ans", "5 ans", "6 ans", "7 ans"],
    correctAnswer: 1,
    explanation: "Depuis 2000, le président de la République est élu pour un mandat de 5 ans (quinquennat), renouvelable une fois.",
    difficulty: "moyen"
  },
  {
    id: "si8",
    theme: "systeme-institutionnel",
    question: "Le Parlement est composé :",
    options: [
      "Du président de la République et du Premier ministre",
      "De l'Assemblée nationale et du Sénat",
      "Des préfets et des maires",
      "Du Conseil constitutionnel et du Conseil d'État"
    ],
    correctAnswer: 1,
    explanation: "Le Parlement français est bicaméral : il est composé de l'Assemblée nationale (députés) et du Sénat (sénateurs).",
    difficulty: "moyen"
  },
  {
    id: "si9",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle du Parlement ?",
    options: [
      "Appliquer les lois et diriger le Gouvernement",
      "Juger les infractions et prononcer les sanctions",
      "Voter les lois et contrôler le Gouvernement",
      "Nommer le président de la République"
    ],
    correctAnswer: 2,
    explanation: "Le Parlement vote les lois et contrôle l'action du Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "si10",
    theme: "systeme-institutionnel",
    question: "Qui est élu lors des élections législatives ?",
    options: [
      "Le président de la République",
      "Les députés",
      "Les sénateurs",
      "Les conseillers régionaux"
    ],
    correctAnswer: 1,
    explanation: "Les élections législatives permettent d'élire les 577 députés de l'Assemblée nationale.",
    difficulty: "moyen"
  },
  {
    id: "si11",
    theme: "systeme-institutionnel",
    question: "Combien de députés composent l'Assemblée nationale ?",
    options: ["348", "450", "577", "925"],
    correctAnswer: 2,
    explanation: "L'Assemblée nationale compte 577 députés élus au suffrage universel direct.",
    difficulty: "difficile"
  },
  {
    id: "si12",
    theme: "systeme-institutionnel",
    question: "Quand sont élus les sénateurs ?",
    options: [
      "Au suffrage universel direct par les citoyens",
      "Par un collège de grands électeurs",
      "Par le président de la République",
      "Lors des élections européennes"
    ],
    correctAnswer: 1,
    explanation: "Les sénateurs sont élus au suffrage universel indirect par un collège de grands électeurs (élus locaux).",
    difficulty: "difficile"
  },
  {
    id: "si13",
    theme: "systeme-institutionnel",
    question: "Pour combien de temps sont élus les députés ?",
    options: ["4 ans", "5 ans", "6 ans", "7 ans"],
    correctAnswer: 1,
    explanation: "Les députés sont élus pour un mandat de 5 ans.",
    difficulty: "moyen"
  },
  {
    id: "si14",
    theme: "systeme-institutionnel",
    question: "Pour combien de temps sont élus les sénateurs ?",
    options: ["4 ans", "5 ans", "6 ans", "7 ans"],
    correctAnswer: 2,
    explanation: "Les sénateurs sont élus pour un mandat de 6 ans. Le Sénat est renouvelé par moitié tous les 3 ans.",
    difficulty: "difficile"
  },
  {
    id: "si15",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle des députés ?",
    options: [
      "Appliquer les décisions du président",
      "Voter les lois et contrôler le Gouvernement",
      "Juger les affaires pénales",
      "Diriger les collectivités territoriales"
    ],
    correctAnswer: 1,
    explanation: "Les députés votent les lois et contrôlent l'action du Gouvernement à l'Assemblée nationale.",
    difficulty: "moyen"
  },
  {
    id: "si16",
    theme: "systeme-institutionnel",
    question: "Qui possède le pouvoir législatif ?",
    options: [
      "Le président de la République",
      "Le Parlement (Assemblée nationale et Sénat)",
      "Le Conseil constitutionnel",
      "Le Premier ministre"
    ],
    correctAnswer: 1,
    explanation: "Le pouvoir législatif est détenu par le Parlement, composé de l'Assemblée nationale et du Sénat.",
    difficulty: "moyen"
  },
  {
    id: "si17",
    theme: "systeme-institutionnel",
    question: "Qui élit les députés ?",
    options: [
      "Les sénateurs",
      "Les grands électeurs",
      "Les citoyens français au suffrage universel direct",
      "Le président de la République"
    ],
    correctAnswer: 2,
    explanation: "Les députés sont élus par les citoyens français au suffrage universel direct.",
    difficulty: "facile"
  },
  {
    id: "si18",
    theme: "systeme-institutionnel",
    question: "Qui vote les lois ?",
    options: [
      "Le président de la République",
      "Le Conseil constitutionnel",
      "Le Parlement (Assemblée nationale et Sénat)",
      "Le Gouvernement"
    ],
    correctAnswer: 2,
    explanation: "Les lois sont votées par le Parlement, composé de l'Assemblée nationale et du Sénat.",
    difficulty: "facile"
  },
  {
    id: "si19",
    theme: "systeme-institutionnel",
    question: "Concernant les partis politiques, quelle proposition est correcte ?",
    options: [
      "Un seul parti politique est autorisé en France",
      "Les partis politiques sont contrôlés par le Gouvernement",
      "Plusieurs partis politiques existent et participent à la vie démocratique",
      "Les partis politiques n'existent qu'au niveau local"
    ],
    correctAnswer: 2,
    explanation: "La France est une démocratie pluraliste : plusieurs partis politiques existent et participent librement à la vie démocratique.",
    difficulty: "moyen"
  },
  {
    id: "si20",
    theme: "systeme-institutionnel",
    question: "Le pouvoir :",
    options: [
      "Législatif consiste à faire appliquer les lois",
      "Judiciaire consiste à voter les lois",
      "Exécutif consiste à faire appliquer les lois",
      "Législatif consiste à juger les infractions"
    ],
    correctAnswer: 2,
    explanation: "Le pouvoir exécutif consiste à faire appliquer les lois. Il est exercé par le président de la République et le Gouvernement.",
    difficulty: "moyen"
  },
  {
    id: "si21",
    theme: "systeme-institutionnel",
    question: "Les dirigeants sont élus par les citoyens dans :",
    options: [
      "Une monarchie constitutionnelle",
      "Un régime parlementaire",
      "Une démocratie",
      "Une république fédérale"
    ],
    correctAnswer: 2,
    explanation: "Dans une démocratie, les dirigeants sont élus par les citoyens au suffrage universel.",
    difficulty: "facile"
  },
  {
    id: "si22",
    theme: "systeme-institutionnel",
    question: "A-t-on le droit de ne pas respecter une loi ?",
    options: [
      "Oui, si on estime qu'elle est injuste",
      "Non, tout le monde doit respecter la loi",
      "Oui, si la loi date de plus de 10 ans",
      "Oui, en cas de désaccord politique"
    ],
    correctAnswer: 1,
    explanation: "Non. Tout le monde doit respecter la loi, qui s'applique à tous sans exception sur le territoire français.",
    difficulty: "facile"
  },
  {
    id: "si23",
    theme: "systeme-institutionnel",
    question: "Qui doit respecter la loi ?",
    options: [
      "Uniquement les citoyens français majeurs",
      "Uniquement les personnes résidant depuis plus de 5 ans",
      "Tout le monde, sans exception",
      "Uniquement les personnes ayant un emploi"
    ],
    correctAnswer: 2,
    explanation: "La loi s'applique à toutes les personnes se trouvant sur le territoire français, sans aucune exception.",
    difficulty: "facile"
  },
  {
    id: "si24",
    theme: "systeme-institutionnel",
    question: "Quel est le rôle de l'autorité judiciaire ?",
    options: [
      "Voter les lois au Parlement",
      "Faire appliquer les décisions du Gouvernement",
      "Veiller au respect des lois et sanctionner leur violation",
      "Contrôler la conformité des lois à la Constitution"
    ],
    correctAnswer: 2,
    explanation: "L'autorité judiciaire veille au respect des lois, protège les libertés individuelles et sanctionne les infractions.",
    difficulty: "moyen"
  },
  {
    id: "si25",
    theme: "systeme-institutionnel",
    question: "Quel pouvoir détient un juge ?",
    options: [
      "Le pouvoir exécutif",
      "Le pouvoir législatif",
      "Le pouvoir judiciaire",
      "Le pouvoir réglementaire"
    ],
    correctAnswer: 2,
    explanation: "Un juge détient le pouvoir judiciaire : il rend la justice en appliquant la loi.",
    difficulty: "facile"
  },
  {
    id: "si26",
    theme: "systeme-institutionnel",
    question: "Le pouvoir :",
    options: [
      "Judiciaire est exercé par le Parlement",
      "Législatif est exercé par les magistrats",
      "Judiciaire est exercé par les juges et les tribunaux",
      "Exécutif est exercé par les sénateurs"
    ],
    correctAnswer: 2,
    explanation: "Le pouvoir judiciaire est exercé par les juges et les tribunaux. Il est indépendant du pouvoir exécutif et du pouvoir législatif.",
    difficulty: "moyen"
  },
  {
    id: "si27",
    theme: "systeme-institutionnel",
    question: "L'autorité judiciaire est exercée par :",
    options: [
      "Le président de la République",
      "Le Parlement",
      "Les juges et les tribunaux",
      "Les préfets"
    ],
    correctAnswer: 2,
    explanation: "L'autorité judiciaire est exercée par les magistrats (juges et procureurs) au sein des tribunaux.",
    difficulty: "moyen"
  },
  {
    id: "si28",
    theme: "systeme-institutionnel",
    question: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    options: [
      "Il bénéficie d'une immunité totale",
      "Il peut être jugé comme tout citoyen",
      "Il est seulement démis de ses fonctions par le président",
      "Il est jugé uniquement par le Parlement"
    ],
    correctAnswer: 1,
    explanation: "Un ministre qui ne respecte pas la loi peut être jugé. Nul n'est au-dessus de la loi en République.",
    difficulty: "moyen"
  },
  {
    id: "si29",
    theme: "systeme-institutionnel",
    question: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    options: [
      "Politique, économique, social",
      "Exécutif, législatif, judiciaire",
      "Présidentiel, parlementaire, municipal",
      "National, régional, communal"
    ],
    correctAnswer: 1,
    explanation: "Les trois pouvoirs sont : exécutif (appliquer les lois), législatif (voter les lois), judiciaire (juger et sanctionner).",
    difficulty: "moyen"
  },
  {
    id: "si30",
    theme: "systeme-institutionnel",
    question: "Qui sanctionne l'auteur d'un vol ?",
    options: [
      "Le préfet du département",
      "Le maire de la commune",
      "La justice (un juge)",
      "La police qui a arrêté l'auteur"
    ],
    correctAnswer: 2,
    explanation: "C'est la justice, par l'intermédiaire d'un juge, qui sanctionne l'auteur d'un vol. La police enquête mais ne juge pas.",
    difficulty: "facile"
  },
  {
    id: "si31",
    theme: "systeme-institutionnel",
    question: "Quel est le régime politique de la France aujourd'hui ?",
    options: [
      "Une monarchie constitutionnelle",
      "Une république démocratique",
      "Un régime présidentiel pur",
      "Une fédération de régions autonomes"
    ],
    correctAnswer: 1,
    explanation: "La France est une république démocratique où les citoyens élisent leurs représentants.",
    difficulty: "facile"
  },
  {
    id: "si32",
    theme: "systeme-institutionnel",
    question: "Qui est élu lors des élections municipales ?",
    options: [
      "Les députés de la circonscription",
      "Les sénateurs du département",
      "Les conseillers municipaux (et le maire)",
      "Le préfet de la commune"
    ],
    correctAnswer: 2,
    explanation: "Les élections municipales permettent d'élire les conseillers municipaux, qui élisent ensuite le maire.",
    difficulty: "facile"
  },
  {
    id: "si33",
    theme: "systeme-institutionnel",
    question: "À partir de quel âge a-t-on le droit de voter ?",
    options: ["16 ans", "18 ans", "20 ans", "21 ans"],
    correctAnswer: 1,
    explanation: "En France, le droit de vote est acquis à 18 ans, l'âge de la majorité.",
    difficulty: "facile"
  },
  {
    id: "si34",
    theme: "systeme-institutionnel",
    question: "Quelle condition est nécessaire pour voter aux élections ?",
    options: [
      "Avoir un emploi déclaré",
      "Être inscrit sur les listes électorales",
      "Posséder un diplôme reconnu",
      "Résider en France depuis plus de 5 ans"
    ],
    correctAnswer: 1,
    explanation: "Pour voter, il faut être inscrit sur les listes électorales, avoir 18 ans et la nationalité française (sauf élections européennes et municipales pour les citoyens UE).",
    difficulty: "moyen"
  },
  {
    id: "si35",
    theme: "systeme-institutionnel",
    question: "Qui peut voter aux élections en France ?",
    options: [
      "Toute personne résidant en France depuis plus d'un an",
      "Les citoyens français majeurs inscrits sur les listes électorales",
      "Les résidents étrangers titulaires d'un titre de séjour",
      "Toute personne majeure présente sur le territoire"
    ],
    correctAnswer: 1,
    explanation: "Le droit de vote est réservé aux citoyens français majeurs inscrits sur les listes électorales.",
    difficulty: "facile"
  },
  {
    id: "si36",
    theme: "systeme-institutionnel",
    question: "Que signifie « suffrage universel » ?",
    options: [
      "Le vote est obligatoire pour tous les citoyens",
      "Tous les citoyens majeurs ont le droit de voter",
      "Les élections ont lieu dans tous les pays en même temps",
      "Chaque citoyen ne peut voter qu'une seule fois dans sa vie"
    ],
    correctAnswer: 1,
    explanation: "Le suffrage universel signifie que tous les citoyens majeurs ont le droit de voter, sans distinction de sexe, de fortune ou d'origine.",
    difficulty: "moyen"
  },
  {
    id: "si37",
    theme: "systeme-institutionnel",
    question: "Combien y a-t-il de départements en France ?",
    options: ["96", "101", "105", "110"],
    correctAnswer: 1,
    explanation: "La France compte 101 départements : 96 en métropole et 5 outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).",
    difficulty: "difficile"
  },
  {
    id: "si38",
    theme: "systeme-institutionnel",
    question: "Qui représente l'État dans un département ?",
    options: [
      "Le maire du chef-lieu",
      "Le député de la circonscription",
      "Le préfet",
      "Le président du conseil départemental"
    ],
    correctAnswer: 2,
    explanation: "Le préfet représente l'État dans le département. Il est nommé par le président de la République.",
    difficulty: "moyen"
  },
  {
    id: "si39",
    theme: "systeme-institutionnel",
    question: "Qui dirige la commune ?",
    options: [
      "Le préfet",
      "Le président du conseil départemental",
      "Le maire",
      "Le sous-préfet"
    ],
    correctAnswer: 2,
    explanation: "Le maire dirige la commune. Il est élu par les conseillers municipaux.",
    difficulty: "facile"
  },
  {
    id: "si40",
    theme: "systeme-institutionnel",
    question: "Qui est le préfet ?",
    options: [
      "Un élu du conseil départemental",
      "Le représentant de l'État dans le département",
      "Le chef de la gendarmerie départementale",
      "Le président du tribunal administratif"
    ],
    correctAnswer: 1,
    explanation: "Le préfet est le représentant de l'État dans le département. Il est nommé par le président de la République en Conseil des ministres.",
    difficulty: "moyen"
  },
  {
    id: "si41",
    theme: "systeme-institutionnel",
    question: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    options: ["25", "27", "28", "30"],
    correctAnswer: 1,
    explanation: "L'Union européenne compte 27 États membres depuis le départ du Royaume-Uni (Brexit) en 2020.",
    difficulty: "difficile"
  },
  {
    id: "si42",
    theme: "systeme-institutionnel",
    question: "Quel État n'est pas membre de l'Union européenne ?",
    options: ["L'Allemagne", "L'Italie", "La Suisse", "La Belgique"],
    correctAnswer: 2,
    explanation: "La Suisse n'est pas membre de l'Union européenne, bien qu'elle se situe au cœur de l'Europe.",
    difficulty: "moyen"
  },
  {
    id: "si43",
    theme: "systeme-institutionnel",
    question: "Quelle condition est nécessaire pour voter aux élections européennes ?",
    options: [
      "Être citoyen d'un État membre de l'UE et résider en France",
      "Avoir la nationalité française uniquement",
      "Être né dans un pays de l'Union européenne",
      "Résider en France depuis au moins 5 ans"
    ],
    correctAnswer: 0,
    explanation:
      "Pour voter aux élections européennes en France, il faut être citoyen d'un État membre de l'UE, avoir 18 ans et être inscrit sur les listes électorales.",
    difficulty: "moyen"
  },
  {
    id: "si44",
    theme: "systeme-institutionnel",
    question: "À quelle fréquence les élections européennes sont-elles organisées ?",
    options: ["Tous les 3 ans", "Tous les 4 ans", "Tous les 5 ans", "Tous les 6 ans"],
    correctAnswer: 2,
    explanation: "Les élections européennes sont organisées tous les 5 ans pour élire les députés du Parlement européen.",
    difficulty: "moyen"
  },
  {
    id: "si45",
    theme: "systeme-institutionnel",
    question: "Quel pays est un pays fondateur de l'Union européenne ?",
    options: [
      "Le Royaume-Uni",
      "L'Espagne",
      "La Suède",
      "La France"
    ],
    correctAnswer: 3,
    explanation: "La France est l'un des six pays fondateurs de la construction européenne (avec l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg).",
    difficulty: "moyen"
  },
  {
    id: "si46",
    theme: "systeme-institutionnel",
    question: "Quelle est la monnaie utilisée en France ?",
    options: ["Le franc", "Le dollar", "L'euro", "La livre sterling"],
    correctAnswer: 2,
    explanation: "L'euro (€) est la monnaie officielle de la France depuis 2002, partagée avec 19 autres pays de la zone euro.",
    difficulty: "facile"
  },
  {
    id: "si47",
    theme: "systeme-institutionnel",
    question: "Qui élit les députés européens ?",
    options: [
      "Les chefs d'État de chaque pays membre",
      "Les parlements nationaux de chaque pays",
      "Les citoyens de l'Union européenne",
      "La Commission européenne"
    ],
    correctAnswer: 2,
    explanation: "Les députés européens sont élus au suffrage universel direct par les citoyens des États membres de l'UE.",
    difficulty: "moyen"
  },
  {
    id: "si48",
    theme: "systeme-institutionnel",
    question: "Quand célèbre-t-on la journée de l'Europe ?",
    options: ["Le 1er janvier", "Le 8 mai", "Le 9 mai", "Le 25 mars"],
    correctAnswer: 2,
    explanation: "La journée de l'Europe est célébrée le 9 mai, en souvenir de la déclaration de Robert Schuman en 1950.",
    difficulty: "difficile"
  },
  {
    id: "dd1",
    theme: "droits-devoirs",
    question: "Comment s'appelle la Constitution actuelle de la France ?",
    options: [
      "La Constitution de la IVe République",
      "La Constitution de la Ve République",
      "La Déclaration des droits de l'homme et du citoyen",
      "La Charte constitutionnelle"
    ],
    correctAnswer: 1,
    explanation: "La Constitution actuelle est celle de la Ve République, adoptée le 4 octobre 1958.",
    difficulty: "moyen"
  },
  {
    id: "dd2",
    theme: "droits-devoirs",
    question: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    options: [
      "Le préambule de la Constitution",
      "La charte des droits et devoirs du citoyen français",
      "La Déclaration des droits de l'homme et du citoyen",
      "Le contrat d'intégration républicaine"
    ],
    correctAnswer: 1,
    explanation: "La charte des droits et devoirs du citoyen français énonce les principes, valeurs et symboles de la République.",
    difficulty: "moyen"
  },
  {
    id: "dd3",
    theme: "droits-devoirs",
    question: "Concernant les droits individuels, quelle proposition est correcte ?",
    options: [
      "Les droits sont accordés uniquement aux citoyens français",
      "Chaque personne a des droits fondamentaux garantis par la loi",
      "Les droits varient selon le lieu de résidence en France",
      "Les étrangers n'ont de droits qu'après 5 ans de résidence"
    ],
    correctAnswer: 1,
    explanation: "En France, chaque personne, quelle que soit sa nationalité, bénéficie de droits fondamentaux garantis par la loi.",
    difficulty: "moyen"
  },
  {
    id: "dd4",
    theme: "droits-devoirs",
    question: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    options: ["1789", "1848", "1905", "1958"],
    correctAnswer: 0,
    explanation: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789, pendant la Révolution française.",
    difficulty: "moyen"
  },
  {
    id: "dd5",
    theme: "droits-devoirs",
    question: "Lequel de ces droits est un droit fondamental ?",
    options: [
      "Le droit aux congés payés",
      "Le droit à un logement social",
      "La liberté d'expression",
      "Le droit à une retraite anticipée"
    ],
    correctAnswer: 2,
    explanation: "La liberté d'expression est un droit fondamental garanti par la Déclaration des droits de l'homme et la Constitution.",
    difficulty: "facile"
  },
  {
    id: "dd6",
    theme: "droits-devoirs",
    question: "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    options: [
      "Le Code du travail",
      "La Constitution",
      "Le Code de la sécurité sociale",
      "Le Journal officiel"
    ],
    correctAnswer: 1,
    explanation: "La Constitution, avec le bloc de constitutionnalité (DDHC, Préambule de 1946), garantit les droits et libertés fondamentaux.",
    difficulty: "moyen"
  },
  {
    id: "dd7",
    theme: "droits-devoirs",
    question: "Qu'est-ce que la liberté d'expression ?",
    options: [
      "Le droit de circuler librement sur le territoire",
      "Le droit de s'exprimer librement dans le respect de la loi",
      "Le droit de créer librement une association",
      "Le droit de pratiquer la religion de son choix"
    ],
    correctAnswer: 1,
    explanation: "La liberté d'expression est le droit de s'exprimer, d'informer et d'être informé, dans le respect de la loi.",
    difficulty: "facile"
  },
  {
    id: "dd8",
    theme: "droits-devoirs",
    question: "Quel droit permet à une personne de se défendre devant la justice ?",
    options: [
      "Le droit de vote",
      "Le droit à un avocat",
      "Le droit de grève",
      "Le droit de pétition"
    ],
    correctAnswer: 1,
    explanation: "Le droit à un avocat permet à toute personne de se défendre devant la justice. Ce droit est garanti même sans ressources (aide juridictionnelle).",
    difficulty: "moyen"
  },
  {
    id: "dd9",
    theme: "droits-devoirs",
    question: "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?",
    options: [
      "Le Code civil de 1804",
      "La Déclaration des droits de l'homme et du citoyen de 1789",
      "Le préambule de la Constitution de 1946",
      "La loi de séparation des Églises et de l'État de 1905"
    ],
    correctAnswer: 1,
    explanation: "La Déclaration des droits de l'homme et du citoyen de 1789 est le texte fondateur des droits et devoirs en France.",
    difficulty: "moyen"
  },
  {
    id: "dd10",
    theme: "droits-devoirs",
    question: "Quel texte a été adopté pendant la Révolution française ?",
    options: [
      "La Constitution de la Ve République",
      "Le Code civil",
      "La Déclaration des droits de l'homme et du citoyen",
      "La loi de séparation des Églises et de l'État"
    ],
    correctAnswer: 2,
    explanation: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789, pendant la Révolution française.",
    difficulty: "moyen"
  },
  {
    id: "dd11",
    theme: "droits-devoirs",
    question: "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    options: [
      "La liberté d'expression",
      "La liberté de conscience",
      "La liberté de la presse",
      "La liberté d'association"
    ],
    correctAnswer: 1,
    explanation: "La liberté de conscience permet à chacun de croire ou de ne pas croire en une religion.",
    difficulty: "facile"
  },
  {
    id: "dd12",
    theme: "droits-devoirs",
    question: "Une femme peut avorter :",
    options: [
      "Seulement avec l'accord de son conjoint",
      "Librement, c'est un droit garanti par la loi",
      "Seulement après avis d'une commission médicale",
      "Seulement en cas de danger pour sa santé"
    ],
    correctAnswer: 1,
    explanation: "Le droit à l'avortement (IVG) est garanti par la loi en France. Depuis 2024, il est inscrit dans la Constitution.",
    difficulty: "moyen"
  },
  {
    id: "dd13",
    theme: "droits-devoirs",
    question: "Est-il toujours possible de divorcer ?",
    options: [
      "Non, le divorce n'est autorisé que pour faute grave",
      "Oui, le divorce est un droit",
      "Seulement avec l'accord des deux époux",
      "Seulement après une séparation de 2 ans"
    ],
    correctAnswer: 1,
    explanation: "Oui, le divorce est un droit en France. Il existe plusieurs procédures de divorce (par consentement mutuel, pour faute, etc.).",
    difficulty: "facile"
  },
  {
    id: "dd14",
    theme: "droits-devoirs",
    question: "La peine de mort est :",
    options: [
      "Maintenue pour les crimes les plus graves",
      "Abolie en France depuis 1981",
      "Suspendue mais pas supprimée",
      "Applicable uniquement en temps de guerre"
    ],
    correctAnswer: 1,
    explanation: "La peine de mort a été abolie en France en 1981 par la loi portée par Robert Badinter, garde des Sceaux.",
    difficulty: "moyen"
  },
  {
    id: "dd15",
    theme: "droits-devoirs",
    question: "Concernant les limites aux libertés individuelles, quelle proposition est correcte ?",
    options: [
      "Les libertés sont absolues et ne peuvent jamais être limitées",
      "Les libertés peuvent être limitées pour protéger l'ordre public et les droits d'autrui",
      "Les libertés ne concernent que les citoyens français",
      "Les libertés ne sont limitées qu'en temps de guerre"
    ],
    correctAnswer: 1,
    explanation: "Les libertés individuelles peuvent être limitées par la loi pour protéger l'ordre public, la sécurité et les droits d'autrui.",
    difficulty: "moyen"
  },
  {
    id: "dd16",
    theme: "droits-devoirs",
    question: "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    options: [
      "Oui, si les époux sont d'accord",
      "Non, la polygamie est interdite",
      "Oui, sous certaines conditions religieuses",
      "Cela dépend du pays d'origine des époux"
    ],
    correctAnswer: 1,
    explanation: "La polygamie est interdite en France. Le mariage ne peut unir que deux personnes (qu'elles soient de sexe différent ou de même sexe).",
    difficulty: "facile"
  },
  {
    id: "dd17",
    theme: "droits-devoirs",
    question: "Pourquoi les libertés individuelles peuvent-elles être limitées ?",
    options: [
      "Pour permettre au Gouvernement d'exercer son autorité",
      "Pour protéger les droits et la sécurité de tous",
      "Pour maintenir les traditions culturelles du pays",
      "Les libertés individuelles ne peuvent pas être limitées"
    ],
    correctAnswer: 1,
    explanation: "Les libertés peuvent être limitées pour préserver l'ordre public, la sécurité nationale et les droits des autres personnes.",
    difficulty: "moyen"
  },
  {
    id: "dd18",
    theme: "droits-devoirs",
    question: "Faut-il réduire ses déchets ?",
    options: [
      "Non, le recyclage résout tous les problèmes",
      "Oui, c'est une responsabilité de chacun pour protéger l'environnement",
      "Seulement si la commune met en place le tri sélectif",
      "Non, cela ne concerne que les entreprises industrielles"
    ],
    correctAnswer: 1,
    explanation: "Oui, réduire ses déchets est une responsabilité citoyenne pour protéger l'environnement et les générations futures.",
    difficulty: "facile"
  },
  {
    id: "dd19",
    theme: "droits-devoirs",
    question: "Jeter une bouteille dans la rue est :",
    options: [
      "Toléré si aucune poubelle n'est à proximité",
      "Acceptable pour les petits déchets",
      "Interdit et passible d'une amende",
      "Autorisé dans les zones non résidentielles"
    ],
    correctAnswer: 2,
    explanation: "Jeter des déchets dans la rue est interdit. C'est une infraction passible d'une amende (jusqu'à 135 €).",
    difficulty: "facile"
  },
  {
    id: "dd20",
    theme: "droits-devoirs",
    question: "Que doit faire une personne en cas d'accident ?",
    options: [
      "Prévenir uniquement les proches de la victime",
      "Appeler les secours (15, 18 ou 112)",
      "Attendre l'arrivée de la police sans intervenir",
      "Déplacer la victime dans un lieu sûr"
    ],
    correctAnswer: 1,
    explanation: "En cas d'accident, il faut appeler les secours (SAMU : 15, pompiers : 18, numéro européen : 112) et porter assistance si possible.",
    difficulty: "facile"
  },
  {
    id: "dd21",
    theme: "droits-devoirs",
    question: "Comment peut-on réduire ses déchets ?",
    options: [
      "En utilisant des sacs poubelle plus grands",
      "En achetant des produits avec moins d'emballage et en triant ses déchets",
      "En jetant les déchets dans des poubelles collectives",
      "En déposant tous les déchets en déchetterie chaque semaine"
    ],
    correctAnswer: 1,
    explanation: "Pour réduire ses déchets, il faut trier, recycler, composter, éviter le gaspillage et privilégier les produits avec peu d'emballage.",
    difficulty: "facile"
  },
  {
    id: "dd22",
    theme: "droits-devoirs",
    question: "Déposer une machine à laver cassée sur le trottoir est :",
    options: [
      "Autorisé si elle est débranchée et vidée",
      "Interdit, il faut la déposer en déchetterie",
      "Autorisé les jours de ramassage des encombrants",
      "Toléré si elle est placée près d'une poubelle"
    ],
    correctAnswer: 1,
    explanation: "Le dépôt sauvage d'encombrants sur la voie publique est interdit. Il faut les apporter en déchetterie ou contacter le service des encombrants.",
    difficulty: "facile"
  },
  {
    id: "dd23",
    theme: "droits-devoirs",
    question: "Que permet la citoyenneté française ?",
    options: [
      "D'être exempté du paiement de certains impôts",
      "De voter et de participer à la vie démocratique",
      "D'obtenir automatiquement un emploi dans la fonction publique",
      "De bénéficier d'une couverture santé gratuite"
    ],
    correctAnswer: 1,
    explanation: "La citoyenneté française confère le droit de vote, le droit d'être élu, et implique des devoirs (respect de la loi, paiement des impôts).",
    difficulty: "moyen"
  },
  {
    id: "dd24",
    theme: "droits-devoirs",
    question: "Que risque une personne qui ne respecte pas la loi ?",
    options: [
      "Un avertissement du préfet",
      "Des sanctions (amende, prison…) prononcées par la justice",
      "Une convocation à la mairie",
      "Un retrait de sa carte d'identité"
    ],
    correctAnswer: 1,
    explanation: "Une personne qui ne respecte pas la loi risque des sanctions prononcées par la justice : amende, prison, travail d'intérêt général, etc.",
    difficulty: "facile"
  },
  {
    id: "dd25",
    theme: "droits-devoirs",
    question: "Quel est le rôle de la gendarmerie ?",
    options: [
      "Contrôler les frontières du territoire",
      "Assurer la sécurité, notamment dans les zones rurales",
      "Gérer l'administration des prisons",
      "Juger les infractions commises en zone rurale"
    ],
    correctAnswer: 1,
    explanation: "La gendarmerie nationale assure la sécurité des personnes et des biens, principalement dans les zones rurales et périurbaines.",
    difficulty: "facile"
  },
  {
    id: "dd26",
    theme: "droits-devoirs",
    question: "Quel est le rôle de la police ?",
    options: [
      "Voter les lois relatives à la sécurité",
      "Faire appliquer la loi et assurer la sécurité publique",
      "Juger les infractions et prononcer les peines",
      "Gérer les services administratifs de la mairie"
    ],
    correctAnswer: 1,
    explanation: "La police nationale assure la sécurité des personnes et des biens, maintient l'ordre public et recherche les auteurs d'infractions.",
    difficulty: "facile"
  },
  {
    id: "dd27",
    theme: "droits-devoirs",
    question: "Qu'est-ce qu'une infraction ?",
    options: [
      "Un acte autorisé par la loi sous conditions",
      "Une violation de la loi",
      "Une décision de justice",
      "Un règlement administratif"
    ],
    correctAnswer: 1,
    explanation: "Une infraction est une violation de la loi. Il existe trois catégories : les contraventions, les délits et les crimes.",
    difficulty: "facile"
  },
  {
    id: "dd28",
    theme: "droits-devoirs",
    question: "En quoi consiste la traite des êtres humains ?",
    options: [
      "Un programme de migration organisée entre pays",
      "L'exploitation de personnes par la force, la contrainte ou la tromperie",
      "Un accord commercial bilatéral entre États",
      "Une forme d'emploi temporaire non déclaré"
    ],
    correctAnswer: 1,
    explanation: "La traite des êtres humains est un crime grave consistant à exploiter des personnes (travail forcé, prostitution, etc.) par la contrainte ou la tromperie.",
    difficulty: "difficile"
  },
  {
    id: "dd29",
    theme: "droits-devoirs",
    question: "Que doit faire une victime de violences ?",
    options: [
      "Contacter un avocat avant toute démarche",
      "Porter plainte auprès de la police ou de la gendarmerie",
      "Écrire au procureur de la République",
      "Attendre d'avoir des preuves solides"
    ],
    correctAnswer: 1,
    explanation: "Une victime de violences doit porter plainte auprès de la police ou de la gendarmerie. Elle peut aussi appeler le 3919 (violences conjugales) ou le 17 (police secours).",
    difficulty: "facile"
  },
  {
    id: "dd30",
    theme: "droits-devoirs",
    question: "Quelle est l'infraction la plus grave ?",
    options: [
      "La contravention",
      "Le délit",
      "Le crime",
      "L'amende forfaitaire"
    ],
    correctAnswer: 2,
    explanation: "Le crime est l'infraction la plus grave (meurtre, viol…). Il est jugé par la cour d'assises et puni de peines pouvant aller jusqu'à la réclusion à perpétuité.",
    difficulty: "moyen"
  },
  {
    id: "hg1",
    theme: "histoire-geographie",
    question: "En quelle année a débuté la Révolution française ?",
    options: ["1776", "1789", "1799", "1804"],
    correctAnswer: 1,
    explanation: "La Révolution française a débuté en 1789, avec la prise de la Bastille le 14 juillet.",
    difficulty: "facile"
  },
  {
    id: "hg2",
    theme: "histoire-geographie",
    question: "Qui était Napoléon Ier ?",
    options: [
      "Le dernier roi de France",
      "Le premier empereur des Français",
      "Le premier président de la République",
      "Un général de la Révolution resté simple citoyen"
    ],
    correctAnswer: 1,
    explanation: "Napoléon Bonaparte fut le premier empereur des Français (1804-1814/1815). Il a modernisé l'administration et créé le Code civil.",
    difficulty: "moyen"
  },
  {
    id: "hg3",
    theme: "histoire-geographie",
    question: "Lequel de ces personnages historiques est français ?",
    options: [
      "Christophe Colomb",
      "Napoléon Bonaparte",
      "Winston Churchill",
      "Giuseppe Garibaldi"
    ],
    correctAnswer: 1,
    explanation: "Napoléon Bonaparte est né en Corse en 1769. Il est devenu empereur des Français en 1804.",
    difficulty: "facile"
  },
  {
    id: "hg4",
    theme: "histoire-geographie",
    question: "Dans quelle République est-on aujourd'hui ?",
    options: [
      "La IIIe République",
      "La IVe République",
      "La Ve République",
      "La VIe République"
    ],
    correctAnswer: 2,
    explanation: "La France est actuellement sous le régime de la Ve République, instaurée en 1958 par le général de Gaulle.",
    difficulty: "facile"
  },
  {
    id: "hg5",
    theme: "histoire-geographie",
    question: "Combien y a-t-il eu de républiques en France ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "La France a connu cinq républiques. La Ve République, instaurée en 1958, est le régime actuel.",
    difficulty: "moyen"
  },
  {
    id: "hg6",
    theme: "histoire-geographie",
    question: "Qui était le roi de France au moment de la Révolution française ?",
    options: ["Louis XIV", "Louis XV", "Louis XVI", "Henri IV"],
    correctAnswer: 2,
    explanation: "Louis XVI était roi de France au moment de la Révolution de 1789. Il fut guillotiné en janvier 1793.",
    difficulty: "moyen"
  },
  {
    id: "hg7",
    theme: "histoire-geographie",
    question: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    options: ["1794", "1830", "1848", "1870"],
    correctAnswer: 2,
    explanation: "L'esclavage a été aboli définitivement en France en 1848, sous la IIe République, par le décret de Victor Schœlcher.",
    difficulty: "moyen"
  },
  {
    id: "hg8",
    theme: "histoire-geographie",
    question: "Que célèbre-t-on le 14 juillet ?",
    options: [
      "La fin de la Seconde Guerre mondiale",
      "La prise de la Bastille et la fête nationale",
      "La proclamation de la Ve République",
      "L'abolition de l'esclavage"
    ],
    correctAnswer: 1,
    explanation: "Le 14 juillet célèbre la prise de la Bastille (1789) et la Fête de la Fédération (1790). C'est la fête nationale française.",
    difficulty: "facile"
  },
  {
    id: "hg9",
    theme: "histoire-geographie",
    question: "Qu'est-ce que la Shoah ?",
    options: [
      "Une conférence internationale de paix en 1945",
      "Le génocide des Juifs d'Europe par les nazis pendant la Seconde Guerre mondiale",
      "La résistance française pendant l'Occupation",
      "L'exode des populations civiles en 1940"
    ],
    correctAnswer: 1,
    explanation: "La Shoah est le génocide perpétré par l'Allemagne nazie contre les Juifs d'Europe pendant la Seconde Guerre mondiale, causant environ 6 millions de victimes.",
    difficulty: "difficile"
  },
  {
    id: "hg10",
    theme: "histoire-geographie",
    question: "Quand a eu lieu la Seconde Guerre mondiale ?",
    options: ["1914-1918", "1939-1945", "1870-1871", "1954-1962"],
    correctAnswer: 1,
    explanation: "La Seconde Guerre mondiale a eu lieu de 1939 à 1945.",
    difficulty: "facile"
  },
  {
    id: "hg11",
    theme: "histoire-geographie",
    question: "Quand a eu lieu la Première Guerre mondiale ?",
    options: ["1870-1871", "1914-1918", "1939-1945", "1954-1962"],
    correctAnswer: 1,
    explanation: "La Première Guerre mondiale a eu lieu de 1914 à 1918.",
    difficulty: "facile"
  },
  {
    id: "hg12",
    theme: "histoire-geographie",
    question: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    options: [
      "La fin de la Seconde Guerre mondiale",
      "L'armistice de la Première Guerre mondiale (1918)",
      "La proclamation de la République",
      "La libération de Paris"
    ],
    correctAnswer: 1,
    explanation: "Le 11 novembre 1918 marque l'armistice de la Première Guerre mondiale. C'est un jour de commémoration.",
    difficulty: "moyen"
  },
  {
    id: "hg13",
    theme: "histoire-geographie",
    question: "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    options: [
      "La guerre franco-prussienne",
      "La Première Guerre mondiale",
      "La Seconde Guerre mondiale",
      "La guerre d'Algérie"
    ],
    correctAnswer: 1,
    explanation: "La Première Guerre mondiale (ou Grande Guerre) a eu lieu de 1914 à 1918, impliquant de nombreux pays.",
    difficulty: "facile"
  },
  {
    id: "hg14",
    theme: "histoire-geographie",
    question: "Quel pays ou région du monde a été colonisé par la France ?",
    options: [
      "L'Inde britannique",
      "L'Algérie",
      "Le Brésil",
      "Les Philippines"
    ],
    correctAnswer: 1,
    explanation: "L'Algérie a été colonisée par la France de 1830 à 1962, date de son indépendance.",
    difficulty: "moyen"
  },
  {
    id: "hg15",
    theme: "histoire-geographie",
    question: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    options: ["Napoléon Bonaparte", "Jules Ferry", "Charles de Gaulle", "Jean Jaurès"],
    correctAnswer: 1,
    explanation: "Jules Ferry, ministre de l'Instruction publique, a rendu l'école primaire gratuite (1881), laïque et obligatoire (1882).",
    difficulty: "moyen"
  },
  {
    id: "hg16",
    theme: "histoire-geographie",
    question: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    options: ["1945", "1957", "1968", "1992"],
    correctAnswer: 1,
    explanation: "La CEE a été créée par le traité de Rome en 1957, signée par six pays fondateurs dont la France.",
    difficulty: "difficile"
  },
  {
    id: "hg17",
    theme: "histoire-geographie",
    question: "Qui a été le premier Président élu sous la Ve République ?",
    options: [
      "François Mitterrand",
      "Charles de Gaulle",
      "Georges Pompidou",
      "Valéry Giscard d'Estaing"
    ],
    correctAnswer: 1,
    explanation: "Charles de Gaulle a été le premier président de la Ve République, élu en décembre 1958.",
    difficulty: "moyen"
  },
  {
    id: "hg18",
    theme: "histoire-geographie",
    question: "Depuis quelle année l'école publique est-elle gratuite ?",
    options: ["1789", "1848", "1881", "1905"],
    correctAnswer: 2,
    explanation: "L'école publique est gratuite depuis 1881, grâce aux lois de Jules Ferry.",
    difficulty: "moyen"
  },
  {
    id: "hg19",
    theme: "histoire-geographie",
    question: "Qui a fondé la Ve République ?",
    options: [
      "François Mitterrand",
      "Napoléon Bonaparte",
      "Charles de Gaulle",
      "Jules Ferry"
    ],
    correctAnswer: 2,
    explanation: "Le général Charles de Gaulle a fondé la Ve République en 1958, avec l'adoption d'une nouvelle Constitution.",
    difficulty: "moyen"
  },
  {
    id: "hg20",
    theme: "histoire-geographie",
    question: "Pourquoi l'année 1958 est importante pour la France ?",
    options: [
      "C'est l'année de la fin de la guerre d'Algérie",
      "C'est l'année de la création de la Ve République",
      "C'est l'année de l'entrée dans la CEE",
      "C'est l'année du droit de vote des femmes"
    ],
    correctAnswer: 1,
    explanation: "En 1958, la Ve République est instaurée avec l'adoption d'une nouvelle Constitution sous l'impulsion du général de Gaulle.",
    difficulty: "moyen"
  },
  {
    id: "hg21",
    theme: "histoire-geographie",
    question: "Quel fleuve coule en France ?",
    options: ["Le Danube", "Le Rhin uniquement", "La Seine", "Le Tage"],
    correctAnswer: 2,
    explanation: "La Seine est un fleuve français qui traverse Paris. Autres grands fleuves : Loire, Rhône, Garonne.",
    difficulty: "facile"
  },
  {
    id: "hg22",
    theme: "histoire-geographie",
    question: "Quelle ville est française ?",
    options: ["Genève", "Bruxelles", "Lyon", "Montréal"],
    correctAnswer: 2,
    explanation: "Lyon est une grande ville française, chef-lieu de la région Auvergne-Rhône-Alpes.",
    difficulty: "facile"
  },
  {
    id: "hg23",
    theme: "histoire-geographie",
    question: "Quel océan borde la côte ouest française ?",
    options: [
      "L'océan Indien",
      "La mer Méditerranée",
      "L'océan Atlantique",
      "La mer du Nord"
    ],
    correctAnswer: 2,
    explanation: "L'océan Atlantique borde la côte ouest de la France métropolitaine.",
    difficulty: "facile"
  },
  {
    id: "hg24",
    theme: "histoire-geographie",
    question: "Qu'est-ce que Paris ?",
    options: [
      "Une région administrative française",
      "La capitale de la France",
      "Un département d'outre-mer",
      "La plus grande commune de France par superficie"
    ],
    correctAnswer: 1,
    explanation: "Paris est la capitale de la France. C'est aussi le siège des principales institutions de la République.",
    difficulty: "facile"
  },
  {
    id: "hg25",
    theme: "histoire-geographie",
    question: "Quelle est la capitale de la France ?",
    options: ["Lyon", "Marseille", "Paris", "Strasbourg"],
    correctAnswer: 2,
    explanation: "Paris est la capitale de la France depuis des siècles. Elle abrite les institutions républicaines.",
    difficulty: "facile"
  },
  {
    id: "hg26",
    theme: "histoire-geographie",
    question: "Sur quel continent se situe la France métropolitaine ?",
    options: ["L'Afrique", "L'Amérique du Nord", "L'Europe", "L'Océanie"],
    correctAnswer: 2,
    explanation: "La France métropolitaine se situe en Europe occidentale.",
    difficulty: "facile"
  },
  {
    id: "hg27",
    theme: "histoire-geographie",
    question: "Combien y a-t-il de régions en France métropolitaine ?",
    options: ["10", "13", "18", "22"],
    correctAnswer: 1,
    explanation: "Depuis 2016, la France métropolitaine compte 13 régions (plus 5 régions d'outre-mer).",
    difficulty: "difficile"
  },
  {
    id: "hg28",
    theme: "histoire-geographie",
    question: "Quelle ville est un grand port maritime ?",
    options: ["Paris", "Lyon", "Marseille", "Toulouse"],
    correctAnswer: 2,
    explanation: "Marseille est le plus grand port maritime de France, situé sur la côte méditerranéenne.",
    difficulty: "facile"
  },
  {
    id: "hg29",
    theme: "histoire-geographie",
    question: "Quelle est la mer au sud de la France métropolitaine ?",
    options: ["La mer du Nord", "La Manche", "La mer Méditerranée", "La mer Baltique"],
    correctAnswer: 2,
    explanation: "La mer Méditerranée borde le sud de la France métropolitaine.",
    difficulty: "facile"
  },
  {
    id: "hg30",
    theme: "histoire-geographie",
    question: "Quelle ville est située au bord de la mer Méditerranée ?",
    options: ["Brest", "Lille", "Nice", "Bordeaux"],
    correctAnswer: 2,
    explanation: "Nice est située au bord de la mer Méditerranée, sur la Côte d'Azur.",
    difficulty: "facile"
  },
  {
    id: "hg31",
    theme: "histoire-geographie",
    question: "Où se situe la Corse ?",
    options: [
      "Dans l'océan Atlantique",
      "Dans la Manche",
      "En mer Méditerranée",
      "En mer du Nord"
    ],
    correctAnswer: 2,
    explanation: "La Corse est une île française située en mer Méditerranée, au sud-est de la France continentale.",
    difficulty: "facile"
  },
  {
    id: "hg32",
    theme: "histoire-geographie",
    question: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    options: ["Les Pyrénées", "Le Jura", "Les Alpes", "Les Vosges"],
    correctAnswer: 2,
    explanation: "Les Alpes constituent une chaîne de montagnes située entre la France et l'Italie. Le Mont Blanc (4 807 m) en est le point culminant.",
    difficulty: "facile"
  },
  {
    id: "hg33",
    theme: "histoire-geographie",
    question: "Quelle île est un département d'outre-mer français ?",
    options: ["Cuba", "La Réunion", "La Martinique", "Haïti"],
    correctAnswer: 2,
    explanation: "La Martinique est un département et région d'outre-mer (DROM) français, située dans les Antilles.",
    difficulty: "moyen"
  },
  {
    id: "hg34",
    theme: "histoire-geographie",
    question: "Qui était Molière ?",
    options: [
      "Un philosophe des Lumières",
      "Un dramaturge et comédien du XVIIe siècle",
      "Un poète romantique du XIXe siècle",
      "Un romancier du XVIIIe siècle"
    ],
    correctAnswer: 1,
    explanation: "Molière (1622-1673) est le plus célèbre dramaturge et comédien français. Ses pièces (Le Malade imaginaire, Tartuffe…) sont toujours jouées.",
    difficulty: "moyen"
  },
  {
    id: "hg35",
    theme: "histoire-geographie",
    question: "Qui était Charles Baudelaire ?",
    options: [
      "Un peintre impressionniste",
      "Un poète du XIXe siècle",
      "Un romancier naturaliste",
      "Un compositeur de musique classique"
    ],
    correctAnswer: 1,
    explanation: "Charles Baudelaire (1821-1867) est un poète français, auteur des « Fleurs du mal », œuvre majeure de la poésie française.",
    difficulty: "moyen"
  },
  {
    id: "hg36",
    theme: "histoire-geographie",
    question: "Qui était George Sand ?",
    options: [
      "Une peintre impressionniste",
      "Une écrivaine française du XIXe siècle",
      "Une scientifique prix Nobel",
      "Une compositrice de musique romantique"
    ],
    correctAnswer: 1,
    explanation: "George Sand (1804-1876), de son vrai nom Amantine Lucile Aurore Dupin, est une romancière française célèbre pour ses combats pour les droits des femmes.",
    difficulty: "moyen"
  },
  {
    id: "hg37",
    theme: "histoire-geographie",
    question: "Qui était Simone de Beauvoir ?",
    options: [
      "Une résistante pendant la Seconde Guerre mondiale",
      "Une écrivaine et philosophe féministe du XXe siècle",
      "Une femme politique de la Ve République",
      "Une journaliste et fondatrice d'un grand quotidien"
    ],
    correctAnswer: 1,
    explanation: "Simone de Beauvoir (1908-1986) est une philosophe et écrivaine française, figure majeure du féminisme. Son œuvre « Le Deuxième Sexe » est un texte fondateur.",
    difficulty: "moyen"
  },
  {
    id: "hg38",
    theme: "histoire-geographie",
    question: "Qui était Albert Camus ?",
    options: [
      "Un peintre surréaliste",
      "Un écrivain et philosophe français, prix Nobel de littérature",
      "Un homme politique de la IVe République",
      "Un cinéaste de la Nouvelle Vague"
    ],
    correctAnswer: 1,
    explanation: "Albert Camus (1913-1960) est un écrivain et philosophe français, prix Nobel de littérature en 1957, auteur de L'Étranger et La Peste.",
    difficulty: "moyen"
  },
  {
    id: "hg39",
    theme: "histoire-geographie",
    question: "Qui était Paul Cézanne ?",
    options: [
      "Un sculpteur du XVIIIe siècle",
      "Un peintre post-impressionniste",
      "Un architecte de la Renaissance",
      "Un photographe du XIXe siècle"
    ],
    correctAnswer: 1,
    explanation: "Paul Cézanne (1839-1906) est un peintre français post-impressionniste, considéré comme le père de l'art moderne.",
    difficulty: "moyen"
  },
  {
    id: "hg40",
    theme: "histoire-geographie",
    question: "Qui était Marc Chagall ?",
    options: [
      "Un écrivain français du XXe siècle",
      "Un peintre d'origine russe ayant vécu en France",
      "Un compositeur franco-russe",
      "Un sculpteur d'origine polonaise"
    ],
    correctAnswer: 1,
    explanation: "Marc Chagall (1887-1985) est un peintre d'origine biélorusse, naturalisé français, connu pour ses œuvres poétiques et colorées.",
    difficulty: "difficile"
  },
  {
    id: "hg41",
    theme: "histoire-geographie",
    question: "Qui était Joséphine Baker ?",
    options: [
      "Une scientifique franco-américaine prix Nobel",
      "Une artiste franco-américaine, résistante et militante antiraciste",
      "Une aviatrice pionnière de l'aviation",
      "Une diplomate engagée pour les droits des femmes"
    ],
    correctAnswer: 1,
    explanation: "Joséphine Baker (1906-1975) est une artiste franco-américaine, résistante pendant la guerre et militante pour les droits civiques. Elle est entrée au Panthéon en 2021.",
    difficulty: "difficile"
  },
  {
    id: "hg42",
    theme: "histoire-geographie",
    question: "Qui était une chanteuse française célèbre ?",
    options: ["Marie Curie", "Édith Piaf", "Simone Veil", "George Sand"],
    correctAnswer: 1,
    explanation: "Édith Piaf (1915-1963) est l'une des chanteuses françaises les plus célèbres au monde, connue pour « La Vie en rose » et « Non, je ne regrette rien ».",
    difficulty: "facile"
  },
  {
    id: "hg43",
    theme: "histoire-geographie",
    question: "Qui était Jean de la Fontaine ?",
    options: [
      "Un philosophe des Lumières",
      "Un poète et fabuliste du XVIIe siècle",
      "Un dramaturge contemporain de Racine",
      "Un romancier du XVIIIe siècle"
    ],
    correctAnswer: 1,
    explanation: "Jean de La Fontaine (1621-1695) est un poète et fabuliste français, auteur de célèbres fables comme « Le Corbeau et le Renard ».",
    difficulty: "moyen"
  },
  {
    id: "hg44",
    theme: "histoire-geographie",
    question: "Quel écrivain est français ?",
    options: ["Shakespeare", "Goethe", "Victor Hugo", "Cervantes"],
    correctAnswer: 2,
    explanation: "Victor Hugo (1802-1885) est l'un des plus grands écrivains français, auteur de Les Misérables et Notre-Dame de Paris.",
    difficulty: "facile"
  },
  {
    id: "hg45",
    theme: "histoire-geographie",
    question: "Qu'est-ce que le Louvre ?",
    options: [
      "Un palais de justice parisien",
      "Le plus grand musée du monde, situé à Paris",
      "Un château royal en bord de Loire",
      "Un opéra national construit au XIXe siècle"
    ],
    correctAnswer: 1,
    explanation: "Le Louvre est le plus grand musée du monde, situé à Paris. Il abrite des œuvres majeures dont la Joconde de Léonard de Vinci.",
    difficulty: "facile"
  },
  {
    id: "hg46",
    theme: "histoire-geographie",
    question: "Dans quelle ville se trouve la tour Eiffel ?",
    options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
    correctAnswer: 2,
    explanation: "La tour Eiffel se trouve à Paris. Construite par Gustave Eiffel pour l'Exposition universelle de 1889, elle est le monument le plus visité au monde.",
    difficulty: "facile"
  },
  {
    id: "hg47",
    theme: "histoire-geographie",
    question: "Quand célèbre-t-on Noël ?",
    options: ["Le 1er janvier", "Le 6 janvier", "Le 25 décembre", "Le 1er novembre"],
    correctAnswer: 2,
    explanation: "Noël est célébré le 25 décembre. C'est une fête chrétienne devenue une fête culturelle majeure en France.",
    difficulty: "facile"
  },
  {
    id: "vs1",
    theme: "vie-societe",
    question: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    options: ["17", "18", "15", "112"],
    correctAnswer: 2,
    explanation: "Le 15 est le numéro du SAMU (Service d'Aide Médicale Urgente) pour les urgences médicales.",
    difficulty: "facile"
  },
  {
    id: "vs2",
    theme: "vie-societe",
    question: "Quel numéro d'urgence permet d'appeler les pompiers ?",
    options: ["15", "17", "18", "112"],
    correctAnswer: 2,
    explanation: "Le 18 est le numéro pour joindre les pompiers (sapeurs-pompiers) en cas d'incendie ou d'accident.",
    difficulty: "facile"
  },
  {
    id: "vs3",
    theme: "vie-societe",
    question: "Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    options: [
      "Passer un contrôle technique annuel",
      "Assurer son véhicule",
      "S'inscrire à la préfecture de son département",
      "Obtenir une vignette de la mairie"
    ],
    correctAnswer: 1,
    explanation: "Après l'obtention du permis, il est obligatoire d'assurer son véhicule (assurance responsabilité civile au minimum) avant de pouvoir conduire.",
    difficulty: "moyen"
  },
  {
    id: "vs4",
    theme: "vie-societe",
    question: "Qu'est-ce qu'un numéro d'urgence ?",
    options: [
      "Un numéro réservé aux abonnés téléphoniques",
      "Un numéro gratuit pour appeler les secours en cas de danger",
      "Un numéro pour contacter sa mairie en dehors des heures d'ouverture",
      "Un numéro pour joindre son médecin traitant la nuit"
    ],
    correctAnswer: 1,
    explanation: "Un numéro d'urgence est un numéro gratuit permettant d'appeler les secours 24h/24 (15: SAMU, 17: police, 18: pompiers, 112: urgences européennes).",
    difficulty: "facile"
  },
  {
    id: "vs5",
    theme: "vie-societe",
    question: "À quelles conditions un mariage est-il reconnu juridiquement ?",
    options: [
      "Il suffit d'une cérémonie religieuse",
      "Il doit être célébré à la mairie par un officier d'état civil",
      "Il faut un contrat notarié signé par les deux époux",
      "Il doit être approuvé par le juge aux affaires familiales"
    ],
    correctAnswer: 1,
    explanation: "En France, seul le mariage civil, célébré à la mairie par un officier d'état civil, est reconnu juridiquement.",
    difficulty: "moyen"
  },
  {
    id: "vs6",
    theme: "vie-societe",
    question: "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    options: [
      "Dans les 5 jours suivant la naissance",
      "Dans le mois suivant la naissance",
      "Avant l'âge de 3 mois",
      "Dans les 15 jours suivant la naissance"
    ],
    correctAnswer: 0,
    explanation: "La naissance d'un enfant doit être déclarée à la mairie du lieu de naissance dans les 5 jours suivant l'accouchement.",
    difficulty: "moyen"
  },
  {
    id: "vs7",
    theme: "vie-societe",
    question: "Le travail non déclaré est :",
    options: [
      "Autorisé pour les emplois de courte durée",
      "Interdit et sanctionné par la loi",
      "Toléré si le montant reste inférieur au SMIC",
      "Légal pour les travailleurs indépendants"
    ],
    correctAnswer: 1,
    explanation: "Le travail non déclaré (« travail au noir ») est interdit. L'employeur et le travailleur risquent des sanctions pénales et financières.",
    difficulty: "facile"
  },
  {
    id: "vs8",
    theme: "vie-societe",
    question: "Que doit faire un employeur pour fixer un salaire ?",
    options: [
      "Consulter la mairie de la commune",
      "Respecter au minimum le SMIC",
      "Obtenir l'accord de France Travail",
      "Fixer le salaire selon l'ancienneté uniquement"
    ],
    correctAnswer: 1,
    explanation: "L'employeur doit respecter le SMIC (salaire minimum interprofessionnel de croissance), en dessous duquel aucun salaire ne peut être fixé.",
    difficulty: "facile"
  },
  {
    id: "vs9",
    theme: "vie-societe",
    question: "Qu'est-ce que le SMIC ?",
    options: [
      "Un contrat de travail à durée déterminée",
      "Le salaire minimum légal en France",
      "Une cotisation sociale obligatoire",
      "Un dispositif d'aide à la formation professionnelle"
    ],
    correctAnswer: 1,
    explanation: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire horaire minimum légal en France, en dessous duquel aucun salarié ne peut être payé.",
    difficulty: "facile"
  },
  {
    id: "vs10",
    theme: "vie-societe",
    question: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    options: [
      "Contacter directement les entreprises par courrier",
      "S'inscrire à France Travail (ex-Pôle emploi)",
      "Publier son CV sur les réseaux sociaux",
      "Prendre rendez-vous avec un conseiller de la mairie"
    ],
    correctAnswer: 1,
    explanation: "La première démarche est de s'inscrire à France Travail (anciennement Pôle emploi) pour bénéficier d'un accompagnement dans la recherche d'emploi.",
    difficulty: "facile"
  },
  {
    id: "vs11",
    theme: "vie-societe",
    question: "Quelle est la durée légale du temps de travail par semaine ?",
    options: ["30 heures", "35 heures", "39 heures", "40 heures"],
    correctAnswer: 1,
    explanation: "La durée légale du travail en France est de 35 heures par semaine.",
    difficulty: "facile"
  },
  {
    id: "vs12",
    theme: "vie-societe",
    question: "Qui est aidé par France Travail ?",
    options: [
      "Uniquement les citoyens français sans emploi",
      "Les personnes à la recherche d'un emploi",
      "Les retraités souhaitant une activité complémentaire",
      "Les étudiants à la recherche d'un stage"
    ],
    correctAnswer: 1,
    explanation: "France Travail (ex-Pôle emploi) aide les personnes à la recherche d'un emploi : accompagnement, formation, indemnisation.",
    difficulty: "facile"
  },
  {
    id: "vs13",
    theme: "vie-societe",
    question: "Une personne étrangère en situation régulière peut créer son entreprise :",
    options: [
      "Non, la création d'entreprise est réservée aux nationaux",
      "Oui, sous certaines conditions",
      "Seulement après avoir obtenu la nationalité française",
      "Seulement avec un associé français"
    ],
    correctAnswer: 1,
    explanation: "Oui, une personne étrangère en situation régulière peut créer son entreprise en France, sous réserve de détenir un titre de séjour l'autorisant.",
    difficulty: "moyen"
  },
  {
    id: "vs14",
    theme: "vie-societe",
    question: "Une femme peut-elle créer son entreprise ?",
    options: [
      "Oui, mais avec des restrictions selon le secteur d'activité",
      "Oui, c'est un droit pour toute personne",
      "Seulement avec l'autorisation de son conjoint",
      "Oui, uniquement pour certains types d'entreprises"
    ],
    correctAnswer: 1,
    explanation: "Oui, toute personne, homme ou femme, a le droit de créer son entreprise en France. L'égalité femme-homme est un principe fondamental.",
    difficulty: "facile"
  },
  {
    id: "vs15",
    theme: "vie-societe",
    question: "À partir de quel âge un mineur peut-il travailler ?",
    options: ["14 ans", "16 ans", "18 ans", "15 ans"],
    correctAnswer: 1,
    explanation: "Un mineur peut travailler à partir de 16 ans, avec certaines restrictions (horaires, types de travaux). Des dérogations existent dès 14 ans pour des travaux légers pendant les vacances.",
    difficulty: "moyen"
  },
  {
    id: "vs16",
    theme: "vie-societe",
    question: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    options: [
      "La mairie du lieu de résidence",
      "La Sécurité sociale (Assurance maladie)",
      "La mutuelle santé uniquement",
      "France Travail"
    ],
    correctAnswer: 1,
    explanation: "La Sécurité sociale (Assurance maladie / CPAM) rembourse une partie des frais de santé.",
    difficulty: "facile"
  },
  {
    id: "vs17",
    theme: "vie-societe",
    question: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    options: [
      "Les soins sont accessibles uniquement aux personnes qui travaillent",
      "Toute personne résidant en France a droit à une couverture santé",
      "L'accès aux soins dépend du revenu de la personne",
      "Seuls les citoyens français ont droit à l'Assurance maladie"
    ],
    correctAnswer: 1,
    explanation: "Toute personne résidant en France de manière stable et régulière a droit à une couverture santé (Sécurité sociale, CSS).",
    difficulty: "moyen"
  },
  {
    id: "vs18",
    theme: "vie-societe",
    question: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    options: [
      "Aux urgences de l'hôpital",
      "Au médecin traitant",
      "Au pharmacien",
      "Au SAMU par téléphone"
    ],
    correctAnswer: 1,
    explanation: "En cas de problème de santé non urgent, il faut consulter son médecin traitant en priorité.",
    difficulty: "facile"
  },
  {
    id: "vs19",
    theme: "vie-societe",
    question: "Quel est le rôle du médecin traitant ?",
    options: [
      "Prescrire uniquement des médicaments génériques",
      "Coordonner les soins et orienter vers des spécialistes si nécessaire",
      "Réaliser les examens médicaux spécialisés",
      "Délivrer les médicaments et les vaccins"
    ],
    correctAnswer: 1,
    explanation: "Le médecin traitant assure le suivi médical, coordonne les soins et oriente vers des spécialistes si nécessaire.",
    difficulty: "moyen"
  },
  {
    id: "vs20",
    theme: "vie-societe",
    question: "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
    options: [
      "Pour un renouvellement d'ordonnance",
      "En cas d'urgence vitale ou de blessure grave",
      "Pour un certificat médical",
      "Pour une consultation de suivi"
    ],
    correctAnswer: 1,
    explanation: "Les urgences hospitalières sont réservées aux situations graves : urgence vitale, blessure importante, accident grave.",
    difficulty: "facile"
  },
  {
    id: "vs21",
    theme: "vie-societe",
    question: "Quel est l'objectif des vaccinations obligatoires ?",
    options: [
      "Générer des revenus pour les laboratoires pharmaceutiques",
      "Protéger la santé de chacun et de la collectivité",
      "Contrôler les déplacements de la population",
      "Réduire les dépenses de l'Assurance maladie"
    ],
    correctAnswer: 1,
    explanation: "Les vaccinations obligatoires protègent la santé individuelle et collective en empêchant la propagation de maladies graves.",
    difficulty: "facile"
  },
  {
    id: "vs22",
    theme: "vie-societe",
    question: "À quoi sert la carte Vitale ?",
    options: [
      "À justifier de son identité auprès des administrations",
      "À justifier de ses droits à l'Assurance maladie pour le remboursement des soins",
      "À bénéficier de réductions dans les pharmacies",
      "À accéder gratuitement aux hôpitaux publics"
    ],
    correctAnswer: 1,
    explanation: "La carte Vitale est une carte à puce qui atteste des droits à l'Assurance maladie et facilite le remboursement des frais de santé.",
    difficulty: "facile"
  },
  {
    id: "vs23",
    theme: "vie-societe",
    question: "À quoi sert une mutuelle santé ?",
    options: [
      "À remplacer la Sécurité sociale en cas de besoin",
      "À compléter les remboursements de la Sécurité sociale",
      "À couvrir uniquement les soins dentaires et optiques",
      "À obtenir un accès prioritaire chez les spécialistes"
    ],
    correctAnswer: 1,
    explanation: "Une mutuelle santé (complémentaire santé) complète les remboursements de la Sécurité sociale pour réduire le reste à charge.",
    difficulty: "moyen"
  },
  {
    id: "vs24",
    theme: "vie-societe",
    question: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    options: ["14 ans", "15 ans", "16 ans", "18 ans"],
    correctAnswer: 2,
    explanation: "L'instruction est obligatoire de 3 à 16 ans en France.",
    difficulty: "facile"
  },
  {
    id: "vs25",
    theme: "vie-societe",
    question: "L'autorité parentale prévoit l'obligation :",
    options: [
      "De confier l'éducation de l'enfant à l'État",
      "De protéger, éduquer et assurer le bien-être de l'enfant",
      "De scolariser l'enfant dans l'établissement le plus proche",
      "De travailler pour subvenir aux besoins de l'enfant uniquement"
    ],
    correctAnswer: 1,
    explanation: "L'autorité parentale impose aux parents l'obligation de protéger, nourrir, éduquer et assurer le bien-être de l'enfant.",
    difficulty: "moyen"
  },
  {
    id: "vs26",
    theme: "vie-societe",
    question: "Pour qui l'école est-elle obligatoire ?",
    options: [
      "Uniquement pour les enfants de nationalité française",
      "Pour tous les enfants de 3 à 16 ans, sans distinction",
      "Uniquement pour les enfants dont les parents travaillent",
      "Pour les enfants de 6 à 18 ans résidant en France"
    ],
    correctAnswer: 1,
    explanation: "L'instruction est obligatoire pour tous les enfants de 3 à 16 ans résidant en France, quelle que soit leur nationalité.",
    difficulty: "facile"
  },
  {
    id: "vs27",
    theme: "vie-societe",
    question: "Quel diplôme obtient-on à la fin du lycée ?",
    options: [
      "Le brevet des collèges",
      "Le baccalauréat",
      "Une licence universitaire",
      "Un certificat d'aptitude professionnelle"
    ],
    correctAnswer: 1,
    explanation: "Le baccalauréat est le diplôme obtenu à la fin du lycée. Il ouvre l'accès aux études supérieures.",
    difficulty: "facile"
  },
  {
    id: "vs28",
    theme: "vie-societe",
    question: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    options: [
      "Au lycée général",
      "Au collège",
      "À l'université",
      "En école professionnelle"
    ],
    correctAnswer: 1,
    explanation: "Après l'école élémentaire (CP-CM2), les élèves vont au collège (de la 6e à la 3e).",
    difficulty: "facile"
  },
  {
    id: "vs29",
    theme: "vie-societe",
    question: "Un enfant inscrit à l'école :",
    options: [
      "Peut s'absenter librement avec l'accord de ses parents",
      "Doit fréquenter l'école régulièrement",
      "Peut choisir les matières auxquelles il assiste",
      "N'est pas tenu de suivre l'ensemble du programme"
    ],
    correctAnswer: 1,
    explanation: "Un enfant inscrit à l'école doit fréquenter les cours régulièrement. L'absentéisme est signalé et peut être sanctionné.",
    difficulty: "facile"
  },
  {
    id: "vs30",
    theme: "vie-societe",
    question: "Les enfants qui ne parlent pas français :",
    options: [
      "Doivent d'abord obtenir un certificat de langue avant d'être scolarisés",
      "Peuvent être scolarisés et bénéficier d'un soutien linguistique",
      "Sont orientés vers des écoles spécialisées uniquement",
      "Doivent suivre des cours de français pendant un an avant l'inscription"
    ],
    correctAnswer: 1,
    explanation: "Tous les enfants résidant en France, même s'ils ne parlent pas français, ont droit à la scolarisation. Des dispositifs d'aide linguistique (UPE2A) existent.",
    difficulty: "moyen"
  }
];   


// Ajout automatique du flag situational
QUESTIONS.forEach(q => {
    if (q.situational === undefined) {
        q.situational = isSituationalQuestion(q);
    }
});