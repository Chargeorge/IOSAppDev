var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.htm',
      on: {
        pageBeforeIn: function (event, page) {
          // do something before page gets into the view
        },
        pageAfterIn: function (event, page) {
          // do something after page gets into the view
            alert("I'm here!");
        },
        pageInit: function (event, page) {
          // do something when page initialized
        },
        pageBeforeRemove: function (event, page) {
          // do something before page gets removed from DOM
        }
      }
    },
  ]
  // ... other parameters
});


var mainView = app.views.create('.view-main');