const db = require('../models')
const axios = require('axios')
const { response } = require('express')
//API Request
//routes to http://localhost:4000/api/v1/brewery/search?q=(INSERT QUERY)
const apiRequest = (req,res) => {
    //when react app makes a request to this route, we make a request to the API
    console.log(req.query.q)
    axios.get(`https://api.openbrewerydb.org/breweries/search?query=${req.query.q}`)
        .then(response => {
            res.json(response.data)
        })
}
const apiShow = (req,res) => {
    axios.get(`https://api.openbrewerydb.org/breweries/${req.params.id}`)
        .then(response => {
            res.json(response.data)
        })
}
//Find all of the brewery posts
const index = (req, res) => {
    console.log('in the index route')
    db.brewery.findAll().then((foundBreweries) => {
        if(!foundBreweries) return res.json({
            message: 'No Breweries found in database.'
        })
        res.status(200).json({ breweries: foundBreweries})
    })
}
const show = (req, res) => {
    db.brewery.findAll({
        where: {
            breweryId: req.params.id
        }
    }).then((foundBrewery) => {
        if(!foundBrewery) return res.json({
            message: 'Brewery with provided ID not found.'
        })
        res.status(200).json({ brewery: foundBrewery })
    })
}
const showPost = (req, res) => {
    db.brewery.findAll({
        where: {
            userId: req.params.id
        }
    }).then((foundUser) => {
        if(!foundUser) return res.json({
            message: 'User with provided ID not found.'
        })
        res.status(200).json({ user: foundUser })
    })
}
const create = (req, res) => {
    db.brewery.create(req.body).then((savedBrewery) => {
        // Validations and error handling here
        res.status(200).json({ brewery: savedBrewery })
    })
}
const update = (req, res) => {
    db.brewery.update({
        ...req.body
    }, {
        where: {
        id: req.params.id
        }
    }).then((updatedBrewery) => {
        if (!updatedBrewery) return res.json({
            message: "No brewery with that ID found."
        })
        // Validations and error handling here
        res.status(200).json({ brewery: updatedBrewery })
    })
}
const destroy = (req, res) => {
    db.brewery.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.status(200)
    })
}
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    apiRequest,
    apiShow,
    showPost
}
