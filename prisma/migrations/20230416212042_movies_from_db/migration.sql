-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "plataform" VARCHAR(60) NOT NULL,
    "genre" VARCHAR(60) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "movies_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,
    "comment" VARCHAR(200) NOT NULL,

    CONSTRAINT "review_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_fk0" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
