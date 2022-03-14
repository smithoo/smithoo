import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/test', (req, res, next) => {
    res.json({ hello: 'world' });
});

export default router;
