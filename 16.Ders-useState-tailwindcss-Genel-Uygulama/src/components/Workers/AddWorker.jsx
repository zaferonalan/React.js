/* eslint-disable react/prop-types */
import { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

const AddWorker = ({ setWorkers }) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();
  const myForm = useRef();

  const minumumWage = 5000;
  const addWorkerHandler = (e) => {
    console.log(myForm.current.className);
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz",
      });
      return;
    }
    if (+enteredWage < minumumWage) {
      setError({
        title: "Maaş Alanı Zorunludur",
        message: `Lütfen ${minumumWage} degerinden büyük bir maaş değeri giriniz`,
      });
      return;
    }
    setEnteredWorkerName("");
    setEnteredWage("");

    setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    console.log(enteredWorkerName, enteredWage);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form
          className="flex flex-col gap-y-2"
          onSubmit={addWorkerHandler}
          ref={myForm}
        >
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border py-2"
            id="name"
            placeholder="Çalışan İsmi Yazınız."
            onChange={(e) => {
              setEnteredWorkerName(e.target.value);
            }}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border py-2"
            id="wage"
            placeholder="Maaş Giriniz."
            onChange={(e) => {
              setEnteredWage(e.target.value);
            }}
            value={enteredWage}
          />
          <Button type="submit" className="mt-2">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>

    // <>
    //   {error && <ErrorModal onConfirm={errorHandler} error={error} />}
    //   <Card className="mt-10">
    //     <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
    //       <label htmlFor="name" className="font-medium">
    //         Çalışan İsmi
    //       </label>
    //       <input
    //         type="text"
    //         className="max-w-[40rem] w-full mx-auto border py-2"
    //         id="name"
    //         placeholder="Çalışan İsmi Yazınız."
    //         onChange={(e) => {
    //           setEnteredWorkerName(e.target.value);
    //         }}
    //         value={enteredWorkerName}
    //       />
    //       <label htmlFor="wage" className="font-medium">
    //         Maaş Miktarı
    //       </label>
    //       <input
    //         type="number"
    //         className="max-w-[40rem] w-full mx-auto border py-2"
    //         id="wage"
    //         placeholder="Maaş Giriniz."
    //         onChange={(e) => {
    //           setEnteredWage(e.target.value);
    //         }}
    //         value={enteredWage}
    //       />
    //       <Button type="submit" className="mt-2">
    //         Ekle
    //       </Button>
    //     </form>
    //   </Card>
    // </>

    // <Wrapper>
    //   {error && <ErrorModal onConfirm={errorHandler} error={error} />}
    //   <Card className="mt-10">
    //     <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
    //       <label htmlFor="name" className="font-medium">
    //         Çalışan İsmi
    //       </label>
    //       <input
    //         type="text"
    //         className="max-w-[40rem] w-full mx-auto border py-2"
    //         id="name"
    //         placeholder="Çalışan İsmi Yazınız."
    //         onChange={(e) => {
    //           setEnteredWorkerName(e.target.value);
    //         }}
    //         value={enteredWorkerName}
    //       />
    //       <label htmlFor="wage" className="font-medium">
    //         Maaş Miktarı
    //       </label>
    //       <input
    //         type="number"
    //         className="max-w-[40rem] w-full mx-auto border py-2"
    //         id="wage"
    //         placeholder="Maaş Giriniz."
    //         onChange={(e) => {
    //           setEnteredWage(e.target.value);
    //         }}
    //         value={enteredWage}
    //       />
    //       <Button type="submit" className="mt-2">
    //         Ekle
    //       </Button>
    //     </form>
    //   </Card>
    // </Wrapper>
  );
};

export default AddWorker;
