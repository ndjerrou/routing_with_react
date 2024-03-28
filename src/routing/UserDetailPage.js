import { useParams, useSearchParams } from 'react-router-dom';

function UserDetailPage() {
  const { id } = useParams(); // getting parameters routes
  const [searchParams, setSearchParams] = useSearchParams(); // getting query string parameters

  console.log(searchParams.get('name')); // getting a QSP via key

  return <div>A user with id : {id}</div>;
}

export default UserDetailPage;
