import '../../App.css';
import SimilarItems from '../SimilarItems';
import { Link, useParams } from 'react-router-dom';
import mapModels from '../../models/mapModels.json';
import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import '../Popup.css';

export function RenderMapModel () { 
    let mapList = mapModels   
    return (mapList.map((e,i) => {   
            return (
            <>
                <section key={i} className='map-header'>
                <Link to='/search'>
                    <button className='primary-btn'>Back to Search</button>
                </Link>
                    <h1 className='libre'>Map of {e.name}</h1>
                    <div className='map-header--info'>
                        <h4><b>Created by: </b>{e.maker}</h4>
                        <h4><b>Date (ca): </b>{e.startDate} - {e.endDate}</h4>
                    </div>
                </section>
                <div className='map-div'>
                    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} className='mapid'>
                        <TileLayer
                            url={e.path}
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
                </div>
            </>
            )
        }))
}

export function RenderMapItem () {
    // let item = currentMap
    let mapList = mapModels;
    let { id } = useParams();
    var item = mapList.find(x => x.id === id);
    var markers = item.markers;
   


    function renderMapMarker(marker) { 
        if(marker.type === 'Rectangle') {            
            return (
                <>                    
                <Rectangle bounds={marker.bounds}>
                    <Popup>
                        <h3 className='leaflet-popup-content--heading'>{marker.heading}</h3>
                        <img src={marker.image} alt='Minimap' className='leaflet-popup-content--image'/>
                        <p className='leaflet-popup-content--content'>{marker.content}</p>
                        <Link className='leaflet-popup-content--link' to={marker.link}>See more &gt;</Link>
                    </Popup>
                </Rectangle> 
                </>
        )}
        else if(marker.type === 'Marker') {
            return (
                <>
                <Marker position={marker.bounds}>
                    <Popup>
                        <h3 className='leaflet-popup-content--heading'>{marker.heading}</h3>
                        <img src={marker.image} alt='Minimap' className='leaflet-popup-content--image'/>
                        <p className='leaflet-popup-content--content'>{marker.content}</p>
                        <Link className='leaflet-popup-content--link'to={marker.link}>See more &gt;</Link>
                    </Popup>
                </Marker>
                </>
            )
        }

    }

    return (
        <>
            <div className='wrapper'>
                <section className='map-header'>
                    <Link to='/search'>
                        <button className='primary-btn'>Back to Search</button>
                    </Link>
                    <h1 className='libre'>Map of {item.name}</h1>
                    <div className='map-header--info'>
                        <h4><b>Created by: </b>{item.maker}</h4>
                        <h4><b>Date (ca): </b>{item.startDate} - {item.endDate}</h4>
                    </div>
                </section>
                <div className='map-div'>
                <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} className='mapid'>
                    <TileLayer
                        url={item.path}
                        noWrap='true'
                        minZoom='2'
                        maxZoom='4'
                        continuousWorld='false'
                    />
                    {
                        markers.map((e => renderMapMarker(e)))                        
                    }
                </MapContainer>
                
                </div>
            </div>
            <SimilarItems />
        </>
    )
}

export function MapView (id) {
    return (
    <>
        <div className='wrapper'>
            {/* <RenderMapItem /> */}
            <RenderMapModel />
        </div>
        <SimilarItems />
    </>
    )
}

export default MapView;