import { Outlet } from "react-router-dom";
import About from "../../Pages/About/About";

const LayOut = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-lg-none d-block mb-5">
                        <About />
                    </div>
                    <div className="col-md-6 d-none d-lg-block mb-5" style={{ position: 'sticky', top: 80, alignSelf: 'flex-start' }}>
                        <About />
                    </div>
                    <div className="col-md-6 mt-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayOut;
