var express = require('express'),
        fs = require("fs"),
        router = express.Router();

router.get('/', function (req, res, next) {

    fs.readFile('./data/contacts.json', function (err, content) {
        if (err)
            throw err;
        var contactsJson = JSON.parse(content);
        res.send(contactsJson);
    })
});
router.get('/:contactId', function (req, res, next) {
    
    let id = req.params.contactId;
    
    fs.readFile('./data/contacts.json', function (err, content) {
        if (err)
            throw err;
        var contactsJson = JSON.parse(content);

        let contact = (contactsJson[id] && contactsJson[id]['id'] && contactsJson[id]['id'].toString() === id) ? contactsJson[id] : contactsJson;

        res.send(contact);

    });
});
router.post('/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err)
            throw err;
        db.collection("mycontacts").insertOne(req.body, function (err, res) {
            if (err)
                throw err;
            console.log("document inserted");
            db.close();
        });
    });
});
function readDataFile() {
    
}
module.exports = router;