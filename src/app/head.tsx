const metadata = {
  author: "Andres Parra",
  title: "Marcela Salazar",
  copyright: "Andres Parra",
  replyTo: "andeveling@gmail.com",
  description: "Portafolio de Enfermera, trabajadora de la salud, y amante de los libros.",
  keyWords: "Traqueostomia, Cuidado, Pacientes, Postrados, Gastrostomía, salud, enfermería, Postquirurgicos ",
  openGraph: {
    title: "Marcela Salazar - Enfermera",
    description: "Portafolio de Enfermera, trabajadora de la salud, y amante de los libros.",
    url: "https://marcela-salazar.vercel.app/",
    siteName: "Marcela Salazar - Enfermera",
    images: [],
    locale: "es-US",
    type: "website",
  },
}

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content={metadata.description} />
      <meta name='keywords' content={metadata.keyWords} />
      <meta name='author' content={metadata.author} />
      <meta name='copyright' content={metadata.copyright} />
      <meta name='robots' content='index' />
      <meta name='REPLY-TO' content={metadata.replyTo} />
      <link rel='made' href={`mailto:${metadata.replyTo}`} />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
