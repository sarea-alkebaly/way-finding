const low = require('lowdb');
const bodyParser = require('body-parser');
const uuid = require('uuid');

function setupDb() {
  const db = low();

  db.defaults({ stores: [], store: [] })
    .value();

  const store1 = {
    id: uuid(),
    name: 'amstelveen',
    address: {
      cityName: 'Amstelveen',
      postalCode: '1181 ZS',
      streetName: 'Galerij',
      number: '152',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/amstelveen-2000x1097.jpg.transform/mobile/image.jpg',
  };

  const store2 = {
    id: uuid(),
    name: 'amsterdam',
    address: {
      cityName: 'Amsterdam',
      postalCode: '1012JS',
      streetName: 'Dam',
      number: '1',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/amsterdam-2000x1097.jpg.transform/mobile/image.jpg',
  };

  const store3 = {
    id: uuid(),
    name: 'den haag',
    address: {
      cityName: 'Den Haag',
      postalCode: '2512 AX',
      streetName: 'Wagenstraat',
      number: '32',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/denhaag-2000x1097.jpg.transform/mobile/image.jpg',
  };


  db.get('stores').push(store1).value();
  db.get('stores').push(store2).value();
  db.get('stores').push(store3).value();

  db.get('store').push({
    id: uuid(),
    storeName: store1.name,
    address: {
      cityName: 'Amstelveen',
      postalCode: '1181 ZS',
      streetName: 'Galerij',
      number: '152',
    },
    imageURL: 'https://www.debijenkorf.nl/content/dam/images_debijenkorf/corporate/storepages/amstelveen-2000x1097.jpg.transform/mobile/image.jpg',
    openingHours: [{
      currentWeek: [{
        sunday: '11.00 - 21.00',
        saturday: '10.00 - 21.00',
        tuesday: '10.00 - 21.00',
        wednesday: '10.00 - 21.00',
        thursday: '10.00 - 21.00',
        friday: '10.00 - 21.00',
        monday: '11.00 - 21.00',
      }],
      nextWeek: [{
        sunday: '11.00 - 21.00',
        saturday: '10.00 - 21.00',
        tuesday: '10.00 - 21.00',
        wednesday: '10.00 - 21.00',
        thursday: '10.00 - 21.00',
        friday: '10.00 - 21.00',
        monday: '11.00 - 21.00',
      }],
    }],
    floors: [
      {
        id: uuid(),
        name: 'm1',
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
        name: '0',
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
        name: '1',
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
  }).value();

  db.get('store').push({
    description: 'This is description for AMSTERDAM Store',
    storeName: store2.name,
    id: uuid(),
  }).value();
  db.get('store').push({
    description: 'This is description for DEN HAAG store',
    storeName: store3.name,
    id: uuid(),
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

  // app.post('/api/stores/:name/store', (req, res) => {
  //   const existingLink = db.get('store').find({ url: req.body.url }).value();
  //   if (existingLink) {
  //     return res.send(403);
  //   }

  //   const link = Object.assign({}, req.body, {
  //     id: uuid(),
  //     voteCount: 0,
  //     voters: [],
  //   });
  //   db.get('store').push(link).value();
  //   return res.send(link);
  // });

  // app.post('/api/store/:id/vote', (req, res) => {
  //   const link = db.get('store').find({ id: req.params.id }).value();
  //   if (link.voters && link.voters.indexOf(req.body.email) > -1) {
  //     return res.send(403);
  //   }

  //   link.voters.push(req.body.email);
  //   link.voteCount += req.body.increment;
  //   return res.send(link);
  // });
};
