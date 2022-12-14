import React from "react";
import Carsnew from "./Carsnew";

const InputValueCar = ({
  factorynew,
  inputValue,
  checkedM5,
  checkedM3,
  checked7Series,
}) => {
  return (
    <>
      {factorynew
        .filter((factorynew) => {
          if (
            inputValue === "" &&
            !checkedM5 &&
            inputValue === "" &&
            !checkedM3 &&
            inputValue === "" &&
            !checked7Series
          ) {
            return factorynew;
          }
          if (
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checked7Series
          ) {
            return factorynew;
          }
          if (
            checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return factorynew.model === "BMW M5";
          }
          if (
            checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return factorynew.model === "BMW M3";
          }
          if (
            !checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return factorynew.model === "BMW 7 Series";
          }
          if (
            checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return (
              factorynew.model === "BMW M5" || factorynew.model === "BMW M3"
            );
          }
          if (
            !checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return (
              factorynew.model === "BMW 7 Series" ||
              factorynew.model === "BMW M3"
            );
          }
          if (
            checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            !checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return (
              factorynew.model === "BMW 7 Series" ||
              factorynew.model === "BMW M5"
            );
          }
          if (
            checkedM5 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checkedM3 &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()) &&
            checked7Series &&
            factorynew.title
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return (
              factorynew.model === "BMW M3" ||
              factorynew.model === "BMW M5" ||
              factorynew.model === "BMW 7 Series"
            );
          }

          return false;
        })
        .map((factorynew) => (
          <Carsnew factorynew={factorynew} key={factorynew.id} />
        ))}
    </>
  );
};

export default InputValueCar;
