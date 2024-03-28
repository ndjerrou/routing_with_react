import { Link } from 'react-router-dom';

function UserListPage() {
  const users = [
    { id: 1, name: 'Mamadou' },
    { id: 2, name: 'Patrick' },
    { id: 3, name: 'Sherazade' },
  ];
  return (
    <>
      {users.map(user => (
        <Link to={`/users/${user.id}`}>
          <p key={user.id}>{user.name}</p>
        </Link>
      ))}
    </>
  );
}

export default UserListPage;
