import React from "react";
import eyeIcon from "../assets/icons/eye.png";
import alertIcon from "../assets/icons/alert.png";

interface AppointmentViewProps {
  appointmentId: string;
  visitorFullName: string;
  visitorNic: string;
  prisonerCode: string;
  prisonerName: string;
  appointmentDate: Date;
  appointmentTime: string;
  purposeOfVisit: "Family" | "Lawyer" | "Official" | "Medical";
  approvedByOfficer: string;
  status: "Pending" | "Approved" | "Rejected" | "Completed" | "Cancelled";
  createdAt: string;
  updateAt: string;
  warning_alert: boolean;
}

interface Props {
  data: AppointmentViewProps;
  onViewAppointment?: (appointmentId: string) => void;
}

export const AppointmentView: React.FC<Props> = ({
  data,
  onViewAppointment,
}) => {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-md relative">
      <div className="flex flex-col gap-1">
        {Object.entries(data)
          .filter(([key]) => key !== "warning_alert")
          .map(([key, value]) => (
            <p className="text-sm text-gray-700" key={key}>
              <span className="font-semibold">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                :
              </span>{" "}
              {value instanceof Date ? value.toDateString() : String(value)}
            </p>
          ))}
      </div>

      <div className="absolute top-5 right-5">
        <button
          onClick={() => onViewAppointment?.(data.appointmentId)}
          aria-label={`View appointment ${data.appointmentId}`}
          className="p-2 rounded hover:bg-gray-100 transition cursor-pointer"
        >
          <img src={eyeIcon} alt="view icon" className="w-5 h-5" />
        </button>
      </div>
      {data.warning_alert && (
        <div className="absolute top-16 right-5 p-2">
          <img src={alertIcon} alt="alert icon" className="w-5 h-5" />
        </div>
      )}

      <div className="absolute bottom-5 right-5 p-2">
        <span className="text-xs text-[#707070]">
          Appointment number: {data.appointmentId}
        </span>
      </div>
    </div>
  );
};
