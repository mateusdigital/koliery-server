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

    if (req.method === 'OPTIONS') {
        res.status(200).end();
    }

    else if (req.method === 'POST') {
        try {
            const {name, score} = req.body;
            const userScore = new UserScore({name, score});
            await userScore.save();
            res.status(201).json({ success: true, data: userScore });
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ error: error });
        }
    }

    else {
        res.status(400).json({ error: 'Method not supported' });
    }
}


export default cors(handler);
