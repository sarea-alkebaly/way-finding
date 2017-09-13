const low = require('lowdb');
const bodyParser = require('body-parser');
const uuid = require('uuid');

function setupDb() {
  const db = low();

  db.defaults({ stores: [], store: [] })
    .value();

  const store1 = {
    name: 'amstelveen',
    address: 'GALERIJ 152 | 1181 ZS | AMSTELVEEN',
  };

  const store2 = {
    name: 'amsterdam',
    address: 'DAM | 1 1012JS | AMSTERDAM',
  };

  const store3 = {
    name: 'den haag',
    address: 'WAGENSTRAAT 32 2512 AX | DEN HAAG',
  };


  db.get('stores').push(store1).value();
  db.get('stores').push(store2).value();
  db.get('stores').push(store3).value();

  db.get('store').push({
    id: uuid(),
    description: 'This is description for AMSTELVEEN Store',
    storeName: store1.name,
    floors: [
      {
        id: uuid(),
        floorNumber: 'm1',
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
        floorNumber: '0',
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
        floorNumber: '1',
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
