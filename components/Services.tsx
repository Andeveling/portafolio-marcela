import { Card } from "flowbite-react"

const nurseServices = [
  {
    id: 1,
    title: "Cuidado de Pacientes Postrados",
    icon: (
      <svg
        viewBox='0 0 512 512'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        fill='#ec4899'
        width={100}
        height={100}>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          {" "}
          <title>health</title>{" "}
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            {" "}
            <g id='add' fill='#ec4899' transform='translate(42.666667, 64.000000)'>
              {" "}
              <path
                d='M365.491733,234.665926 C339.947827,276.368766 302.121072,321.347032 252.011468,369.600724 L237.061717,383.7547 C234.512147,386.129148 231.933605,388.511322 229.32609,390.901222 L213.333333,405.333333 C205.163121,398.070922 197.253659,390.878044 189.604949,383.7547 L174.655198,369.600724 C124.545595,321.347032 86.7188401,276.368766 61.174934,234.665926 L112.222458,234.666026 C134.857516,266.728129 165.548935,301.609704 204.481843,339.08546 L213.333333,347.498667 L214.816772,346.115558 C257.264819,305.964102 290.400085,268.724113 314.444476,234.665648 L365.491733,234.665926 Z M149.333333,58.9638831 L213.333333,186.944 L245.333333,122.963883 L269.184,170.666667 L426.666667,170.666667 L426.666667,213.333333 L247.850667,213.333333 L213.333333,282.36945 L149.333333,154.368 L119.851392,213.333333 L3.55271368e-14,213.333333 L3.55271368e-14,170.666667 L93.4613333,170.666667 L149.333333,58.9638831 Z M290.133333,0 C353.756537,0 405.333333,51.5775732 405.333333,115.2 C405.333333,126.248908 404.101625,137.626272 401.63821,149.33209 L357.793994,149.332408 C360.62486,138.880112 362.217829,128.905378 362.584434,119.422244 L362.666667,115.2 C362.666667,75.1414099 330.192075,42.6666667 290.133333,42.6666667 C273.651922,42.6666667 258.124715,48.1376509 245.521279,58.0219169 L241.829932,61.1185374 L213.366947,86.6338354 L184.888885,61.1353673 C171.661383,49.2918281 154.669113,42.6666667 136.533333,42.6666667 C96.4742795,42.6666667 64,75.1409461 64,115.2 C64,125.932203 65.6184007,137.316846 68.8727259,149.332605 L25.028457,149.33209 C22.5650412,137.626272 21.3333333,126.248908 21.3333333,115.2 C21.3333333,51.5767968 72.9101302,0 136.533333,0 C166.046194,0 192.966972,11.098031 213.350016,29.348444 C233.716605,11.091061 260.629741,0 290.133333,0 Z'
                id='Combined-Shape'>
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Cuidado de Pacientes con Gastrostomía",
    icon: (
      <svg
        fill='#ec4899'
        width='100px'
        height='100px'
        viewBox='0 0 32 32'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path d='M15,16.993l-2.007,0c-0.551,0 -1,0.449 -1,1c0,0.552 0.449,1 1,1l2.007,0l-0,2.007c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l-0,-2.007l2.007,0c0.551,0 1,-0.448 1,-1c-0,-0.551 -0.449,-1 -1,-1l-2.007,0l-0,-2.006c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l-0,2.006Z'></path>
          <path d='M11,6l-6,0c-0.796,-0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,3.463 0,10.537 0,14c-0,0.796 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879c4.841,0 17.147,0 21.988,0c0.795,0 1.558,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.325 0.879,-2.121l-0,-14c-0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.563,-0.563 -1.326,-0.879 -2.121,-0.879l-5.988,0l0,-1c-0,-1.657 -1.343,-3 -3,-3l-4,0c-1.657,0 -3,1.343 -3,3l-0,1Zm16.988,6l-0,11c-0,0.265 -0.106,0.52 -0.293,0.707c-0.188,0.188 -0.442,0.293 -0.707,0.293l-21.988,-0c-0.265,0 -0.52,-0.105 -0.707,-0.293c-0.188,-0.187 -0.293,-0.442 -0.293,-0.707l-0,-11l23.988,0Zm-0,-2l-23.988,0l-0,-1c-0,-0.265 0.105,-0.52 0.293,-0.707c0.187,-0.188 0.442,-0.293 0.707,-0.293l21.988,0c0.265,-0 0.519,0.105 0.707,0.293c0.187,0.187 0.293,0.442 0.293,0.707l-0,1Zm-8.988,-4l0,-1c-0,-0.552 -0.448,-1 -1,-1c-0,0 -4,0 -4,0c-0.552,0 -1,0.448 -1,1l-0,1l6,0Z'></path>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cuidado de Pacientes con Traqueostomía",
    icon: (
      <svg
        fill='#ec4899'
        width='100px'
        height='100px'
        viewBox='0 0 32 32'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path d='M25.912,5c-0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-3.431,-0 -10.4,-0 -13.831,-0c-0.795,-0 -1.558,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121l0,22c0,0.796 0.316,1.559 0.879,2.121c0.563,0.563 1.326,0.879 2.121,0.879c3.431,0 10.4,0 13.831,0c0.796,0 1.559,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.325 0.879,-2.121l-0,-22Zm-2,-0l-0,22c-0,0.265 -0.105,0.52 -0.293,0.707c-0.188,0.188 -0.442,0.293 -0.707,0.293l-13.831,-0c-0.265,0 -0.519,-0.105 -0.707,-0.293c-0.187,-0.187 -0.293,-0.442 -0.293,-0.707c0,-0 0,-22 0,-22c0,-0.265 0.106,-0.52 0.293,-0.707c0.188,-0.188 0.442,-0.293 0.707,-0.293l13.831,-0c0.265,-0 0.519,0.105 0.707,0.293c0.188,0.187 0.293,0.442 0.293,0.707Z'></path>
          <path d='M14.995,8l-0.998,0c-0.552,0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1l1.002,-0l0.002,1.002c0.001,0.552 0.45,0.999 1.002,0.998c0.552,-0.001 0.999,-0.45 0.998,-1.002l-0.002,-0.998l0.998,0c0.551,0 1,-0.448 1,-1c-0,-0.552 -0.449,-1 -1,-1l-1.002,0l-0.003,-1.002c-0.001,-0.552 -0.45,-0.999 -1.002,-0.998c-0.552,0.001 -0.999,0.45 -0.998,1.002l0.003,0.998Z'></path>
          <path d='M14.992,17l6.016,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-6.016,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z'></path>
          <path d='M14.992,21l6.016,0c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-6.016,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z'></path>
          <path d='M14.985,24.994l6.015,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-6.015,-0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Z'></path>
          <circle cx='10.998' cy='15.958' r='1'></circle>
          <circle cx='10.998' cy='19.976' r='1'></circle>
          <circle cx='10.998' cy='23.994' r='1'></circle>
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Cuidado de Pacientes Postquirurgicos",
    icon: (
      <svg
        fill='#ec4899'
        width='100px'
        height='100px'
        viewBox='0 0 32 32'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path d='M7.001,15.004l6.999,-0.004c0.335,-0 0.646,-0.167 0.832,-0.445l0.168,-0.253c0,-0 -0,2.697 -0,2.697c-0,0.405 0.243,0.769 0.617,0.924c0.374,0.155 0.804,0.07 1.09,-0.216l2.704,-2.704c0,-0 5.583,0.036 5.583,0.036c0.551,0.003 1.002,-0.442 1.006,-0.994c0.004,-0.552 -0.442,-1.003 -0.994,-1.006l-6,-0.039c-0.267,-0.002 -0.524,0.104 -0.713,0.293l-1.293,1.292c0,0 0.001,-3.585 0.001,-3.585c0,-0.441 -0.288,-0.83 -0.71,-0.957c-0.422,-0.128 -0.877,0.035 -1.122,0.402l-1.704,2.555c-0,0 -6.466,0.004 -6.466,0.004c-0.552,0 -0.999,0.449 -0.999,1.001c0,0.552 0.449,0.999 1.001,0.999Z'></path>
          <path d='M15.01,25.997l0,1.996l-4.009,-0.005c-0.552,-0.001 -1,0.446 -1.001,0.998c-0.001,0.552 0.447,1.001 0.999,1.002l10,0.012c0.552,0.001 1,-0.447 1.001,-0.999c0.001,-0.552 -0.447,-1 -0.999,-1.001l-3.991,-0.005l0,-1.998l9.99,0c0.796,0 1.559,-0.316 2.121,-0.878c0.563,-0.563 0.879,-1.326 0.879,-2.122l-0,-13.997c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879l-22,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c-0,3.463 -0,10.535 -0,13.997c-0,0.796 0.316,1.559 0.879,2.122c0.562,0.562 1.325,0.878 2.121,0.878l10.01,0Zm12.99,-3.997l-0,0.997c0,0.266 -0.105,0.52 -0.293,0.708c-0.187,0.187 -0.442,0.292 -0.707,0.292c-0,0 -22,0 -22,0c-0.265,0 -0.52,-0.105 -0.707,-0.292c-0.188,-0.188 -0.293,-0.442 -0.293,-0.708l-0,-0.997l24,0Zm-0,-2l-24,0l0,-11c-0,-0.265 0.105,-0.52 0.293,-0.707c0.187,-0.188 0.442,-0.293 0.707,-0.293c0,0 22,-0 22,-0c0.265,0 0.52,0.105 0.707,0.293c0.188,0.187 0.293,0.442 0.293,0.707l-0,11Z'></path>
        </g>
      </svg>
    ),
  },
]

const Services = () => {
  return (
    <section
      className='bg-gradient-to-r from-pink-200 to-violet-200 min-h-screen flex items-center pt-20 sm:pt-0'
      id='services'>
      <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 '>
        <p className='text-5xl font-bold text-center text-violet-500 mb-4'>Servicios</p>
        <div className='px-4 py-6 sm:px-0'>
          <div className='min-h-fit px-6 pb-6 rounded-lg border-4 border-dashed border-gray-200'>
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {nurseServices.map((service) => (
                <div key={service.id} className='group relative mt-4'>
                  <div className='h-30 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 lg:aspect-none lg:h-52 p-4'>
                    <div className='flex justify-center'>
                      <div className='border-8 bg-white border-violet-500 rounded-full w-fit h-fit p-2 absolute -top-12'>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className='text-xl text-gray-700 text-center mt-20 font-bold'>
                      <a href={""}>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {service.title}
                      </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
