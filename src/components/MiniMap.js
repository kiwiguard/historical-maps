import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import './MiniMap.css';

const MiniMap = () => {
    return (
        <>
            <div className='miniMap-div'>
                <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} className='miniMap'>
                    <TileLayer
                        url='../../maps/1651-1724_Material_cartográfico__34/{z}/{x}/{y}.jpg'
                        noWrap='true'
                        minZoom='2'
                        maxZoom='4'
                        continuousWorld='false'
                    />
                    <Rectangle bounds={[[40, -5],[65, 15]]}>
                        <Popup>
                            Sweden
                        </Popup>
                    </Rectangle>
                    <Marker position={[20, -45 ]}>
                        <Popup>
                        British Islands.
                        </Popup>
                    </Marker>
                </MapContainer>          
                <section className='miniMap-info'>
                    <h4><b>Created by: </b>Unknown</h4>
                    <h4><b>Date (ca): </b>1651 - 1724</h4>
                </section>
            </div>
        </>
    )
}

export default MiniMap
