import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import './all-content.css';
import App from './App';

import Navbar from './navbar';
import Home from './RoleDivision/Home';
import Login from './Login';

import AddRecruitment from './RoleDivision/HRD/Recruitment/AddRecruitment';
import AddMovieOrder from './RoleDivision/MovieDivision/FrontOfficeDivision/AddMovieOrder';
import WarningLetter from './RoleDivision/HRD/WarningLetter/WarningLetter';
import WorkingTime from './RoleDivision/HRD/WorkingTime/WorkingTime';

import ResignManage from './RoleDivision/Manager/ResignManage';
import SelectRecruitment from './RoleDivision/HRD/Recruitment/SelectRecruitment';
import AddOrder from './RoleDivision/CafeDivision/AddOrder';
import AddMembership from './RoleDivision/MovieDivision/FrontOfficeDivision/AddMembership';
import WarningLetterUpdate from './RoleDivision/Manager/WarningLetterUpdate';
import CookOrder from './RoleDivision/CafeDivision/CookOrder';
import AddMovie from './RoleDivision/External Department/AddMovie';
import AddAdvertising from './RoleDivision/External Department/AddAdvertising';
import AddSupply from './RoleDivision/External Department/AddSupply';

import AcceptDepartmentFundRequest from './RoleDivision/Accounting/AcceptDepartmentFundRequest';

//Manager
import EmployeeResignUpdate from './RoleDivision/Manager/EmployeeResignUpdate';
import SetWorkingTime from './RoleDivision/HRD/SetWorkingTime';
import PersonalInformation from './RoleDivision/HRD/PersonalInformation';
import ApprovalSalaryAdjusment from './RoleDivision/Accounting/ApprovalSalaryAdjusment';

//HRD
import AddEmployee from './RoleDivision/HRD/AddEmployee';
import AddSalaryAdjusment from './RoleDivision/HRD/AddSalaryAdjusment';

//Employee
import AbsentApproval from './RoleDivision/Manager/AbsentApproval';
import RequestPersonalLeave from './RoleDivision/Employee/RequestPersonalLeave';
import ViewEmployeeFundRequest from './RoleDivision/Employee/ViewEmployeeFundRequest';
import RequestDepartmentFund from './RoleDivision/Employee/RequestDepartmentFund';
import AddResign from './RoleDivision/Employee/AddResign';

const root = ReactDOM.createRoot(document.getElementById('root'));



let Cho;
switch(window.location.pathname){
  case "/":
    Cho = AddRecruitment;
    break;
  case "/AddRecruitment":
    Cho = AddRecruitment;
    break;
  case "/SelectRecruitment":
    Cho = SelectRecruitment;
    break;
  case "/WarningLetter":
    Cho = WarningLetter;
    break; 
  case "/WorkingTime":
    Cho =  WorkingTime;
    break;
  case "/AddOrderChef":
    Cho = AddOrder;
    break;
  case "/CookOrder":
    Cho = CookOrder;
    break;
  case "/ResignManage":
    Cho = ResignManage;
    break;
  case "/AddResign":
    Cho = AddResign;
    break;
  case "/AddMovieOrder":
    Cho = AddMovieOrder;
    break;
  case "/AddMembership":
    Cho = AddMembership;
    break;
  case "/WarningLetterUpdate":
    Cho = WarningLetterUpdate;
    break;
  case "/AddMovie":
    Cho = AddMovie;
    break;
  case "/AddAdvertising":
    Cho = AddAdvertising;
    break
  case "/AddSupply":
    Cho = AddSupply;
    break
  case "/PersonalInformation":
    Cho = PersonalInformation;
    break
}

root.render(
  <React.StrictMode>
    
    {/* <Login/> */}
    <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          
          <Route path='/Accounting/ApprovalSalaryAdjusment' element={<ApprovalSalaryAdjusment />}/>      
          <Route path='/Accounting/FundRequest' element={<AcceptDepartmentFundRequest />}/>

          <Route path='/Manager/EmployeeResignUpdate' element={<EmployeeResignUpdate/>}/>
          <Route path='/Manager/AbsentApproval' element={<AbsentApproval/>}/>

          <Route path='/HRD/SetWorkingTime' element={<SetWorkingTime />}/>
          <Route path='/HRD/SubmitWarningLetter' element={<WarningLetter />}/>
          <Route path='/HRD/ViewPersonalInformation' element={<PersonalInformation />}/>
          <Route path='/HRD/AddEmployee' element={<AddEmployee/>}/>
          <Route path='/HRD/AddSalaryAdjusment' element={<AddSalaryAdjusment/>}/>
          <Route path='/HRD/WarningLetterUpdate' element={<WarningLetterUpdate/>}/>

          <Route path='/RequestPersonalLeave' element={<RequestPersonalLeave/>}/>
          <Route path='/RequestDepartmentFund' element={<RequestDepartmentFund/>}/>
          <Route path='/ViewEmployeeFundRequest' element={<ViewEmployeeFundRequest/>}/>
          <Route path='/EmployeeResignRequest' element={<AddResign/>}/>
          

        </Routes>
    </Router>
    {/* <div className='all-content'>
    <Login/> */}
      {/* <div className='left'>
        <Navbar />
      </div> */}
      {/* <div> */}
        {/* <Login/> */}
        {/* <Cho /> */}
        {/* {/* <WarningLetter/> */}
        {/* <WorkingTime/>
        <AddResign/>
        <ResignManage/> 
      </div> */}
    {/* </div> */}
  </React.StrictMode>
);
