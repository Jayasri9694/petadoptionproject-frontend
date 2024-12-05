
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <p> Dont have an account? <a href="/signup">Sign up</a>
        </p>
      <p>Forgot your password? <a href="/reset-password">Reset Password</a>
      </p>
    <p> <a href="/">Back to Home</a>
    </p>
  
      
    </div>
  );
}

export default LoginPage;
