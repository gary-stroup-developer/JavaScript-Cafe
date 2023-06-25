import React from 'react'

const Menu = () => {
  return (
    <main className='flex w-full mt-8'>

      <div className='coffee flex justify-evenly w-3/4'>

        <div className='flex flex-wrap justify-around w-full'>

          <div className='flex flex-col justify-between items-baseline px-3'>
            <h1 className='text-2xl'>Coffee</h1>
            <div className='w-3/4 mt-6 mb-3'>
              <p className='text-lg'>Espresso</p>
              <p>A delightful coffee brewed strong for those who need to get through their day</p>
              <div className='flex justify-between w-3/4 my-2'>
                <p className='font-bold'>$3.95</p>
                <p className='font-bold'>$4.30</p>
                <p className='font-bold'>$5.10</p>
              </div>
            </div>
            <div className='w-3/4 mb-3'>
              <p className='text-lg'>Americano</p>
              <p>A delightful coffee brewed strong for those who need to get through their day</p>
            </div>
            <div className='w-3/4 mb-3'>
              <p className='text-lg'>Cappuccino</p>
              <p>A delightful coffee brewed strong for those who need to get through their day</p>
            </div>
            <div className='w-3/4 mb-3'>
              <p className='text-lg'>Latte</p>
              <p>A delightful coffee brewed strong for those who need to get through their day</p>
            </div>
            <div className='w-3/4 mb-3'>
              <p className='text-lg'>Mocha</p>
              <p>A delightful coffee brewed strong for those who need to get through their day</p>
            </div>
          </div>
          <div className='flex flex-col justify-between items-baseline pb-5'>
            <p className='text-lg'>Sm</p>
            <p className='text-lg'>$3.95</p>
            <p className='text-lg'>$4.50</p>
            <p className='text-lg'>$5.10</p>
            <p className='text-lg'>$3.95</p>
            <p className='text-lg'>$4.50</p>
          </div>
           <div className='flex flex-col justify-between pb-5'>
            <p className='text-lg'>Md</p>
            <p className='text-lg'>$3.95</p>
            <p className='text-lg'>$4.50</p>
            <p className='text-lg'>$5.10</p>
            <p className='text-lg'>$4.50</p>
            <p className='text-lg'>$5.10</p>
          </div>
           <div className='flex flex-col justify-between pb-5'>
            <p className='text-lg'>Lg</p>
            <p className='text-lg'>$3.95</p>
            <p className='text-lg'>$4.50</p>
            <p className='text-lg'>$5.10</p>
            <p className='text-lg'>$4.50</p>
            <p className='text-lg'>$5.10</p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Menu;