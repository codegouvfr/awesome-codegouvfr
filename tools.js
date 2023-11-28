const axios = require("axios");
const { DateTime } = require("luxon");
const YAML = require("yaml");

const ECOSYSTEM_URL = "https://summary.ecosyste.ms/api/v1/projects/lookup";

const ecosystemToPubliccodeMapping = ecosystem => {
    return {
        publiccodeYmlVersion: "0.2",
        name: ecosystem.repository?.full_name,
        url: ecosystem.url,
        landingURL: ecosystem.repository.homepage,
        isBasedOn: ecosystem.repository.fork,
        creationDate: DateTime.fromISO(ecosystem.repository.created_at).toISODate(),
        latestReleaseDate: "",
        latestCommitDate: DateTime.fromISO(ecosystem.repository.pushed_at).toISODate(),
        latestTestedInstallationDate: "",
        latestFundingDate: "",
        logo: ecosystem.repository.icon_url,
        usedBy: [],
        distinctAuthorsCount: 0,
        distinctOrganizationCount: 0,
        roadmap: "",
        softwareType: "",
        distribution: ecosystem.packages.map(package => package.ecosystem),
        description: {
            en: {
                shortDescription: ecosystem.repository.description,
                documentation: ""
            }
        },
        legal: {
            license: ecosystem.repository.license,
            authorsFile: ""
        },
        maintenance: {
            type: "",
            contacts: [{
                name: "",
                email: ""
            }]
        },
        dependsOn: {},
        metadataFiles: {
            readme: ecosystem.repository.metadata.files?.readme,
            license: ecosystem.repository.metadata.files?.license,
            contributing: ecosystem.repository.metadata.files?.contributing,
            changelog: ecosystem.repository.metadata.files?.changelog,
            codeOfConduct: ecosystem.repository.metadata.files?.code_of_conduct,
            governance: ecosystem.repository.metadata.files?.governance,
            funding: ecosystem.repository.metadata.files?.funding
        },

        lastUpdated: DateTime.now().toISODate(),
        score: 0
    };
}

const ecosystemToPubliccode = async repositoryUrl => {
    const response = await axios.get(ECOSYSTEM_URL, {
        params: {
            url: repositoryUrl
        }
    });
    const ecosystem = response.data;
    const publiccodeJson = ecosystemToPubliccodeMapping(ecosystem);
    const publiccodeYaml = YAML.stringify(publiccodeJson);
    console.debug(publiccodeYaml);
    return publiccodeYaml;
}

module.exports = {
    ecosystemToPubliccode
}
