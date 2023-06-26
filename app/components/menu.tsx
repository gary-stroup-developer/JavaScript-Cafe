import React from 'react';
import MenuItem from './menuItem';
import data from '../../menuData';

const MenuDisplay = () => {
  return (
      <div className='flex justify-evenly w-full'>

          <div className='flex flex-wrap w-full justify-around'>
              {
                data.map((item) => (  
                <div className='flex flex-col justify-between items-center mb-3'>
                    <div>
                        <h1 className='text-2xl'>{item.header}</h1>
                        {
                            item.items.map((detail:({name:(string),description:(string),smPrice:(string),mdPrice:(string),lgPrice:(string)}), index:(number)) => (
                            <MenuItem
                            key={index}
                            name={detail.name}
                            description={detail.description}
                            smPrice={detail.smPrice}
                            mdPrice={detail.mdPrice}
                            lgPrice={detail.lgPrice}
                            />
                        ))  
                        }
                    </div>
                </div>
                ))
              }
          </div>
      </div>
  )
}

export default MenuDisplay;