import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa"; // İkonları ekleyin
import "./Login.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Kullanıcı adı en az 3 karakter olmalıdır")
        .required("Kullanıcı adı zorunludur"),
      password: Yup.string()
        .min(6, "Şifre en az 6 karakter olmalıdır")
        .required("Şifre zorunludur"),
    }),
    onSubmit: (values) => {
      console.log("Giriş Başarılı:", values);
    },
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Giriş Yap</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Kullanıcı Adı</label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.username && formik.errors.username ? (
              <div className="error-message">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Şifre"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
        <p className="signup-link">
          Hesabınız yok mu? <Link to="/signup">Kayıt Ol</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;