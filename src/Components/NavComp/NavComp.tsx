import './NavComp.css'
interface NavCompProps {
  Text: string;
  isActive?: boolean;
}

const NavComp = ({ Text, isActive }:
  NavCompProps
) => {
  return (
    // <div className={`nav-item ${active ? 'active' : ''}`}>
    //   {Text}
    // </div>

<div className={`nav-item line d-flex align-items-center ${isActive ? 'active' : ''}`}>
<div className='lineIn me-3'></div>
<p className='m-0'>{Text}</p>
</div>
  );
};

export default NavComp
