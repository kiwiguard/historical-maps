import { useState } from 'react';
import { Slider } from '@material-ui/core'
import './RangeSlider.css'

const RangeSlider = () => {
    const [value, setValue] = useState([1718, 1991])
    const updateRange = (e, data) => {
        setValue(data)
    }
    return (
        <div className='slider-div'>
            <label htmlFor='year' className='slider-label'>Year</label><br/>
            <div className='value'><p>{value[0]}</p><p>{value[1]}</p></div>
            <Slider 
                value={value}
                onChange={updateRange}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                name='year'
                min={1400}
                max={2021}
            />
        </div>
    )
}

export default RangeSlider
