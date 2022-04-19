import "./Home.css";
import { FaCloudSun } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCloudMoonRain } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudMeatball } from "react-icons/fa";
import LiveCamera from "./Livecamera";

function Home() {
  return (
    <div className="row">
      <div className="col-12 background_img gy-0">
        <div className="background_img_text_div">
          <div className="row subscribe_div">
            <div className="col-8 col-md-11 px-0">
              <input
                type="text"
                placeholder="Find your location ..."
                className="text-muted subscribe_input"
              />
            </div>
            <div className="col-4 col-md-1 button_div">
              <input type="submit" className="subcribe_button" value="Find" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 homepage_padding forcast_show_div">
        <div className="row forcast_show">
          <div className="col-md-4">
            <div className="row">
              <div className="col-12 d-flex justify-content-between heading_div">
                <div>
                  <small className="today">Monday</small>
                </div>
                <div>
                  <small className="today">6 Oct</small>
                </div>
              </div>
              <div className="col-12 d-flex flex-column py-3">
                <div>
                  <p className="location">New York</p>
                </div>
                <div className="d-flex">
                  <div>
                    <h3 className="today_weather">23°C</h3>
                  </div>
                  <div className="px-md-4">
                    <h3>
                      <FaCloudSun className="today_weather_icon" />
                    </h3>
                  </div>
                </div>
                <div className="today_weather_accessory">
                  <span>
                    <FaUmbrellaBeach /> 20%
                  </span>
                  <span className="px-3">
                    <FaDirections /> 18km/h
                  </span>
                  <span>
                    <FaMapMarkerAlt /> East
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-2 daysdiv">
                      <div className="col-12 heading_div_2">
                        <small className="days">Tuesday</small>
                      </div>
                      <div className="col-12 text-center">
                        <FaCloudMoonRain className="days_icon"/>
                        <h3 className="days_weather">23°C</h3>
                        <p className="days_weather2">18°C</p>
                    </div>
                  </div>
                  <div className="col-2">
                  <div className="row">
                      <div className="col-12 heading_div_1">
                        <small className="days">Wednesday</small>
                      </div>
                      <div className="col-12 text-center">
                        <FaCloudMeatball className="days_icon"/>
                        <h3 className="days_weather">23°C</h3>
                        <p className="days_weather2">18°C</p>
                    </div>
                    </div>
                  </div>
                  <div className="col-2 daysdiv">
                    <div className="col-12 heading_div_2">
                      <small className="days">Thursday</small>
                    </div>
                    <div className="col-12 text-center">
                        <FaCloudShowersHeavy className="days_icon"/>
                        <h3 className="days_weather">23°C</h3>
                        <p className="days_weather2">18°C</p>
                    </div>
                  </div>
                  <div className="col-2">
                  <div className="row">
                      <div className="col-12 heading_div_1">
                        <small className="days">Friday</small>
                      </div>
                      <div className="col-12 text-center">
                        <FaCloudMeatball className="days_icon"/>
                        <h3 className="days_weather">23°C</h3>
                        <p className="days_weather2">18°C</p>
                    </div>
                    </div>
                  </div>
                  <div className="col-2 daysdiv">
                    <div className="col-12 heading_div_2">
                      <small className="days">Saturday</small>
                    </div>
                    <div className="col-12 text-center">
                        <FaCloudSunRain className="days_icon"/>
                        <h3 className="days_weather">23°C</h3>
                        <p className="days_weather2">18°C</p>
                    </div>
                  </div>
                  <div className="col-2">
                  <div className="row">
                      <div className="col-12 heading_div_1 last_day_col">
                        <small className="days">Sunday</small>
                      </div>
                      <div className="col-12 text-center">
                        <FaCloudMoon className="days_icon"/>
                        <h3 className="days_weather">23°C</h3>
                        <p className="days_weather2">18°C</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveCamera/>
    </div>
  );
}
export default Home;
