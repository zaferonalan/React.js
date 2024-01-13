import { useField } from "formik";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
