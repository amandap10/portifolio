import Avatar from '../assets/avatar.jpg'

function Home() {

  return (
    <div className="w-screen h-screen ">
        <div className='bg-slate-900 h-96 px-0 flex justify-center flex-col items-center'>
          <img className='rounded-full w-40 h-40' src={Avatar} />
          <div className="mt-6 flex flex-col items-center text-white text-2xl">
            Amanda Oliveira
            <div className="text-xl">
              Portifólio
            </div>
          </div>
        </div>
        <div>
          Hello
        </div>
        
        
    </div>
  )
}

export default Home