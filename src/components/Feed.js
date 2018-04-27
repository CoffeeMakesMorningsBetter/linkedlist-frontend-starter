import React, { Component } from "react";

class Feed extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
  }
  render() {
    return this.props.jobs.map(job => <li> {job.title}</li>);
  }
}

export default Feed;