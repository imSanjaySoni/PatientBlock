pragma solidity ^0.5.10;

import "./PatientBlock.sol";

contract MedicalHistory is PatientBlock {

    struct History {
        string childhood_illness;
        string hospitalization_where;
        string hospitalization_why;
        uint admit_date;
        uint discharge_date;
        uint hospitalization_time;
    }
    History histories;
    
    function setHistoryData(
        string memory _childhood_illness,
        string memory _hospitalization_where, 
        string memory _hospitalization_why, 
        uint _admit_date, 
        uint _discharge_date, 
        uint _hospitalization_time 
    ) public {
            histories = History(
                _childhood_illness, 
                _hospitalization_where, 
                _hospitalization_why, 
                _admit_date, 
                _discharge_date,
                _hospitalization_time
            );
    }

    function getHistoryData() public view returns(
        string memory, 
        string memory, 
        string memory, 
        uint, 
        uint, 
        uint
    ){
            return(
                histories.childhood_illness, 
                histories.hospitalization_where, 
                histories.hospitalization_why, 
                histories.admit_date, 
                histories.discharge_date, 
                histories.hospitalization_time              
            );
    }    

}