import React from 'react'
import { AutoComplete, Input, Icon } from 'antd'

const { Option } = AutoComplete


class BookmarkSearch extends React.Component {
  timerId = null

  state = {
    dataSource: [],
    query: '',
  }


  searchBookmarks = (value, cb) => {
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
    this.timerId = setTimeout(
      () => chrome.bookmarks.search(value, (data = []) => cb(data.slice(0, 30))),
      300,
    )
  }

  handleSearch = (v = '') => {
    const str = v.trim()
    if (str !== '') {
      this.searchBookmarks(str, dataSource => this.setState({
        dataSource,
        query: v,
      }))
    } else {
      this.setState({
        dataSource: [],
        query: v,
      })
    }
  }

  render() {
    const { dataSource, query } = this.state
    const { style = {} } = this.props
    const options = dataSource.map(node => (
      <Option
        key={node.id}
        value={node.id}
        onClick={() => (node.url ? window.open(node.url) : null)}
      >
        {node.title}
      </Option>
    ))
    return (
      <div style={style}>
        <AutoComplete
          placeholder="Type here..."
          autoFocus
          style={{ width: '100%' }}
          dataSource={options}
          onSearch={this.handleSearch}
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
        {
          (query.trim() !== '') && (dataSource.length === 0)
            ? 'No search results found'
            : null
        }
      </div>)
  }
}

export default BookmarkSearch
