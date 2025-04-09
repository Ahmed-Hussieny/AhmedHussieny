import ExComponent from "../../Components/ExComponent/ExComponent"
import { getSortedArchiveData, ExData } from "../../assets/dumyData/ExData"
import arrowIcon from '../../assets/Icons/icons8-up-right-24.png'
import style from './Bio.module.css'
import { useNavigate } from "react-router-dom"

const Bio = () => {
    const navigate = useNavigate();
    const ArchiveData = getSortedArchiveData();
    return (
        <div className="text-start pt-5 " id="About">
            <div className=" d-block d-lg-none">
                <p className="fw-bold text-white">About</p>
            </div>
            <p>I am a passionate and results-driven Software Engineer with a strong foundation in computer science and extensive experience working with C++, Qt, JavaScript, and the MERN stack. I specialize in developing interactive, high-performance applications, backend services, and cross-platform solutions.</p>
            <p>Throughout my career, I have contributed to multiple projects, including:</p>
            <p>Developing robust desktop and mobile applications using Qt and QML for industries like sports tech and e-commerce.
            Building dynamic web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js) for both startups and freelancing clients.</p>
            <p>Implementing backend services with Golang and Fiber, integrating databases like ClickHouse and MySQL for scalable, efficient data management.</p>
            <p>In addition to my technical skills, I am constantly learning and staying up-to-date with the latest advancements in software development. My experience with various programming languages, databases, and frameworks has made me versatile, enabling me to approach problems from multiple angles and deliver creative, optimal solutions.</p>
            <p>I am passionate about continuous learning, coding challenges, and improving user experiences through clean, maintainable code.</p>

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
