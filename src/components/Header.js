var React = require('react')

class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

export default Header;
