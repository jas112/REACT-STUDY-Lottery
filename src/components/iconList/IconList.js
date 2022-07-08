import React, { Component } from 'react';

export class IconList extends Component {
    
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };
    
    constructor(props){
        super(props);
        this.state = {icons: []};
        this.addIcon = this.addIcon.bind(this);
    }

    addIcon(){
        const iconIdx = Math.floor(Math.random()*this.props.options.legth);
        const randomIcon = this.props.options[iconIdx];
        const newIcons = this.state.icons;
        newIcons.push(randomIcon);
        this.setState({icons: newIcons});

    }

  render() {
    return (
      <div>IconList</div>
    )
  }
}

export default IconList