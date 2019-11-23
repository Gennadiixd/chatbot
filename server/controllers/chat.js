const { InitRequest, EventReadyRequest, MessageRequest } = require('./requests.js');

exports.initChat = (req, res) => {
  new InitRequest({ ...req.body })
    .send()
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
  new EventReadyRequest({ ...req.body })
    .send()
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
  new MessageRequest({ ...req.body })
    .send()
    .then(res => res.json())
    .then(data => {
      const { result: { cuid, text: { value } } } = data;
      res.json({ cuid, value });
    })
    .catch(err => {
      res.json(err)
    })
};