import React from "react";

import "./style.scss";

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active",
    });
  }
  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const question = this.props.details;
    return (
      <div
        className={activeClass + " " + "accordion-item"}
        onClick={this.toggle}
      >
        <span className="summary">
          <span>{question.summary}</span>
          <button className="sum-btn">
            {activeClass == "active" ? "-" : "+"}
          </button>
        </span>
        <span className="folding-pannel answer">{question.answer}</span>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: sampleQuestions,
    };
    this.renderQuestion = this.renderQuestion.bind(this);
  }
  renderQuestion(key) {
    return (
      <AccordionItem
        key={key}
        index={key}
        details={this.state.questions[key]}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="accordion-container">
          {Object.keys(this.state.questions).map(this.renderQuestion)}{" "}
        </div>
      </div>
    );
  }
}
const sampleQuestions = {
  question1: { summary: "What are 1Blocks?", answer: "What are 1Blocks?" },
  question2: {
    summary: "How to integrate 1Blocks into my game?",
    answer: "A: Insert answer copy here",
  },
  question3: {
    summary: "How to earn with 1Blocks?",
    answer: "How to earn with 1Blocks?",
  },
};

export default Accordion;
