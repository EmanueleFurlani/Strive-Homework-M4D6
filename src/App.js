import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div className="App">
        <MyNav title="Stribook" color="dark"/>
      <header className="App-header">
        {/*<MyJumbotron />*/}
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <div /*id="over"*/>
          <BookList books={fantasyBooks} />
        </div>
      </header>
       <MyFooter />
    </div>
  )
}

export default App
