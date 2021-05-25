/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

// load Google model
const Google = require('../../models/Google');

// @route GET api/google
// @description get all Google
// @access public
router.get('/', (_req, res) => {
  Google.find()
    .then((googles) => res.json(googles) + res.send(googles))
    .catch((_err) => res.status(404).json({ noevidencefound: 'No Google found' }));
});

// @route GET api/google/:id
// @description get single Google by id
// @access public
router.get('/:id', (req, res) => {
  Google.findById(req.params.id)
    .then((google) => res.send(google))
    .catch((_err) => res.status(404).json({ noevidencefound: 'No Google found' }));
});

// @route GET api/google
// @description add/save Google
// @access public
router.post('/', (req, res) => {
  Google.create(req.body)
    .then((_google) => res.json({ msg: 'Google added successfully' }))
    .catch((_err) => res.status(404).json({ error: 'unable to add this Google' }));
});

// @route GET api/Google/:id
// @description update book
// @access public
router.put('/:id', (req, res) => {
  Google.findByIdAndUpdate(req.params.id, req.body)
    .then((_google) => res.json({ msg: 'updated successfully' }))
    .catch((_err) => res.status(404).json({ error: 'No Google found' }));
});

// @route GET api/google/:id
// @description delete by id
// @access public
router.delete('/:id', (req, res) => {
  Google.findByIdAndRemove(req.params.id, req.body)
    .then((_evidence) => res.json({ msg: 'Evidence entry deleted successfully' }))
    .catch((_err) => res.status(404).json({ noevidencefound: 'No evidence found' }));
});

module.exports = router;
