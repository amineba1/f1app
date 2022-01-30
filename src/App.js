import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {


  //alert("hello world");
  // console.log("hello world");


  //strings
  //var email="amine-abdallah98@hotmail.fr";
  //console.log(email);

  //concatenation
  // var firstName="amine";
  // var lastName="Ben Abdallah";
  // var fullName=firstName+' '+lastName;
  //console.log("fullName",fullName);

  //getting a character
  //getting the first character of a string
  //console.log("first character",fullName[0]);

  //string length: 
  //console.log(fullName.length);


  //string methods
  // console.log(fullName.toUpperCase());
  // let result=fullName.toLowerCase();
  // console.log("result",result);

  // let index=email.indexOf("@");
  // console.log("index",index);


  // let secondResult=email.slice(0,5);
  // console.log("secondResult",secondResult);

  // let thirdResult=email.substring(0,5);
  // console.log("thirdResult",thirdResult);


  //template string 
  // const title='Formula 1 USA GP';
  // const raceDirector='Michael MAssi';
  // const likes=500;

  // let result=`the grand prix ${title} was directed by ${raceDirector} and this gp have ${likes}`;
  // console.log("result:",result);


  //Arrays
  //let drivers=['Lewis','George','Nico','Valtteri'];
  //console.log('drivers:',drivers);

  // console.log("lastelement",drivers[drivers.length-1]);
  // console.log(drivers.indexOf('George'));

  //let newDrivers=drivers.concat(['Michael']);
  //console.log("newDrivers:",newDrivers);
  // console.log("drivers",drivers);
  // let newDriversPush=drivers.push('Michael Shumacher')
  // console.log("drivers",drivers);
  // let cats = ['Bob'];

  // cats.unshift('Willy'); // ['Willy', 'Bob']

  // cats.unshift('Puff', 'George');
  // let cats = ['Bob', 'Willy', 'Mini'];

  // cats.shift(); // ['Willy', 'Mini']

  //for loop
  // for (let i = 0; i <5; i++) {

  //   console.log("in loop:",i);
  // }
  // console.log("lloop finished");

  // for (let i = 0; i < drivers.length; i++) {
  //   console.log('driver name',drivers[i]);

  // }


  // let age=24 ;
  // if (age>26) {
  //   console.log("age > 26");
  // }
  // if (age==25) {
  //   console.log("age==25");
  // }
  // else {
  //   console.log("age != 25");
  // }


  // var grade='A';

  // switch(grade) {
  //   case 'A':
  //     console.log("the value is A");
  //     break;
  //   case 'B':
  //       console.log("the value is B");
  // break;
  //   default:
  //     console.log("default");
  //     break;
  // }

  var title = "hello world";
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
      <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
