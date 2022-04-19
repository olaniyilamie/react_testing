import './Livecamera.css';

function LiveCamera(){
    return(
        <div className="col-12 homepage_padding">
            <div className='row py-5'>
                <div className='col-12'>
                    <p className='live_camera'>Live cameras</p>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-6 col-md-3 live_camera_div no_padding px-1'>
                            <div className='row'>
                                <div className='col-12 weather_view'>
                                <img src='https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035__340.jpg' className='img-fluid rounded' />
                                </div>
                                <div className='col-12'>
                                    <p className='live_camera_location'>New York</p>
                                    <p className='live_camera_date'>8 oct, 8:00AM</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 live_camera_div no_padding px-1'>
                            <div className='row'>
                                <div className='col-12 weather_view'>
                                <img src='https://cdn.pixabay.com/photo/2015/02/16/07/19/cityscape-637990__480.jpg' className='img-fluid rounded' />
                                
                                </div>
                                <div className='col-12'>
                                    <p className='live_camera_location'>Los Angeles</p>
                                    <p className='live_camera_date'>8 oct, 8:00AM</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 live_camera_div no_padding px-1'>
                            <div className='row'>
                                <div className='col-12 weather_view'>
                                    
                                <img src='https://cdn.pixabay.com/photo/2016/04/25/10/27/dubai-1351569__480.jpg' className='img-fluid rounded' />
                                </div>
                                <div className='col-12'>
                                    <p className='live_camera_location'>Chicago</p>
                                    <p className='live_camera_date'>8 oct, 8:00AM</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 live_camera_div no_padding px-1'>
                            <div className='row'>
                                <div className='col-12 weather_view'>
                                <img src='https://cdn.pixabay.com/photo/2019/11/03/08/19/dubai-4598074__480.jpg' className='img-fluid rounded' />
                                </div>
                                <div className='col-12'>
                                    <p className='live_camera_location'>Lagos</p>
                                    <p className='live_camera_date'>8 oct, 8:00AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LiveCamera;