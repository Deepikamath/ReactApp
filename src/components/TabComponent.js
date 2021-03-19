import React  from "react";

class Tab extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }
  
  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        let active = this.state.active === i ? 'active ' : '';
        return <a onClick={this.select(i)} className={`${active} tab `}>{item}</a>;
      }
    });
  }
  
  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        return <div className='content'>{item}</div>;
      } else {
        return;
      }
    });
  }
  
  render() {
    return (
      <div className="tab">
       
        {this.renderTabs()}
        
        {this.renderContent()}
      </div>
    );
  }
}
export default Tab;

