import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('respond with a resource');
});

router.get('/test', (req, res) => {
    res.json({ hello: 'world' });
});

export default router;
