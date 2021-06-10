import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import { Link } from 'react-router-dom';
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
                    <Rectangle bounds={[[-71, 45], [-60, 120]]}>
                        <Popup>
                            <h3 className='leaflet-popup-content--heading'>Northeast Africa</h3>
                            <img src='../../images/minimaps/1584_Ptolemaei_Alexandrini_Geographiae_Libri_Octo_109_mini.jpg' alt='Minimap' className='leaflet-popup-content--image'/>
                            <Link className='leaflet-popup-content--link' to="/mapView/5">Got to map &gt;</Link>
                        </Popup>
                    </Rectangle>
                    <Rectangle bounds={[[-57, 28], [-30, 60]]}>
                        <Popup>
                            <h3 className='leaflet-popup-content--heading'>Greece</h3>
                            <img src='../../images/minimaps/1651-1724_Material_cartográfico__75_mini.jpg' alt='Minimap' className='leaflet-popup-content--image'/>
                            <Link className='leaflet-popup-content--link' to="/mapView/2">Got to map &gt;</Link>
                        </Popup>
                    </Rectangle>
                    <Marker position={[50, 5]}>
                        <Popup>
                        <h3 className='leaflet-popup-content--heading'>Sweden</h3>
                        <Link className='leaflet-popup-content--link'>Read More &gt;</Link>
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
