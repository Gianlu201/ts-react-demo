import {
  Link,
  useLocation,
  // useNavigate
} from 'react-router-dom';

const PageChooser = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <ul className='d-flex list-unstyled'>
      <Link
        to='/'
        className={
          location.pathname === '/'
            ? 'text-black'
            : 'text-black text-decoration-none'
        }
      >
        <li className='me-2'>HOME</li>
      </Link>

      <Link
        to='/class'
        className={
          location.pathname === '/class'
            ? 'text-black'
            : 'text-black text-decoration-none'
        }
      >
        <li className='me-2'>CLASS</li>
      </Link>

      <Link
        to='/func'
        className={
          location.pathname === '/func'
            ? 'text-black'
            : 'text-black text-decoration-none'
        }
      >
        <li className='me-2'>FUNC</li>
      </Link>

      <Link
        to='form'
        className={
          location.pathname === '/form'
            ? 'text-black'
            : 'text-black text-decoration-none'
        }
      >
        <li className='me-2'>FORM</li>
      </Link>

      <Link
        to='/fetch'
        className={
          location.pathname === '/fetch'
            ? 'text-black'
            : 'text-black text-decoration-none'
        }
      >
        <li className='me-2'>FETCH</li>
      </Link>

      <Link
        to='/moviegallery'
        className={
          location.pathname === '/moviegallery'
            ? 'text-black'
            : 'text-black text-decoration-none'
        }
      >
        <li className='me-2'>MOVIE GALLERY</li>
      </Link>
    </ul>
  );
};

export default PageChooser;
