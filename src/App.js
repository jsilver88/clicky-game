import React, { Component } from 'react';
import Nav from './components/navbar';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import CharImages from './components/CharImages';
import characters from './characters.json';
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  };

  componentDidMount() {
    this.setState({ characters: this.flipImages(this.state.characters) });
  }

  resetGame = clicks => {
    const resetGame = clicks.map(click => ({ ...click, clicked: false }));
    return this.flipImages(resetGame);
  }

  flipImages = characters => {
    let i = characters.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const k = characters[i];
      characters[i] = characters[j];
      characters[j] = k;
      i--;
    }
    return characters;
  };

  rightPick = data => {
    const { highScore, score } = this.state;
    const updatedScore = score + 1;
    const updatedHighScore = updatedScore > highScore ? updatedScore : highScore;
    this.setState({
      characters: this.flipImages(data),
      score: updatedScore,
      highScore: updatedHighScore
    });
  };

  wrongPick = data => {
    this.setState({
      data: this.resetGame(data),
      score: 0
    });
  };

  handleClick = id => {
    let correctGuess = false;
    const newChar = this.state.characters.map(character => {
      const newCharacter = { ...character };
      if (newCharacter.id === id) {
        if (!newCharacter.clicked) {
          newCharacter.clicked = true;
          correctGuess = true;
        }
      }
      return newCharacter;
    });
    correctGuess ? this.rightPick(newChar) : this.wrongPick(newChar);
  };




  render() {
    return (
      <>
        <Nav score={this.state.score} highScore={this.state.highScore} />

        <Header />

        <Container>
          {this.state.characters.map(character => (
            <CharImages
              key={character.id}
              id={character.id}
              handleClick={this.handleClick}
              image={character.image}
            />
          ))}
        </Container>

        <Footer />


      </>
    )
  }

}

export default App;
