import ChartFunc from "./chart";
import DataGridFunc from "./dataGrid";
import SubmitLeadForm from "./form";
import PieChartFun from "./pieChart";

function App() {
  return (
    <>
      <div class="container">
        <div class="box">
          <PieChartFun />
        </div>
        <div class="box">
          <ChartFunc />
        </div>
      </div>
      <div class="box2">
        <DataGridFunc />
      </div>
      <div class="box3">SUBMIT LEAD FORM</div>
      <div class="box">
        <SubmitLeadForm/>
      </div>
    </>
  );
}

export default App;
