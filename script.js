document.getElementById("copy-email").addEventListener("click", function () {
  const email = "alexisbastide23@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const button = document.getElementById("copy-email");
      button.innerHTML = `<span class="icon">
                <i class="fas fa-envelope"></i>
            </span>
            <span>Email copié !</span>`;
      setTimeout(function () {
        button.innerHTML = `<span class="icon">
                    <i class="fas fa-envelope"></i>
                </span>
                <span>Email</span>`;
      }, 2000);
    })
    .catch((err) => {
      console.error("Une erreur s'est produite lors de la copie :", err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    1: {
      description: `
                <h2 class="title is-2">CapyNote : Une solution pour la gestion des parcours étudiants</h2>

                <h3 class="title is-3">Contexte du projet</h3>
                <p class="content">
                    Le projet CapyNote s’inscrit dans le cadre d’un <strong>travail académique</strong> réalisé au cours du BUT Informatique, en deuxième année (BUT 2). 
                    L’objectif était de développer une application similaire à <strong>SCOdoc</strong>, utilisée pour la gestion des parcours étudiants. 
                    Le projet a été réalisé en <strong>4 mois</strong>, au sein d’une équipe de <strong>4 étudiants</strong>, dans un cadre simulant un environnement professionnel.
                </p>
                <p class="content">Les fonctionnalités principales de CapyNote incluent :</p>
                <ul class="list">
                    <li>Gestion des parcours et des unités d’enseignement.</li>
                    <li>Attribution et calcul des notes et moyennes.</li>
                    <li>Gestion d’avis pour l’orientation des étudiants.</li>
                </ul>

                <h3 class="title is-3">Méthodes de travail et résultats obtenus</h3>
                <p class="content">
                    Nous avons adopté une méthodologie de travail en itérations, inspirée des principes agiles. Chaque étape a contribué au développement de compétences spécifiques :
                </p>
                <ol class="list is-decimal">
                    <li>
                        <strong>Analyse des besoins et conception :</strong> 
                        Lors de cette phase, j’ai travaillé sur la formalisation des besoins du client (compétence AC2) et sur la modélisation UML (diagrammes de classes et de cas d’utilisation), ce qui m’a permis d’améliorer ma capacité à <strong>formaliser les besoins du client et de l'utilisateur</strong> et à structurer des solutions informatiques adaptées.
                    </li>
                    <li>
                        <strong>Développement technique :</strong> 
                        La mise en œuvre d’une architecture MVC en PHP et SQL m’a donné l’opportunité de consolider mes compétences en <strong>conception et développement d’applications communicantes</strong> (compétence AC1) et en <strong>optimisation des modèles de données</strong> (compétence AC1).
                    </li>
                    <li>
                        <strong>Collaboration et gestion de projet :</strong> 
                        En utilisant GitHub pour le versionnement et en participant à des réunions hebdomadaires, j’ai appris à <strong>intégrer efficacement une équipe informatique</strong> (compétence AC3) et à <strong>définir et suivre une démarche de projet</strong> (compétence AC4).
                    </li>
                </ol>
                <p class="content"><strong>Résultats clés :</strong></p>
                <ul class="list">
                    <li>Une application fonctionnelle, validée par des tests sur des données simulées.</li>
                    <li>Une interface utilisateur ergonomique, conforme aux principes d'accessibilité (compétence AC2).</li>
                    <li>Un code respectant les bonnes pratiques de programmation (compétence AC3).</li>
                </ul>

                <h3 class="title is-3">Compétences développées</h3>
                <p class="content">
                    Le projet CapyNote m’a permis de développer des compétences techniques et humaines essentielles. Voici les compétences travaillées, avec des exemples concrets de leur mise en œuvre :
                </p>
                <p class="content"><strong>Compétences techniques :</strong></p>
                <ul class="list">
                    <li>
                        <strong>AC1 :</strong> Conception et développement des fonctionnalités de gestion des notes et des moyennes, en optimisant les modèles de données.
                    </li>
                    <li>
                        <strong>AC2 :</strong> Application des principes d’ergonomie pour concevoir une interface intuitive et accessible.
                    </li>
                    <li>
                        <strong>AC3 :</strong> Utilisation des bonnes pratiques de programmation pour assurer la maintenabilité du code et le respect des normes.
                    </li>
                </ul>
                <p class="content"><strong>Compétences humaines :</strong></p>
                <ul class="list">
                    <li>
                        <strong>AC3 :</strong> Collaboration efficace en équipe, notamment grâce à l’utilisation de GitHub pour le partage du code et la gestion des versions.
                    </li>
                    <li>
                        <strong>AC4 :</strong> Suivi rigoureux du projet, avec respect des échéances fixées, dans un contexte simulant une commande réelle.
                    </li>
                </ul>

                <h3 class="title is-3">Ma contribution personnelle</h3>
                <p class="content">
                    Mes responsabilités personnelles dans ce projet incluaient :
                </p>
                <ul class="list">
                    <li>La conception et le développement du module de calcul des moyennes (compétence AC1).</li>
                    <li>La mise en œuvre des algorithmes de génération de relevés (compétence AC1).</li>
                    <li>La rédaction et l’exécution de tests unitaires pour valider la qualité du système (compétence AC4).</li>
                </ul>

                <h3 class="title is-3">Conclusion</h3>
                <p class="content">
                    Ce projet m’a permis de mettre en pratique de nombreuses compétences informatiques et humaines. Il constitue une base solide pour relever de futurs défis techniques, tout en continuant à perfectionner mes aptitudes à collaborer et à mener des projets dans des environnements professionnels.
                </p>
            `,
      image: "ressources/images/capyNote.png",
    },
    2: {
      description: `
                <h2 class="title is-2">Trains : Adaptation d'un jeu de société japonais en Java</h2>
                <h3 class="title is-3">Contexte du projet</h3>
                <p class="content">
                    "Trains" est un projet académique réalisé en binôme dans le cadre du BUT Informatique. Il vise à développer une version numérique 
                    du célèbre jeu de société japonais, jouable à plusieurs en local. Ce projet s'inscrit dans un objectif d'apprentissage technique et 
                    de travail collaboratif, tout en recréant les règles et mécaniques du jeu original.
                </p>
                <p class="content">
                    Le projet s’est déroulé sur une période de <strong>3 mois</strong>, avec une répartition équitable des tâches et l'utilisation d'outils 
                    pour faciliter la communication et la gestion de projet.
                </p>

                <h3 class="title is-3">Méthodes de travail et résultats obtenus</h3>
                <p class="content">
                    Voici les principales étapes du projet et leurs résultats associés :
                </p>
                <ol class="list is-decimal">
                    <li>
                        <strong>Analyse des besoins (Compétence C1.1) :</strong> Nous avons analysé en détail les règles du jeu de société 
                        pour en définir les besoins fonctionnels et techniques. Cette phase a permis de structurer le projet de manière rigoureuse.
                    </li>
                    <li>
                        <strong>Conception UML (Compétence C1.2) :</strong> Les interactions entre les entités (joueurs, cartes, plateau) ont été modélisées
                        à l'aide de diagrammes UML (classes et séquences). Cela a servi de base solide pour le développement.
                    </li>
                    <li>
                        <strong>Développement en Java et JavaFX (Compétence C1.3) :</strong> Création d'une application orientée objet avec une interface 
                        graphique ergonomique, incluant l'affichage du plateau de jeu, la gestion des scores, et les actions des joueurs.
                    </li>
                    <li>
                        <strong>Tests et validation (Compétence C3.2) :</strong> Nous avons élaboré des scénarios de test pour garantir que chaque 
                        fonctionnalité respectait les règles du jeu et fonctionnait correctement.
                    </li>
                </ol>

                <p class="content"><strong>Résultats obtenus :</strong></p>
                <ul class="list">
                    <li>Une application jouable respectant les mécaniques du jeu original.</li>
                    <li>Une interface graphique intuitive et responsive, développée avec JavaFX.</li>
                </ul>

                <h3 class="title is-3">Compétences développées</h3>
                <p class="content">
                    Le projet "Trains" a permis de développer les compétences suivantes, en lien avec les objectifs pédagogiques du BUT Informatique :
                </p>
                <ul class="list">
                    <li><strong>C1.1 : Analyser un besoin et le modéliser</strong> — Étude des règles du jeu et identification des besoins fonctionnels, 
                    traduits en concepts informatiques tels que les entités, relations, et flux d'interaction.</li>
                    <li><strong>C1.2 : Concevoir une application</strong> — Réalisation de diagrammes UML pour modéliser les interactions entre les joueurs, 
                    les cartes, et le plateau. Cette phase a renforcé mes compétences en modélisation et design logiciel.</li>
                    <li><strong>C1.3 : Développer des fonctionnalités</strong> — Implémentation de mécanismes complexes en Java, tels que la gestion des 
                    actions des joueurs et l'affichage en temps réel des scores via JavaFX.</li>
                    <li><strong>C3.2 : Tester une application</strong> — Écriture de tests unitaires et réalisation de tests utilisateurs pour valider 
                    la conformité des fonctionnalités aux règles du jeu.</li>
                    <li><strong>C3.3 : Collaborer en équipe</strong> — Travail en binôme avec un partage équilibré des responsabilités et l'utilisation 
                    d'outils comme Git pour le versionnement et la gestion collaborative du code.</li>
                </ul>

                <h3 class="title is-3">Ma contribution personnelle</h3>
                <p class="content">
                    Dans ce projet, mes contributions principales incluent :
                </p>
                <ul class="list">
                    <li>La conception et le développement des mécaniques principales du jeu, telles que la gestion des cartes, des joueurs, et des scores.</li>
                    <li>La création de l'interface graphique en JavaFX, avec une attention particulière portée à l'ergonomie et à la clarté.</li>
                    <li>La rédaction de tests unitaires pour valider le bon fonctionnement des algorithmes et garantir la fiabilité de l'application.</li>
                </ul>

                <h3 class="title is-3">Conclusion</h3>
                <p class="content">
                    Le projet "Trains" m’a permis de développer des compétences variées en développement logiciel (C1.1, C1.2, C1.3) 
                    tout en consolidant mes aptitudes en gestion collaborative (C3.3). Cette expérience a également renforcé ma capacité 
                    à tester et valider une application (C3.2), tout en respectant des contraintes techniques et temporelles. 
                    Elle m’a préparé à gérer des projets similaires dans un cadre professionnel.
                </p>
            `,
      image: "ressources/images/train.png",
    },
    3: {
      description: `
                <h2 class="title is-2">BDD Plateforme Musicale : Création d'une base de données avec Oracle SQL</h2>
                <h3 class="title is-3">Contexte du projet</h3>
                <p class="content">
                    Le projet "BDD Plateforme Musicale" avait pour objectif de concevoir et créer une base de données relationnelle à partir de fichiers 
                    CSV complexes, afin de répondre aux besoins d'une plateforme musicale fictive. Réalisé en binôme dans le cadre du BUT Informatique, 
                    ce projet s’inscrit dans un apprentissage approfondi de la gestion de données avec Oracle SQL.
                </p>
                <p class="content">
                    La mission était de manipuler des fichiers contenant des données désorganisées (artistes, albums, genres, utilisateurs, etc.), de 
                    les trier, nettoyer et intégrer dans une base de données structurée. Ce travail a permis de développer une expertise en manipulation 
                    et modélisation des données.
                </p>

                <h3 class="title is-3">Méthodes de travail et résultats obtenus</h3>
                <p class="content">
                    Les étapes principales du projet ont été les suivantes :
                </p>
                <ol class="list is-decimal">
                    <li>
                        <strong>Analyse des besoins et modélisation (Compétence C1.1 et C1.2) :</strong> Nous avons défini les besoins fonctionnels 
                        d’une plateforme musicale (gestion des artistes, albums, utilisateurs, genres, etc.). Ces besoins ont été traduits sous forme de 
                        schéma relationnel (modèle conceptuel et modèle physique de données) pour assurer une organisation claire et efficace.
                    </li>
                    <li>
                        <strong>Préparation des données (Compétence C1.3) :</strong> Importation et traitement des fichiers CSV complexes, en identifiant 
                        et corrigeant les incohérences (données manquantes, doublons, erreurs de format).
                    </li>
                    <li>
                        <strong>Création de la base de données (Compétence C1.3) :</strong> Implémentation du schéma relationnel dans Oracle SQL via 
                        des scripts de création de tables, définition des clés primaires et étrangères, et mise en place des contraintes d'intégrité.
                    </li>
                    <li>
                        <strong>Insertion des données et requêtes (Compétence C2.1) :</strong> Chargement des données nettoyées dans les tables SQL. 
                        Nous avons ensuite écrit des requêtes complexes pour répondre aux besoins typiques d'une plateforme musicale, comme la recherche 
                        d'artistes, la recommandation d'albums par genre ou les statistiques d'utilisation.
                    </li>
                </ol>

                <p class="content"><strong>Résultats obtenus :</strong></p>
                <ul class="list">
                    <li>Une base de données relationnelle entièrement fonctionnelle, conforme au modèle conceptuel et répondant aux besoins d'une 
                    plateforme musicale.</li>
                    <li>Des données nettoyées et organisées pour permettre des requêtes performantes.</li>
                    <li>Des scripts SQL bien documentés, respectant les bonnes pratiques de développement.</li>
                </ul>

                <h3 class="title is-3">Compétences développées</h3>
                <p class="content">
                    Ce projet a permis de développer les compétences suivantes, en lien avec les objectifs pédagogiques du BUT Informatique :
                </p>
                <ul class="list">
                    <li><strong>C1.1 : Analyser un besoin et le modéliser</strong> — Identification des besoins spécifiques d'une plateforme musicale et 
                    création de modèles conceptuels et physiques pour organiser les données de manière cohérente.</li>
                    <li><strong>C1.2 : Concevoir une base de données</strong> — Traduction des modèles en un schéma relationnel, avec une attention 
                    particulière portée à l’intégrité et à la normalisation des données.</li>
                    <li><strong>C1.3 : Développer des fonctionnalités liées à la gestion de données</strong> — Création des tables et gestion des relations 
                    avec Oracle SQL, ainsi que le nettoyage et l'importation des données à partir de fichiers CSV complexes.</li>
                    <li><strong>C2.1 : Exploiter une base de données</strong> — Écriture de requêtes SQL avancées pour répondre à des besoins spécifiques 
                    (statistiques, recherches, etc.).</li>
                    <li><strong>C3.3 : Collaborer en équipe</strong> — Travail en binôme pour partager les tâches et résoudre les problèmes liés à la 
                    manipulation et au nettoyage des données.</li>
                </ul>

                <h3 class="title is-3">Ma contribution personnelle</h3>
                <p class="content">
                    Dans ce projet, mes contributions principales incluent :
                </p>
                <ul class="list">
                    <li>La définition des besoins et la conception du modèle conceptuel et relationnel de la base de données.</li>
                    <li>La gestion des fichiers CSV : tri, nettoyage, et organisation des données pour l’importation.</li>
                    <li>La rédaction de scripts SQL pour créer les tables, définir les relations, et insérer les données nettoyées.</li>
                    <li>La création et l’optimisation de requêtes SQL répondant à des besoins complexes.</li>
                </ul>

                <h3 class="title is-3">Conclusion</h3>
                <p class="content">
                    Ce projet m’a permis de développer des compétences solides en gestion et modélisation de données (C1.1, C1.2, C1.3) tout en 
                    renforçant mes capacités à exploiter une base de données via des requêtes avancées (C2.1). Travailler en binôme a également 
                    favorisé le développement de compétences collaboratives (C3.3). Cette expérience m’a préparé à gérer des projets similaires 
                    dans des environnements professionnels nécessitant des bases de données complexes.
                </p>
            `,
      image: "ressources/images/musique.png",
    },
  };
  document.querySelectorAll(".clickable").forEach((projectCard) => {
    projectCard.addEventListener("click", (event) => {
      const projectId = event.currentTarget.getAttribute("data-project");
      const project = projects[projectId];
      document.getElementById("modal-description").innerHTML =
        project.description;
      document.getElementById("modal-image").src = project.image;

      document.getElementById("modal1").classList.add("is-active");
    });
  });

  document.querySelector(".modal-close").addEventListener("click", () => {
    document.getElementById("modal1").classList.remove("is-active");
  });

  document.querySelector(".modal-background").addEventListener("click", () => {
    document.getElementById("modal1").classList.remove("is-active");
  });
});
