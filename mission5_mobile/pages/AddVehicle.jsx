import React from "react";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./AddVehicle.module.css";

function AddVehicle() {
 const navigate= useNavigate(); {
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [confirmDetails, setConfirmDetails] =useState(false);

  const FUEL_TYPES =[
    {id: 1, label:"Z 91", small: "Z 91"},
     { id: 2, label: "Z X 95", small: "Z X 95" },
    { id: 3, label: "Z D", small: "Z D" },
  ];
 }

  return (
   <div className={styles.screen}>
    
   </div>
  );
}

export default AddVehicle;
