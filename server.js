import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000; // Provide a default port number if PORT is not defined

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const URL = process.env.MONGODB_URL;

Connection(URL);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

app.use('/', router);

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {
  MID: process.env.PAYTM_MID,
  WEBSITE: process.env.PAYTM_WEBSITE,
  CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
  INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
  ORDER_ID: uuidv4(),
  CUST_ID: process.env.PAYTM_CUST_ID,
  TXN_AMOUNT: '100',
  CALLBACK_URL: `${process.env.BASE_URL}/callback`,
  EMAIL: 'kunaltyagi@gmail.com',
  MOBILE_NO: '1234567852'
};
