import React, { Component } from 'react'
import knife from '../images/knife.jpg'
import proelia from '../images/proelia.jpg'

export default class Category extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>TITLE</p></div>
        <div className='App-product'>
          <p>Сгъваем нож proelia TS50PH</p>
          <img className='App-img-product' src={knife} alt='proelia' />
        </div>
        <div className='App-product'>
          <p>This is a knife</p>
          <img className='App-img-product' src={knife} alt='proelia' />
        </div>
        <div className='App-product'>
          <p>This is a knife</p>
          <img className='App-img-product' src={knife} alt='proelia' />
        </div>
        <div className='App-product'>
          <p>This is a knife</p>
          <img className='App-img-product' src={proelia} alt='proelia' />
        </div>
        <div className='App-product'>
          <p>This is a knife</p>
          <img className='App-img-product' src={proelia} alt='proelia' />
        </div>
        <div className='App-product'>
          <p>This is a knife</p>
          <img className='App-img-product' src={proelia} alt='proelia' />
        </div>
      </div>
    )
  }
}
