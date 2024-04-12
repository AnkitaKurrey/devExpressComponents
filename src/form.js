import React, { useState } from "react";
import "devextreme/dist/css/dx.light.css";
import { Autocomplete } from "devextreme-react/autocomplete";
import {
  Form,
  GroupItem,
  SimpleItem,
  TabPanelOptions,
  TabbedItem,
  Tab,
  RequiredRule,
  EmailRule,
  PatternRule,
} from "devextreme-react/form";

const SubmitLeadForm = () => {
  const [bankName, setbankName] = useState("");
  const handleBankNameChange =
    ((e) => {
      setbankName(e.value);
    },
    []);
  const [propertyName, setPropertyName] = useState("");
  const handleProperyNameChange =
    ((e) => {
      setPropertyName(e.value);
    },
    []);
  const noDigitsOrSpecialPattern = /^[^\d\W]+$/;
  const noSpecialOrAlphabetsPattern = /^[0-9]+$/;
  const indianPhoneEditorOptions = {
    mask: "+91 (000) 000-0000",
    valueChangeEvent: "keydown",
    maskRules: {
      0: /[0-9]/,
    },
    maskInvalidMessage: "The phone must have a correct Indian phone format",
  };
  const nameEditorOptions = { valueChangeEvent: "keyup" };
  const phonePattern = /^[6-9]\d{9}$/;
  const data = ["SBI", "ICICI", "HDFC", "IDBI", "KOTAK"];
  const property = [
    "First Property",
    "Second Property",
    "Third Property",
    "Fourth Property",
  ];

  return (
    <div className="App">
      <Form id="form" labelLocation="top">
        <GroupItem caption="Primary Applicant"></GroupItem>
        <SimpleItem
          name="First Name"
          dataField="FirstName"
          isRequired={true}
          editorOptions={nameEditorOptions}
          editorType="dxTextBox"
        >
          <PatternRule
            message="First name should contain alphabets only"
            pattern={noDigitsOrSpecialPattern}
          />
        </SimpleItem>

        <SimpleItem dataField="LastName" editorOptions={nameEditorOptions}>
          <PatternRule
            message="Last name should contain alphabets only"
            pattern={noDigitsOrSpecialPattern}
          />
        </SimpleItem>

        <SimpleItem
          dataField="PhoneNumber"
          isRequired={true}
          editorOptions={indianPhoneEditorOptions}
        >
          <PatternRule
            message="The phone must have a correct format"
            pattern={phonePattern}
          />
          <RequiredRule message="Phone number is required" />
        </SimpleItem>

        <SimpleItem dataField="Email" editorOptions={nameEditorOptions}>
          <EmailRule message="Email is invalid" />
        </SimpleItem>
        {/* toggle */}
        <GroupItem caption="Co-Applicant"></GroupItem>
        <SimpleItem
          dataField="Co-ApplicantFirstName"
          isRequired={true}
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="First name should contain alphabets only"
            pattern={noDigitsOrSpecialPattern}
          />
        </SimpleItem>
        <SimpleItem
          dataField="Co-ApplicantLastName"
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="Last name should contain alphabets only"
            pattern={noDigitsOrSpecialPattern}
          />
        </SimpleItem>
        <SimpleItem
          dataField="Co-ApplicantPhoneNumber"
          isRequired={true}
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="The phone must have a correct format"
            pattern={phonePattern}
          />
        </SimpleItem>
        <SimpleItem
          dataField="Co-ApplicantEmail"
          editorOptions={nameEditorOptions}
        >
          <EmailRule message="Email is invalid" />
        </SimpleItem>
        <GroupItem caption="Property Info"></GroupItem>
        <SimpleItem
          dataField="PropertyName"
          isRequired={true}
          editorOptions={nameEditorOptions}
        >
          <Autocomplete
            dataSource={property}
            value={propertyName}
            onValueChanged={handleProperyNameChange}
            placeholder="Property name"
          />
        </SimpleItem>
        <SimpleItem
          dataField="ApproxPropertySize(sqft)"
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="Approx Property Size (sqft) should contain numbers only"
            pattern={noSpecialOrAlphabetsPattern}
          />
        </SimpleItem>
        <SimpleItem
          dataField="ApproximatePropertyValue"
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="Approximate Property Value should contain numbers only"
            pattern={noSpecialOrAlphabetsPattern}
          />
        </SimpleItem>
        <GroupItem caption="Primary Applicant Details"></GroupItem>
        <TabbedItem>
          <TabPanelOptions deferRendering={false} />
          <Tab title="Salaried">
            <SimpleItem
              cssClass="SimpleItem"
              dataField="GrossSalaryPerMonth(Before Taxes)"
              isRequired={true}
              editorOptions={nameEditorOptions}
            >
              <PatternRule
                message="Gross Salary Per Month(Before Taxes) should contain numbers only"
                pattern={noSpecialOrAlphabetsPattern}
              />
            </SimpleItem>
            <SimpleItem
              dataField="EmployerName"
              editorOptions={nameEditorOptions}
            >
              <PatternRule
                message="Employer name should contain alphabets only"
                pattern={noDigitsOrSpecialPattern}
              />
            </SimpleItem>

            <SimpleItem dataField="Bank">
              <Autocomplete
                dataSource={data}
                value={bankName}
                onValueChanged={handleBankNameChange}
                placeholder="Bank name"
              />
            </SimpleItem>
            <SimpleItem
              dataField="AverageAdditionalIncomePerMonth"
              editorOptions={nameEditorOptions}
            >
              <PatternRule
                message="Average Additional Income Per Month should contain numbers only"
                pattern={noSpecialOrAlphabetsPattern}
              />
            </SimpleItem>
            <SimpleItem
              dataField="AverageMonthlyObligations(Other EMIs/Month)"
              editorOptions={nameEditorOptions}
            >
              <PatternRule
                message="Average Monthly Obligations(Other EMIs/Month) should contain numbers only"
                pattern={noSpecialOrAlphabetsPattern}
              />
            </SimpleItem>
          </Tab>
          <Tab title="Self-Employed">
            <TabbedItem>
              <TabPanelOptions deferRendering={false}/>
              <SimpleItem>Do you file income tax returns?</SimpleItem>
              <Tab title="Yes">
                <SimpleItem
                  dataField="AverageProfit(Last 12 Months)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Profit(Last 12 Months) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageGSTTurnover(Last 12 Months)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average GST Turnover(Last 12 Months) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageBankBalance(Last 12 Months)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Bank Balance(Last 12 Months) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageAdditionalIncomePerMonth"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Additional Income Per Month should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageMonthlyObligations(Other EMIs/Month)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Monthly Obligations(Other EMIs/Month) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
              </Tab>
              <Tab title="No">
                <SimpleItem
                  dataField="AverageGSTTurnover(Last 12 Months)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average GST Turnover(Last 12 Months) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageBankBalance(Last 12 Months)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Bank Balance(Last 12 Months) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageAdditionalIncomePerMonth"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Additional Income  PerMonth should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
                <SimpleItem
                  dataField="AverageMonthlyObligations(Other EMIs/Month)"
                  isRequired={true}
                  editorOptions={nameEditorOptions}
                >
                  <PatternRule
                    message="Average Monthly Obligations(Other EMIs/Month) should contain numbers only"
                    pattern={noSpecialOrAlphabetsPattern}
                  />
                </SimpleItem>
              </Tab>
            </TabbedItem>
          </Tab>
        </TabbedItem>
        <GroupItem caption="Loan Details"></GroupItem>
        <SimpleItem
          dataField="DesiredAmount"
          isRequired={true}
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="Desired Amount should contain numbers only"
            pattern={noSpecialOrAlphabetsPattern}
          />
        </SimpleItem>
        <SimpleItem
          dataField="DesiredTenure(in years)"
          isRequired={true}
          editorOptions={nameEditorOptions}
        >
          <PatternRule
            message="Desired Tenure (in years) should contain numbers only"
            pattern={noSpecialOrAlphabetsPattern}
          />
        </SimpleItem>
      </Form>
    </div>
  );
};

export default SubmitLeadForm;
