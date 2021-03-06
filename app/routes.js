// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/HeaderContainer/reducer'),
          System.import('containers/HeaderContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          component,
          headerReducer,
          headerSagas,
        ]) => {
          injectReducer('headerContainer', headerReducer.default);
          injectSagas(headerSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      indexRoute: {
        name: 'storeListContainer',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            System.import('containers/StoreListContainer/reducer'),
            System.import('containers/StoreListContainer/sagas'),
            System.import('containers/StoreListContainer'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([storeListReducer, storeListSagas, component]) => {
            injectReducer('storeListContainer', storeListReducer.default);
            injectSagas(storeListSagas.default);
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      childRoutes: [
        {
          path: '/store/:storeName',
          name: 'storeContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/StoreContainer/reducer'),
              System.import('containers/StoreContainer/sagas'),
              System.import('containers/StoreContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('storeContainer', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/stores/:storeName/:departmentName',
          name: 'departmentListContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/DepartmentListContainer/reducer'),
              System.import('containers/DepartmentListContainer/sagas'),
              System.import('containers/DepartmentListContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('departmentListContainer', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/:floorSlug/:departmentSlug/:sectionId',
          name: 'sectionContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/SectionContainer/reducer'),
              import('containers/SectionContainer/sagas'),
              import('containers/SectionContainer'),
            ]);
    
            const renderRoute = loadModule(cb);
    
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('sectionContainer', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
    
            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
