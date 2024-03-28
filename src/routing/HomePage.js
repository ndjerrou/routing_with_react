import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <p>Paragraphe</p>
      {/* <a href='/users'>My users</a> */}
      <Link to='/users'>My users</Link>
    </div>
  );
}
export default HomePage;
