import Footerbase from "../../components/footerbase";
import HeaderView from "../../components/headerView";
import MainMenu from "../../components/mainMenu";
import alertIcon from "../../assets/icons/alert.png";
import { AppointmentView } from "../../components/appointmentView";

export const AppointmentsScreen = () => {
  const appointmentData = [
    {
      appointmentId: "12345",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
    {
      appointmentId: "36987",
      visitorFullName: "John Doe",
      visitorNic: "200123456V",
      prisonerCode: "P001",
      prisonerName: "Ashan Kavindu Kalupahana",
      appointmentDate: new Date(),
      appointmentTime: "10:00 AM",
      purposeOfVisit: "Family",
      approvedByOfficer: "Officer Smith",
      status: "Approved",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    },
  ] as const;

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col">
      <HeaderView />
      <div className="flex flex-1 overflow-y-auto pt-5 mb-16">
        <MainMenu />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center px-10 py-4">
            <p className="text-2xl font-semibold text-gray-800">Appointments</p>
            <button
              className="flex items-center gap-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-500 cursor-pointer shadow-md"
              aria-label="View warnings"
            >
              <span className="text-sm font-medium text-gray-800">
                Warnings
              </span>
              <img src={alertIcon} alt="Warning icon" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 w-full p-2 xl:ps-10 h-fit">
            {appointmentData.map((appointment) => (
              <AppointmentView
                key={appointment.visitorNic}
                data={appointment}
              />
            ))}
          </div>
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
