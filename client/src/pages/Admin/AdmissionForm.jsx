import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Personal Info', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { id: 2, title: 'Academic Info', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
    { id: 3, title: 'Payment', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg> },
    { id: 4, title: 'Address & Ins.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { id: 5, title: 'Hostel', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg> },
    { id: 6, title: 'School', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg> },
    { id: 7, title: 'Additional', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg> },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const InputField = ({ label, type = 'text', placeholder }) => (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );

  const SelectField = ({ label, options }) => (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="bg-gray-50/50 min-h-screen">
      {/* Simple Header */}
      <div className="max-w-7xl mx-auto px-6 pb-4 pt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">New Admission</h1>
          <button
            onClick={() => navigate('/admin/admission-students')}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors text-sm uppercase tracking-wider"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Admission Students
          </button>
        </div>
      </div>

      <div className="px-6 pb-6 max-w-7xl mx-auto">

      {/* Stepper Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex items-center justify-between relative px-2">
          {/* Progress Line */}
          <div className="absolute left-8 right-8 top-5 -translate-y-1/2 h-[2px] bg-gray-100 z-0"></div>
          <div 
            className="absolute left-8 top-5 -translate-y-1/2 h-[2px] bg-blue-600 z-0 transition-all duration-500 ease-in-out"
            style={{ width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 4rem)` }}
          ></div>

          {/* Steps */}
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center group cursor-pointer" onClick={() => setCurrentStep(step.id)}>
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2 transition-all duration-300 ${
                    isActive ? 'bg-blue-600 text-white border-blue-200 ring-4 ring-blue-50' : 
                    isCompleted ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-400 border-gray-200 hover:border-blue-300 hover:text-blue-500'
                  }`}
                >
                  {isCompleted ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> : React.cloneElement(step.icon, { width: "16", height: "16" })}
                </div>
                <span className={`mt-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-blue-600' : isCompleted ? 'text-gray-800' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wider">
            {steps[currentStep - 1].title} Details
          </h2>
        </div>
        
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField label="Student Name" placeholder="e.g. Mr. ARUNPRASATH P" />
                <SelectField label="Gender" options={['MALE', 'FEMALE', 'OTHER']} />
                <InputField label="Date of Birth" type="date" />
                <InputField label="Age" type="number" />
                <SelectField label="Community" options={['BC', 'MBC', 'SC', 'ST', 'OC']} />
                <SelectField label="Religion" options={['HINDU', 'MUSLIM', 'CHRISTIAN', 'OTHER']} />
                <SelectField label="Nationality" options={['INDIAN', 'OTHER']} />
                <SelectField label="Mother Tongue" options={['TAMIL', 'ENGLISH', 'TELUGU', 'MALAYALAM', 'HINDI']} />
                <SelectField label="Blood Group" options={['O+VE', 'O-VE', 'A+VE', 'A-VE', 'B+VE', 'B-VE', 'AB+VE', 'AB-VE']} />
                <InputField label="Aadhar No" placeholder="e.g. 622859969502" />
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-md font-bold text-gray-800 mb-4">Registration Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField label="Batch" placeholder="e.g. 2024" />
                  <InputField label="Date of Admission" type="date" />
                  <InputField label="Enrollment No" placeholder="e.g. 2024UCS1034" />
                  <InputField label="Register No" placeholder="e.g. 7376241CS128" />
                  <InputField label="DTE UMIS Reg. No." placeholder="e.g. 9993547917" />
                  <InputField label="Application No" placeholder="e.g. 2117" />
                  <InputField label="Admission No" placeholder="e.g. 36332" />
                  <InputField label="Student ID" placeholder="e.g. 37520" />
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-md font-bold text-gray-800 mb-4">Parent / Guardian Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField label="Father Name" placeholder="e.g. PANNEERSELVAM S" />
                  <InputField label="Mother Name" placeholder="e.g. PREMA P" />
                  <InputField label="Guardian Name" placeholder="" />
                  <InputField label="Parent Occupation" placeholder="e.g. ADVOCATE" />
                  <InputField label="Place of Work" placeholder="" />
                  <InputField label="Designation" placeholder="e.g. ADVOCATE" />
                  <InputField label="Parent Income (Rs.)" placeholder="e.g. 114000.00" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="Branch Code" placeholder="e.g. 1CS" />
              <SelectField label="Degree Level" options={['UG', 'PG']} />
              <InputField label="Course Code" placeholder="e.g. B.E." />
              <InputField label="Course Name" placeholder="e.g. BACHELOR OF ENGINEERING" />
              <InputField label="Branch Name" placeholder="e.g. COMPUTER SCIENCE AND ENGINEERING" />
              <InputField label="Department" placeholder="e.g. COMPUTER SCIENCE AND ENGINEERING" />
              <SelectField label="Branch Type" options={['REGULAR', 'PART TIME']} />
              <InputField label="Regulation" placeholder="e.g. 2022" />
              <InputField label="University" placeholder="e.g. ANNA UNIVERSITY, CHENNAI" />
              <SelectField label="Year" options={['I', 'II', 'III', 'IV']} />
              <SelectField label="Semester" options={['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']} />
              <InputField label="Year of Admission" placeholder="e.g. 2024" />
              <InputField label="Year of Completion" placeholder="e.g. 2028" />
              <InputField label="Section" placeholder="e.g. A" />
              <SelectField label="Student Category" options={['REGULAR', 'LATERAL ENTRY']} />
              <SelectField label="Seat Category" options={['GOVERNMENT', 'MANAGEMENT']} />
              <InputField label="Quota" placeholder="e.g. OC ACADEMIC" />
              <SelectField label="Student Status" options={['CONTINUING', 'DISCONTINUED']} />
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="DTE Register No" placeholder="e.g. 362376" />
              <InputField label="DTE Payment Receipt No" placeholder="" />
              <InputField label="DTE Admission No" placeholder="e.g. 2024/2702/CS/10009" />
              <InputField label="DTE Receipt Date" type="date" />
              <InputField label="DTE General Rank" placeholder="e.g. 6168" />
              <InputField label="DTE Receipt Amount" placeholder="" />
              <InputField label="DTE Community Rank" placeholder="e.g. 3539" />
              <InputField label="DTE Name of the Bank DD" placeholder="" />
              <InputField label="Entrance Marks Min" placeholder="" />
              <InputField label="Admission Discount Name 1" placeholder="" />
              <InputField label="Entrance Marks Max" placeholder="" />
              <InputField label="Admission Discount Amount (Rs.)" placeholder="" />
              <InputField label="Entrance Register No" placeholder="e.g. NULL" />
              <InputField label="Admission Discount Name 2" placeholder="" />
              <InputField label="Admission Discount Amount 2 (Rs.)" placeholder="" />
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3 className="md:col-span-3 text-md font-bold text-gray-800 border-b pb-2">Insurance Details</h3>
                <InputField label="Nominee Name" placeholder="e.g. PREMA P" />
                <SelectField label="Nominee Relationship" options={['MOTHER', 'FATHER', 'GUARDIAN', 'SPOUSE']} />
                <InputField label="Nominee Age" type="number" placeholder="e.g. 44" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h3 className="md:col-span-2 text-md font-bold text-gray-800 border-b pb-2 mt-4">Address Information</h3>
                
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">Permanent Address</label>
                  <textarea rows="4" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Enter permanent address"></textarea>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">Present Address</label>
                  <textarea rows="4" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Enter present address"></textarea>
                </div>
                
                <SelectField label="Location of the Residence" options={['RURAL', 'URBAN']} />
                <div></div>

                <InputField label="Parent Mobile No" placeholder="e.g. 8015608908" />
                <InputField label="Student Email ID" placeholder="" />
                <InputField label="Student Mobile No" placeholder="e.g. 9345904651" />
                <InputField label="Parent Email ID" placeholder="" />
                <InputField label="Official Email ID" placeholder="e.g. student@college.edu.in" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h3 className="md:col-span-2 text-md font-bold text-gray-800 border-b pb-2 mt-4">General Notes</h3>
                <InputField label="General Note 1" placeholder="" />
                <InputField label="General Note 2" placeholder="" />
                <InputField label="General Note 3" placeholder="" />
                <InputField label="General Note 4" placeholder="" />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SelectField label="Hosteller/Dayscholar" options={['HOSTELLER', 'DAYSCHOLAR']} />
              <InputField label="Hostel Room Capacity" placeholder="e.g. 4" />
              <InputField label="Hostel Name" placeholder="e.g. EMERALD" />
              <InputField label="Hostel Floor No" placeholder="e.g. 1" />
              <SelectField label="Hostel Room Type" options={['ORDINARY', 'AC', 'ATTACHED BATHROOM']} />
              <InputField label="Hostel Room No" placeholder="e.g. 270" />
              <InputField label="Warden Name" placeholder="e.g. Mr.KARTHIH M G" />
              <InputField label="Warden Alter (if Any)" placeholder="" />
              <InputField label="H-Discontinued Date" type="date" />
              <InputField label="H-Note" placeholder="" />
              <InputField label="Class Advisor" placeholder="e.g. Dr.SATHISHKUMAR P" />
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField label="School Qualification" placeholder="e.g. HSC-ACADEMIC" />
                <InputField label="School Year of Pass" placeholder="e.g. MARCH 2024" />
                <InputField label="School No of Attempts" placeholder="e.g. 1" />
                <InputField label="School Study State" placeholder="e.g. TAMIL NADU" />
                <InputField label="School Classification" placeholder="" />
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-md font-bold text-gray-800 mb-4">School Marks</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-900">Subject</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Min</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Max</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">%</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Cut Off (200)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-medium">Physics</td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="90.00" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="100" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="90.00" /></td>
                        <td className="px-4 py-3" rowSpan={3}><input type="text" className="w-16 border rounded px-2" defaultValue="191.50" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-medium">Chemistry</td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="97.00" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="100" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="97.00" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-medium">Mathematics</td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="98.00" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="100" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2" defaultValue="98.00" /></td>
                      </tr>
                      <tr className="border-b bg-blue-50/50">
                        <td className="px-4 py-3 font-medium text-blue-800">PCM Total</td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2 border-blue-300" defaultValue="285.00" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2 border-blue-300" defaultValue="300" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-16 border rounded px-2 border-blue-300" defaultValue="95.00" /></td>
                        <td className="px-4 py-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-md font-bold text-gray-800 mb-4">School TC & Certificates</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField label="School Name" placeholder="e.g. SRV BOYS HSS" />
                  <InputField label="School TC Name" placeholder="" />
                  <InputField label="School TC No" placeholder="e.g. 16886" />
                  <InputField label="School TC Date" type="date" />
                  <InputField label="Cut off Marks in 300" placeholder="e.g. 191.50" />
                  <InputField label="School TC Class" placeholder="e.g. HSC-ACADEMIC" />
                  <InputField label="Board of School" placeholder="e.g. SBSE-TN" />
                  <InputField label="Marks Note 1" placeholder="" />
                  <InputField label="Marks Note 2" placeholder="" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 7 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3 className="md:col-span-3 text-md font-bold text-gray-800 border-b pb-2">BIT Academic Details</h3>
                <InputField label="TC Last Class Date" type="date" />
                <InputField label="TC Promotion To Next Higher Class" placeholder="" />
                <InputField label="TC Reason For Leaving" placeholder="" />
                <InputField label="TC Conduct And Character" placeholder="" />
                <InputField label="TC No" placeholder="" />
                <InputField label="TC Date" type="date" />
                <InputField label="Duplicate TC Issued" placeholder="e.g. 0No(s)" />
                <InputField label="Duplicate TC Description" placeholder="" />
                <InputField label="Final Total Marks Min" placeholder="" />
                <InputField label="Final Total Marks Max" placeholder="" />
                <InputField label="Final Total Marks %" placeholder="" />
                <InputField label="Final Classification" placeholder="" />
                <InputField label="Final Year of Pass" placeholder="" />
                <InputField label="University Rank" placeholder="" />
                <InputField label="University Rank 1" placeholder="" />
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="md:col-span-3 text-md font-bold text-gray-800 mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField label="Scopus Link" placeholder="" />
                  <InputField label="Google Scholor Link" placeholder="" />
                  <InputField label="Google H Index" placeholder="" />
                  <InputField label="Scopus H Index (Self)" placeholder="" />
                  <InputField label="Scopus ID" placeholder="" />
                  <InputField label="Scopus H Index (From Scopus)" placeholder="" />
                  <InputField label="ResearchGate Profile Link" placeholder="" />
                  <InputField label="ORCID Profile Link" placeholder="" />
                  <InputField label="14 Point Score" placeholder="" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between rounded-b-xl">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center ${
              currentStep === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
            }`}
          >
            <span className="mr-2">←</span> Previous
          </button>

          <div className="text-sm font-semibold text-gray-500">
            Step {currentStep} of {steps.length}
          </div>

          <button
            onClick={handleNext}
            className="px-6 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200 transition-colors flex items-center"
          >
            {currentStep === steps.length ? 'Submit Admission' : 'Next Step'}
            {currentStep !== steps.length && <span className="ml-2">→</span>}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
