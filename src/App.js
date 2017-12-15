import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question'

class App extends Component {

  state = {}

  handleChangeInParent = (questionID, answerID) => {
    this.setState({
      [questionID]:answerID
    })
  }

  render() {

    const questionsSet = {
      1: {
        question: "Have you eaten?",
        answers: {
          1: "yes",
          2: "no"
        }
      },
      2: {
        question: "Have you beaten?",
        answers: {
          1: "yes",
          2: "no"
        },
        condition: {
          q:1,
          a:2
        }
      },
      3: {
        question: "Have you walked?",
        answers: {
          1: "yes",
          2: "no"
        },
        condition: {
          q:1,
          a:1
        }
      }
    }

    const content = {
      1: {
        content: "Good for you",
        conditions: [
          {
            q:2,
            a:1
          },
          {
            q:3,
            a:2
          }
        ]
      },
      2: {
        content: "You poor boy",
        conditions: [
          {
            q:2,
            a:2
          },
          {
            q:3,
            a:1
          }
        ]
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The best app in the world</h1>
        </header>
        <form>
          {Object.keys(questionsSet).map((questionID) => {
              const condition = questionsSet[questionID].condition
              if(!condition || condition.a === this.state[condition.q]){
                return(
                  <Question key={questionID} id={questionID} question={questionsSet[questionID]} callback={this.handleChangeInParent}/>
                );
              }
              return null;
            }
          )}

          {Object.keys(content).map((contentID) => {
            const conditions = content[contentID].conditions
            for(let i=0; i<conditions.length; i++){
              const condition = conditions[i]
              if(condition.a === this.state[condition.q]){
                return(
                  <p key={contentID}>{content[contentID].content}</p>
                );
                }
              }
              return null;
            }
          )}
        </form>
      </div>
    );
  }
}

export default App;
