const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    const invest = [
        {name: "Jasper", amount: 5000, returns:"55%", period: "30 days"},
        {name: "Sapphire", amount: 10000, returns:"55%", period: "30 days"},

        {name: "Chalcedony", amount: 20000, returns:"55%", period: "30 days"},
        {name: "Emerald", amount: 50000, returns:"55%", period: "30 days"},
        {name: "Sardonxy", amount: 70000, returns:"55%", period: "30 days"},

        {name: "Sarduis", amount: 100000, returns:"55%", period: "30 days"},
    ]
    res.render('index', {investplans: invest, currentUser: req.user})
});

router.get('/tips', (req, res)=>{
    res.render('tips')
});

router.get('/contact', (req, res)=>{
    res.render('contact')
});

router.get('/vendor', (req, res)=>{
    res.render('vendor')
});

router.get('/about', (req, res)=>{
    res.render('about')
});

module.exports = router;