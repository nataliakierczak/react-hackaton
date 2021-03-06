import React, { Component } from 'react';

export default class Question extends Component {
    constructor(props){
      super(props)
      this.state = {
        checked:''
      }
    }

    componentWillUnmount = () => {
        const {callback, id} = this.props 
        callback(id, undefined)
    }

    handleChange = (e) => {
        const {callback, id} = this.props 
        this.setState({
          checked:e.target.value
        })
        callback(id, parseInt(e.target.value, 10))
      }

    render() {
        const {question} = this.props
        const answers = question.answers

        const answerComponents = Object.keys(answers).map(answerID =>
            <label key={answerID}>{answers[answerID]}<input type='radio' checked={this.state.checked === answerID} name={question.question} value={answerID} onChange={this.handleChange} /></label>
        )

        return(
            <div>
                <h3>{question.question}</h3>
                {answerComponents}
            </div>
        );
    }
}
