import React from "react";

class About extends React.Component {

  componentWillUnmount(){
    console.log('ABOUT DESMONTANDOSE')
  }
  
  render() {
    console.log(this.props._id)
    return (
      <div className="About">
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
