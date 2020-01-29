import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
      .then(employees => employees.json())
      .then(_employees => {
        console.log(_employees)
        this.setState({
          employees: _employees
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App container">
        <ul className="nav mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Directory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Knowledge Base</a>
          </li>
        </ul>
        <h1>Sogeti Employee Directory</h1>
        <hr/>
        <div className="row row-cols-3 no-gutters">
        {this.state.employees.map((employee, index) => {
          return (
            <div key={index} className="card directory-entry col">
              <img src={employee.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{employee.firstName}</h5>
                <div className="card-text mb-2 text-left">
                  <p className="mb-1">From: {employee.from}</p>
                  <p className="mb-1">Phone: {employee.phone}</p>
                </div>
                <a href="#" className="btn btn-primary">See More</a>
              </div>
            </div>
            )
          })
         }
        </div>
      </div>
    );
  }
}

        export default App;
