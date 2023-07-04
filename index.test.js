const axios = require('axios');
const getFestivalData = require('./index');

// Mock axios
jest.mock('axios');

// Create mock data
const mockData = {
    data: {
        records: [{
            fields: {
                nom_de_la_manifestation: "Festival 1",
                commune_principale: "Commune 1",
                departement: "Departement 1",
                periodicite: "Annuelle",
                mois_habituel_de_debut: "Janvier",
                site_web: "http://example.com",
            },
        }, {
            fields: {
                nom_de_la_manifestation: "Festival 2",
                commune_principale: "Commune 2",
                departement: "Departement 2",
                periodicite: "Annuelle",
                mois_habituel_de_debut: "Fevrier",
                site_web: "http://example2.com",
            },
        }],
    },
};

describe('getFestivalData', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    axios.get.mockClear();
  });

  it('should send a GET request', async () => {
    axios.get.mockResolvedValue(mockData);
    await getFestivalData();

    expect(axios.get).toHaveBeenCalledWith('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=15&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');
  });

  it('should return data from response', async () => {
    axios.get.mockResolvedValue(mockData);
    
    const data = await getFestivalData();
    
    expect(data).toEqual(mockData.data);
  });

  it('should handle errors', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));
    
    await expect(getFestivalData()).rejects.toThrow('Network error');
  });
});

