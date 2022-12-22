import React from 'react'
import './navbar.css';
import './color.css';
import { Link , useNavigate } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div class="aside">
            <div class="logo">
            <Link to="/home" ><span>S</span>tuck In The Movie</Link>
            </div>

            <div class="nav-toggler">
                <span></span>
            </div>
            <ul class="nav">
                
                

                <li><Link to="/Accounting/FundRequest" ><i class="fa fa-user"></i>AcceptFund</Link></li>
                <li><Link to="/Accounting/ApprovalSalaryAdjusment" ><i class="fa fa-user"></i>ApprovalSalaryAdjusment</Link></li>
                
                <li><Link to="/Manager/AbsentApproval" ><i class="fa fa-user"></i>Absent Approval</Link></li>
                <li><Link to="/Manager/EmployeeResignUpdate" ><i class="fa fa-user"></i>EmployeeResignUpdate</Link></li>

                <li><Link to="/HRD/WarningLetterUpdate" class="active"><i class="fa fa-home"></i>WarningLetterManage</Link></li>
                <li><Link to="/HRD/ViewPersonalInformation" class="active"><i class="fa fa-home"></i>ViewPersonalInformation</Link></li>
                <li><Link to="/HRD/AddEmployee" ><i class="fa fa-user"></i>AddEmployee</Link></li>
                <li><Link to="/HRD/SetWorkingTime" ><i class="fa fa-briefcase"></i>SetWorkingTime</Link></li>
                <li><Link to="/HRD/SubmitWarningLetter" ><i class="fa fa-user"></i>SubmitWarningLetter</Link></li>
                <li><Link to="/HRD/AddSalaryAdjusment" ><i class="fa fa-user"></i>AddSalaryAdjusment</Link></li>

                <li><Link to="/RequestPersonalLeave" ><i class="fa fa-user"></i>RequestPersonalLeave</Link></li>
                <li><Link to="/EmployeeResignRequest" ><i class="fa fa-user"></i>EmployeeResignRequest</Link></li>
                <li><Link to="/ViewEmployeeFundRequest" ><i class="fa fa-user"></i>EmployeeFundRequest</Link></li>
                
                
                
                
            </ul>
        </div>
      {/* <p>HRD</p>
      <ul>
        <li>Recruitment</li>
        <ul>
          <li><a href='/AddRecruitment'> AddRecruitment</a></li>
          <li><a href='/SelectRecruitment'> SelectRecruitment</a></li>
        </ul>
        <li>WarningLetter</li>
        <ul>
          <li><a href='/WarningLetter'> WarningLetter</a></li>
        </ul>
        <li>WorkingTime</li>
        <ul>
          <li><a href='/WorkingTime'> WorkingTime</a></li>
        </ul>
        <li><a href='/PersonalInformation'> PersonalInformation</a></li>
      </ul>
      <p>Cafe Division</p>
      <ul>
        <li>Front Office</li>
        <ul>
          <li><a href='/AddOrderChef'> AddOrder</a></li>
        </ul>
        <li>Kitchen</li>
        <ul>
          <li><a href='/CookOrder'> CookOrder</a></li>
        </ul>
      </ul>
      <p>Manager</p>
      <ul>
        <li><a href='/ResignManage'> ResignManage</a></li>
        <li><a href='/WarningLetterManage'> WarningLetterManage</a></li>
      </ul>

      <p>Movie Division</p>
      <ul>
        <li>Front Office</li>
        <ul>
          <li><a href='/AddMovieOrder'> AddMovieOrder</a></li>
          <li><a href='/AddMembership'> AddMembership</a></li>
        </ul>
      </ul>

      <p>External Department</p>
      <ul>
      <li><a href='/AddMovie'> AddMovie</a></li>
      <li><a href='/AddAdvertising'> AddAdvertising</a></li>
      <li><a href='/AddSupply'> AddSupply</a></li>
      </ul>
      <a href='/AddResign'> AddResign</a> */}
    </div>
  )
}

export default Navbar
