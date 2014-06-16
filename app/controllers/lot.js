var Lot = require('../models/lot').model;

exports.getAll = function(req, res){
  Lot.find({}, function(err, response){
    res.status(200).json(response);
  });
};

exports.new = function(req, res){
  var lot = new Lot(req.body);
  lot.save(function(err){
    if(err) res.status(500).json({'err': err});
    else res.status(200).json({'lot': lot});
  });
};

exports.update = function(req, res){
  Lot.findByIdAndUpdate(req.params.lot_id, req.body, function(err){
    if(err) res.status(500).json({'err': err});
    else res.status(200).json({'msg': 'success'});
  });
};

exports.incrementSpotcount = function(req, res){
  Lot.findByIdAndUpdate(req.params.lot_id, {$inc: {spotcount: 1}}, function(err){
    if(err) res.status(500).json({'err': err});
    else res.status(200).json({'msg': 'success'});
  });
}
exports.decrementSpotcount = function(req, res){
  Lot.findByIdAndUpdate(req.params.lot_id, {$inc: {spotcount: -1}}, function(err){
    if(err) res.status(500).json({'err': err});
    else res.status(200).json({'msg': 'success'});
  });
}






