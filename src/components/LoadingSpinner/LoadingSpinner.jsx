import './LoadingSpinner.css';

const LoadingSpinner = () => {


    return (
        <div className="spinner-container" id='spinner'>
            <div className="loading-spinner">
                <div className="circle">
                    <div className="inner-circle"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner;