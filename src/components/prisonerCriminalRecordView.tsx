import React from "react";
import editIcon from "../assets/icons/edit.png";

interface Props {
  crime: string;
  dateOftheCrime: string;
  numberOfMurders: number;
  crimeType:
    | "Theft"
    | "Vandalism"
    | "Forgery"
    | "Bribery and Corruption"
    | "Cybercrime"
    | "Assault"
    | "Burglary"
    | "Robbery"
    | "Drug Trafficking"
    | "Illegal Arms Dealing"
    | "Money Laundering"
    | "Domestic Violence"
    | "Murder"
    | "Kidnapping"
    | "Human Trafficking"
    | "Sexual Assault"
    | "Arson"
    | "Terrorism"
    | "Homicide";
  crimeLocation: string;
  placeOfArrest: string;
  arrestingOfficer: string;
  caseNumber: string;
  courtName: string;
  crimeDescription: string;
}
export const PrisonerCriminalRecordView: React.FC<{ data: Props }> = ({
  data,
}) => {
  return (
    <div className="flex flex-col grow gap-1 bg-white rounded-3xl p-5 h-fit relative">
      {Object.entries(data).map(([key, value]) => (
        <p className="text-sm" key={key}>
          {key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}{" "}
          : {value instanceof Date ? value.toDateString() : value}
        </p>
      ))}
      <button className="absolute top-2 right-0 p-3 rounded hover:bg-gray-100 transition cursor-pointer">
        <img src={editIcon} alt="edit icon" className="w-5 h-5" />
      </button>
    </div>
  );
};
