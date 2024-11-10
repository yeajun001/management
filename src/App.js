import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customerList = [
  {
    id: 1,
    name: "홍길동",
    image: 'https://placeimg.com/64/64/any',
    birthday: "1010",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 2,
    name: "이몽룡",
    image: 'https://placeimg.com/64/64/people',
    birthday: "1020",
    gender: "남자",
    job: "프로그래머"
  },
  {
    id: 3,
    name: "성춘향",
    image: 'https://placeimg.com/64/64/tech',
    birthday: "1030",
    gender: "여자",
    job: "디자이너"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {customerList.map(customer => (
          <Customer 
            key={customer.id}
            id={customer.id}
            name={customer.name}
            image={customer.image}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        ))}
      </div>
    );
  }
}

export default App;
