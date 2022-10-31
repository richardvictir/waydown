import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Info from './Info';
import Interest from './Interest';
import Footer from './Footer'


class Business extends React.Component {
  render() {
    return(
      <div className="red">
      <Info />
      <About />
      <Interest />
      <Footer />
      </div>
      
      )
}
};

ReactDOM.render(<Business />,
  document.getElementById('react-app')
);
