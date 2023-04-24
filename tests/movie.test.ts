import app from "../src/app";
import supertest from "supertest";
import httpStatus from "http-status";
import { Movie } from "repositories/movieRepository";
import { cleanDb } from "./helpers";
import { movies } from "@prisma/client";

beforeAll(async () => {
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

const api = supertest(app);

describe("POST /movies", () => {
  it("Should be respond with 201 status when a movie is created", async () => {
    const body: Movie = {
      name: "Titanic",
      plataform: "Netflix",
      genre: "Romance",
    };
    const result = await api.post("/movies").send(body);

    expect(result.status).toBe(httpStatus.CREATED);
  });
});

describe("GET /movies", () => {
  it("Should be respond with status 200 and all movies listed", async () => {
    const body: Movie = {
      name: "Titanic",
      plataform: "Netflix",
      genre: "Romance",
    };
    await api.post("/movies").send(body);
    const result = await api.get("/movies");

    expect(result.status).toBe(httpStatus.OK);
  });

  it("Should return with status 404 if there is no films", async () => {
    const result = await api.get("/movies");

    expect(result.status).toBe(httpStatus.NOT_FOUND);
  });
});
