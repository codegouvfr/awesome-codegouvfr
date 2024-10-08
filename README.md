[![img](https://img.shields.io/badge/code.gouv.fr-contributif-blue.svg)](https://code.gouv.fr/documentation/#/publier)

*Voir la [version française](README.fr.md) de ce README.*

⚠️️ This repository has been archived in Sept. 2024.

The list of Awesome code.gouv.fr repositories is now maintained in the [codegouvfr-data](https://git.sr.ht/~codegouvfr/codegouvfr-data) repository and data is collected from `publiccode.yml` files at the root the repositories.

# Awesome CodeGouvFr criteria

This repository contains a selection of free **software** that meet the following criteria:

1. their source code is **published** under an *open source licence* and *documented*;
2. they have been actively **maintained** by *one or more contactable maintainers* for *at least 6 months*;
3. they are currently **sponsored** by *one or more public administrations*;
4. they are currently **used** (i.e. deployed) by *several public administrations*;

These criteria make them **strongly reusable** by any administration.

These projects are a subset of all the projects found on
[code.gouv.fr/public](https://code.gouv.fr/public/) and they can be found on this dedicated page:
[code.gouv.fr/en/awesome](https://code.gouv.fr/fr/awesome/).

They are described in the `*.publiccode.yml` files in the
[/dist](/dist/) directory.  The format of this file is detailed in the [schema documentation](schema.md).

They are also published in JSON format: [code.gouv.fr/data/awesome-codegouvfr.json](https://code.gouv.fr/data/awesome-codegouvfr.json).

An example of a project description can be found in the file
[template.publiccode.yml](template.publiccode.yml).

# Awesome CodeGouvFr score

In addition to the required criteria, an
`Awesome CodeGouvFr` score will be calculated if these [optional criteria](schema.md#champs-optionnels-awesome-codegouvfr) are verified:

- there is a project home page (independent of the repository);
- the latest release (*tag*) is less than six months old;
- the latest commit (in any branch) is less than six months old;
- there is a project logo;
- there is a file or a link to the roadmap (`ROADMAP.md`);
- there is an author description file (`AUTHORS.md` or other);
- thre is a file describing how to contribute (`CONTRIBUTING.md`);
- there is a file describing the changes (`CHANGELOG.md`);
- there is a code of conduct file (`CODE_OF_CONDUCT.md`);
- there is a file describing governance (`GOVERNANCE.md`).

If a project validates 7/10 of these fields, this badge can be used
in the project's `README`:

![Awesome CodeGouvFr score](https://img.shields.io/badge/awesome-codegouvfr_7/10-blue)

This score confirms the exemplary nature of the project.

# How can I contribute?

## If your project is already in the list

If you want to update your project's `*.publiccode.yml` file, you can submit a pull request directly with your changes.

You can use the [`template.publiccode.yml`](template.publiccode.yml) as an example.

## For a new project
 
 If you think your project meets the entry criteria to be included in the list, feel free to write to us at <contact@code.gouv.fr> to discuss it.

 You can also submit a pull request containing the `*.publiccode.yml` file for your project. To create it, you can copy the [`template.publiccode.yml`](template.publiccode.yml), or generate one from [the small dedicated tooling API](https://github.com/codegouvfr/awesome-codegouvfr-tooling), and modify/complete it.

# Licence

The data in this repository is published under the [Etalab
2.0 license](LICENSES/LICENSE.Etalab-2.0.md).
