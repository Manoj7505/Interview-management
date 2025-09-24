import React, { useState, useEffect } from "react";
import { Button } from '../../Components/ui/Button';

const Candidates = ({ acceptedCandidates = [] }) => {
  const [localAcceptedCandidates, setLocalAcceptedCandidates] = useState([]);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [removeCandidate, setRemoveCandidate] = useState(null);

  // Load accepted candidates from localStorage on component mount
  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem('acceptedCandidates') || '[]');
    setLocalAcceptedCandidates(savedCandidates);
  }, []);

  // Use candidates from props or localStorage
  const candidates = acceptedCandidates.length > 0 
    ? acceptedCandidates 
    : localAcceptedCandidates;

  // Handle remove
  const handleRemove = (candidate) => {
    setRemoveCandidate(candidate);
    setShowRemoveConfirm(true);
  };

  const confirmRemove = () => {
    if (!removeCandidate) return;

    // Update local list
    const updatedCandidates = candidates.filter(c => c.id !== removeCandidate.id);
    setLocalAcceptedCandidates(updatedCandidates);

    // Update localStorage
    localStorage.setItem('acceptedCandidates', JSON.stringify(updatedCandidates));

    // Reset modal state
    setShowRemoveConfirm(false);
    setRemoveCandidate(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">
        Candidate Management ({candidates.length} candidates)
      </h3>
      
      {candidates.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No candidates shortlisted yet</p>
          <p className="text-sm text-blue-600">
            Accept candidates from the Overview to see them here!
          </p>
        </div>
      ) : (
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Applied Position</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{candidate.name}</td>
                <td className="p-2">{candidate.email}</td>
                <td className="p-2">{candidate.job}</td>
                <td className="p-2 space-x-2">
                  <Button size="sm">Schedule</Button>
                  <Button size="sm">Assign</Button>
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={() => handleRemove(candidate)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Remove confirmation modal */}
      {showRemoveConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">
              Are you sure you want to remove {removeCandidate?.name}?
            </h2>
            <div className="flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowRemoveConfirm(false);
                  setRemoveCandidate(null);
                }}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmRemove}>
                Yes, Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;
