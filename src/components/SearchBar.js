import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    this.props.onSearch(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />
            <p style={{padding: '0.5em 0.5em 0em 0em', textAlign: 'right'}}>{this.props.videoCount || 0} videos found</p>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
