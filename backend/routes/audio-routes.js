const express = require('express');

const auditor = require('../controllers/auditor-controllers');

const router = express.Router();

router.get('', auditor.play);