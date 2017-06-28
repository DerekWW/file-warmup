const express = require('express');
const router = express.Router();

router.post('/api/files', function(req, res) {
  if (!req.files){
    return res.status(400).send('No files were uploaded.');
  }

  console.log(req.files);

  let file = req.files.myFile;

  file.mv(`./uploads/${file.name}`, function(err) {

    if (err){
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  })
});

module.exports = router;
