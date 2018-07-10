import React, { Component } from 'react';
import '../styles/about.css';
import Post from "../components/post";
import Guy from "../components/guy";
import Background from "../components/background";
import ReactMarkdown from 'react-markdown';
import about from '../mds/about/about.md';
const fs = require('fs');

class AboutPage extends Component {
  render() {
    console.log(about)
    return <div>
      <Background 
      src={require("../assets/background.jpg")} 
      />
      <div className="Image-overlay">
        <div className="Overlay-text Overlay-text-about">
          Team Whalesper
        </div>
      </div>
      <div className="App-content">
        <div className="Guy-wrapper">
          <Guy
            name='Luffy (Shunzhe) Yu'
            title='Founder'
            email='luffy.yu@mail.utoronto.ca'
          />
          <Guy
            name='Gloria (Bihan) Zhu'
            title='Co-founder'
            email='bihan.zhu@mail.utoronto.ca'
          />
          <Guy
            name='Ajax (Jiacheng) Jiang'
            title='Co-founder'
            email='ajax.jiang@mail.utoronto.ca'
          />
          <Guy
            name='Hao Ren Zhong'
            title='Designer, Developer'
            email='haoren.zhong@mail.utoronto.ca'
          />
          <Guy
            name='Kinder (Jianda) Chen'
            title='Data Scientist, Developer'
            email='jianda.chen@mail.utoronto.ca'
          />
        </div>
      </div>
    </div>
  }

}

export default AboutPage;