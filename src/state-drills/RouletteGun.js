import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 2
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
    kittyLives: 9
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 2)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...';
    } 
    else if (chamber === bulletInChamber) {
       this.setState(){kittyLives: this.state.kittyLives - 1};
      return `Uh oh, used up a life! Kitty has ${this.state.kittyLives} lives left.`;
    } 
    else {
      return `Landed on feet! Kitty still has ${this.state.kittyLives} lives`
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Kitty had an accident!
        </button>
      </div>
    )
  }
}
