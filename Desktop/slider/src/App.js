import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  require("./curry.jpg"),
  require("./noodles.jpg"),
  require("./stew.jpg")
];

const App = () => {
  return (
      <div className="slide-container">
        <Slide>
          <div style={{display:"flex",
          alignItems:"center",
            justifyContent:"center",
            marginTop:150
          }} className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[0]})`,
            width:300,


              height:300
            }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[1]})`
              ,
              width:300,
              height:300,




            }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[2]})`
              ,
              width:300,
              height:300,




            }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
  )
}
export default App