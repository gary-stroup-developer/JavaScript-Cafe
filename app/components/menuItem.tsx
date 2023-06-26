import React from 'react';
import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    key: PropTypes.number,
    name: PropTypes.string, 
    description: PropTypes.string, 
    smPrice: PropTypes.string,
    mdPrice: PropTypes.string,
    lgPrice: PropTypes.string
}

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const MenuItem = ({ key,name, description, smPrice, mdPrice, lgPrice }:ComponentTypes) => {
    return (
        <div key={key} className='w-2/3 mt-6 mb-3'>
            <p className='text-lg'>{name}</p>
            <p className='max-w-sm'>{description}</p>
            <div className='flex justify-between my-2'>
                <p className='font-bold'>{smPrice}</p>
                <p className='font-bold'>{mdPrice}</p>
                <p className='font-bold'>{lgPrice}</p>
            </div>
        </div>

  )
}
MenuItem.PropTypes = ComponentPropTypes;
export default MenuItem;