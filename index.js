const axios = require('axios');

async function getFestivalData() {
    const response = await axios.get('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=15&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');

    response.data.records.forEach(record => {
        console.log(record.fields.nom_de_la_manifestation + ' (' + record.fields.commune_principale + ' ' + record.fields.departement + ')' + ', périodicité:' + record.fields.periodicite + ', débute habituellement le  ' + record.fields.mois_habituel_de_debut + ', Site web: ' + record.fields.site_web);
    });

    return response.data;
}

if (require.main === module) {
    getFestivalData();
}

module.exports = getFestivalData;
