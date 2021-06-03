import React, { Component } from 'react';

export class Letter extends Component {
  static displayName = Letter.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6">
        <h2>Hello!</h2>

        <p>My name is Rikard, born 1995 and I live in Gothenburg. I’m a happy outforward guy that’s now applying for a job.
        I would fit to work with you because I’m open for different task and always happy to learn something new. I’m social and always happy to meet new people.
        I come from a large family with 4 siblings and grew up in Varberg.
        I’ve studied at Peder skrivares school for three years with focus on Design and Product development, after my years there I’ve studied a lot of math and physics. I studied the new Game programmer course at YRGO during 2017 to 2019 where I learned mainly C# and the game developer program Unity.
        In my freetime I like to spend time with friends and I got a big interest within computers, for software as well as hardware.
        </p>
        <p>I hope to be in touch with you!</p>
        <p>Best regards</p>
        <p>Rikard Andersson</p>
        <p>
          +4676 619 24 24
          rille_anderson@outlook.com
          </p>
      </div>
    );
  }
}
