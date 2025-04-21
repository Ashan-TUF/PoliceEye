import HeaderView from "../../components/headerView";
import PieChart from "../../components/pieChart";
import  ModelViewer from "../../components/modelViewer";
import LatestNewsBar from "../../components/latestNewsBar";
import Footerbase from "../../components/footerbase";
import MainManu from "../../components/mainMenu";

const HomeScreen = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainManu />
        <div className="flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <PieChart />
            <ModelViewer model="policeman" />
          </div>
          <div className="h-fit p-2 xl:ps-10">
            <div className="rounded-4xl bg-white grow p-5 flex flex-col gap-5">
              <span className="text-sm">Latest News</span>
              <div className="grid grid-cols-1 gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <LatestNewsBar key={index} />
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
export default HomeScreen;
