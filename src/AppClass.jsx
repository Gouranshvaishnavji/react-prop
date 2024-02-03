import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const imgData = this.props.myData();
    return (
      <div>
        <h1>Kalvium Gallary</h1>
        <div className="body">
          {imgData.map((image,index) => (
            <div className="" key={index}>
              <img src={image.img} alt="" />
            </div>
          ))}
        </div>
        <footer>
      <p>Created by <a href="https://www.instagram.com/gouranshvaishnav/" target="_blank">Gouransh</a> with kalvium</p>
    </footer>
      </div>
    );
  }
}