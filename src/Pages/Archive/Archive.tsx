import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/Icons/icons8-left-24.png'
import './Archive.css'
import ArchiveItem from './ArchiveItem'
import Table from "react-bootstrap/Table";
import { getSortedArchiveData } from '../../assets/dumyData/ExData';
import { useEffect } from 'react';
const Archive = () => {
    const navigate = useNavigate();
    const ArchiveData = getSortedArchiveData();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <div className="container mt-5 vh-100 text-start">
            <div className='alert alert-success text-center'>Other projects are being added soon!
            </div>
            <div onClick={()=>navigate('/')} style={{cursor:'pointer'}} className="text-start d-flex align-items-center">
                <img width={20} height={20} src={arrow} alt='arrow' />
                <p className='m-0 p-0 ms-2' style={{ color: "#5eead4" }}>Ahmed Hussieny</p>
            </div>
            <h1 className='fw-bold mb-5'>All Projects</h1>
            <Table hover responsive className="table-transparent border-0">
                <thead className="sticky-top text-white">
                    <tr>
                        <th>Year</th>
                        <th>Project</th>
                        <th className="d-none d-lg-table-cell">Made at</th>
                        <th className="d-none d-lg-table-cell">Built with</th>
                        <th className="d-none d-sm-table-cell">Link</th>
                    </tr>
                </thead>
                <tbody>
                {ArchiveData.map((item) => {
                    return <ArchiveItem Data={item} />
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default Archive
