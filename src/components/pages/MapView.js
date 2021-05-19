import '../../App.css';
import SimilarItems from '../SimilarItems';
import { Link, useParams } from 'react-router-dom';
import mapModels from '../../models/mapModels.json';
import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';

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
    var item = mapList.find(x => x.id === id)

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
                    <Rectangle bounds={[[40, -5],[65, 15]]}>
                        <Popup>
                            <Link to='/about'>
                                Sweden
                            </Link>
                        </Popup>
                    </Rectangle>
                    <Marker position={[20, -45 ]}>
                        <Popup>
                        British Islands.
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
            <SimilarItems />
        </>
    )
}

export function MapView (id) {
    console.log(id)
    console.log(mapModels)
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