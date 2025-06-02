'use client';
import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface FormData {
  organizationName: string;
  nodalPersonName: string;
  designation: string;
  addressI: string;
  addressII: string;
  phoneOffice: string;
  mobileNumber: string;
  emailAddress: string;
  technicalContactName: string;
  technicalContactDesignation: string;
  technicalContactPhone: string;
  technicalContactEmail: string;
  realNameRequested: string;
  publicIPDetails: string;
  serverProcessor: string;
  serverMemory: string;
  serverDiskSpace: string;
  wifiAccessPoint: string;
}

const EduroamApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    nodalPersonName: '',
    designation: '',
    addressI: '',
    addressII: '',
    phoneOffice: '',
    mobileNumber: '',
    emailAddress: '',
    technicalContactName: '',
    technicalContactDesignation: '',
    technicalContactPhone: '',
    technicalContactEmail: '',
    realNameRequested: '',
    publicIPDetails: '',
    serverProcessor: '',
    serverMemory: '',
    serverDiskSpace: '',
    wifiAccessPoint: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Eduroam Application Form</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6;
            color: #000;
            font-size: 12px;
          }
          .header { 
            text-align: center; 
            margin-bottom: 30px; 
          }
          .form-field { 
            margin-bottom: 8px; 
            display: flex;
            align-items: baseline;
          }
          .label { 
            display: inline-block;
            margin-right: 10px;
            font-weight: normal;
          }
          .value { 
            border-bottom: 1px solid #000; 
            min-width: 200px;
            padding: 0 5px 2px 5px;
            display: inline-block;
            flex: 1;
          }
          .section-title {
            font-weight: bold;
            margin: 20px 0 15px 0;
            text-decoration: underline;
          }
          .contact-section {
            margin-top: 30px;
            border: 1px solid #000;
            padding: 15px;
          }
          .signature-line {
            text-align: right;
            margin-top: 40px;
          }
          .signature-line div {
            border-top: 1px solid #000;
            width: 200px;
            margin-left: auto;
            text-align: center;
            padding-top: 5px;
          }
          h1 { font-size: 16px; margin: 5px 0; }
          h2 { font-size: 14px; margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Annexure "I"</h1>
          <h2>Application form for joining eduroam in India</h2>
        </div>

        <div class="form-field">
          <span class="label">Organization Name</span>
          <span class="value">${formData.organizationName}</span>
        </div>

        <div class="form-field">
          <span class="label">Name of Nodal Person</span>
          <span class="value">${formData.nodalPersonName}</span>
        </div>

        <div class="form-field">
          <span class="label">Designation</span>
          <span class="value">${formData.designation}</span>
        </div>

        <div class="form-field">
          <span class="label">Address I</span>
          <span class="value">${formData.addressI}</span>
        </div>

        <div class="form-field">
          <span class="label">Address II</span>
          <span class="value">${formData.addressII}</span>
        </div>

        <div class="form-field">
          <span class="label">Phone Number (off)</span>
          <span class="value">${formData.phoneOffice}</span>
        </div>

        <div class="form-field">
          <span class="label">Mobile number</span>
          <span class="value">${formData.mobileNumber}</span>
        </div>

        <div class="form-field">
          <span class="label">Email Address</span>
          <span class="value">${formData.emailAddress}</span>
        </div>

        <div class="form-field">
          <span class="label">Technical contact person & their details</span>
          <span class="value">${formData.technicalContactName} - ${formData.technicalContactDesignation} - ${formData.technicalContactPhone} - ${formData.technicalContactEmail}</span>
        </div>

       
        <div class="section-title">Pre-requisite details to setup eduroam in India</div>

        <div class="form-field">
          <span class="label">Real name requested</span>
          <span class="value">${formData.realNameRequested}</span>
        </div>
        <div style="margin-left: 20px; font-size: 10px; color: #666;">(eg. ernet.in, iit.ac.in)</div>

        <div class="form-field">
          <span class="label">Details of Public IP</span>
          <span class="value">${formData.publicIPDetails}</span>
        </div>

        <div class="form-field">
          <span class="label">Detail of Server *</span>
        </div>
        <div style="margin-left: 20px; font-size: 10px; color: #666;">( Cent OS)</div>
        
        <div class="form-field" style="margin-left: 20px;">
          <span class="label">Processor : </span>
          <span class="value">${formData.serverProcessor}</span>
        </div>

        <div class="form-field" style="margin-left: 20px;">
          <span class="label">Memory : </span>
          <span class="value">${formData.serverMemory}</span>
        </div>

        <div class="form-field" style="margin-left: 20px;">
          <span class="label">Available Disk Space : </span>
          <span class="value">${formData.serverDiskSpace}</span>
        </div>

        <div class="form-field">
          <span class="label">Wi – Fi Access Point</span>
          <span class="value">${formData.wifiAccessPoint}</span>
        </div>
        <div style="margin-left: 20px; font-size: 10px; color: #666;">(which support Radius feature)</div>

        <div class="contact-section">
          <div class="section-title">ERNET India</div>
          <p>5th Floor, Block-I, A Wing,<br>
          DMRC IT Park, Shastri Park,<br>
          Delhi-110053</p>
          <p>Ph: 01122170641<br>
          01122170232</p>
          <p>Email: eduroam@ernet.in with a cc to srikanth@ernet.in</p>
        </div>

        <div class="section-title">Technical Contact Details for enabling eduroam services</div>

        <div class="signature-line">
          <div>(Signature of Applicant)</div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
      {/* Header - exactly like PDF */}
      <div className="text-center mb-8">
        <h1 className="text-lg font-normal mb-2">Annexure "I"</h1>
        <h2 className="text-base font-normal">Application form for joining eduroam in India</h2>
      </div>

      {/* Form fields with PDF-like styling */}
      <div className="space-y-4">
        {/* Organization Name */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Organization Name</span>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Name of Nodal Person */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Name of Nodal Person</span>
          <input
            type="text"
            name="nodalPersonName"
            value={formData.nodalPersonName}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Designation */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Designation</span>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Address I */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Address I</span>
          <input
            type="text"
            name="addressI"
            value={formData.addressI}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Address II */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Address II</span>
          <input
            type="text"
            name="addressII"
            value={formData.addressII}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Phone Number (off) */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Phone Number (off)</span>
          <input
            type="tel"
            name="phoneOffice"
            value={formData.phoneOffice}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Mobile number */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Mobile number</span>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Email Address */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Email Address</span>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Technical contact person & their details */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Technical contact person & their details</span>
          <div className="flex-1 border-0 border-b border-black bg-transparent px-2 pb-1" style={{ borderBottom: '1px solid black' }}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="technicalContactName"
                value={formData.technicalContactName}
                onChange={handleInputChange}
                placeholder="Name"
                className="bg-transparent outline-none"
              />
              <input
                type="text"
                name="technicalContactDesignation"
                value={formData.technicalContactDesignation}
                onChange={handleInputChange}
                placeholder="Designation"
                className="bg-transparent outline-none"
              />
              <input
                type="tel"
                name="technicalContactPhone"
                value={formData.technicalContactPhone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="bg-transparent outline-none"
              />
              <input
                type="email"
                name="technicalContactEmail"
                value={formData.technicalContactEmail}
                onChange={handleInputChange}
                placeholder="Email"
                className="bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Signature line */}
        <div className="text-right mt-12 mb-12">
          <div className="inline-block">
            <div className="w-48 border-t border-black pt-2 text-center">
              (Signature of Applicant)
            </div>
          </div>
        </div>

        {/* Pre-requisite details section */}
        <div className="font-bold mb-6 underline">Pre-requisite details to setup eduroam in India</div>

        {/* Real name requested */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Real name requested</span>
          <input
            type="text"
            name="realNameRequested"
            value={formData.realNameRequested}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>
        <div className="ml-52 text-xs text-gray-600">(eg. ernet.in, iit.ac.in)</div>

        {/* Details of Public IP */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Details of Public IP</span>
          <input
            type="text"
            name="publicIPDetails"
            value={formData.publicIPDetails}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>

        {/* Detail of Server */}
        <div className="mb-2">
          <span className="inline-block w-48 mr-4">Detail of Server *</span>
        </div>
        <div className="ml-52 text-xs text-gray-600 mb-4">( Cent OS)</div>

        {/* Server specifications */}
        <div className="ml-8 space-y-3">
          <div className="flex items-baseline">
            <span className="inline-block w-40 mr-4">Processor :</span>
            <input
              type="text"
              name="serverProcessor"
              placeholder='1 GHz (x86 processor) or 1.4 GHz (x64 processor)'
              value={formData.serverProcessor}
              onChange={handleInputChange}
              className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
              style={{ borderBottom: '1px solid black' }}
            />
          </div>

          <div className="flex items-baseline">
            <span className="inline-block w-40 mr-4">Memory :</span>
            <input
              type="text"
              name="serverMemory"
              value={formData.serverMemory}
              placeholder='1 GB RAM or greater'
              onChange={handleInputChange}
              className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
              style={{ borderBottom: '1px solid black' }}
            />
          </div>

          <div className="flex items-baseline">
            <span className="inline-block w-40 mr-4">Available Disk Space :</span>
            <input
              type="text"
              name="serverDiskSpace"
              value={formData.serverDiskSpace}
              placeholder='Minimum: 10 GB'
              onChange={handleInputChange}
              className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
              style={{ borderBottom: '1px solid black' }}
            />
          </div>
        </div>

        {/* Wi-Fi Access Point */}
        <div className="flex items-baseline">
          <span className="inline-block w-48 mr-4">Wi – Fi Access Point</span>
          <input
            type="text"
            name="wifiAccessPoint"
            value={formData.wifiAccessPoint}
            onChange={handleInputChange}
            className="flex-1 border-0 border-b border-black bg-transparent outline-none px-2 pb-1"
            style={{ borderBottom: '1px solid black' }}
          />
        </div>
        <div className="ml-52 text-xs text-gray-600">(which support Radius feature)</div>

        {/* ERNET India Contact Section */}
        <div className="border border-black p-4 mt-8">
          <div className="font-bold mb-3 underline">ERNET India</div>
          <div className="mb-2">
            5th Floor, Block-I, A Wing,<br />
            DMRC IT Park, Shastri Park,<br />
            Delhi-110053
          </div>
          <div className="mb-2">
            Ph: 01122170641<br />
            01122170232
          </div>
          <div>
            Email: eduroam@ernet.in with a cc to srikanth@ernet.in
          </div>
        </div>

        {/* Technical Contact Details for enabling eduroam services */}
        <div className="font-bold mt-8 mb-4 underline">Technical Contact Details for enabling eduroam services</div>

        {/* Final Signature line */}
        

        {/* Download Button */}
        <div className="flex justify-center pt-8">
          <button
            type="button"
            onClick={generatePDF}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Download size={20} />
            Download Filled Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default EduroamApplicationForm;