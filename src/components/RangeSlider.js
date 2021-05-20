import { useState } from 'react';
import { Slider } from '@material-ui/core'
import './RangeSlider.css'
import { PinDropSharp } from '@material-ui/icons';

const RangeSlider = (props) => {
    const [value, setValue] = useState([1718, 1991])
    const updateRange = (e, data) => {
        setValue(data)
        props.onChange(data);
    }
    return (
        <div className='slider-div'>
            <label htmlFor='year' className='slider-label'>Year</label><br/>
            <div className='value'><p>{value[0]}</p><p>{value[1]}</p></div>
            <Slider 
                value={value}
                onChange={updateRange}
                marks
                valueLabelDisplay='auto'
                aria-labelledby="discrete-slider"
                name='year'
                step={100}
                min={1400}
                max={2021}
            />
        </div>
    )
}

export default RangeSlider
