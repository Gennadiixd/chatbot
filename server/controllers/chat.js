const fetch = require("node-fetch");

const request = ({ api, uuid, type, cuid }) => {
    const body = {};
    if (type === 'init') {
        body.uuid = uuid;
    } else {
        body.euid = process.env.EVENT_READY_EUID;
        body.cuid = cuid;
    }

    return fetch(`${api}.${type}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })
}

exports.initChat = (req, res) => {
    const type = 'init';
    request({ type, ...req.body })
        .then(resp => resp.json())
        .then(data => {
            const { result: { cuid, inf: { name } } } = data;
            res.json({ name, cuid })
        })
        .catch(err => {
            res.json(err)
        })
};

exports.eventReady = (req, res) => {
    const type = 'event';
    request({ type, ...req.body })
        .then(res => res.json())
        .then(data => {
            const { result: { cuid, text: { value } } } = data;
            res.json({ cuid, value });
        })
        .catch(err => {
            res.json(err)
        })
};

exports.sendMessage = (req, res) => {
    const type = 'request';
    console.log(req.body);
    // request({ type, ...req.body })
    //     .then(res => res.json())
    //     .then(data => {
    //         const { result: { cuid, text: { value } } } = data;
    //         res.json({ cuid, value });
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
};