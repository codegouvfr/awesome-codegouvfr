# Présentation du schéma utilisé pour les fichiers `*.publiccode.yml`

Le format de ces fichiers est inspiré de
[publiccode.yml](https://github.com/publiccodeyml/publiccode.yml), dont nous ne respectons pas strictement le standard.

Nous avons gardé certains champs obligatoires et écarté d'autres champs obligatoires, rendus certains champs obligatoires optionnels et vice-versa, et ajouté de nouveaux champs.

Nous en avons extrait un format propre, dont nous détaillons les champs (par ordre d'apparition) dans ce document.

Les **champs requis** sont les champs dont la présence est obligatoire et renseignés tels que le test est valide pour pouvoir apparaître dans le classement.

Les **champs optionnels `Awesome CodeGouvFr`**, au nombre de 10, sont utilisés pour le calcul d'un score `Awesome CodeGouvFr` /10. Ce score est incrémenté de 1 point à chaque test de champ valide.

D'**autres champs optionnels**, non comptabilisés dans le score, ajoutent de l'information que nous jugeons pertinente au projet.

Nous comparons ces champs avec le format `publiccode.yml` dans le document [crosswalk.csv](crosswalk.csv), ainsi qu'avec le format [`Projet`](https://summary.ecosyste.ms/docs/index.html) utilisé par l'API `summary` d'ecosyste.ms et le format actuel utilisé pour [code.gouv.fr/public](https://code.gouv.fr/public).

Nous détaillons également la différence avec le format `publiccode.yml` ci-dessous.

Un exemple d'utilisation de ce format se trouve dans le fichier
[template.publiccode.yml](template.publiccode.yml).

## Champs requis

| Nom | Type | Collecte | Test | Description |
|----|----|----|----|----|
| `publiccodeYmlVersion` | String | Statique (= “0.2”) | !vide | Version du format `publiccode.yml` : N/A pour le moment
| `name` | String | Automatique | !vide | Nom du projet
| `url` | URL | Automatique | !vide | Lien vers le dépôt
| `creationDate` | Date | Automatique | > 6 mois | Date de création du projet (1er commit)
| `latestTestedInstallationDate` | Date | Manuel | !vide | Date de dernière installation (exécution des instructions du `README` ?) réussie : N/A pour le moment
| `usedBy` | String[] | Manuel | longueur >= 2 | Liste des noms des administrations réutilisatrices
| `fundedBy` | {String, URL}[] | Manuel | !vide | Liste des noms et des liens dans l’[annuaire du SP](https://lannuaire.service-public.fr/) des administrations qui participent au financement, ou à défaut des noms seuls
| `softwareType` | Enum | Manuel | !vide | Type de logiciel selon la typologie de `publiccode.yml`
| `description/[lang]/shortDescription` | String | Automatique | !vide [+ est lisible] | Description courte du projet
| `description/[lang]/documentation` | URL | Manuel | !vide | Lien vers la documentation du projet (site dédié ou lien vers un `README`)
| `legal/license` | String | Automatique | !vide [+ est OSI] | Type de licence du dépôt
| `maintenance/type` | String | Manuel | !vide | Type de maintenance du projet selon la typologie de `publiccode.yml` |
| `maintenance/contacts` | {String, String}[] | Manuel | !vide | Liste des contacts des mainteneurs : adresse e-mail et/ou URL |
| `metadataFiles/readme` | URL | Automatique | !vide [+ `README` est lisible ?] | Lien relatif vers le fichier `README`
| `metadataFiles/license` | URL | Automatique | !vide | Lien relatif vers le fichier de licence (quid si plusieurs ?)
| `lastUpdated` | Date | Manuel ou automatique | !vide | Date de dernière mise à jour du fichier

## Champs optionnels `Awesome CodeGouvFr`

| Nom | Type | Collecte | Test | Description |    |
|----|----|----|----|----|----|
| `landingUrl` | URL | Automatique | !vide | Site web du projet | 1 |
| `latestRelease/date` | Date | Automatique | < 6 mois | Date de la dernière version (tag) du projet | 2 |
| `latestCommitDate` | Date | Automatique | < 6 mois | Date du dernier commit | 3 |
| `logo` | URL | Automatique |!vide | Lien (relatif ou absolu) vers le logo du projet | 4 |
| `roadmap` | URL | Automatique | !vide | Lien (relatif ou absolu) vers la roadmap du projet | 5 |
| `legal/authorsFile` | URL | Automatique | !vide | Lien relatif vers le fichier `authors` | 6* |
| `authors/authorsFile/distinctAuthorsCount` | Number | Manuel | > 1 | Nombre d'auteurs (cités dans le fichier correspondant) distincts | 6* |
| `authors/authorsFile/distinctOrganizationsCount` | Number | Manuel | > 1 | Nombre d'organisations (citées dans le fichier correspondant) distinctes | 6* |
| `metadataFiles/contributing` | URL | Automatique | !vide | Lien relatif vers le fichier `contributing` | 7 |
| `metadataFiles/changelog` | URL | Automatique | !vide |Lien relatif vers le fichier `changelog` | 8 |
| `metadataFiles/codeOfConduct` | URL | Automatique | !vide | Lien relatif vers le code de conduite | 9 |
| `metadataFiles/governance` | URL | Automatique | !vide | Lien relatif vers le fichier `governance` | 10 |

**Le critère 6 est divisé en 3 sous-critères qui doivent être vrais simultanément.*

## Autres champs optionnels 

| Nom | Type | Collecte | Description |
|----|----|----|----|
| `latestRelease/version` | Date | Automatique | Nom de la dernière version (tag) du projet
| `packages` | {String, URL}[] | Automatique | Liste des distributions (nom du système et URL)
| `awesomeShield` | String | Automatique | Badge de complètude/score /10 des champs optionnels correspondants |


## Analyse de `publiccode.yml` et différences

Le [`Standard for Public Code`](https://standard.publiccode.net/) est un modèle en cours de développement par la `Foundation for Public Code` visant à accompagner les administrations, via une liste de critères et de bonnes pratiques à respecter, dans le développement et la maintenance de projets logiciels libres.

Ce Standard s'appuie sur le format [`publiccode.yml`](https://github.com/publiccodeyml/publiccode.yml) pour son critère [`Make the codebase findable`](https://standard.publiccode.net/criteria/make-the-codebase-findable.html). Ce [format](https://yml.publiccode.tools/schema.core.html), maintenu par un groupe de travail dédié, vise à définir un format de métadonnées standardisé pour faciliter la découverte des codes sources publics.

### Champs obligatoires dans les deux formats

* `publiccodeYmlVersion`
* `name`
* `url`
* `softwareType`
* `description/[lang]/shortDescription`
* `legal/license`
* `maintenance/type`
* `maintenance/contacts` (if `maintenance/type` is `internal` or `community`) : seul le nom est obligatoire dans `publiccode.yml`, ici c'est l'e-mail

### Champs obligatoires dans `publiccode.yml` rendus optionnels dans notre format

* `releaseDate` devenu `latestRelease/date`

### Champs obligatoires dans `publiccode.yml` écartés de notre format

* `platforms`
* `categories`
* `developmentStatus`
* `description/[lang]/longDescription` (mandatory for at least one language)
* `description/[lang]/features` (mandatory for at least one language)
* `maintenance/contractors` (if `maintenance/type` is `contract`)
* `localisation/*`

### Champs optionnels dans `publiccode.yml` rendus obligatoires dans notre format

* `usedBy` : ajout des liens dans l'annuaire dans notre format
* `description/[lang]/documentation`

### Champs optionnels dans les deux formats

* `landingUrl`
* `softwareVersion` devenu `latestRelease/version`
* `logo`
* `roadmap`
* `legal/authorsFile`

### Autres champs optionnels `publiccode.yml` non retenus

* `applicationSuite`
* `isBasedOn`
* `intendedAudience/*`
* `description/[lang]/localisedName`
* `description/[lang]/apiDocumentation`
* `description/[lang]/screenshots`
* `description/[lang]/videos`
* `description/[lang]/awards`
* `legal/mainCopyrightOwner`
* `legal/repoOwner`
* `dependsOn/*`

### Nouveaux champs de notre format

* `creationDate` (obligatoire)
* `latestCommitDate` (optionnel)
* `latestTestedInstallationDate` (obligatoire)
* `fundedBy` (obligatoire)
* `packages` (optionnel)
* `authors/*` (optionnel)
* `metadataFiles/*` (optionnel sauf `/readme` et `/license`)
* `awesomeShield` (optionnel)
* `lastUpdated` (obligatoire)

## Autres champs à considérer

* accessibilité
