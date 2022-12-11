import React from 'react'

const DashboardSquare = ({title, src, elipsisSrc, timeframes}) => {
  return (
    <div className={ 
            title==="Work"? "make-orange":  
            title==="Play"? "make-cyan": 
            title==="Study"? "make-red": 
            title==="Exercise"? "make-green": 
            title==="Social"? "make-violet": 
            title==="Self Care"? "make-yellow":
            undefined
          }>
        <div className='square-img-div'>
          <img src={src} alt="logo img"/>
        </div>
        <div className='elipsis-div'><img src={elipsisSrc} alt="elipsis img"/></div>
        <div className='square-info-div'>
          <div className='square-info-div-01'>
            <h3>{title}</h3>
          </div>
          <div className='square-info-div-02'> 
            <h1>{timeframes.current}hrs</h1>
            <h4>{timeframes.sentence} - {timeframes.previous}hrs</h4>
          </div>
        </div>
    </div>
  )
}

export default DashboardSquare
