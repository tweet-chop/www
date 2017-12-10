import React, { Component } from 'react';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

import Text from './components/Text';
import Whisper from './components/Whisper';

import Chops from './containers/Chops';
import Form from './containers/Form';

import './App.css';

class App extends Component {
  state = {
    text: '',
    chars: 140,
    loading: false,
    error: false,
    chops: []
  };

  handleTextAreaChange = e => {
    this.setState({ error: false, text: e.target.value });
  };

  handleSelectChange = e => {
    this.setState({ error: false, chars: e.target.value });
  };

  handleSubmit = async () => {
    const { text, chars } = this.state;
    const { store } = this.props;

    this.setState({ error: false, loading: true });

    if (!text) {
      /* TODO: Focus TextArea */
      return;
    }

    try {
      const chops = await store.post('chop', { text, chars });
      this.setState({ chops: chops.chops });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { text, chars, loading, chops, error } = this.state;

    return (
      <div className="app">
        <Header>Tweet Chop</Header>

        <Main>
          <Whisper
            display={error}
            type="error"
            text="Oops, seems like something went wrong ... Please try again!"
          />

          <Text>
            Automagically chops long paragraphs into tweetable bites, ready for
            your next tweetstorm!
          </Text>

          <Form
            textarea={{
              value: text,
              onChange: this.handleTextAreaChange
            }}
            select={{
              value: chars,
              options: [
                { value: 140, text: '140 characters' },
                { value: 280, text: '280 characters' }
              ],
              onChange: this.handleTextAreaChange
            }}
            onSubmit={this.handleSubmit}
          />

          <Chops loading={loading} chops={chops} />
        </Main>

        <Footer>Made with ∫ by Tihpahine and Antonio.</Footer>
      </div>
    );
  }
}

export default App;
