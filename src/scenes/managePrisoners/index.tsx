import Footerbase from "../../components/footerbase";
import HeaderView from "../../components/headerView";
import MainManu from "../../components/mainMenu";
import ModelViewer from "../../components/modelViewer";
import {
  prisonerInfoProps,
  PrisonerProfileSummery,
} from "../../components/prisonerProfileSummery";
import { PrisonerProfileView } from "../../components/prisonerProfilesView";

export const ManagePrisonersScreen = () => {
  const prisonerData: prisonerInfoProps = {
    prisonerCode: "PR123456",
    fullName: "Kamal Perera",
    nickName: "Kama",
    dob: new Date("1990-05-10"),
    old: 34,
    nic: "902345678V",
    sex: "Male",
    nationality: "Sri Lankan",
    address: "Colombo, Sri Lanka",
    job: "Electrician",
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainManu />
        <div className="flex flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <PrisonerProfileSummery data={prisonerData} />
            <ModelViewer
              model="prisoner"
              enableAddNewPrisonerButton={true}
              enableSwitchGenderButton={true}
            />
          </div>
          <PrisonerProfileView />
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
