const request = require('supertest');
const app = require('../../server');
let newProduct = require('../data/new-product.json');

let firstProduct;

// it("POST /api/products", async () => {
//     const response = await request(app)
//         .post('/api/products')
//         .send(newProduct);
//     expect(response.statusCode).toBe(201);
//     expect(response.body.name).toBe(newProduct.name);
//     expect(response.body.description).toBe(newProduct.description);
// });
//
// it("should return 500 on POST /api/products", async () => {
//     const response = await request(app)
//         .post('/api/products')
//         .send({name: 'phone'});
//     expect(response.statusCode).toBe(201);
//     // console.log('response.body', response.body);
//     // expect(response.body).toStrictEqual({ message: ''})
// });

it("GET /api/products", async () => {
    const response = await request(app).get('/api/products');
    response.body = response.body.filter(item => item.name && item.description);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].name).toBeDefined();
    expect(response.body[0].description).toBeDefined();
    firstProduct = response.body[0];
});

it("GET /api/product/:productId", async () => {
    const response = await request(app).get(`/api/products/${firstProduct._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(firstProduct.name);
    expect(response.body.description).toBe(firstProduct.description);
})

it("GET id doesnt exist /api/product/:productId", async () => {
    const response = await request(app).get('/api/products/5f8e1bfb203397306c893425');
    expect(response.statusCode).toBe(404);
})

it("PUT /api/products", async () => {
    const res = await request(app)
        .put('/api/products/5f8e248e164afff135d2cd69')
        .send({name: "updated name", description: "updated description"});
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('updated name');
    expect(res.body.description).toBe('updated description');
})

it("should return 404 on PUT /api/products", async () => {
   const res = await request(app)
       .put('/api/products/5f8e248e164afff135d2cd81')
       .send({name: "updated name", description: "updated description"});
   expect(res.statusCode).toBe(404);
});

it("DELETE /api/products", async () => {
   const res = await request(app)
       .delete("/api/products/" + "5f8dcd1Î17d97bf20801da967")
       .send();
   expect(res.statusCode).toBe(200);
});

it("DELETE id doesnt exist /api/products/:productId", async () => {
    const res = await request(app)
        .delete("/api/products/" + "5f8dcd1Î17d97bf20801da967")
        .send();
    expect(res.statusCode).toBe(404);
})