import React from 'react';
import MenuItem from './menuItem';
import data from '../../menuData';

const MenuDisplay = () => {
  return (
      <div className='grid'>

          <div className='grid gap-3 sm:grid-cols-none md:grid-cols-2 lg:grid-cols-4'>
              {
                data.map((item,i) => (  
                    <div key={ i} className='flex flex-col justify-between items-center mb-3'>
                
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
                ))
              }
          </div>
      </div>
  )
}

export default MenuDisplay;