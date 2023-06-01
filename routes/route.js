import express from 'express';
import {userSignup, userLogin} from '../controllers/userControllers.js';
import {getProducts, getProductById} from '../controllers/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controllers/payment_controller.js';
const router=express.Router();
router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/products', getProducts);
router.get('/product/:id', getProductById );
router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse );
router.get('/api/environment', (req, res) => {
    const { BASE_URL } = process.env;
    res.json({ BASE_URL });
  });
export default router;