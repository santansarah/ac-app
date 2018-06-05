const express = require('express'); 
const router = express.Router();

router.get('/');

var fs = require('fs');

router.get('/', (req, res) => {
    var acList;
    fs.readFile('./aclist.json', 'utf8', function (err, data) {
        if (err) 
            res.send(err);
        acList = JSON.parse(data);
        res.send(acList);
      });

});

router.get('/:id', (req, res) => {
    var acID = req.params.id;
    var acList;
    fs.readFile('./aclist.json', 'utf8', function (err, data) {
        if (err) res.send(err);
        acList = JSON.parse(data);
        const ac = acList.find(a => a.id === acID);

        if (!ac) res.status(404).send("AC not found.");
        res.send(ac);
      });
  
    });

    module.exports = router;