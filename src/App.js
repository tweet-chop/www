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

  async componentDidMount() {
    const { store } = this.props

    this.setState({loading:true})
    
    try {
      let text = await store.get('hello')
      console.log(text)
      this.setState({ text: text.hello })
    } catch (err) {
      this.setState({error: true})
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
            placeholder={"Lorem ipsum ... whatever"}
            value={text}
            onChange={(e) => { this.setState({ text: e.target.value })}}
          />

          <Input
            type={"select"}
            label={"Please select the number of characters you want to chop your text into:"}
            options={[{value: 140, text: '140 characters'}, {value: 280, text: '280 characters'}]}
            value={chars}
            onChange={(e) => { this.setState({ chars: e.target.value })}}
          />

          <Button className="go-button" onClick={async () => {
            const { text, chars } = this.state

            if (!text) {
              /* TODO: Focus TextArea */
              return;
            }

            this.setState({ loading: true })
            try {
              const chops = await store.get('chop', { text, chars })
              this.setState({ chops })
            } catch(err) {
              this.setState({ error: true })
            } finally {
              this.setState({ loading: false })
            }
          }}>
            Go
          </Button>
          {/* TODO - Wrap into a <form> */}

          {/* TODO - Move into a component? */}
          {loading ? <Loading /> 
          : chops.length ? (
            <ul className="chops">
              {chops.map(chop =>(
                <li key={chop} className="chop">
                  <Text className="chop-text">{chop}</Text>
                </li>
              ))}
            </ul>
          ) : null}
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
