import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import StatsContainer from "../../components/stats/StatsContainer";
import ChartContainer from "../../components/stats/ChartContainer";
import Loading from "../../components/Loading";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) return <Loading center />;

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};

export default Stats;
