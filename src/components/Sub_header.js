import React from "react";

export default class Sub_Header extends React.Component {
  render() {
    return (
      <div className="main_sub_header">
        <div className="sub_header">
          <a href={`/spec/Computer Science/cat/cse`}>
            <div className="category">CSE</div>
          </a>
          <a href={`/spec/Electronics/cat/ece`}>
            <div className="category">Electronics</div>
          </a>
          <a href={`/spec/Civil /cat/civil`}>
            <div className="category">Civil</div>
          </a>
          <a href={`/spec/Electrical/cat/ee`}>
            <div className="category">Electrical</div>
          </a>
          <a href={`/spec/Mechanical/cat/me`}>
            <div className="category">Mechanical</div>
          </a>
          <a href={`/spec/Chemical/cat/ce`}>
            <div className="category">Chemical</div>
          </a>
          <a href={`/spec/Bio Tech/cat/bt`}>
            <div className="category">Bio Tech</div>
          </a>
          <a href={`/spec/Bio Medical/cat/bme`}>
            <div className="category">Bio Medical</div>
          </a>
          <a href={`/spec/B.Sc./cat/bsc`}>
            <div className="category">B.Sc.</div>
          </a>
          <a href={`/spec/M.Sc./cat/msc`}>
            <div className="category">M.Sc.</div>
          </a>
        </div>
      </div>
    );
  }
}
