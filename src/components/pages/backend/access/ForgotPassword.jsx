import { imgPath } from '@/components/helpers/functions-general';
import { ArrowLeft, CheckCircle2, Eye, EyeOff, MailCheck } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik'
import * as Yup from "Yup";
import { InputText } from '@/components/helpers/FormInputs';

const ForgotPassword = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
    const [success, setSuccess] = React.useState(false);
    React.useEffect(() => {
        function setThemeColor() {
          const html = document.querySelector("html");
          html.setAttribute("class", "");
          html.classList.add(theme);
          setTheme(localStorage.getItem("theme"));
        }
    
        setThemeColor();
      }, [theme]);

      const initVal = {
        user_email: "",

      };

      const yupSchema = Yup.object({
        user_email: Yup.string().required("Required").email("Invalid email"),
      });
  return (
    

    <main className="h-screen bg-primary center-all">
        <div className="login-main bg-secondary  max-w-[320px] w-full p-4 border-line border rounded-md">
            <div className="text-xl uppercase font-bold flex justify-center border-b-2 border-transparent hover:border-b-2 hover:border-line pb-3 mb-2">
              Zanerobe
            </div>
            
            {success ? (<div className="success-message mt-5">
                <MailCheck size={50} stroke='white' className='mx-auto'/>
                <p className="my-5">We have sent the instruction on how to resett your password</p>
                <Link to="/admin/login" className="text-center block hover:text-accent">Back To Login</Link>
            </div>) : (
             <Formik
             initialValues={initVal}
             validationSchema={yupSchema}
             onSubmit={async (values) => {
               console.log(values)
           }}
         >
           {(props) => {
             return (
   
               <Form>
            <h5 className="text-center">Forgot Password?</h5>
            <p className="mb-5 text-center">Enter your registered email to reset your password</p>
                
 
                <div className="input-wrap">
                    <InputText
                    label="Email"
                    type="email"
                    name="user_email"
                    className="!py-2">
                    </InputText>
                </div>
   

                <button className="btn btn-accent w-full center-all mt-5" onClick={() => setSuccess(true)}>Reset Password</button>

                <Link to="/admin/login" className='text-sm text-center block mt-5 hover:text-accent flex justify-center gap-3 items-center' ><ArrowLeft/> Go Back To Login</Link>
                </Form>
            );
          }}
          </Formik>
            )}

        </div>
    </main>
  )
}

export default ForgotPassword