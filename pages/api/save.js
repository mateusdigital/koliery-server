import 'dotenv/config';
import Cors from 'micro-cors';

import dbConnect from '../../utils/mongodb.js';
import UserScore from '../../models/UserScore.js';

require('dotenv').config();

import NextCors from 'nextjs-cors';

async function handler(req, res) {
//    // Run the cors middleware
//    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
//    await NextCors(req, res, {
//       // Options
//       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', "OPTIONS"],
//       origin: '*',
//       optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//    });

   // Rest of the API logic
   res.json({ message: 'Hello NextJs Cors!' });
}

// const cors = Cors({
//     allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     origin: '*',
//     methods: ['POST', 'PATCH', 'OPTIONS'],
// });


// async function handler(req, res) {
//     await dbConnect();

//     if (req.method === 'POST') {
//         try {
//             const {name, score} = req.body;
//             const userScore = new UserScore({name, score});
//             await userScore.save();
//             res.status(201).json({ success: true, data: userScore });
//         } catch (error) {
//             console.error('Error saving data:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     } else if (req.method == "OPTIONS") {
//         res.status(200).end();
//     }
// }


// export default cors(handler);
export default handler;
