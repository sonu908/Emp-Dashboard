import { Link } from "react-router-dom";
import imageHead from "../assets/LogoMain.png";

function Home() {
  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto min-h-[90px] min-w-[90px] mt-[100px]"
            src={imageHead}
            alt="GreendzineTechnologies"
          />
          <h3 className="mt-10 text-center text-xl text-lime-600 leading-9 tracking-tight">
            We are Electric{" "}
          </h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="E-mail"
                  style={{
                    background: "rgba(31, 25, 25, 0.4)",
                    boxShadow:
                      "inset 0px 3px 3px rgba(255, 253, 253, 0.25), 3px 3px 3px rgba(74, 73, 73, 0.28)",
                  }}
                  className="block w-full h-[42px] rounded-full border-0 p-5"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  style={{
                    background: "rgba(31, 25, 25, 0.4)",
                    boxShadow:
                      "inset 0px 3px 3px rgba(255, 253, 253, 0.25), 3px 3px 3px rgba(74, 73, 73, 0.28)",
                  }}
                  className="block w-full h-[42px] rounded-full border-0 p-5"
                />
              </div>
            </div>

            <div>
              <Link to="/dash">
                <button
                  type="submit"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 255, 37, 0.5) 0%, rgba(0, 0, 0, 1) 100%, rgba(54, 165, 70, 0.5) 100%)",
                    backgroundRepeat: "no-repeat",
                    padding: "0",
                    boxShadow:
                      "inset 0px 3px 3px rgba(255, 253, 253, 0.25), 3px 3px 3px rgba(74, 73, 73, 0.28)",
                  }}
                  className="flex w-full justify-center min-w-[238px] h-[42px] rounded-full border-0 text-white"
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="text-sm text-center">
              <a href="#" className="font-semibold text-lime-600">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
