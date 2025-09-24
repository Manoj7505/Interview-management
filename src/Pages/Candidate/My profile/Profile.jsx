import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import LinkedInProfileView from "./ProfileView";

const CandidateProfile = () => {
  const [data, setData] = useState(null); 
  const [showPreview, setShowPreview] = useState(false);
  const handleFormSubmit = (formData) => {
    setData(formData);
    setShowPreview(true);
  };
  const handleEdit = () => {
    setShowPreview(false);
  };

  return (
    <div className=" text-white">
      {!showPreview ? (
        <PersonalDetails onSubmit={handleFormSubmit} initialData={data} />
      ) : (
        <LinkedInProfileView data={data} onBack={handleEdit} />
      )}
    </div>
  );
};

export default CandidateProfile;


