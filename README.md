*Voir la [version française](README.fr.md) de ce README*

# Awesome CodeGouvFr

This repository contains a selection of free software that meet the following criteria:

- they are actively **maintained** ;
- they are currently **sponsored** by one or more public administrations;
- they are currently **used** by several public administrations;
- they are **highly reusable** by any public administration.

These projects are a subset of all the projects found on
[code.gouv.fr/public](https://code.gouv.fr/public/) and they can be found on this dedicated page:
[code.gouv.fr/en/awesome](https://code.gouv.fr/fr/awesome/)

They are described in the `*.publiccode.yml` files in the
[/dist](/dist/) directory.  These files use field names that we
detailed in the [metadata](metadata.md) documentation.

The format of our `.yml` files is the same as that of the
[publiccode.yml](https://github.com/publiccodeyml/publiccode.yml) format, 
although we do not strictly follow the publiccode standard by
omitting certain data that it considers mandatory, 
and adding others that we consider relevant.

An example of a project description can be found in the file
[template.publiccode.yml](template.publiccode.yml).

# Awesome CodeGouvFr score

In addition to the [required fields](metadata.md#required-fields), an
`Awesome CodeGouvFr` score will be calculated if these [optional fields](metadata.md#optionalfields) are filled in:

- a project logo ;
- a project home page (independent of the repository) ;
- a file describing how to contribute (`CONTRIBUTING.md`) ;
- a file describing the changes (`CHANGELOG.md`) ;
- a code of conduct file (`CODE_OF_CONDUCT.md`) ;
- a file describing governance (`GOVERNANCE.md`);
- a roadmap file or link (`ROADMAP.md`);
- a commit less than six months old in one of the branches ;
- a new release (*tag*) less than six months old;
- an author description file (`AUTHORS.md` or other).

If a project fills out 7/10 of these fields, this badge can be used
in the project's README:

![Awesome CodeGouvFr score](https://img.shields.io/badge/awesome-codegouvfr_7/10-blue)

# How can I contribute?

## If your project is already in the list

If you want to update your project's `*.publiccode.yml` file, you can submit a pull request directly with your changes.

You can use the [`template.publiccode.yml`](template.publiccode.yml) as an example.

## For a new project
 
 If you think your project meets the entry criteria to be included in the list, feel free to write to us at <contact@code.gouv.fr> to discuss it.

 You can also submit a pull request containing the `*.publiccode.yml` file for your project. To create it, you can copy the [`template.publiccode.yml`](template.publiccode.yml), or generate one from [the small dedicated tooling API](https://github.com/codegouvfr/awesome-codegouvfr-tooling), and modify/complete it.

 # How do I update the [code.gouv.fr/en/awesome](https://code.gouv.fr/fr/awesome) page?

This repository is used as a submodule of the [site repository](https://github.com/codegouvfr/codegouvfr-website). You need to update the submodule in this repository (`git pull && git commit`).

# Licence

The data in this repository is published under the [Etalab
2.0 license](LICENSES/LICENSE.Etalab-2.0.md).
