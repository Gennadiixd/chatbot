const { InitRequest, EventReadyRequest } = require('./requests.js');

exports.initChat = (req, res) => {
  const { api, uuid } = req.body;
  new InitRequest(api, uuid).send()
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
  const { api, euid, cuid } = req.body;
  new EventReadyRequest(api, cuid).send()
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