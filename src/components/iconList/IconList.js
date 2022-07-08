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

    // addIcon(){
    //     let iconIdx = Math.floor(Math.random()*this.props.options.legth);
    //     let randomIcon = this.props.options[iconIdx];
    //     let newIcons = this.state.icons;
    //     newIcons.push(randomIcon);
    //     this.setState({icons: newIcons});

    // }

    addIcon(){
        let iconIdx = Math.floor(Math.random()*this.props.options.length);
        let randomIcon = this.props.options[iconIdx];
        this.setState({icons: [...this.state.icons, randomIcon]});
    }

  render() {

    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} key={i} />);

    return (
        <div>
            <h1>Icon List</h1>
            <button onClick={this.addIcon}>Add New Icon</button>
            <h1>{icons}</h1>

        </div>
    )
  }
}

export default IconList;