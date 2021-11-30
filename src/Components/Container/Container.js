import React, {Component} from 'react';
  
class Container extends Component {
    render(){
        return(
            <div className="col-sm-6 ">
              <div className="centertxt">
                 <h2>Features</h2>
                <p>
              JSX − JSX is JavaScript syntax extension. It isn't
              necessary to use JSX in React development, but it is recommended.</p>
              <p>Components − React is all about components. You need to think of
              everything as a component. This will help you maintain the code
              when working on larger scale projects.</p> <p>Unidirectional data flow
              and Flux − React implements one-way data flow which makes it easy
              to reason about your app. Flux is a pattern that helps keeping
              your data unidirectional.</p><p>License − React is licensed under the
              Facebook Inc. Documentation is licensed under CC BY 4.0.
            </p>
            </div>
          </div> 
        );
    }
}
export default Container;