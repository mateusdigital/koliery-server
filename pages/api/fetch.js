import 'dotenv/config';
import Cors from 'micro-cors';

import dbConnect from '../../utils/mongodb.js';
import UserScore from '../../models/UserScore.js';

require('dotenv').config();

const cors = Cors({
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

async function handler(req, res) {
    await dbConnect();

    try {
        const scores = await UserScore.find({}).sort({ score: -1 }).limit(10);

        res.setHeader('Access-Control-Allow-Origin', '*');

        res.status(200).json(scores);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default cors(handler);
