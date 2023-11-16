import app from "../src/app.js";
import request from 'supertest';

describe("GET /tasks", () => {
    const newTask = {
        title: "title task",
        description: "test Description", 
    };

    // debería responder con un 200 de estado
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post("/tasks").send(newTask);
        expect(response.statusCode).toBe(200);
    });

    // esto debería responder con un json object
    test('should have a content-type: application/json in header', async () => {
        const response = await request(app).post('/tasks').send(newTask);

        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });

    // comprobar si responde con un objeto json conteniendo una nueva tarea con id
    test("should respond with a task ID", async () => {
        const response = await request(app).post("/tasks").send(newTask);

        expect(response.body.id).toBeDefined();
    });
});

describe('POST /tasks', () => {
    describe('given a title and description', () => {
        describe('when and description is missing', () => {
            test('should respond with a 400 status code', async () => {
                const response = await request(app).post('/tasks').send({});
                expect(response.statusCode).toBe(400); 
            });
        });
    });
});


