import Image from 'next/image';
import React from 'react';
import events from '../../public/images/event-gathering.jpeg';

const Events = () => {
  return (
    <div className='flex flex-col w-full p-3 items-center'>
      <div className='flex-1'>
        <Image className="rounded-lg"src={events} width={600} height={500} alt='people gathering at events'/>
      </div>
      <div className='flex flex-col text-left text-xl md:w-2/3 my-4'>
        <p className='md:w-2/3 self-center'>Our events held are to help us grow in knowledge as well as have fun and share our stories.
          One of our popular events is coding night. This is where you come join us for a night filled with delicious snacks, coffee, and 
          a code-along session. We choose an application we want to build and start coding away! Another event we hold on Fridays, is called 
          Market night. This gives local small businesses in the community a place to setup shop inside our coffee shop, in order to advertise and 
          share the product they sell. Lastly, we hold a movie night every couple of months. This gives family and friends a chance to enjoy a night out 
          and bond over the movie experience!
        </p>
        <p className='md:w-2/3 md:self-center my-3'>If you would like to join us at our next event, feel free to contact us through one of several means</p>
        <p className='md:w-1/2 md:self-center my-3'>Email: javascriptcafe@gmail.com</p>
        <p className='md:w-1/2 md:self-center my-3'>Phone: 333-000-0000</p>
        <p className='md:w-1/2 md:self-center my-3'>Sign-up sheet located next to the coffee bar</p>
      
        <div className='flex flex-col justify-evenly md:self-center md:w-2/3'>
          <h1 className="text-4xl font-bold my-5 md:self-center md:mr-4">Upcoming Event Gatherings!</h1>
          <p className='text-xl my-3'><span className='font-bold'>Coding Night</span> - Thursday June 29th 7:00 PM - Midnight</p>
          <p className='text-xl my-3'><span className='font-bold'>Market Night</span> - Friday June 30th 5:00 PM - 8:00 PM</p>
        </div>
      </div>
      
    </div>
  )
}

export default Events;