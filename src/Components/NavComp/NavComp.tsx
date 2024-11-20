import './NavComp.css'
interface NavCompProps {
  Text: string;
}

const NavComp = ({ Text }: NavCompProps) => {
  return (
     <div className='line d-flex align-items-center'>
         <div className='lineIn me-3'></div>
         <p className='m-0'>{Text}</p>
     </div>
  )
}

export default NavComp
