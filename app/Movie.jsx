import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, backdrop_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h1>{title}</h1>
      <h2>Release date : {release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + backdrop_path}
          alt={title}
          width={300}
          height={300}
        />
      </Link>
      <h1> . </h1>
    </div>
  );
}
