var $$ = Dom7;

var app = new Framework7(
    
    ///CONFIRUGATION DATA
{
  // App root element
  root: '#app',
  // App Name
  name: 'My App',

    
    //theme
    theme: "ios",
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',  ///DETECT the 
      url: 'about.htm',
        
    },
  ],
  on: {
    // each object key means same name event handler
    pageInit: function (page) {
      // do something on page init
        alert("Hello Framework!");
        $$("#quick").html("Hello class!");
    },
    popupOpen: function (popup) {
      // do something on popup open
    }
  }
  // ... other parameters
});

app.on("pageInit", function(page){
    console.log("Second hello");
});

var mainView = app.views.create('.view-main');