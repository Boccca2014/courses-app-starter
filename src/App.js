import { Component } from "react";
import "./App.css";

class CourseApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     *  we're on, use the URL in the browser's address bar (i.e. react-router)
     */
    showSearchPage: false,
  };

  render() {
    return (
      /**
       * TODO: Refactor this code to reusable React components
       */
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-courses">
            <div className="search-courses-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-courses-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by course title or course number"
                />
              </div>
            </div>
            <div className="search-courses-results">
              <ol className="courses-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-courses">
            <div className="list-courses-title">
              <h1>My Courses</h1>
            </div>
            <div className="list-courses-content">
              <div>
                <div className="dashboard">
                  <h2 className="dashboard-title">Currently Enrolled</h2>
                  <div className="dashboard-courses">
                    <ol className="courses-grid">
                      <li>
                        <div className="course">
                          <div className="course-top">
                            <svg className="course-logo">
                              <rect
                                x={0}
                                y={0}
                                width={128}
                                height={128}
                                fill={"#795dac"}
                              />
                              <text
                                x="50%"
                                y="35%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                fontFamily="monospace"
                                fontSize="2.2em"
                              >
                                <tspan x="50%" dy="0">
                                  601
                                </tspan>
                                <tspan x="50%" dy="1.2em">
                                  280
                                </tspan>
                              </text>
                            </svg>
                            <div className="course-status-changer">
                              <select>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="enrolled">
                                  Currently Enrolled
                                </option>
                                <option value="interested">Want to Take</option>
                                <option value="taken">Already Took</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="course-title">
                            Full-Stack JavaScript
                          </div>
                          <div className="course-term">Fall 2020</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="dashboard">
                  <h2 className="dashboard-title">Want to Take</h2>
                  <div className="dashboard-courses">
                    <ol className="courses-grid">
                      <li>
                        <div className="course">
                          <div className="course-top">
                            <svg className="course-logo">
                              <rect
                                x={0}
                                y={0}
                                width={128}
                                height={128}
                                fill={"#5dac94"}
                              />
                              <text
                                x="50%"
                                y="35%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                fontFamily="monospace"
                                fontSize="2.2em"
                              >
                                <tspan x="50%" dy="0">
                                  601
                                </tspan>
                                <tspan x="50%" dy="1.2em">
                                  421
                                </tspan>
                              </text>
                            </svg>
                            <div className="course-status-changer">
                              <select>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="enrolled">
                                  Currently Enrolled
                                </option>
                                <option value="interested">Want to Take</option>
                                <option value="taken">Already Took</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="course-title">
                            Object-Oriented Software Engineering
                          </div>
                          <div className="course-term">Spring 2021</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="dashboard">
                  <h2 className="dashboard-title">Already Took</h2>
                  <div className="dashboard-courses">
                    <ol className="courses-grid">
                      <li>
                        <div className="course">
                          <div className="course-top">
                            <svg className="course-logo">
                              <rect
                                x={0}
                                y={0}
                                width={128}
                                height={128}
                                fill={"#ac7e5d"}
                              />
                              <text
                                x="50%"
                                y="35%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                fontFamily="monospace"
                                fontSize="2.2em"
                              >
                                <tspan x="50%" dy="0">
                                  500
                                </tspan>
                                <tspan x="50%" dy="1.2em">
                                  112
                                </tspan>
                              </text>
                            </svg>
                            <div className="course-status-changer">
                              <select>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="enrolled">
                                  Currently Enrolled
                                </option>
                                <option value="interested">Want to Take</option>
                                <option value="taken">Already Took</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="course-title">
                            Gateway Computing: Java
                          </div>
                          <div className="course-term">Fall 2019</div>
                        </div>
                      </li>
                      <li>
                        <div className="course">
                          <div className="course-top">
                            <svg className="course-logo">
                              <rect
                                x={0}
                                y={0}
                                width={128}
                                height={128}
                                fill={"#aca55d"}
                              />
                              <text
                                x="50%"
                                y="35%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                fontFamily="monospace"
                                fontSize="2.2em"
                              >
                                <tspan x="50%" dy="0">
                                  601
                                </tspan>
                                <tspan x="50%" dy="1.2em">
                                  220
                                </tspan>
                              </text>
                            </svg>
                            <div className="course-status-changer">
                              <select>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="enrolled">
                                  Currently Enrolled
                                </option>
                                <option value="interested">Want to Take</option>
                                <option value="taken">Already Took</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="course-title">
                            Intermediate Programming
                          </div>
                          <div className="course-term">Spring 2020</div>
                        </div>
                      </li>
                      <li>
                        <div className="course">
                          <div className="course-top">
                            <svg className="course-logo">
                              <rect
                                x={0}
                                y={0}
                                width={128}
                                height={128}
                                fill={"#a05dac"}
                              />
                              <text
                                x="50%"
                                y="35%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                fontFamily="monospace"
                                fontSize="2.2em"
                              >
                                <tspan x="50%" dy="0">
                                  601
                                </tspan>
                                <tspan x="50%" dy="1.2em">
                                  226
                                </tspan>
                              </text>
                            </svg>
                            <div className="course-status-changer">
                              <select>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="enrolled">
                                  Currently Enrolled
                                </option>
                                <option value="interested">Want to Take</option>
                                <option value="taken">Already Took</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="course-title">Data Structures</div>
                          <div className="course-term">Spring 2020</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a course
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CourseApp;
