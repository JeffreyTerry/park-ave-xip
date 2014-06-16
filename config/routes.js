var _ = require('underscore'),
    lot = require('../app/controllers/lot');

// Stores a dictionary with route paths as keys and their corresponding static html files as values.
var URLToFileMap = {
  '/': 'home/home'
};

// Renders the proper web page for all static pages by parsing the route from the req object.
var renderStaticPage = function(req, res){
  res.render(URLToFileMap[req.route.path], {
      title: 'XIP'
  });
};

module.exports = function(app){
/* Client Routes */
  // All static pages
  _.each(URLToFileMap, function(value, key){
    app.get(key, renderStaticPage);
  });

  app.post('/api/lot/new', lot.new);
  app.post('/api/lot/update/:lot_id', lot.update);  // Send JSON {name: 'new name', latitude: new_latitude} (e.g. {name: 'Yolo Lot', latitude: 56.90458})
  // app.post('/api/lot/name/:lot_id', lot.update);  // Send JSON {name: 'new name'}
  // app.post('/api/lot/latitude/:lot_id', lot.update);  // Send JSON {latitude: new_latitude} (e.g. {latitude: 56.90458})
  // app.post('/api/lot/longitude/:lot_id', lot.update);  // Send JSON {longitude: new_latitude} (e.g. {longitude: -34.4352})
  // app.post('/api/lot/capacity/:lot_id', lot.update);  // Send JSON {capacity: new_capacity} (e.g. {capacity: 240})
  // app.post('/api/lot/spotcount/:lot_id', lot.update);  // Send JSON {spotcount: new_spotcount} (e.g. {spotcount: 146})
  app.post('/api/lot/increment/:lot_id', lot.incrementSpotcount);
  app.post('/api/lot/decrement/:lot_id', lot.decrementSpotcount);

  app.get( '/api/lot/all', lot.getAll);  // Returns all of the lots and their data
};


