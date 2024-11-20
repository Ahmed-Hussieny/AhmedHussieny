import ExComponent from "../../Components/ExComponent/ExComponent"
import { ArchiveData, ExData } from "../../assets/dumyData/ExData"
import arrowIcon from '../../assets/Icons/icons8-up-right-24.png'
import style from './Bio.module.css'
import { useNavigate } from "react-router-dom"

const Bio = () => {
    const navigate = useNavigate();
    return (
        <div className="text-start pt-5 " id="About">
            <div className=" d-block d-lg-none">
                <p className="fw-bold text-white">About</p>
            </div>
            <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>

            {/* Experience */}
            <div className=" d-block d-lg-none mt-5">
                <p className="fw-bold text-white">Experience</p>
            </div>
            <div id="Experience" className="mb-5">
                {ExData.map((item) => {
                    return <ExComponent Data={item} />
                })}
            </div>
            {/* More Experience*/}
            <div className={style.ExItem} onClick={() => navigate('/AhmedHussieny.pdf')}>
                <h5 className="me-2">View Full Résumé</h5>
                <img width={12} className={style.arrow} height={12} src={arrowIcon} alt='arrowIcon' />
            </div>
            <div className=" d-block d-lg-none mt-5">
                <p className="fw-bold text-white">Projects</p>
            </div>
            {/* Projects */}
            <div id="PROJECTS" className="mb-5">
                {ArchiveData.map((item) => {
                    return <ExComponent Data={item} />
                })}
            </div>
            {/* More Projects*/}
            <div className={style.ExItem} onClick={() => navigate('/archive')}>
                <h5 className="me-2">View Full Project Archive</h5>
                <img width={12} className={style.arrow} height={12} src={arrowIcon} alt='arrowIcon' />
            </div>
        </div>
    )
}

export default Bio
