import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Signup.css"; // Signup.css dosyasını import ediyoruz

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Kullanıcı adı en az 3 karakter olmalıdır")
        .required("Kullanıcı adı zorunludur"),
      password: Yup.string()
        .min(6, "Şifre en az 6 karakter olmalıdır")
        .required("Şifre zorunludur"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
        .required("Şifre tekrarı zorunludur"),
    }),
    onSubmit: (values) => {
      console.log("Kayıt Başarılı:", values);
    },
  });

  return (
    <div className="signup-page">
      <Container className="py-5">
        <Row className="justify-content-center my-4">
          <Col xs={12} md={8} lg={6} xl={5}>
            <Card className="signup-card shadow-lg">
              <Card.Body>
                <div className="signup-header text-center mb-4">
                  <h2>Kayıt Ol</h2>
                  <p>Hesabınızı oluşturun</p>
                </div>

                <Form onSubmit={formik.handleSubmit} className="signup-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Kullanıcı Adı</Form.Label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <Form.Control
                        type="text"
                        placeholder="Kullanıcı Adı"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                    </div>
                    {formik.touched.username && formik.errors.username ? (
                      <div className="error-message">{formik.errors.username}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Şifre</Form.Label>
                    <div className="input-with-icon">
                      <FaLock className="input-icon" />
                      <Form.Control
                        type="password"
                        placeholder="Şifre"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error-message">{formik.errors.password}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Şifre Tekrar</Form.Label>
                    <div className="input-with-icon">
                      <FaLock className="input-icon" />
                      <Form.Control
                        type="password"
                        placeholder="Şifre Tekrar"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div className="error-message">{formik.errors.confirmPassword}</div>
                    ) : null}
                  </Form.Group>

                  <Button type="submit" className="signup-button w-100 mb-3">
                    Kayıt Ol
                  </Button>
                </Form>

                <p className="signup-link text-center mt-3">
                  Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;