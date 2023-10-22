import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");

  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value);
  };

  const wageChangeHandler = (e) => {
    setEnteredWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    console.log(enteredWorkerName, enteredWage);
  };

  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border py-2"
          id="name"
          placeholder="Çalışan İsmi Yazınız."
          onChange={workerNameChangeHandler}
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border py-2"
          id="wage"
          placeholder="Maaş Giriniz."
          onChange={wageChangeHandler}
        />
        <Button type="submit" className="mt-2">
          Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;
