import 'dotenv/config';
import Cors from 'micro-cors';

import dbConnect from '../../utils/mongodb.js';
import UserScore from '../../models/UserScore.js';

require('dotenv').config();

const cors = Cors({
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    origin: '*',
    methods: ['POST', 'PATCH', 'OPTIONS'],
});


async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const {name, score} = req.body;
            const userScore = new UserScore({name, score});
            await userScore.save();

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Methods', 'POST,PATCH,OPTIONS');

            res.status(201).json({ success: true, data: userScore });
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(400).json({ error: 'Method not supported' });
    }
}


export default cors(handler);
