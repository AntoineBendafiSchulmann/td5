## Festival Data Documentation

# Data Fields
The API returns the following information for each festival:

dept_sk: The department code of the festival's location.
coordonnees_insee: An array representing geographical coordinates in the INSEE system [Latitude, Longitude].
date_de_fin_ancien: The end date of the previous festival.
mois_indicatif_en_chiffre_y_compris_double_mois: The indicative month in figures, including dual-month festivals.
nom_departement: The name of the department where the festival is held.
departement: The code of the department where the festival is held.
periodicite: The periodicity of the festival.
mois_habituel_de_debut: The usual starting month of the festival.
code_postal: The postal code of the festival's location.
complement_domaine: Additional domain of the festival.
autres_communes: Other communes involved in the festival.
libelle_commune_pour_calcul_cp_insee: The common label for INSEE CP calculation.
domaine: The main domain of the festival.
date_debut_ancien: The start date of the previous festival.
code_insee: The INSEE code of the festival's location.
commune_principale: The main commune of the festival.
region: The region where the festival is held.
nom_de_la_manifestation: The name of the festival.
ndeg_identification: The identification number of the festival.
site_web: The website of the festival.
date_de_creation: The creation date of the festival.
check_edition: Check edition status of the festival.
ndeg_de_l_edition_2018: The number of the 2018 edition.
ndeg_de_l_edition_2019: The number of the 2019 edition.
Please refer to this documentation when parsing and using festival data in your applications. For any queries, please contact the data provider.


# Usage
The API fetches data from a public festival dataset and prints out the information about each festival in the console. To run the application:
  
  ```bash
  node index.js 
  ```


# Tests
To run the tests for this project, execute the following command:

```bash
npm run test
```