import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="from-emerald-700 to-emerald-200 bg-gradient-to-tr sm:bg-gradient-conic min-h-screen w-[100vw] flex p-4 sm:px-36 sm:py-28 font-mono">
      <div className='sm:border-white flex flex-col sm:flex-row sm:border-solid sm:border-8 min-h-full w-full bg-transparent  p-12 justify-center gap-8'>
        <div className='sm:w-1/2 h-min text-emerald-950 font-semibold flex flex-col gap-12'>
          <span className='flex items-center gap-10 '>
            <p className='text-7xl'>Hunter Samoy</p>
            <div className='group/profile flex items-center gap-6 px-8'>
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-tl from-emerald-700 to-emerald-200 z-10">
                <Image className="w-full h-full object-cover" src={'/headshot-removebg-preview.png'} alt={'Hunter'} width={200} height={200} />
              </div>
              <div className='flex gap-4 text-lg -translate-x-[11.5rem] opacity-0 group-hover/profile:translate-y-24 sm:group-hover/profile:translate-x-0 group-hover/profile:opacity-100 transition-all duration-800 ease-in-out'>
                <Link className='cursor-pointer hover:opacity-40' href={'https://www.linkedin.com/in/hunter-samoy/'} target='_blank'>LinkedIn</Link> 
                <Link className='cursor-pointer hover:opacity-40' href={'https://github.com/Huntergs16'} target='_blank'>Github</Link>
              </div>
            </div>
          </span>
          <p className='text-4xl'>Frontend Developer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
          </p>
        </div>
        <div className='sm:w-1/2 h-full flex flex-col justify-center items-center text-emerald-950 group/projects place-self-center'>
          <div className='flex flex-col sm:items-center group/projects sm:h-2/3 justify-end'>
            <p className='text-4xl text-emerald-200 sm:text-emerald-950 font-extrabold mb-6'>Projects</p>
            <ul className='text-xl flex flex-col gap-4 items-center justify-center'>
                <li className='font-bold group/tala cursor-pointer'>
                  <p  className='text-2xl group-hover/tala:text-emerald-700'>Tala</p>
                  <p className='pl-8 text-base font-semibold opacity-0 group-hover/projects:opacity-100 group-hover/tala:text-emerald-700 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque molestias animi ab optio.</p>
                  </li>
                <li className='font-bold group/Moii cursor-pointer'>
                  <p className='text-2xl group-hover/Moii:text-emerald-700'>Deep Association Similarity Tool</p>
                  <p className='pl-8 text-base font-semibold opacity-0 group-hover/projects:opacity-100 group-hover/Moii:text-emerald-700 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque molestias animi ab optio.</p>
                  </li>
                <li className='font-bold group/Fantasy cursor-pointer'>
                <p className='text-2xl group-hover/Fantasy:text-emerald-700'>Fantasy Basketball App</p>
                  <p className='pl-8 text-base font-semibold opacity-0 group-hover/projects:opacity-100 group-hover/Fantasy:text-emerald-700 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque molestias animi ab optio.</p>
                  </li>
                <li className='font-bold group/Freewave cursor-pointer'>
                <p className='text-2xl group-hover/Freewave:text-emerald-700'>Freewave Movement</p>
                  <p className='pl-8 text-base font-semibold opacity-0 group-hover/projects:opacity-100 group-hover/Freewave:text-emerald-700 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque molestias animi ab optio.</p>
                  </li>
              </ul>
            </div>
          <p className='mt-auto text-xl font-semibold'>©2023 Hunter Samoy</p>
        </div>
      </div>
    </main>
  )
}
