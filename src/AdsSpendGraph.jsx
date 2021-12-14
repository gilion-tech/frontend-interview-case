import React from 'react';
import request from 'request';

class AdsSpendGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
    };
  }

  componentDidMount() {
    const options = {
      url: 'http://localhost:5000/ads-spend-data',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    if (this.state.data == null) {
      this.setState(() => ({
        loading: true,
      }));

      request(options, (error, response, body) => {
        if (error) {
          console.error(error);
          this.setState(() => ({
            loading: false,
          }));
        } else {
          this.setState(() => ({
            data: JSON.parse(body),
            loading: false,
          }));
        }
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div>
        <strong>
          AdsSpendGraph
        </strong>

        {loading && <div className="App-logo">Loading</div>}

        {data != null && data.slice(0, 10).map(item => JSON.stringify(item))}
      </div>
    );
  }
}

export default AdsSpendGraph;