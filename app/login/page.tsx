import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <main className="bg-white h-screen w-full flex justify-center items-center py-12">
      <div className="w-max h-full max-w-[1400px] flex flex-col justify-start items-start ">
        <Link href="/" className="flex justify-start items-center gap-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-normal font-bold w-[30px] h-[30px]"
          />
          <span className="text-normal font-bold text-lg">Home</span>
        </Link>
        <LoginForm />
        <section className="self-center flex flex-col justify-center items-center gap-2 text-normal text-md">
          <Link href={"/forget"} className="text-md text-blue font-bold">
            Forget Password?
          </Link>
          <span>
            Don&apos;t have an account yet?{" "}
            <Link href={"/register"} className="text-md text-blue font-bold">
              register
            </Link>
          </span>
        </section>
      </div>
    </main>
  );
}
