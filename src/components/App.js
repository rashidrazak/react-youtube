import React from 'react'

import youtube, {baseParams} from '../apis/youtube'

import SearchBar from './SearchBar'

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    })

    console.log(response)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearchSubmit.bind(this)}/>
      </div>
    )
  }
}

export default App