import Footerbase from "../../components/footerbase";
import HeaderView from "../../components/headerView";
import MainMenu from "../../components/mainMenu";
import ModelViewer from "../../components/modelViewer";
import { PrisonerProfileSummery } from "../../components/prisonerProfileSummery";
import profileImg from "../../assets/images/Ashan-Prof.jpg";
import { PrisonerCriminalRecordView } from "../../components/prisonerCriminalRecordView";
import editIcon from "../../assets/icons/edit.png";
import { Navigate, useParams } from "react-router-dom";

export const ManagePrisonerProfileScreen = () => {
  const { prisonerCode } = useParams<{ prisonerCode: string }>();
  if (!prisonerCode) {
    return <Navigate to="/404" />;
  }
  console.log(prisonerCode);
  const criminalRecords = [
    {
      crime: "Robbery at City Mall",
      dateOftheCrime: "2024-12-20",
      numberOfMurders: 0,
      crimeType: "Robbery",
      crimeLocation: "Colombo City Mall, Colombo 03",
      placeOfArrest: "Colombo Fort Railway Station",
      arrestingOfficer: "Inspector Nimal Perera",
      caseNumber: "CASE20240123",
      courtName: "Colombo Magistrate Court",
      crimeDescription:
        "Suspect forcibly stole valuable items from multiple shops inside the mall.",
    },
    {
      crime: "Arson at Industrial Area",
      dateOftheCrime: "2023-11-10",
      numberOfMurders: 0,
      crimeType: "Arson",
      crimeLocation: "Biyagama Industrial Zone",
      placeOfArrest: "Near Kelaniya Bridge",
      arrestingOfficer: "Sergeant Ravi Fernando",
      caseNumber: "CASE20231110",
      courtName: "Gampaha High Court",
      crimeDescription:
        "Suspect intentionally set fire to multiple warehouses causing major property damage.",
    },
    {
      crime: "Kidnapping of Business Executive",
      dateOftheCrime: "2025-01-15",
      numberOfMurders: 0,
      crimeType: "Kidnapping",
      crimeLocation: "Rajagiriya",
      placeOfArrest: "Negombo Bus Stand",
      arrestingOfficer: "Chief Inspector Anura Silva",
      caseNumber: "CASE20250115",
      courtName: "Colombo High Court",
      crimeDescription:
        "Suspect abducted a business executive for ransom and kept him captive for 3 days.",
    },
    {
      crime: "Forgery of Land Documents",
      dateOftheCrime: "2022-06-05",
      numberOfMurders: 0,
      crimeType: "Forgery",
      crimeLocation: "Kandy",
      placeOfArrest: "Kandy Registrar Office",
      arrestingOfficer: "Officer Dilshan Madushanka",
      caseNumber: "CASE20220605",
      courtName: "Kandy District Court",
      crimeDescription:
        "Suspect forged property ownership documents to illegally claim land worth millions.",
    },
  ] as const;

  const prisonerInformation = {
    cellNumber: "313",
    arrestDate: "01-05-2025",
    sentenceStartDate: "01-06-2025",
    sentenceEndDate: "01-06-2025",
    releaseStatus: "Active",
  };

  const prisonerSummary = {
    numberOfcrimes: "02",
    numberOfMurders: "00",
    numberOfArrests: "01",
    gang: "_",
    nickName: "sudu",
  };

  const additionalInfo = {
    gangAffiliation: "_",
    medicalConditions: "_",
    notes: "_",
    createAt: "",
    updateAt: "",
  };

  const prisonerData = {
    prisonerCode,
    fullName: "Kamal Perera",
    nickName: "Kama",
    dob: new Date("1990-05-10"),
    old: 34,
    nic: "902345678V",
    sex: "Male",
    nationality: "Sri Lankan",
    address: "Colombo, Sri Lanka",
    job: "Electrician",
  } as const;

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainMenu />
        <div className="flex flex-col w-full mb-15">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <PrisonerProfileSummery
              data={prisonerData}
              img={profileImg}
              enableEditButton={true}
            />
            <ModelViewer model="prisoner" />
          </div>
          <div className="flex flex-col gap-2 h-fit p-2 xl:ps-10">
            <div className="flex flex-col gap-5 h-fit">
              <div className="flex gap-2 xl:gap-10 grow">
                <div className="flex flex-col gap-3 bg-white rounded-3xl shadow-xl w-2/3 h-fit p-5 relative">
                  <p className="text-2xl font-semibold">Prison Information</p>
                  <div className="flex flex-col gap-1">
                    {Object.entries(prisonerInformation).map(([key, value]) => (
                      <p className="text-sm" key={key}>
                        {formatKey(key)}: {value}
                      </p>
                    ))}
                  </div>
                  <button className="absolute bottom-3 right-2 p-3 rounded hover:bg-gray-100 transition cursor-pointer">
                    <img src={editIcon} alt="edit icon" className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-3 bg-white rounded-3xl shadow-xl w-1/3 h-fit p-5">
                  <p className="text-2xl font-semibold">Summary</p>
                  <div className="flex flex-col gap-1">
                    {Object.entries(prisonerSummary).map(([key, value]) => (
                      <p className="text-sm" key={key}>
                        {formatKey(key)}: {value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 grow bg-white rounded-3xl p-5 shadow-xl h-fit relative">
                <p className="text-2xl font-semibold">Additional Info</p>
                <button className="absolute top-5 right-5 p-3 rounded hover:bg-gray-100 transition cursor-pointer">
                  <img src={editIcon} alt="edit icon" className="w-5 h-5" />
                </button>
                <div className="flex flex-col gap-1">
                  {Object.entries(additionalInfo).map(([key, value]) => (
                    <p className="text-sm" key={key}>
                      {formatKey(key)}: {value}
                    </p>
                  ))}
                  <div className="absolute bottom-5 right-5">
                    <button className="bg-[#9EC6F3] text-white text-sm p-2 pe-5 ps-5 rounded-2xl cursor-pointer">
                      View Visitor History
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl font-semibold">
                  Criminal Records - ({criminalRecords.length})
                </p>
                {criminalRecords.map((record, index) => (
                  <PrisonerCriminalRecordView key={index} data={record} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
