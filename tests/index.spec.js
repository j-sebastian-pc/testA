import app from "../src/app.js";
import request from 'supertest';

describe("GET /tasks", () => {
    // Your existing GET tests go here
});

describe('POST /tasks', () => {
    describe('given a title and description', () => {
        describe('when and description is missing', () => {
            test('should respond with a 400 status code', async () => {
                const response = await request(app).post('/tasks').send({});
                expect(response.statusCode).toBe(400); // Fix the typo here
            });
        });
    });
});


