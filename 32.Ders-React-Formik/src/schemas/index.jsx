import * as yup from "yup";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Lütfen minumum 5 karakter giriniz")
    .matches(passwordRegex, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
  usurname: yup
    .string()
    .min(3, "Kullanıcı adı minimum 3 karakter olmalıdır.")
    .required("Kullanıcı adı zorunludur."),
  university: yup
    .string()
    .oneOf(["bogazici", "gsü", "odtü", "itü"], "Lütfen üniversitenizi")
    .required("Üniversite seçmek zorunlu"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
