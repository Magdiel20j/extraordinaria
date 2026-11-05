import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import limiter from './src/middlewares/limiter.js';
import productsRoutes from './src/routes/products.js';
import bannerRoutes from './src/routes/banners.js';

const app = express();

app.use(cors({
    origin : ['http://localhost:5173','http://localhost:5174'],
    credentials : true,
}));

app.use(limiter);
app.use(cookieParser());
app.use(express,json());

app.use('/api/products',productsRoutes);
app.use('/api/banners',bannerRoutes);
export default app;
