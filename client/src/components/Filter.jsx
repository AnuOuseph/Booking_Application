import { createPortal } from 'react-dom';

function Filter(props) {
  return createPortal(
    <>
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-50"></div>
    <div className='fixed top-1/2 left-1/2 lg:w-[30%] md:w-[50%] w-[90%] flex flex-col transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-lg shadow-md'>
        <button className='self-end' onClick={props.menu}>X</button>
        <div className="bg-white w-[100%] h-auto mx-auto md:my-2 my-10 px-4 rounded-xl">
          <div className="flex justify-between py-2 mb-2">
            <p className="text-xl font-medium"> Filter</p>
          </div>
          <div>
            <p>Destination</p>
            <input type="text" className='w-full my-2 py-1 px-4 border border-gray-500 outline-none rounded-xl'/>
          </div>
          <div className="border border-gray-500 rounded-xl mt-2">
            <div className="grid grid-cols-2">
              <div className="border-r border-gray-500">
                <p className="p-2 text-xs flex justify-between">CHECK-IN <span><input type="date" className="w-4" placeholder="" name="" id="" /></span></p>
                <p className="px-2 pb-2 text-xs font-medium">08/09/2023</p>
              </div>
              <div>
                <p className="p-2 text-xs flex justify-between">CHECK-OUT <span><input type="date" className="w-4" placeholder="" name="" id="" /></span></p>
                <p className="px-2 pb-2 text-xs font-medium">08/09/2023</p>
              </div>
            </div>
          </div>
          <p className='text-md font-medium my-2'>Options</p>
          <div className='flex justify-between py-2'>
            <p>Min Price:</p>
            <input type="tel" className='border w-32 border-gray-500 rounded-xl outline-none px-4' />
          </div>
          <div className='flex justify-between py-2'>
            <p>Max Price:</p>
            <input type="tel" className='border w-32 border-gray-500 rounded-xl outline-none px-4' />
          </div>
          <div className='flex justify-between py-2'>
            <p>Rooms:</p>
            <input type="tel" className='border w-32 border-gray-500 rounded-xl outline-none px-4' />
          </div>
          <button className="bg-blue-600 w-full my-4 py-1 rounded-xl text-md text-white font-medium">submit</button>
          
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Filter
