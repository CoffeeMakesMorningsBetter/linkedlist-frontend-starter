import Feed from "../components/Feed";
import { fetchJobsRequest } from "../store/actions/jobs";
import { connect } from "react-redux";

function mapStateToProps(reduxState) {
  return { jobs: reduxState.jobs };
}

export default connect(mapStateToProps, { fetchJobsRequest })(Feed);