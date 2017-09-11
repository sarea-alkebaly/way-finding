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
    description: 'This is AMSTELVEEN Store',
    url: 'https://github.com/facebook/react',
    storeName: store1.name,
    id: uuid(),
    voteCount: 0,
    voters: [],
  }).value();

  db.get('store').push({
    description: 'This is AMSTERDAM Store',
    url: 'https://22seven.com',
    storeName: store2.name,
    id: uuid(),
    voteCount: 0,
    voters: [],
  }).value();
  db.get('store').push({
    description: 'This is DEN HAAG store',
    url: 'https://google.com',
    storeName: store3.name,
    id: uuid(),
    voteCount: 0,
    voters: [],
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
