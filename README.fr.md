*See [english version](README.md)*

# Awesome CodeGouvFr

Ce dépôt contient une sélection de logiciels libres répondant aux
critères suivants :

- ils sont activement **maintenus** ;
- ils ont **financés** par un ou plusieurs organismes publics ;
- ils sont **utilisés** par plusieurs administrations ;
- ils sont **fortement réutilisables** par toute administration.

Ces projets forment un sous-ensemble de tous ceux qu'on trouve sur
[code.gouv.fr/public](https://code.gouv.fr/public/) et ils sont
publiés sur cette page dédiée :
[code.gouv.fr/fr/awesome](https://code.gouv.fr/fr/awesome/)

Ils sont décrits dans les fichiers `*.publiccode.yml` du répertoire
[/dist](/dist/).  Ces fichiers utilisent des noms de champs que nous
détaillons dans la documentation des [métadonnées](metadata.md).

Le format de nos fichiers `.yml` est le même que le format
[publiccode.yml](https://github.com/publiccodeyml/publiccode.yml),
même si nous ne suivons pas strictement le standard publiccode en
omettant certaines données que celui-ci considère obligatoires, et en
en ajoutant d'autres que nous trouvons pertinentes.

Un exemple de description d'un projet se trouve dans le fichier
[template.publiccode.yml](template.publiccode.yml).

# Awesome CodeGouvFr score

En plus des [champs requis](metadata.md#champs-requis), un
score `Awesome CodeGouvFr` est proposé si ces [champs
optionnels](metadata.md#champs-optionnels) sont renseignés :

- un logo du projet ;
- une page d'accueil du projet (indépendamment du dépôt) ;
- un fichier décrivant la façon de contribuer (`CONTRIBUTING.md`) ;
- un fichier décrivant les changements (`CHANGELOG.md`) ;
- un code de conduite (`CODE_OF_CONDUCT.md`) ;
- un fichier décrivant la gouvernance (`GOVERNANCE.md`) ;
- un fichier ou un lien vers la roadmap (`ROADMAP.md`) ;
- un commit de moins de six mois dans une des branches ;
- une nouvelle version (*tag*) de moins de six mois ;
- un fichier de description des auteurs (`AUTHORS.md` ou autre).

Si un projet renseigne 7/10 de ces champs, ce badge peut être utilisé
dans le README du projet:

![Awesome CodeGouvFr score](https://img.shields.io/badge/awesome-codegouvfr_7/10-blue)

# Comment contribuer ?

## Si votre projet est déjà dans la liste

Si vous souhaitez modifier le fichier `*.publiccode.yml` de votre projet, vous pouvez directement soumettre une Pull Request avec vos modifications.

Vous pouvez utiliser le [`template.publiccode.yml`](template.publiccode.yml) comme exemple.

## Pour un nouveau projet
 
 Si vous pensez que votre projet répond aux critères d'entrée de la liste, n'hésitez pas à nous écrire à <contact@code.gouv.fr> pour en discuter.

 Vous pouvez également soumettre une Pull Request contenant le fichier `*.publiccode.yml` de votre projet. Pour le créer, vous pouvez copier le [`template.publiccode.yml`](template.publiccode.yml), ou en générer un à partir de [la petite API d'outillage dédiée](https://github.com/codegouvfr/awesome-codegouvfr-tooling), et le modifier/compléter.

 # Comment mettre à jour la page [code.gouv.fr/fr/awesome](https://code.gouv.fr/fr/awesome) ?

Ce dépôt est utilisé comme un sous-module du [dépôt du site](https://github.com/codegouvfr/codegouvfr-website). Il faut mettre à jour le sous-module dans ce dépôt (`git pull && git commit`).

# Licence

Les données de ce dépôt sont publiées sous licence Ouverte [Etalab
2.0](LICENSES/LICENSE.Etalab-2.0.md).
