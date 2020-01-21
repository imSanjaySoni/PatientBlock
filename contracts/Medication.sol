pragma solidity ^0.5.10;

import "./MedicalHistory.sol";

contract Medication is MedicalHistory {

    struct Medicine{
        string illness;
        string medicine_name;
        string medicine_strength;
        string medicine_dosage;
        uint dosage;
        uint dosing_interval;
        uint duration_of_therapy;
    }
    Medicine medicines;
    
    function setMedicationData(
        string memory _illness,
        string memory _medicine_name,
        string memory _medicine_strength,
        string memory _medicine_dosage, 
        uint _dosage, 
        uint _dosing_interval, 
        uint _duration_of_therapy 
    ) public {
            medicines = Medicine(
                _illness,
                _medicine_name, 
                _medicine_strength, 
                _medicine_dosage, 
                _dosage, 
                _dosing_interval,
                _duration_of_therapy
            );
    }

    function getMedicationData() public view returns(
        string memory,
        string memory, 
        string memory, 
        string memory, 
        uint, 
        uint, 
        uint
    ){
            return(
                medicines.illness,
                medicines.medicine_name, 
                medicines.medicine_strength, 
                medicines.medicine_dosage, 
                medicines.dosage, 
                medicines.dosing_interval, 
                medicines.duration_of_therapy              
            );
    }    

}