import React from "react";
import "./demo.css";

const Demo = () => {
  return (
    <div className="container-sm  border   ">
      <div className=" row  my-5 border ">
        <div className="card  col-sm-6 mx-auto  my-5 card-width ">
          <div className="card-header text-center ">Select an account</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
        {/* <div class="col-sm-6 mx-auto  border my-5  ">.col-sm-4</div> */}
      </div>
    </div>
  );
};

export default Demo;
