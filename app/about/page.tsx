import React from 'react';
import Image from 'next/image';
import about from '../../public/images/coffeeBrewing.webp';
import shop from '../../public/images/coffeeShopUpstairs.jpeg';

const About = () => {
  return (
    <div className='flex flex-col w-full p-3 items-center'>
      <div className='flex flex-col items-center gap-2 md:flex-row'>
        <Image className="rounded-md mt-2" src={about} width={350} height={300} alt="coffee shop bar"/>
        <Image className="rounded-md mt-2" src={shop} width={350} height={300} alt="upstairs to coffee shop"/>
      </div>
      
      <div className='text-lg max-w-lg'>
        
        <p className="my-3 p-2">Welcome to JavaScript Cafe, where passion for coding and love for coffee blend together to create a unique
          experience. Let us introduce you to the visionary duo behind this tech-savvy coffee haven - Mark and Hannah.
        </p>

        <p className="my-3 p-2">Before embarking on their coffee journey, Mark and Hannah were both seasoned full-stack developers. They spent years
          immersed in the world of coding, bringing innovative solutions to life through lines of JavaScript.
          However, their insatiable curiosity and thirst for knowledge led them down a different path.
        </p>

        <p className="my-3 p-2">Driven by their shared passion for coffee, Mark and Hannah embarked on a life-changing adventure. They traveled to
          various corners of the globe, immersing themselves in the art of coffee farming and the intricate process of coffee bean
          cultivation. From lush plantations to bustling markets, they learned firsthand about the craftsmanship involved in
          bringing that perfect cup of coffee to your table.
        </p>

        <p className="my-3 p-2">Inspired by their experiences and armed with their technical expertise, Mark and Hannah decided to merge their two
          passions - technology and coffee - into a captivating concept: JavaScript Cafe. They envisioned a space where people
          could not only savor exceptional coffee but also delve into the fascinating world of programming.
        </p>

        <p className="my-3 p-2">At JavaScript Cafe, you’ll find a warm and inviting atmosphere where the aroma of freshly brewed coffee mingles
          harmoniously with the clickety-clack of keyboards. It’s a place where programmers, students, and coffee enthusiasts
          come together to share ideas, collaborate on projects, or simply enjoy a moment of inspiration. Not a programmer? No
          problem, we invite you all to come join us here at our coffee shop. JavaScript Café is about connecting people from
          various walks of life, in order to share experiences. That is why we host events where local small businesses have a
          chance to market their product at our coffee shop.
        </p> 

        <p className="my-3 p-2">With their combined skills and unwavering dedication, Mark and Hannah have created a haven that celebrates the artistry
          of coffee while embracing the power of technology. Every cup served at JavaScript Cafe is crafted with care, using beans
          sourced directly from the regions they explored during their transformative journey.
        </p>

        <p className="my-3 p-2">So whether you’re seeking a caffeine-fueled coding session or simply wish to savor a carefully brewed cup of coffee,
          Mark and Hannah invite you to join them on this extraordinary venture. Step into JavaScript Cafe and let your taste buds
          and creativity awaken in perfect harmony.
        </p>

        </div>
      </div>
  )
}

export default About;