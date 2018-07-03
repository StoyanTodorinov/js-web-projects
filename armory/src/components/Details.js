import React, { Component } from 'react'
import Knife from '../images/knife.jpg'

class Details extends Component {
  render() {
    let title = this.props.match.params.productId.toUpperCase()
    let knife = {
      name: 'Proelia',
      weight: '145g',
      description: 'A very beautiful stainless steel folding knife'
    }
    return (
      <div>
        <div className='App-body-title'><p>{title} details</p></div>
        <div className='App-details'>
          <p>{'Name: ' + knife.name}</p>
          <p>{'Weight: ' + knife.weight}</p>
          <p>{'Description: ' + knife.description}</p>
        </div>
        <div className='App-details-img-container'>
          <img className='App-details-img' src={Knife} alt={title + ' image'} />
        </div>
        {/* if logged user */}
        <div className='App-details-comments'>
          <h2>3 Comments</h2>
          <ul>
            <li>
              This is an awesome knife
            </li>
              <ul>
                <li>
                  Shut up, it is too expensive
               </li>
               <li>
                  Hey hey, watch your tongue!   
               </li>
              </ul>
            <li>
              Well if you ask me i think its kinda pricy for what you get
            </li>
            <li>
              Totally agree with Stoyan!
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Details
