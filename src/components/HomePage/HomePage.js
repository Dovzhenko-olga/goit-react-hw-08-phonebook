import phonebook from './phonebook.png';

const HomePage = () => {
  
  return (
  <div>
    <h1>
      Your personal phone book{' '}
        <img src={phonebook} alt="phonebook" width="32" />
    </h1>
  </div>
)};

export default HomePage;