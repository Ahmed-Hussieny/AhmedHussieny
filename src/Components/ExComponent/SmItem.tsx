interface SmItemProps {
    Text: string;
}
const SmItem = ({Text}:SmItemProps) => {
  return (
    <div className="p-1 px-4 rounded-pill mx-1" style={{fontSize:'13px',color:"#5eead4",backgroundColor:'#122b39'}}>
      {Text}
      
    </div>
  )
}

export default SmItem
