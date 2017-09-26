const low = require('lowdb');
const bodyParser = require('body-parser');
const uuid = require('uuid');

function setupDb() {
  const db = low();

  db.defaults({ stores: [], store: [], department: [] })
    .value();

  const store1 = {
    id: uuid(),
    name: 'amstelveen',
    slug: 'amstelveen',
    address: {
      cityName: 'Amstelveen',
      postalCode: '1181 ZS',
      streetName: 'Galerij',
      number: '152',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/amstelveen-2000x1097.jpg',
  };

  const store2 = {
    id: uuid(),
    name: 'amsterdam',
    slug: 'amsterdam',
    address: {
      cityName: 'Amsterdam',
      postalCode: '1012JS',
      streetName: 'Dam',
      number: '1',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/amsterdam-2000x1097.jpg',
  };

  const store3 = {
    id: uuid(),
    name: 'den haag',
    slug: 'den-haag',
    address: {
      cityName: 'Den Haag',
      postalCode: '2512 AX',
      streetName: 'Wagenstraat',
      number: '32',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/denhaag-2000x1097.jpg',
  };


  db.get('stores').push(store1).value();
  db.get('stores').push(store2).value();
  db.get('stores').push(store3).value();

  db.get('store').push({
    id: uuid(),
    storeName: store1.name,
    slug: store1.slug,
    address: {
      cityName: 'amstelveen',
      postalCode: '1181 ZS',
      streetName: 'Galerij',
      number: '152',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/amstelveen-2000x1097.jpg',
    openingHours: {
      currentWeek: {
        sunday: '11.00 - 21.00',
        saturday: '10.00 - 21.00',
        tuesday: '10.00 - 21.00',
        wednesday: '10.00 - 21.00',
        thursday: '10.00 - 21.00',
        friday: '10.00 - 21.00',
        monday: '11.00 - 21.00',
      },
      nextWeek: {
        sunday: '11.00 - 21.00',
        saturday: '10.00 - 21.00',
        tuesday: '10.00 - 21.00',
        wednesday: '10.00 - 21.00',
        thursday: '10.00 - 21.00',
        friday: '10.00 - 21.00',
        monday: '11.00 - 21.00',
      },
    },
    floors: [
      {
        id: uuid(),
        name: -1,
        departments: [
          { id: uuid(), name: 'Bed- en badtextiel' },
          { id: uuid(), name: 'Boeken en schrijfwaren' },
          { id: uuid(), name: 'Kindermode en -schoenen' },
          { id: uuid(), name: 'Klantenservice' },
          { id: uuid(), name: 'Koken en tafelen' },
          { id: uuid(), name: 'Reistassen en koffers' },
          { id: uuid(), name: 'Onlinebestellingen ophalen' },
          { id: uuid(), name: 'Woonaccessoires' },
        ],
      }, {
        id: uuid(),
        name: 0,
        departments: [
          { id: uuid(), name: 'Cosmetica en geuren' },
          { id: uuid(), name: 'Damesschoenen' },
          { id: uuid(), name: 'Herenaccessoires en -lederwaren' },
          { id: uuid(), name: 'Herenmode en -schoenen' },
          { id: uuid(), name: 'Horloges en sieraden' },
          { id: uuid(), name: 'Meesterbanketbakker' },
        ],
      }, {
        id: uuid(),
        name: 1,
        departments: [
          { id: uuid(), name: 'Beenmode' },
          { id: uuid(), name: 'Damesaccessoires' },
          { id: uuid(), name: 'Damesmode' },
          { id: uuid(), name: 'Lingerie' },
          { id: uuid(), name: 'Restaurant La Ruche' },
          { id: uuid(), name: 'Toiletten' },
        ],
      },
    ],
    parking: {
      description: 'Parkeren kan in de volgende parkeergarages:  Q-Park Stadsplein en Q-Park Schouwburggarage',
      rates: 'Indien u met het openbaar vervoer komt vanaf station Amsterdam Centraal, neemt u buslijn 170 of 172. Wanneer u uitstapt bij bushalte Amstelveen is de Bijenkorf lopend te bereiken binnen 5 minuten.',
      link: 'http://www.q-park.nl/nl/parkeren-bij-q-park/per-stad/amstelveen',
    },
  }).value();
  db.get('store').push({
    description: 'This is description for AMSTERDAM Store',
    storeName: store2.name,
    slug: store2.slug,
    id: uuid(),
  }).value();
  db.get('store').push({
    description: 'This is description for DEN HAAG store',
    storeName: store3.name,
    slug: store3.slug,
    id: uuid(),
  }).value();

  db.get('department').push({
    name: 'Damesschoenen',
    slug: 'damesschoenen',
    descreption: 'Some description!',
    store: {
      name: 'amstelveen',
      slug: 'amstelveen',
    },
    floor: {
      number: 1,
      name: 'Etage 1',
      slug: 'etage-1',
    },
    sections: [
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'First section',
        descreption: 'Some descreption',
        type: 'Brand',
        brand: {
          name: 'Nike',
          slug: 'nike',
          logo: 'URL',
        },
      },
      {
        id: uuid(),
        name: 'Toilet',
        descreption: 'You can pee here!',
        type: 'Toilet',
      },
    ],
  }).value();
  db.get('department').push({
    name: 'rara',
    slug: 'rara',
    descreption: 'Some description!',
    store: {
      name: 'rara',
      slug: 'amstelveen',
    },
  }).value();
  db.get('department').push({
    name: 'rara',
    slug: 'rara',
    descreption: 'Some description!',
    store: {
      name: 'rara',
      slug: 'rara',
    },
  }).value();

  return db;
}

module.exports = (app) => {
  const db = setupDb();

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.json());

  app.get('/api/stores', (req, res) => {
    res.send(db.get('stores').toArray().value());
  });

  app.get('/api/store/:name', (req, res) => {
    const store = db.get('store').filter((l) =>
      l.storeName === req.params.name
    ).value();
    res.send(store);
  });

  app.get('/api/store/:storeName/:department', (req, res) => {
    const department = db.get('department').filter((d) =>
      d.store.name === req.params.storeName && d.name === req.params.department
    ).value();
    res.send(department);
  });
};
