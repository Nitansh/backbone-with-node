var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;


var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('nodedb', server);


db.open(function(err, db) {
    if(!err) {
        db.collection('footer_table', {strict:true}, function(err, collection) {
            if (err) {
                populateDB();
            }
        });
    }
});


exports.getFooter = function(req, res) {
    db.collection('footer_table', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};


exports.updateFooter = function(req, res) {
    var id = req.params.id;
    var Footer = req.body;
    console.log('Updating footer: ' + id);
    console.log(JSON.stringify(Footer));
    db.collection('wines', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, Footer, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(Footer);
            }
        });
    });
}


var populateDB = function() {
 
    var footer_model = {
        Footer: "test Footer"
    };
    
 
    db.collection('footer_table', function(err, collection) {
        collection.insert(footer_model);
    });
 
};