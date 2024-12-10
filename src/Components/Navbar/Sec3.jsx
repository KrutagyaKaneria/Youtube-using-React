import './Sec3.css'
import { useState } from 'react'
import { useEffect } from 'react'
function Sec3(){

    const[vidios,setvidios]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/alldata")
        .then((response) => response.json())
        .then((data)=>{
            setvidios(data)
        })
    },[])

    return(
        <>
        <div className="alltogether">
            {vidios.map((i)=>(
                <div key={i.id} className="thumnail">
                    <div className="bigimg">
                        <img src={`http://localhost:3000${i.image1}`} alt="" />
                    </div>
                    <div className="information">
                        <div className="smallimage"><img src={`http://localhost:3000${i.image2}`} alt="" /></div>
                        <div className="info">
                            <div className="info1">{i.txt1}</div>
                            <div className="imgandtxt">{i.txt2} <img src={`http://localhost:3000${i.image3}`} alt="" /></div>
                            <div className="lasttxt">{i.txt3}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default Sec3