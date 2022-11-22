import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';

function LogoCube() {
    
    return (
      <div>
            
          
        <center>
            {/* <h2>no children</h2> */}
            {/* <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front" />
            </div>
            <h2>set children</h2> */}
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front" >
                <div style={{backgroundColor:"red",opacity:"0.8"}} className='frontone'>
                    <div style={{backgroundColor:"red",width: '280px', height: '300px'}}></div>
                    </div>

                <div style={{backgroundColor:"green",opacity:"0.8"}}>
                    <div style={{backgroundColor:"green",width: '280px', height: '300px'}}></div>
                    </div>
                <div style={{backgroundColor:"blue",opacity:"0.8"}}>
                    <div style={{backgroundColor:"blue",width: '280px', height: '300px'}} ></div>
                    </div>
                <div style={{backgroundColor:"yellow",opacity:"0.8"}}>
                    <div style={{backgroundColor:"yellow",width: '280px', height: '300px'}} ></div>
                    </div>
                <div style={{backgroundColor:"orange",opacity:"0.8"}}>
                    <div style={{backgroundColor:"orange",width: '280px', height: '300px'}} ></div>
                </div>
                <div style={{backgroundColor:"violet",opacity:"0.8"}}>
                    <div style={{backgroundColor:"violet",width: '280px', height: '300px'}}></div>
                    </div>
            </Cube>
            </div>
        </center>
      </div>
    );
  
}
export default LogoCube