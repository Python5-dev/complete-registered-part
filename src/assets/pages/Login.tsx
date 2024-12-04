import { useFormik } from 'formik';
import { loginSchema } from "../schemas";

const Login = () => {
  const initialValues = {
    usernameOrEmail: "",
    password: "",
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  return (
    <div>
      <div className="screenMiddleDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Login</h2>

            <div>
              <label htmlFor="email" className="formLabel">
                Email Address
              </label>
              <input
                type="text"
                name="usernameOrEmail"
                value={values.usernameOrEmail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.usernameOrEmail && touched.usernameOrEmail ? <span className="formError">{errors.usernameOrEmail}</span> : null}
            <div className="my-6">
              <label htmlFor="password" className="formLabel">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password ? <span className="formError">{errors.password}</span> : null}
            </div>

            <button type="submit" className="formButton">
              Login
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
