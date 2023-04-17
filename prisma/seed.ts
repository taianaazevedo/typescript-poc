import prisma from "../src/config/database.js";

async function main() {
  await prisma.movies.createMany({
    skipDuplicates: false,
    data: [
      { name: "Titanic", plataform: "Netflix", genre: "Romance", status: false },
      {
        name: "O Poderoso Chefão",
        plataform: "Amazon Prime Video",
        genre: "Drama",
        status: false,
      },
      {
        name: "O Senhor dos Anéis: A Sociedade do Anel",
        plataform: "HBO",
        genre: "Fantasia",
        status: false,
      },
      {
        name: "Star Wars: Episódio IV - Uma Nova Esperança",
        plataform: "Disney+",
        genre: "Ficção Científica",
        status: false,
      },
      {
        name: "Harry Potter e a Pedra Filosofal",
        plataform: "GloboPlay",
        genre: "Aventura",
        status: false,
      },
      {
        name: "O Iluminado",
        plataform: "Telecine Play",
        genre: "Terror",
        status: false,
      },
      {
        name: "Pulp Fiction: Tempo de Violência",
        plataform: "Amazon Prime Video",
        genre: "Crime",
        status: false,
      },
      {
        name: "Cidade de Deus",
        plataform: "Netflix",
        genre: "Drama",
        status: false,
      },
      { name: "Jurassic Park", plataform: "HBO", genre: "Ação", status: false },
      {
        name: "De Volta Para o Futuro",
        plataform: "Disney+",
        genre: "Comédia",
        status: false,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed criado com sucesso!");
  })
  .catch((e) => {
    console.log(`O seed retornou esse erro: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
