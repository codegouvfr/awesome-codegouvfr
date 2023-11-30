# Spécification du format `publiccode[gouvfr].yml`

## Champs obligatoires (test est True)

| Nom | Type | Collecte | Test | Champ `publiccode.yml` | Champ ecosyste.ms | Champ actuel | Critère SFPC | Description |
|----|----|----|----|----|----|----|----|----|
| `publiccodeYmlVersion` | String | Statique (= “0.2”) | !vide | `publiccodeYmlVersion` (obligatoire) | - | - | - |    |
| `name` | String | Automatique | !vide | `name` (obligatoire) | `repository.full_name` |    |    |    |
| `url` | URL | Automatique | !vide | `url` (obligatoire) | `url` |    |    |    |
| `softwareType` | Enum | Manuel | !vide | `softwareType` (obligatoire) | - | - |    |    |
| `description/[lang]/shortDescription` | String | Automatique | !vide [+ est lisible] | `description/[lang]/shortDescription` (obligatoire) | `repository.description` | `description` | Make the codebase findable |    |
| `metadataFiles/readme` | URL | Automatique | !vide [+ est lisible] | - | `repository.metadata.files.readme` | - | Document the code |    |
| `legal/license` \n`metadataFiles/license` | String\nURL | Automatique | !vide [+ est OSI] | `legal/license`(obligatoire) | `repository.license`\n`repository.metadata.files.license` | `license` | Publish with an open license |    |
| `description/[lang]/documentation` | URL | Manuel | !vide | `description/[lang]/documentation` (optionnel) | - | - | Document the code |    |
| `latestTestedInstallationDate` | Date | Manuel | !vide | - | - | - | Document the code |    |
| `creationDate` | Date | Automatique | > 6 mois | - | `repository.created_at` | `creation_date` |    |    |
| `usedBy` | String[] | Manuel | longueur >= 2 | `usedBy` (optionnel) | - | - | Make the codebase reusable and portable | Liste des noms des administrations |
| `fundedBy` | String[] | Manuel | !vide | - | - | - |    | Liste des liens des administrations dans l’[annuaire du SP](https://lannuaire.service-public.fr/) ou à défaut des noms |
| `maintenance/contacts` | String[] | Manuel | !vide | `maintenance/contacts` (obligatoire dans certains cas) | - | - | Welcome contributors | Liste des e-mails ou URLs de contact des mainteneurs |

### Champs obligatoires `publiccode.yml` écartés pour le moment

* `platforms`
* `categories`
* `developmentStatus`
* `description/[lang]/longDescription`
* `description/[lang]/features`
* `maintenance/type`
  * `maintenance/contractors` (if `maintenance/type` is `contract`)
* `localisation/localisationReady`
* `localisation/availableLanguages`

## Champs optionnels (test est True => score += 1)

| Nom | Type | Collecte | Test | Champ `publiccode.yml` | Champ ecosyste.ms | Champ actuel | Critère SFPC | Description |    |
|----|----|----|----|----|----|----|----|----|----|
| `metadataFiles/contributing` | URL | Automatique | !vide | - | `repository.metadata.files.contributing` |    | Welcome contributors |    | 1 |
| `metadataFiles/changelog` | URL | Automatique | !vide | - | `repository.metadata.files.changelog` |    | Document codebase maturity |    | 2 |
| `metadataFiles/codeOfConduct` | URL | Automatique | !vide | - | `repository.metadata.files.code_of_conduct` |    | Welcome contributors |    | 3 |
| `metadataFiles/governance` | URL | Automatique | !vide | - | `repository.metadata.files.code_of_conduct` |    | Welcome contributors |    | 4 |
| `roadmap` | URL | Automatique | !vide | `roadmap` (optionnel) | EN ATTENTE |    | Welcome contributors |    | 5 |
| `latestCommitDate` | Date | Automatique | < 6 mois | - | `repository.pushed_at` |    |    |    | 6 |
| `latestReleaseDate` | Date | Automatique | < 6 mois | `releaseDate` (obligatoire) | EN ATTENTE |    | Maintain version control | Date du dernier tag | 7 |
| `legal/authorsFile`\n`authors/authorsFile/distinctAuthorsCount`\n`authors/authorsFile/distinctOrganizationsCount` | Number | Automatique\nManuel\nManuel | !vide\n> 1\n> 1 | - | EN ATTENTE |    |    |    | 8 |
| `packaging` | String[] | Automatique | longueur > 0 | - | `packages.ecosystem` |    |    | Liste d’URLs des packages distribués | 9 |
| `landingUrl` | URL | Automatique | !vide | `landingUrl` (optionnel) | `homepage` |    |    |    | 10 |

## Autres champs optionnels non comptabilisés dans le score



| Nom | Type | Collecte | Champ `publiccode.yml` | Champ ecosyste.ms | Champ actuel | Critère SFPC | Description |
|----|----|----|----|----|----|----|----|
| `logo` | URL | Automatique | `logo` (optionnel) | `repository.icon_url` |    |    |    |
| `awesomeScore` | Number | Automatique | - | - | - | - | Complètude/score /10 des champs optionnels |

## Autres champs ?

* accessibilité
