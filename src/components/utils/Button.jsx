
import { Link } from 'react-router-dom';


const Button = ({ name, to }) => {
  return (
    <Link to={to} className='py-2 px-2 rounded-lg bg-[#29754b] text-white font-bold hover:bg-[#155833] duration-300'>
      {name}
    </Link>
  );
};

export default Button;
