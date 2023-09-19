//import "./Loader.css";
import "../Styles/Loader.css"
function LoadingSpinner({message}) {
    return (
        <div className="loader-cotainer">
            <div className="spinner-container">
                <div className="loading-spinner"></div>
                <div className="Loading-para">{message}</div>
            </div>
        </div>
    );
}
export default LoadingSpinner;
