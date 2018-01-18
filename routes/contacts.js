let express = require('express'),
        fs = require("fs"),
        router = express.Router(),
        fileLocation = './data/contacts.json';

router.get('/', function (req, res, next) {

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        let contactsJson = JSON.parse(content);
        res.send(contactsJson);
    });
});
router.get('/:contactId', function (req, res, next) {

    let id = req.params.contactId;

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        let contactsJson = JSON.parse(content);
        contactsJson.forEach(function (contact) {
            if (contact.id.toString() === id) {
                res.send(contact);
            }
        });
    });
});
router.delete('/:contactId', function (req, res, next) {

    let id = req.params.contactId;

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        let contactsJson = JSON.parse(content),
                deletedContact = contactsJson[id];
        delete contactsJson[id];
        contactsJson = contactsJson.filter(function (contact) {
            return contact !== undefined;
        });
        fs.writeFile(fileLocation, JSON.stringify(contactsJson), 'utf8', function () {
            res.send({deletedContact});
        });
    });
});
router.put('/:contactId', function (req, res, next) {

    let id = req.params.contactId,
            updatedContact = req.body;

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        let contactsJson = JSON.parse(content);
        contactsJson[id] = updatedContact;
        fs.writeFile(fileLocation, JSON.stringify(contactsJson), 'utf8', function () {
            res.send({updatedContact});
        });
    });
});
router.post('/:contactId', function (req, res, next) {

    let id = req.params.contactId,
            newContact = req.body;

    fs.readFile(fileLocation, function (err, content) {
        if (err)
            throw err;
        let contactsJson = JSON.parse(content);
        contactsJson.push(newContact);
        fs.writeFile(fileLocation, JSON.stringify(contactsJson), 'utf8', function () {
            res.send({newContact});
        });
    });
});

module.exports = router;