// cours.js
// Fiches de révision par thème
const COURS_DATA = {
  "principes-valeurs": {
    title: "Principes et valeurs de la République",
    icon: "🏛️",
    summary: "La République française repose sur des valeurs fondamentales : liberté, égalité, fraternité. Elle est laïque, démocratique, sociale et indivisible.",
    keyPoints: [
      "Devise : « Liberté, Égalité, Fraternité », inscrite sur les bâtiments publics.",
      "Liberté : choix, opinion, manière de penser, de s'exprimer et de vivre, sans gêner les autres ; DDHC de 1789.",
      "Égalité : tous les citoyens ont les mêmes droits ; égalité entre les femmes et les hommes depuis 1946 ; Constitution de 1958.",
      "Fraternité : vivre ensemble et solidarité entre les citoyens.",
      "Symboles : drapeau tricolore, Marianne, Marseillaise, fête nationale, coq, cocarde tricolore.",
      "Fête nationale : 14 juillet, en référence à la prise de la Bastille en 1789 et à la Fête de la Fédération en 1790 ; officielle depuis 1880.",
      "Marseillaise : hymne national écrit par Rouget de Lisle en 1792, adopté en 1879.",
      "Marianne : femme au bonnet phrygien, symbole de liberté ; visible dans les mairies, timbres-poste et pièces de monnaie.",
      "Drapeau tricolore : depuis 1794 ; bleu et rouge = couleurs de Paris, blanc = couleur du roi ; symbole d'unité popularisé par Lafayette ; inscrit dans la Constitution.",
      "Il est interdit de brûler ou d'outrager le drapeau français : c'est un délit.",
      "Le coq : symbole de fierté et de courage, non officiel dans la Constitution ; présent sur les maillots de l'équipe de France.",
      "Langue officielle : le français.",
      "Une Constitution : ensemble des règles de fonctionnement des institutions d'un État.",
      "Indivisible : décisions prises par les représentants élus ou par le peuple via référendum.",
      "Laïque : neutralité de l'État ; séparation des Églises et de l'État par la loi du 9 décembre 1905 ; libre exercice des cultes et respect de toutes les croyances ; la République ne reconnaît, ne salarie ni ne subventionne aucun culte.",
      "République démocratique : démocratie vient du grec Dêmos Krátos, le pouvoir appartient au peuple ; les citoyens votent pour choisir leurs représentants au suffrage universel.",
      "République : du latin Res Publica, chose publique ; biens, droits et services appartiennent à tous les citoyens ; pouvoir détenu par des représentants élus."
    ],
    dates: [
      "1789 : DDHC",
      "1792 : Marseillaise",
      "1794 : drapeau tricolore",
      "1880 : fête nationale officielle",
      "1905 : loi de séparation",
      "1958 : Constitution Ve République"
    ],
    figures: ["Marianne", "Rouget de Lisle", "Lafayette"]
  },

  "laicite": {
    title: "Laïcité",
    icon: "🕊️",
    summary: "La laïcité garantit la neutralité de l'État et la liberté de conscience. Elle est encadrée par la loi de 1905 et s'applique différemment selon les espaces.",
    keyPoints: [
      "Laïcité : neutralité de l'État ; séparation des Églises et de l'État par la loi du 9 décembre 1905.",
      "Libre exercice des cultes et respect de toutes les croyances ; la République ne reconnaît, ne salarie ni ne subventionne aucun culte.",
      "Prosélytisme : chercher à convaincre quelqu'un d'adopter sa religion ; autorisé sans forcer, mais interdit dans les lieux publics et les services publics.",
      "Blasphème : critiquer ou se moquer d'une religion n'est pas interdit, sauf insultes ou propos haineux envers des personnes à cause de leur religion.",
      "Sont interdits : l'encouragement à commettre certains crimes ou délits contre une religion, l'incitation à la haine raciale ou ethnique, à la violence ou à la discrimination religieuse, et la négation de la Shoah.",
      "Espace public : droit de manifester sa religion dans les rues, parcs, restaurants, marchés, magasins, transports… (signes religieux, célébrations, manifestations avec autorisation, expression des convictions).",
      "Service public : les personnes qui y travaillent doivent être neutres pendant le travail, mais pas les usagers ; aucune adaptation au nom de la religion.",
      "Travail : dans le public, manifestation religieuse interdite ; dans le privé, elle peut être autorisée, mais l'employeur peut imposer des limites.",
      "École : neutralité ; personnels et élèves peuvent porter des signes discrets, mais les signes ostensibles sont interdits depuis la loi de 2004."
    ],
    dates: ["1905 : loi de séparation des Églises et de l'État", "2004 : loi sur les signes religieux ostensibles à l'école"],
    figures: []
  },

  "libertes-publiques": {
    title: "Libertés publiques et limites",
    icon: "🗽",
    summary: "Les principales libertés sont garanties par la loi, mais elles s'exercent dans le respect des droits d'autrui.",
    keyPoints: [
      "Liberté d'expression : dire ce que l'on pense, dans le respect de la loi.",
      "Liberté d'association : créer ou rejoindre une association.",
      "Liberté de circulation : se déplacer librement sur le territoire.",
      "Liberté de conscience : croire ou ne pas croire.",
      "Liberté de la presse : informer et être informé.",
      "Article 4 DDHC : la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.",
      "Limites : pas d'injure, de diffamation ni d'incitation à la haine ; la liberté s'arrête là où commence celle des autres.",
      "Les réseaux sociaux sont aussi encadrés par la loi.",
      "L'égalité interdit toute discrimination à l'embauche (religion, origine, sexe…).",
      "L'antisémitisme, le racisme et la xénophobie sont des délits."
    ],
    dates: ["1789 : DDHC"],
    figures: []
  },

  "systeme-institutionnel": {
    title: "Système institutionnel et politique",
    icon: "⚖️",
    summary: "La France est une république démocratique fondée sur la séparation des pouvoirs. Les institutions nationales et locales sont organisées par la Constitution.",
    keyPoints: [
      "Président de la République : chef de l'État et des armées ; élu pour 5 ans au suffrage universel direct depuis 1962 ; peut dissoudre l'Assemblée nationale ; garant de la Constitution et de l'indépendance nationale ; réside au palais de l'Élysée ; nomme le Premier ministre selon la majorité.",
      "Gouvernement : ministres proposés par le Premier ministre au président.",
      "Premier ministre : dirige l'action du Gouvernement ; assure l'exécution des lois ; réside à l'Hôtel de Matignon.",
      "En cas de vacance présidentielle, le président du Sénat assure l'intérim.",
      "Parlement : Assemblée nationale + Sénat.",
      "Assemblée nationale : 577 députés élus au suffrage direct par les Français tous les 5 ans.",
      "Sénat : 348 sénateurs élus au suffrage indirect par les grands électeurs pour 6 ans.",
      "Séparation des pouvoirs : exécutif, législatif, judiciaire.",
      "Pouvoir législatif : le Parlement vote les lois. Pouvoir exécutif : le Gouvernement applique et fait respecter la loi. Pouvoir judiciaire : l'autorité judiciaire contrôle l'application des lois.",
      "Conseil constitutionnel : vérifie que les lois respectent la Constitution ; gardien de la norme suprême du droit français.",
      "QPC : tout justiciable peut, lors d'un procès, contester une loi qu'il estime contraire aux droits garantis par la Constitution.",
      "La Constitution peut être modifiée par référendum ou par le Congrès.",
      "Droit de vote : nationalité française, 18 ans ou plus, ne pas être condamné, être inscrit sur les listes électorales.",
      "Le vote n'est pas obligatoire, mais c'est un devoir civique ; l'inscription sur les listes électorales est obligatoire pour voter.",
      "Types d'élections : présidentielles, législatives, municipales, départementales, régionales, européennes, sénatoriales.",
      "Collectivités : communes (~35 000), départements (101), régions (18 dont 13 métropolitaines).",
      "Préfet : représente l'État dans chaque département.",
      "Maire : dirige la commune, élu par les conseillers municipaux pour 6 ans ; officier d'état civil et chef de la police municipale.",
      "Élus locaux : conseillers municipaux (6 ans, suffrage direct), conseillers départementaux (6 ans, suffrage direct), conseillers régionaux (6 ans, suffrage direct).",
      "Défenseur des droits : protège les citoyens face à l'administration.",
      "Compétences locales : communes = écoles ; départements = collèges ; régions = lycées et transports régionaux."
    ],
    dates: [
      "1958 : Ve République",
      "1962 : élection présidentielle au suffrage universel direct",
      "2000 : quinquennat"
    ],
    figures: ["Charles de Gaulle"]
  },

  "droits-devoirs": {
    title: "Droits et devoirs",
    icon: "📜",
    summary: "Les droits et devoirs sont garantis par la DDHC de 1789 et la Constitution. Ils impliquent des libertés, mais aussi des obligations.",
    keyPoints: [
      "Droits : liberté d'expression, de conscience, droit de vote, droit à un avocat.",
      "Devoirs : respecter la loi, payer des impôts, assister une personne en danger.",
      "Infractions : contravention, délit, crime.",
      "Peine de mort abolie en 1981.",
      "DDHC de 1789 et Constitution garantissent les droits et devoirs.",
      "Égalité devant la loi : tout le monde est soumis aux mêmes lois et a les mêmes droits et devoirs, qu'il soit politicien ou pas.",
      "L'égalité interdit toute discrimination à l'embauche (religion, origine, sexe…).",
      "L'antisémitisme, le racisme et la xénophobie sont des délits.",
      "Article 4 DDHC : la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.",
      "La liberté s'arrête là où commence celle des autres."
    ],
    dates: ["1789 : DDHC", "1981 : abolition de la peine de mort"],
    figures: ["Robert Badinter"]
  },

  "democratie-etat-de-droit": {
    title: "Démocratie, État de droit et République sociale",
    icon: "🏛️",
    summary: "La démocratie donne le pouvoir au peuple. L'État de droit soumet tous, y compris les dirigeants, à la loi. La République sociale recherche l'égalité des chances.",
    keyPoints: [
      "Démocratie : du grec Dêmos Krátos, le pouvoir appartient au peuple ; les citoyens votent pour choisir leurs représentants au suffrage universel.",
      "République : du latin Res Publica, chose publique ; biens, droits et services appartiennent à tous ; pouvoir détenu par des représentants élus.",
      "État de droit : la loi est la même pour tous, y compris pour l'État.",
      "Primauté du droit : le droit s'impose à tous.",
      "Égalité devant la loi : tout le monde est soumis aux mêmes lois et a les mêmes droits et devoirs, qu'il soit politicien ou pas.",
      "Séparation des pouvoirs : législatif, exécutif, judiciaire.",
      "Légalité : les lois sont créées dans un processus transparent, responsable, démocratique et où chaque parti politique a pu s'exprimer.",
      "Sécurité juridique : on peut avoir confiance en la loi, elle est claire et ne change pas tout le temps.",
      "Protection juridictionnelle effective : la justice protège réellement.",
      "République sociale : égalité des chances ; éducation gratuite, logement, emploi, santé.",
      "Tous sont soumis à la loi, y compris les dirigeants."
    ],
    dates: ["1958 : Constitution"],
    figures: []
  },

  "organisation-territoriale": {
    title: "Organisation territoriale",
    icon: "🏙️",
    summary: "La France est organisée en communes, départements et régions, avec des compétences et des élus propres.",
    keyPoints: [
      "Communes : environ 35 000 ; gèrent les écoles.",
      "Départements : 101 ; gèrent les collèges.",
      "Régions : 18, dont 13 métropolitaines ; gèrent les lycées et les transports régionaux.",
      "Préfet : représente l'État dans chaque département.",
      "Maire : dirige la commune, élu par les conseillers municipaux pour 6 ans ; officier d'état civil et chef de la police municipale.",
      "Conseillers municipaux : élus au suffrage direct pour 6 ans.",
      "Conseillers départementaux : élus au suffrage direct pour 6 ans ; forment l'assemblée départementale.",
      "Conseillers régionaux : élus au suffrage direct pour 6 ans ; forment l'assemblée régionale.",
      "Défenseur des droits : protège les citoyens face à l'administration.",
      "Les citoyens de l'Union européenne peuvent voter et se présenter aux élections municipales et européennes dans leur pays de résidence."
    ],
    dates: [],
    figures: []
  },

  "histoire-geographie": {
    title: "Histoire, géographie et culture",
    icon: "🗺️",
    summary: "Histoire riche : Révolution, Républiques, guerres mondiales, construction européenne. Géographie variée et culture importante.",
    keyPoints: [
      "Révolution française : 1789.",
      "14 juillet 1789 : prise de la Bastille, prison royale, par le peuple.",
      "1792-1804 : Ire République, proclamée le 22 septembre 1792 au lendemain de Valmy ; exécution de Louis XVI, la Terreur, le Directoire ; fin en 1804 avec l'Empire de Napoléon Ier.",
      "1804 : Napoléon Ier empereur.",
      "1848-1852 : IIe République, proclamée le 24 février 1848 ; la plus courte (4 ans) ; suffrage universel masculin ; abolition de l'esclavage (Victor Schœlcher) ; coup d'État de Louis-Napoléon Bonaparte (Napoléon III).",
      "1870-1940 : IIIe République, proclamée le 4 septembre 1870 ; la plus longue (70 ans) ; enracine la démocratie et la laïcité ; lois Ferry sur l'école, loi de 1901, loi de 1905, affaire Dreyfus, victoire de 1918 ; s'effondre en juin 1940.",
      "1914-1918 et 1939-1945 : guerres mondiales.",
      "1946-1958 : IVe République, Constitution du 27 octobre 1946 ; régime parlementaire instable (24 gouvernements en 12 ans) ; reconstruction pendant les Trente Glorieuses ; s'effondre avec la guerre d'Algérie et le retour de de Gaulle en 1958.",
      "1958-... : Ve République, fondée par Charles de Gaulle, Constitution du 4 octobre 1958 ; pouvoir présidentiel renforcé ; suffrage universel direct depuis 1962 ; quinquennat depuis 2000.",
      "5 Républiques depuis 1792.",
      "Géographie : Atlantique, Méditerranée, Alpes, Pyrénées.",
      "Outre-mer : 5 DROM.",
      "Personnalités : Molière (1622-1673), dramaturge du XVIIe siècle, Tartuffe, Le Misanthrope ; Jean de La Fontaine (1621-1695), Fables ; Charles Baudelaire (1821-1867), Les Fleurs du Mal ; Marc Chagall (1887-1985), peintre du XXe siècle.",
      "Autres figures : Louis XVI, Napoléon, Charles de Gaulle, Victor Hugo."
    ],
    dates: [
      "1789 : Révolution",
      "1792 : Ire République",
      "1804 : Empire",
      "1848 : IIe République",
      "1870 : IIIe République",
      "1946 : IVe République",
      "1958 : Ve République",
      "1962 : suffrage universel direct",
      "2000 : quinquennat"
    ],
    figures: [
      "Louis XVI",
      "Napoléon",
      "Charles de Gaulle",
      "Victor Hugo",
      "Molière",
      "Jean de La Fontaine",
      "Charles Baudelaire",
      "Marc Chagall",
      "Victor Schœlcher"
    ]
  },

  "union-europeenne": {
    title: "Union européenne",
    icon: "🇪🇺",
    summary: "L'Union européenne est une construction politique et économique fondée progressivement depuis 1951. Elle compte 27 États membres et dispose d'institutions communes.",
    keyPoints: [
      "27 États membres depuis le Brexit en 2020.",
      "Fondée par le traité de Maastricht en 1992.",
      "Construction européenne commencée avec la CECA en 1951.",
      "6 pays fondateurs : France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg.",
      "L'euro : monnaie unique depuis 2002.",
      "Citoyenneté européenne créée en 1992.",
      "Drapeau : 12 étoiles dorées sur fond bleu.",
      "Hymne : L'Ode à la Joie (Beethoven).",
      "Journée de l'Europe : 9 mai.",
      "Parlement européen : Strasbourg ; députés élus au suffrage universel direct.",
      "Commission européenne : Bruxelles.",
      "Banque centrale européenne : Francfort (Allemagne).",
      "Les citoyens de l'Union européenne peuvent voter et se présenter aux élections municipales et européennes dans leur pays de résidence."
    ],
    dates: [
      "1951 : CECA",
      "1992 : Maastricht et citoyenneté européenne",
      "2002 : euro",
      "2020 : Brexit"
    ],
    figures: []
  },

  "vie-societe": {
    title: "Vivre dans la société française",
    icon: "🏠",
    summary: "Vie quotidienne encadrée par des droits et obligations : famille, santé, travail, éducation et civisme.",
    keyPoints: [
      "Famille : mariage civil, déclaration de naissance dans les 5 jours.",
      "Santé : Sécurité sociale, carte Vitale, SAMU (15), pompiers (18).",
      "Travail : SMIC, 35h, France Travail.",
      "Éducation : obligatoire de 3 à 16 ans.",
      "Vie pratique : tri des déchets, civisme.",
      "République sociale : égalité des chances ; éducation gratuite, logement, emploi, santé."
    ],
    dates: ["1881-1882 : lois Jules Ferry", "1946 : Sécurité sociale"],
    figures: ["Jules Ferry"]
  },

  "mise-en-situation": {
    title: "Mise en situation et points pratiques",
    icon: "📝",
    summary: "Points concrets souvent demandés à l'examen civique : Conseil constitutionnel, compétences locales, élection du maire, vote des citoyens européens, QPC.",
    keyPoints: [
      "Le Conseil constitutionnel vérifie que les lois respectent la Constitution. Il est le gardien de la norme suprême du droit français.",
      "La région est compétente pour les lycées, le département pour les collèges, la commune pour les écoles.",
      "Le maire est élu par le conseil municipal, qui est élu par les habitants de la commune.",
      "Les citoyens de l'Union européenne peuvent voter et se présenter aux élections municipales et européennes dans leur pays de résidence.",
      "La QPC permet à tout justiciable, lors d'un procès, de contester une loi qu'il estime contraire aux droits garantis par la Constitution."
    ],
    dates: [],
    figures: []
  }
};