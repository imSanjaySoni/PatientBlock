pragma solidity ^0.5.10;

contract PatientBlock {

    event NewPatient(uint PatientId, string f_name);
    struct Patient {
        string f_name;
        string m_name;
        string l_name;
        string p_address;
        string gender;
        uint age;        
        uint mobile;
    }
    Patient[] public patients;
    mapping(uint => Patient) patientsAcc;

    function setPatientData(string memory _f_name, string memory _m_name, string memory _l_name, string memory _p_address, string memory _gender, uint _age, uint _mobile) public {
          uint id = patients.push(Patient(_f_name, _m_name, _l_name, _p_address, _gender, _age, _mobile)) - 1;
            
       // PatientToOwner[id] = msg.sender;
        emit NewPatient(id, _f_name);
    }

    //function getPatientData() public view returns(address[]){

   // }
    
}
