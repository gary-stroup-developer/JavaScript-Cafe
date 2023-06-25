import Image from "next/image";
import coffeeShop from '../public/images/coffeeShopAerial.jpeg';
import hero from '../public/images/homepage-hero.png';
import gather from '../public/images/placeToGather.jpeg';
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      
      <div className="home-header-section">
      </div>

      <div className="flex w-full flex-col items-center justify-around p-2 md:flex-row-reverse">

        <div>
          <Image className="rounded-lg md: w-full" src={coffeeShop} width={400} height={500} alt="coffeeshop aerial view"/>
        </div>
        
        <div className="mt-2 md:w-1/2">
          <Image className="md: w-2/3" src={hero} width={150} height={150} alt="people ordering coffee at register"/>
          <div className="text-xl text-slate-800 p-2 m-2">
            <p>Open Daily</p>
            <p>Coffee,Delicious food,and a place to gather amongst friends. We are more than a coffee shop. JavaScript Cafe
              is about bringing together people from the community in order to build a positive place for growth, opportunities, and 
              foster new relationships. 
            </p>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col items-center justify-around w-full mt-4 p-1">
        <h1 className="text-3xl mb-3">Community Events</h1>
        <Image className="rounded-md" src={gather} width={600} height={500} alt="people gathering enjoying coffee"/>
        <p className="text-lg max-w-lg my-4">
          JavaScript Cafe hosts several events each month throughout the year. One of our popular events is the monthly
          coding challenge. To find out more about our events, check out the events page <Link className="mr-1 hover:text-slate-800 hover:font-bold" href="/events">here</Link>or by clicking the link in the navigation above.
        </p>
        
        </div>
    </main>
  )
}
