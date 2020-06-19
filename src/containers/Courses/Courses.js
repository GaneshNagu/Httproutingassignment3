import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Courses.css';
import {withRouter} from 'react-router-dom'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    // componentDidUpdate(){
    //     console.log(this.props);
    // }

    render () {
        return (
            <div >
                <h1 className='outerclass'>Amazing Udemy Courses</h1>
                <section className="Courses">
                
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link to={{
                                    pathname:this.props.match.url+'/'+course.id,
                                    search:'?title='+course.title
                                }} key={course.id}>
                                <article className="Course" >{course.title}</article>
                                </Link>
                                )
                            
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default withRouter(Courses);