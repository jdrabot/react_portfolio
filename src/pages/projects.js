import React, { Component } from "react";
import projects from "../project_array/projectArray";
import "./projects.css";

class Projects extends Component {
    state = {
        projects,
    };

    render() {
        return (
            <div className="container">
                {this.state.projects.map((projects) => (
                    <div class="card">
                        <div class="card-image"><a a href={projects.website}>
                            <img
                                alt={projects.title}
                                src={projects.image}>
                            </img>
                        </a>
                        </div>
                        <div class="card-text">
                            <h2>{projects.title}</h2>
                            <p>{projects.description}</p>
                            <p>Please visit the <a href={projects.repository} target="_blank" rel="noreferrer"> repository</a></p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Projects;