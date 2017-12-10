import React, { Component } from 'react';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import Button from './components/Button'
import Input from './components/Input'
import Loading from './components/Loading'
import Text from './components/Text'
import Whisper from './components/Whisper'

import './App.css';

class App extends Component {
  state = {
    text: '',
    chars: 140,
    loading: false,
    error: false,
    chops: [],
  };

  handleTextAreaChange = (e) => {
    this.setState({ error:false, text: e.target.value })
  }

  handleSelectChange = (e) => {
    this.setState({ error:false, chars: e.target.value })
  }

  handleSubmit = async () => {
    const { text, chars } = this.state
    const { store } = this.props

    this.setState({ error:false, loading: true })

    if (!text) {
      /* TODO: Focus TextArea */
      return;
    }

    try {
      const chops = await store.post('chop', { text, chars })
      this.setState({ chops: chops.chops })
    } catch(err) {
      this.setState({ error: true })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { text, chars, loading, chops, error } = this.state
    const { store } = this.props

    return (
      <div className="app">
        <Header>
          Tweet Chop
        </Header>

        <Main>
          <Whisper
            display={error}
            type="error"
            text="Oops, seems like something went wrong ... Please try again!"
          />

          <Text>Automagically chops long paragraphs into tweetable bites, ready for your next tweetstorm!</Text>
          
          {/* TODO - Wrap into a <form> */}
          <Input
            type={"textarea"}
            label={"Paste the text you want to chop:"}
            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            value={text}
            onChange={this.handleTextAreaChange}
          />

          <Input
            type={"select"}
            label={"Please select the number of characters you want to chop your text into:"}
            options={[{value: 140, text: '140 characters'}, {value: 280, text: '280 characters'}]}
            value={chars}
            onChange={this.handleSelectChange}
          />

          <Button className="go-button" onClick={this.handleSubmit}>
            Go
          </Button>
          {/* TODO - Wrap into a <form> */}

          {/* TODO - Move into a component? */}
          <div className="chops">
            {loading ? <Loading /> 
            : chops.length ? (
              <ul className="chops-list">
                {chops.map(chop =>(
                  <li key={chop} className="chop">
                    <Text className="chop-text">{chop}</Text>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {/* TODO - Move into a component? */}

        </Main>
        
        <Footer>
          Made with ∫ by Tihpahine and Antonio.
        </Footer>
      </div>
    );
  }
}

export default App;
