
import react, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import './App.css';

function App() {
  const [date, setStartDate] = useState(new Date());
  useEffect(() => {

  }, []);


  // react select
  const options = [
    { value: 'Rafi', label: 'Rafi' },
    { value: 'Tonmoy', label: 'Tonmoy' },
    { value: 'Labib', label: 'Labib' }
  ]

  // react datapicker
  const handleDateChange = () => {
    console.log('hello');
  }

  const handleDateSelect = () => {
    console.log('hello');
  }
  return (
    <>

      <button className="btn btn-warning" data-bs-toggle="modal"
        data-bs-target="#loginModal">  on page load modal </button>
      {/* site loading modal */}
      <div className="modal" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content login_reg_modal text-center p-4">
            {/* close */}
            <span className='btn' data-bs-dismiss="modal" aria-label="Close">
              <button className='btn login-modal-btn'>
                <i className="fa-solid fa-circle-xmark text-danger"></i>
              </button>
            </span>

            {/* modal content */}
            <h4 className="modal-title login-modal-title" id="loginModalLabel">manage invoices?</h4>
            <h6 className='mt-4'>o manage your invoices, you must first log in or register.</h6>
            <div className='d-flex justify-content-center mt-4'>
              <button type="button" className="temp-btn temp-btn-colored me-4"
              >registration</button>
              <button type="button" className="temp-btn temp-btn-colored btn-green">login</button>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="container-fluid  p-120 px-lg-5">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="invoice-card">
              <h3 className="mb-30"><span className="temp-primary-color">invoice </span> Management</h3>

              {/* <!-- Policyholder --> */}
              <form method="get" action="#">
                <fieldset className="scheduler-border">
                  <legend className="scheduler-border">Policyholder</legend>
                  <div className="row ">
                    <div className="col-12">
                      <label for="first_last_name" className="label my-2">first and last name</label>
                      <input type="text" className="form-control temp-input" id="first_last_name"
                        placeholder="Full Name" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label for="lbd" className="label my-2">%LBD</label>
                      <input type="number" className="form-control temp-input" id="lbd" placeholder="50" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label for="pcv" className="label my-2">%PCV</label>
                      <input type="number" className="form-control temp-input" id="pcv" placeholder="50" />
                    </div>
                    <div className="col-12">
                      <button className="btn-sm temp-btn temp-btn-colored mt-4">add to</button>
                    </div>
                  </div>
                </fieldset>
              </form>

              {/* <!-- co-insured --> */}
              <form method="get" action="#">
                <fieldset className="scheduler-border">
                  <legend className="scheduler-border">co-insured</legend>
                  <div className="row">
                    <div className="col-12">
                      <label for="first_last_name" className="label my-2">first and last name</label>
                      <input type="text" className="form-control temp-input" id="first_last_name"
                        placeholder="Full Name" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label for="lbd" className="label my-2">%LBD</label>
                      <input type="number" className="form-control temp-input" id="lbd" placeholder="50" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label for="pcv" className="label my-2">%PCV</label>
                      <input type="number" className="form-control temp-input" id="pcv" placeholder="50" />
                    </div>
                    <div className="col-12">
                      <button className="btn-sm temp-btn temp-btn-colored mt-4">add to</button>
                    </div>
                  </div>
                </fieldset>
              </form>

            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="invoice-card overflow-scroll-x">
              <h3 className="mb-4"><span className="temp-primary-color">Added </span> people</h3>
              <table className="temp-table">
                <thead className="temp-table-heading">
                  <tr>
                    <th className="temp-th">status</th>
                    <th className="temp-th">first and last name</th>
                    <th className="temp-th">Share LBV in % </th>
                    <th className="temp-th">Share private health insurance in % </th>
                    <th className="temp-th">Extinguish </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="temp-td">Policyholder</td>
                    <td className="temp-td">Tonmoy Khan</td>
                    <td className="temp-td">50</td>
                    <td className="temp-td">50</td>
                    <td className="temp-td">  <button className='btn'>
                      <i className="fa-solid fa-circle-xmark text-danger"></i>
                    </button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="addNewTable" tabindex="-1" aria-labelledby="addNewTableLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addNewTableLabel">Add New Table</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input className="form-control temp-input" type="text" placeholder="Table label" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary text-capitalize"
                data-bs-dismiss="modal">interrupt</button>
              <button type="button" className="btn btn-primary text-capitalize">add new table</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-120 px-lg-5 ">
        <div className="row">
          <div className="col-12 ">
            <div className="invoice-card overflow-scroll-x">
              <h3 className="temp-primary-color">table</h3>
              <p>You must first register in order to be able to edit the tables.</p>
              <div>
                {/* <!-- tab goes here --> */}
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item me-4 mb-4" role="presentation">
                    <button className="temp-btn temp-btn-colored active" id="temp-tab-one-tab"
                      data-bs-toggle="tab" data-bs-target="#temp-tab-one" type="button" role="tab"
                      aria-controls="temp-tab-one" aria-selected="true">2022</button>
                  </li>
                  <li className="nav-item me-4 mb-4" role="presentation">
                    <button className="temp-btn temp-btn-colored" id="temp-tab-two-tab" data-bs-toggle="tab"
                      data-bs-target="#temp-tab-two" type="button" role="tab" aria-controls="temp-tab-two"
                      aria-selected="false">2023</button>
                  </li>
                  <li className="nav-item me-4 mb-4" role="presentation">
                    <button className="temp-btn temp-btn-outlined" data-bs-toggle="modal"
                      data-bs-target="#addNewTable">add new table</button>
                  </li>
                  <li className="nav-item me-4 mb-4" role="presentation">
                    <button className="temp-btn temp-btn-outlined">save on computer</button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active " id="temp-tab-one" role="tabpanel"
                    aria-labelledby="temp-tab-one-tab">
                    <button className="mb-4 temp-btn temp-btn-primary btn-danger">delete 2022</button>
                    <h4 className="mb-4 temp-primary-color ">2022 table</h4>
                    <table className="temp-table">
                      <thead className="temp-table-heading">
                        <tr>
                          <th className="temp-th">invoice sender</th>
                          <th className="temp-th">Date</th>
                          <th className="temp-th">Bill number</th>
                          <th className="temp-th">Invoice amount</th>
                          <th className="temp-th">persons </th>
                          <th className="temp-th">%LBV </th>
                          <th className="temp-th">%PCV</th>
                          <th className="temp-th">Share LBV</th>
                          <th className="temp-th">Proportion of private
                            health insurance</th>
                          <th className="temp-th">Actual reimbursement
                            LBV</th>
                          <th className="temp-th">
                            Own contribution LBV
                          </th>
                          <th className="temp-th">
                            Personal contribution
                            private health insurance
                          </th>
                          <th className="temp-th">
                            Completed
                          </th>
                          <th className="temp-th">
                            Extinguish
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="temp-td">Policyholder</td>
                          <td className="temp-td">
                            {/* <!-- change it --> */}
                            <DatePicker
                              selected={date}
                              onSelect={handleDateSelect} //when day is clicked
                              onChange={handleDateChange} //only when value has changed
                            />
                          </td>
                          <td className="temp-td">
                            1282
                          </td>
                          <td className="temp-td">
                            128234579834
                          </td>
                          <td className="temp-td custome-width-200">
                            <Select options={options} />
                          </td>
                          <td className="temp-td">
                            50
                          </td>
                          <td className="temp-td">
                            50
                          </td>
                          <td className="temp-td">
                            42.50
                          </td>
                          <td className="temp-td">
                            42.50
                          </td>
                          <td className="temp-td">
                            98
                          </td>
                          <td className="temp-td">
                            98
                          </td>
                          <td className="temp-td">
                            98
                          </td>
                          <td className="temp-td">
                            <button className='btn'><i className="fa-solid fa-circle-check text-dark"></i></button>
                          </td>
                          <td className="temp-td">
                            <button className='btn'>  <i className="fa-solid fa-circle-xmark text-danger"></i></button>
                          </td>

                        </tr>
                        {/* <!-- total count --> */}
                        <tr>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">
                            Total : 128234579834
                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            <button className='btn'><i className="fa-solid fa-circle-check text-dark"></i></button>
                          </td>
                          <td className="temp-td">
                            <button className='btn'>  <i className="fa-solid fa-circle-xmark text-danger"></i></button>
                          </td>

                        </tr>
                        {/* <!-- add new row --> */}
                        <tr>
                          <td>
                            <button className="my-4 temp-btn temp-btn-primary custome-width-160">add
                              new
                              row</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                  <div className="tab-pane fade " id="temp-tab-two" role="tabpanel"
                    aria-labelledby="temp-tab-two-tab">
                    <button className="mb-4 temp-btn temp-btn-primary btn-danger">delete 2023</button>
                    <h4 className="mb-4 temp-primary-color ">2023 table</h4>
                    <table className="temp-table">
                      <thead className="temp-table-heading">
                        <tr>
                          <th className="temp-th">invoice sender</th>
                          <th className="temp-th">Date</th>
                          <th className="temp-th">Bill number</th>
                          <th className="temp-th">Invoice amount</th>
                          <th className="temp-th">persons </th>
                          <th className="temp-th">%LBV </th>
                          <th className="temp-th">%PCV</th>
                          <th className="temp-th">Share LBV</th>
                          <th className="temp-th">Proportion of private
                            health insurance</th>
                          <th className="temp-th">Actual reimbursement
                            LBV</th>
                          <th className="temp-th">
                            Own contribution LBV
                          </th>
                          <th className="temp-th">
                            Personal contribution
                            private health insurance
                          </th>
                          <th className="temp-th">
                            Completed
                          </th>
                          <th className="temp-th">
                            Extinguish
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="temp-td">Policyholder</td>
                          <td className="temp-td">
                            {/* <!-- change it --> */}
                            <DatePicker
                              selected={date}
                              onSelect={handleDateSelect} //when day is clicked
                              onChange={handleDateChange} //only when value has changed
                            />
                          </td>
                          <td className="temp-td">
                            1282
                          </td>
                          <td className="temp-td">
                            128234579834
                          </td>
                          <td className="temp-td custome-width-200">
                            <Select options={options} />
                          </td>
                          <td className="temp-td">
                            50
                          </td>
                          <td className="temp-td">
                            50
                          </td>
                          <td className="temp-td">
                            42.50
                          </td>
                          <td className="temp-td">
                            42.50
                          </td>
                          <td className="temp-td">
                            98
                          </td>
                          <td className="temp-td">
                            98
                          </td>
                          <td className="temp-td">
                            98
                          </td>
                          <td className="temp-td">
                            {/* <!-- replace it  --> */}
                            -/
                          </td>
                          <td className="temp-td">
                            {/* <!-- replace it  --> */}
                            *
                          </td>

                        </tr>
                        {/* <!-- total count --> */}
                        <tr>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">
                            Total : 128234579834
                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">

                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            Total : 42.50
                          </td>
                          <td className="temp-td">
                            {/* <!-- replace it  --> */}
                            -/
                          </td>
                          <td className="temp-td">
                            {/* <!-- replace it  --> */}
                            *
                          </td>

                        </tr>
                        {/* <!-- add new row --> */}
                        <tr>
                          <td>
                            <button className="my-4 temp-btn temp-btn-primary custome-width-160">add
                              new
                              row</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
