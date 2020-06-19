import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Course extends Component {
    state={
        courseTitle:''
    }

componentDidMount(){
    this.query();

}

componentDidUpdate(){
    this.query();
}


query=()=>{
    console.log(this.props);
    const querystr=new URLSearchParams(this.props.location.search)

    for (let param of querystr.entries()){
        if(this.state.courseTitle !== param[1]){
        this.setState({courseTitle:param[1]});
    }
    }

    console.log(this.state.courseTitle);
}

    render () {
        return (
            <div style={{border:'1px solid black',margin:'auto', width:'50%',textAlign:'center'}}>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.CourseId}</p>
            </div>
        );
    }
}

export default withRouter(Course);