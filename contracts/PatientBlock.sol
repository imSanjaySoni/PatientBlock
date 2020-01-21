pragma solidity ^0.5.10;

contract PatientBlock {

  
    struct Patient {
        string f_name;
        string m_name;
        string l_name;
        string p_address;
        string gender;
        uint age;        
        uint mobile;
    }
    Patient patients;
    

    function setPatientData(string memory _f_name, string memory _m_name, string memory _l_name, string memory _p_address, string memory _gender, uint _age, uint _mobile) public {
        patients = Patient(_f_name, _m_name, _l_name, _p_address, _gender, _age, _mobile);
    }

    function getPatientData() public view returns(string memory, string memory, string memory, string memory, string memory, uint, uint){
        return(patients.f_name, patients.m_name, patients.l_name, patients.p_address, patients.gender, patients.age, patients.mobile);
    }    
}
