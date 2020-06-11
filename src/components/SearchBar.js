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

    // TODO: Make sure to call callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
