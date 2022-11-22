import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';

function LogoCube() {

    const handleRotation=(obj,sub)=>{
   console.log("oo",obj,sub);
    }
    
    return (
      <div>
            
          
        <center>
            
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front" className >
                <div className='first'  onClick={handleRotation(this)}>
                    </div>

                <div  className='second' >
                    </div>
                <div  className='third'>
                    </div>
                <div  className='fourth'>
                    </div>
                <div  className='fifth'>
                </div>
                <div  className='sixth'>
                    </div>
            </Cube>
            </div>
        </center>
      </div>
    );
  
}
export default LogoCube