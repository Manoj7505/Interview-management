import React from "react";
import { Button } from '../../Components/ui/Button';

const JobPostings = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">Active Job Postings</h3>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <span>Frontend Developer - IT Dept (3 Openings)</span>
          <Button size="sm">Edit</Button>
        </li>
        <li className="flex justify-between items-center">
          <span>HR Executive - HR Dept (1 Opening)</span>
          <Button size="sm">Edit</Button>
        </li>
      </ul>
      <Button className="mt-4">Add New Job Posting</Button>
    </div>
  );
};

export default JobPostings;
