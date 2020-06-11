import React from 'react'

import youtube, {baseParams} from '../apis/youtube'

import SearchBar from './SearchBar'

class App extends React.Component {
  state = { videos: [] }

  async onSearchSubmit(term) {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearchSubmit.bind(this)} videoCount={this.state.videos.length}/>
      </div>
    )
  }
}

export default App