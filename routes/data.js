var express = require('express'),
        fs = require("fs"),
        router = express.Router();

router.get('/', function (req, res, next) {

    fs.readFile('./data/data.json', function (err, content) {
        if (err)
            throw err;
        var parseJson = JSON.parse(content);
        res.send(parseJson);
    })
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

module.exports = router;