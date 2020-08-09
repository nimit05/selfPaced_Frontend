import React from "react";
import { Link } from "react-router-dom";

export default class Sub_Header extends React.Component {
  render() {
    return (
      <div className="main_sub_header">
        <div className="sub_header">
				<Link to={`/spec/Computer Science/cat/cse`}>
            <div className="category">CSE</div>
          </Link>
		  <Link to={`/spec/Electronics/cat/ece`}>
            <div className="category">Electronics</div>
          </Link>
		  <Link to={`/spec/Civil /cat/civil`}>
            <div className="category">Civil</div>
          </Link>
		  <Link to={`/spec/Electrical/cat/ee`}>
            <div className="category">Electrical</div>
          </Link>
		  <Link to={`/spec/Mechanical/cat/me`}>
            <div className="category">Mechanical</div>
          </Link>
		  <Link to={`/spec/Chemical/cat/ce`}>
            <div className="category">Chemical</div>
          </Link>
		  <Link to={`/spec/Bio Tech/cat/bt`}>
            <div className="category">Bio Tech</div>
          </Link>
		  <Link to={`/spec/Bio Medical/cat/bme`}>
            <div className="category">Bio Medical</div>
          </Link>
		  <Link to={`/spec/B.Sc./cat/bsc`}>
            <div className="category">B.Sc.</div>
          </Link>
		  <Link to={`/spec/M.Sc./cat/msc`}>
            <div className="category">M.Sc.</div>
          </Link>
        </div>
      </div>
    );
  }
}
