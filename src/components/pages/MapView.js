import '../../App.css';
// import startMap from '../../images/startMap.jpg';
import SimilarItems from '../SimilarItems';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MapView () {
    return (
    <>
        <div className='wrapper'>
            <section className='map-header'>
            <Link to='/search'>
                <button className='primary-btn'>Back to Search</button>
            </Link>
                <h1 className='libre'>Map of Europe</h1>
                <div className='map-header--info'>
                    <h4><b>Created by: </b>Unknown</h4>
                    <h4><b>Date (ca): </b>1651 - 1724</h4>
                </div>
            </section>
            <div className='map-div'>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className='mapid'>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url={startMap}
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

                {/* <div className='map-div--image-container'>
                    <img src={startMap} alt={'map'} className='map-image' useMap='#image-map' />
                    
                    <map name="image-map">
                        <area target="_self" alt="British Islands" title="British Islands" href="http://localhost:3000/mapView2" coords="1465,1266,963,718" shape="rect" />
                        <area target="_self" alt="Scandinavia" title="Scandinavia" href="http://localhost:3000/mapView3" coords="1536,113,2506,882" shape="rect" />
                    </map>
                </div> */}
            </div> 
        </div>
        <SimilarItems />
    </>
    )
}

export default MapView;