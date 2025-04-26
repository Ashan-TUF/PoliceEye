import Footerbase from "../../components/footerbase";
import HeaderView from "../../components/headerView";
import MainMenu from "../../components/mainMenu";
import ModelViewer from "../../components/modelViewer";
import { PrisonerProfileSummery } from "../../components/prisonerProfileSummery";
import profileImg from "../../assets/images/Ashan-Prof.jpg";

export const ManagePrisonerProfileScreen = () => {
  const prisonerData = {
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
  } as const;
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainMenu />
        <div className="flex flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <PrisonerProfileSummery data={prisonerData} img={profileImg} />
            <ModelViewer model="prisoner" />
          </div>
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
