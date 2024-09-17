'use client'
import '../globals.css'
const Spinner = () => {
  return (
    <div>
      <div className="spinner">
        Loading
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
      <br />
      <br />

      <div className="spinner-2">Loading</div>
    </div>
  );
};

export default Spinner;
