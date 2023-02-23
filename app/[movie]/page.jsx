import Image from "next/image";

export async function getStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const imagePath = "https://image.tmdb.org/t/p/w500";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const res = await data.json();

  return (
    <div>
      <h2 className="text-5xl">{res.title}</h2>
      <h2 className="text-lg ml-2 my-1">{res.release_date}</h2>
      <h2 className="text-lg ml-2 my-1">Runtime : {res.runtime}</h2>
      <h2 className="text-md ml-2 my-1 bg-green-600 p-2 inline-block rounded">
        {res.status}
      </h2>
      <Image
        className=" my-1 p-2 rounded"
        src={imagePath + res.backdrop_path}
        alt={res.title}
        width="800"
        height="800"
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
