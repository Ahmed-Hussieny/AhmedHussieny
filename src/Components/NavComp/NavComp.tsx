import './NavComp.css'
interface NavCompProps {
  Text: string;
  active?: boolean;
}

const NavComp = ({ Text, active }:
  NavCompProps
) => {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      {Text}
    </div>
  );
};

export default NavComp
