import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="from-emerald-700 to-emerald-200 bg-gradient-to-tr sm:bg-gradient-conic min-h-screen overflow-hidden flex flex-col sm:flex-row p-4 sm:px-36 sm:py-28 font-mono">
      <div className='sm:border-white flex flex-col sm:flex-row sm:border-solid sm:border-8 min-h-full min-w-full bg-transparent px-6 py-12 justify-center gap-4 sm:gap-8'>
        <div className='sm:w-1/2 h-min text-emerald-950 font-semibold flex flex-col gap-12'>
          <span className='flex flex-col sm:flex-row items-center gap-6 sm:gap-10'>
            <p className='text-4xl sm:text-7xl'>Hunter Samoy</p>
            <div className='group/profile flex items-center gap-6 px-8 justify-center'>
              <div className="w-44 h-44 rounded-full overflow-hidden bg-gradient-to-tl from-emerald-700 to-emerald-200 z-10">
                <Image className="w-full h-full object-cover" src={'/headshot-removebg-preview.png'} alt={'Hunter'} width={200} height={200} />
              </div>
              <div className='absolute gap-4 text-lg sm:-translate-x-[10.4rem] opacity-0 group-hover/profile:translate-y-28 sm:group-hover/profile:translate-y-0 sm:group-hover/profile:translate-x-0 group-hover/profile:opacity-100 transition-all duration-800 ease-in-out'>
                <Link className='cursor-pointer hover:text-emerald-700 mr-4' href={'https://www.linkedin.com/in/hunter-samoy/'} target='_blank'>LinkedIn</Link> 
                <Link className='cursor-pointer hover:text-emerald-700' href={'https://github.com/Huntergs16'} target='_blank'>Github</Link>
              </div>
            </div>
          </span>
          <div className='flex flex-col gap-14'>
            <p className='place-self-center sm:place-self-start text-2xl sm:text-3xl text-emerald-200 sm:text-emerald-950'>Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima ad mollitia. Inventore vero dicta dolores! Adipisci animi in quaerat quasi esse maiores distinctio pariatur quisquam, aperiam dolorem, et sequi!
            </p>
          </div>
        </div>
        <div className='sm:w-1/2 h-full sm:h-min flex flex-col justify-start items-center text-emerald-950 group/projects place-self-center sm:px-32'>
          <div className='flex flex-col sm:items-center group/projects sm:h-2/3 justify-start'>
            <p className='text-3xl text-emerald-200 sm:text-emerald-950 font-extrabold mb-6'>Projects</p>
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
        </div>
      </div>
      <div className='flex w-full justify-center sm:absolute sm:bottom-12 sm:right-48 sm:w-max'>
        <p className='opacity-90 text-lg'>©2023 Hunter Samoy</p>
      </div>
    </main>
  )
}
