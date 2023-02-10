import Image from "next/image"
const Reviews = () => {
  return (
    <section className='min-h-screen flex items-center bg-pink-200 pt-20' id='reviews'>
      <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 '>
        <div className='text-center flex-col justify-center w-full mb-2'>
          <p className='text-4xl sm:text-5xl font-bold text-center text-violet-500'>Recomendaciones</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-center text-xl text-gray-500 mb-4 max-w-md'>
            Algunas recomendaciones de las personas que han confiado en mis servicios y pueden comprobar en mi{" "}
            <a href='/' className='text-violet-600 font-bold'>
              Curriculum
            </a>
          </p>
        </div>
        {/* CARDS */}
        <div className='px-4 py-6 sm:px-0 grid md:grid-cols-2 gap-2'>
          {reviewsData.map((rev) => (
            <div
              className='p-4 text-xl text-gray-600 bg-white min-h-52 max-w-sm space-x-2 drop-shadow-xl border min-w-96 rounded-lg'
              key={rev.id}>
              <div className='flex justify-center'>
                {rev.img ? (
                  <Image
                    className='rounded-full w-20 h-20 object-cover'
                    src={rev.img}
                    alt='Rounded avatar'
                    width={80}
                    height={80}
                  />
                ) : (
                  <div className='relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                    <svg
                      className='absolute w-24 h-24 text-gray-400 -left-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fill-rule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clip-rule='evenodd'></path>
                    </svg>
                  </div>
                )}
              </div>
              <p className='font-bold text-center'>{rev.name}</p>
              <p className='text-center'>{rev.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Reviews

const reviewsData: ReviewI[] = [
  {
    id: 1,
    name: "Laura Libreros Ahedo",
    review:
      '"Excelente auxiliar de enfermería, con amplio conocimiento en cuidado del paciente postrado , gran capacidad de aprendizaje y muy buen manejo de traqueostomía y gastrostomía."',
    img: "https://res.cloudinary.com/dg84upfsp/image/upload/v1675979209/marcela/laura-libreros_nwl8rk.jpg",
  },
  {
    id: 2,
    name: "Catherine Barrios Castro",
    review:
      '"Marcela persona capacitada para desempeñar su labor como auxiliar de enfermería. Realiza un excelente trabajo con pacientes postrados en cama, tiene en cuenta todo lo que una persona en esta condición requiere para su bienestar y cuidado."',
    img: "https://res.cloudinary.com/dg84upfsp/image/upload/v1675979241/marcela/catherine-barrios_wjgmji.jpg",
  },
  {
    id: 3,
    name: "Juliana Cruz",
    review: "lorem",
    img: "https://res.cloudinary.com/dg84upfsp/image/upload/v1675979480/marcela/juliana-cruz_nje18p.jpg",
  },
  {
    id: 4,
    name: "Adriana Patricia Nomeacuerdo",
    review: "lorem",
    img: "",
  },
]

interface ReviewI {
  id: number
  name: string
  review: string
  img: string
}
