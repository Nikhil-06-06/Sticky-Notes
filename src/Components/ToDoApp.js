import '../Styles/_toDoApp.scss';
import Nav from './Nav';
import NotesContainer from './NotesContainer';

function ToDoApp() {
  return (
    <div className='app-container'>
      <Nav />
      <NotesContainer />
    </div>
  );
}

export default ToDoApp;
