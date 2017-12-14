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
      // 1: {
      //   content: "Good for you",
      //   conditions: [
      //     {
      //       q:2,
      //       a:1
      //     },
      //     {
      //       q:3,
      //       a:2
      //     }
      //   ]
      // },
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
            if(!condition || condition.a === this.state[condition.q])
              return(
                <Question id={questionID} question={questionsSet[questionID]} callback={this.handleChangeInParent}/>
              );
            }
          )}

          {Object.keys(content).map((contentID) => {
            const conditions = content[contentID].conditions
            for(let i=0; i<conditions.length; i++){
              const condition = conditions[i]
              if(condition.a === this.state[condition.q]){
                return(
                  <p>{content[contentID].content}</p>
                );
                }
              }
            }
          )}
          
        {/* <h3>Q1</h3>
        <label>Yes<input type='radio' name='Q1' value='yes' onChange={this.handleChange} /></label>
        <label>No<input type='radio' name='Q1' value='no' onChange={this.handleChange} /></label>
        {this.state.Q1 === 'yes' &&
          <div>
            <h3>Q2</h3>
            <label>Are you sure?<input type='radio' checked={this.state.Q2 === "Are you sure?"} name='Q2' value='Are you sure?' onChange={this.handleChange} /></label>
            <label>Wait, but why?<input type='radio' name='Q2' value='Wait, but why?' onChange={this.handleChange} /></label>
          </div>
        }
        {this.state.Q1 === 'no' &&
          <div>
            <h3>Q3</h3>
            <label>Nope<input type='radio' name='Q3' value='Nope' onChange={this.handleChange} /></label>
            <label>Not at all<input type='radio' name='Q3' value='Not at all' onChange={this.handleChange} /></label>
          </div>
        } */}
        </form>
      </div>
    );
  }
}

export default App;
