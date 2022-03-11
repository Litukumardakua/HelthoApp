import React from "react";
import doctor from "../image/doctor.jpg";

const ConnectOnline = () => {
  return (
    <div id="asking_online">
      <div className="asking_online_img">
        <img src={doctor} alt="asking_online_image" />
      </div>
      <div className="asking_online_text">
        <h1 className="asking_online_heading">
         Connect online & get best solution from our experties
        </h1>
        <p className="asking_online_para">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry's.
        </p>
      </div>
    </div>
  );
};

export default ConnectOnline;
