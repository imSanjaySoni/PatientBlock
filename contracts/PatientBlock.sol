pragma solidity ^0.5.10;

contract PatientBlock {

    struct Patient {
        string name;
        string p_address;
        string gender;
        uint age; 
        uint height;
        uint weight;       
        uint mobile;
        string family_status;
        string occupation;
    }

    Patient patients;
    
    function setPatientData(
        string memory _name,
        string memory _p_address, 
        string memory _gender, 
        uint _age, 
        uint _height, 
        uint _weight, 
        uint _mobile,
        string memory _family_status,
        string memory _occupation
    ) public {
            patients = Patient(
                _name, 
                _p_address, 
                _gender, 
                _age, 
                _height,
                _weight, 
                _mobile,
                _family_status,
                _occupation
            );
    }

    function getPatientData() public view returns(
        string memory, 
        string memory, 
        string memory, 
        uint, 
        uint, 
        uint, 
        uint,
        string memory,
        string memory
    ){
            return(
                patients.name, 
                patients.p_address, 
                patients.gender, 
                patients.age, 
                patients.height, 
                patients.weight, 
                patients.mobile,
                patients.family_status,
                patients.occupation
            );
    }    
}
