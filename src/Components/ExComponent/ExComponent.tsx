import style from './ExComponent.module.css'
import arrowIcon from '../../assets/Icons/icons8-up-right-24.png'
import SmItem from './SmItem'
export interface ExComponentProps {
    Data :{
    from: string;
    to: string;
    title: string;
    description: string;
    image: string,
    link:string;
    company:string;
    Project:string;
    items: any[]
    }
}
const ExComponent = ({Data}:ExComponentProps) => {
  return (
    <div className={style.ExItem}>
        <div className='row' style={{fontSize:'14px'}}>
            <div className='col-md-3'>
                {Data.image?
                <img className='w-100' src={Data.image} alt='image'/>:
                    <p className='fw-bold'style={{fontSize:'12px'}} >{Data.from} - {Data.to}</p>
            }
                

            </div>
            <div className='col-md-9'>
                {Data.title&&<div className='d-flex align-items-center'>
                    
                    <h5 className='me-2 '>{Data.title}</h5>
                    <div>
                        <img className={style.arrow} width={16} height={16} src={arrowIcon} alt='arrowIcon'/>
                    </div>
                </div>}
                <p>{Data.description}</p>
                {Data.items &&<div className='row'>
                    {Data.items.map((item)=>{
                        return <div className='w-auto p-0 my-1'><SmItem Text={item.name}/></div>
                    })}
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default ExComponent
