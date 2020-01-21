pragma solidity ^0.5.10;

import "./Medication.sol";

contract Diagnosis is Medication {

    struct Treatment{
        string current_illness;
        string current_medicine_name;
        string current_medicine_strength;
        string current_medicine_dosage;
        uint current_dosage;
        uint current_dosing_interval;
        uint current_duration_of_therapy;
    }
    Treatment treatments;
    
    function setTreatmentData(
        string memory _current_illness,
        string memory _current_medicine_name,
        string memory _current_medicine_strength,
        string memory _current_medicine_dosage, 
        uint _current_dosage, 
        uint _current_dosing_interval, 
        uint _current_duration_of_therapy 
    ) public {
            treatments = Treatment(
                _current_illness,
                _current_medicine_name, 
                _current_medicine_strength, 
                _current_medicine_dosage, 
                _current_dosage, 
                _current_dosing_interval,
                _current_duration_of_therapy
            );
    }

    function getTreatmentData() public view returns(
        string memory,
        string memory, 
        string memory, 
        string memory, 
        uint, 
        uint, 
        uint
    ){
            return(
                treatments.current_illness,
                treatments.current_medicine_name, 
                treatments.current_medicine_strength, 
                treatments.current_medicine_dosage, 
                treatments.current_dosage, 
                treatments.current_dosing_interval, 
                treatments.current_duration_of_therapy              
            );
    }    

}