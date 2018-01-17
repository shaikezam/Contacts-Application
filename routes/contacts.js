let express = require('express'),
        fs = require("fs"),
        router = express.Router(),
        fileLocation = './data/contacts.json';

router.get('/', function (req, res, next) {

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        var contactsJson = JSON.parse(content);
        res.send(contactsJson);
    });
});
router.get('/:contactId', function (req, res, next) {

    let id = req.params.contactId;

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        var contactsJson = JSON.parse(content);

        let contact = (contactsJson[id] !== undefined && contactsJson[id] && contactsJson[id]["id"] >= 0) ? contactsJson[id] : {status: "Not found contact"};

        res.send(contact);

    });
});
router.put('/:contactId', function (req, res, next) {

    let id = req.params.contactId,
            updatedContact = req.body;

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        var contactsJson = JSON.parse(content);
        contactsJson[id] = updatedContact;
        fs.writeFile(fileLocation, JSON.stringify(contactsJson), 'utf8', function() {
            res.send({updatedContact});
        });
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