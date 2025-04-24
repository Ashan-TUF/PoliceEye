export interface criminalRecordViewProps {
  crime: string;
  dateOftheCrime: Date;
  numberOfMurders: number;
  criminalCategory:
    | "Crimes Against Persons"
    | "Crimes Against Property"
    | "Drug-related Offences"
    | "White-Collar Crimes"
    | "Crimes Against the State"
    | "Traffic and Transport Offences"
    | "Environmental and Wildlife Crimes"
    | "Gender-based and Domestic Crimes"
    | "Public Order Offences";
  placeOfArrest: string;
  dateOfArrest: Date;
  dateOfRelease: Date;
  descriptionOfTheCrime: string;
}

export const CriminalRecordView: React.FC<{
  data: criminalRecordViewProps;
}> = ({ data }) => {
  return (
    <div className="flex flex-col gap-1 bg-white w-full rounded-2xl h-fit p-10">
      {Object.entries(data).map(([key, value]) => (
        <p className="text-sm" key={key}>
          {key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}{" "}
          : {value instanceof Date ? value.toDateString() : value}
        </p>
      ))}
    </div>
  );
};
