// Interviews.jsx
import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, CardContent } from "../../Components/ui/Card";

const Calender = () => {
  const [events, setEvents] = useState([
    { title: "Interview: John Doe (with Alice)", date: "2025-09-20" },
    { title: "Interview: Jane Smith (with Bob)", date: "2025-09-21" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    candidate: "",
    interviewer: "",
    dateTime: "",
  });

  const candidates = ["John Doe", "Jane Smith", "Mike Johnson"];
  const interviewers = ["Alice", "Bob", "Charlie"];

  const modalRef = useRef();

  // Open modal with clicked date
  const handleDateClick = (info) => {
    setFormData({
      candidate: "",
      interviewer: "",
      dateTime: info.dateStr, // store clicked date
    });
    setIsModalOpen(true);
  };

  const handleSaveInterview = () => {
    if (!formData.candidate || !formData.interviewer || !formData.dateTime) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      title: `Interview: ${formData.candidate} (with ${formData.interviewer})`,
      date: formData.dateTime,
    };

    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  // Click outside modal closes it
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  return (
    <Card>
      <h3 className="text-lg font-bold mb-2">Interview Calendar</h3>
      <CardContent>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="600px"
        />
      </CardContent>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-96 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">Schedule Interview</h2>

            {/* Candidate Dropdown */}
            <label className="block mb-2">Candidate</label>
            <select
              className="w-full border rounded p-2 mb-4"
              value={formData.candidate}
              onChange={(e) =>
                setFormData({ ...formData, candidate: e.target.value })
              }
            >
              <option value="">Select candidate</option>
              {candidates.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Interviewer Dropdown */}
            <label className="block mb-2">Interviewer</label>
            <select
              className="w-full border rounded p-2 mb-4"
              value={formData.interviewer}
              onChange={(e) =>
                setFormData({ ...formData, interviewer: e.target.value })
              }
            >
              <option value="">Select interviewer</option>
              {interviewers.map((i, idx) => (
                <option key={idx} value={i}>
                  {i}
                </option>
              ))}
            </select>

            {/* Date (locked to clicked day) */}
            <label className="block mb-2">Date</label>
            <input
              type="text"
              className="w-full border rounded p-2 mb-4 bg-gray-100 cursor-not-allowed"
              value={formData.dateTime}
              readOnly
            />

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveInterview}
                className="px-4 py-2 bg-purple-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
export default Calender;
