const fetch = require("node-fetch");

exports.initChat = (req, res) => {
    const { api, uuid } = req.body;
    fetch(`${api}.init`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            'uuid': uuid
        })
    })
        .then(res => res.json())
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
};

exports.eventReady = (req, res) => {
    const { api, cuid } = req.body;
    fetch(`${api}.event`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            'cuid': cuid,
            'euid': process.env.EVENT_READY_EUID
        })
    })
        .then(res => res.json())
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
};