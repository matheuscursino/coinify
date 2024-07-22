const request = require("supertest");
const app = require("../src/app.js");

describe("Deve testar o caminho root", () => {
  test("Deve responder com o status code 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Deve testar o caminho /login", () => {
  test("Deve responder com o status code 200", done => {
    request(app)
      .get("/login")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Deve testar o caminho /register", () => {
  test("Deve responder com o status code 200", done => {
    request(app)
      .get("/register")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Deve testar o caminho /404", () => {
  test("Deve responder com o status code 404", done => {
    request(app)
      .get("/404")
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});