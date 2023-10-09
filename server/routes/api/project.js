const express = require('express');
let router = express.Router();

const { Project } = require('../../models/project_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const urls = req.body.urls;

            const newUrls = new Project({ urls });

            await newUrls.save();

            res.status(200).send(`${urls.project_name} saved.`);

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Url save error', error });
        }
    })


module.exports = router;