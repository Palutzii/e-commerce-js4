import request from 'supertest';
import app from "../server";

describe('/api/products', () => {
    it('should return a list of products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body).toHaveLength(10);
    });
});