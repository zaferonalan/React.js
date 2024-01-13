import { useField } from "formik";

function CustomCeheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCeheckbox;
