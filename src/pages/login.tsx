import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardDescription } from "../components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

// export function Login() {
//     const navigate = useNavigate();
//     const [passwordVisibility, setPasswordVisibility] = useState(false);
//     const [form, setForm] = useState({ email: "", password: "" });
//     const [_submissions, setSubmissions] = useState<{ email: string; password: string }[]>([]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setForm({ ...form, [e.target.id]: e.target.value });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         setSubmissions((arr) => [...arr, form]);
//         setForm({ email: "", password: "" });
//     }

//     return (
//         <div className="h-dvh flex justify-center items-center">
//             <Card className="w-[50%] h-[65%]">
//                 <CardHeader className="font-semibold">
//                     Welcome Back wizard !!!
//                 </CardHeader>
//                 <CardDescription>
//                     Catch up from where u left
//                 </CardDescription>
//                 <CardContent className="flex flex-col items-center">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <Label htmlFor="email">
//                             Enter Email
//                         </Label>
//                         <div className="border-2 rounded-sm">
//                             <Input
//                                 id="email"
//                                 placeholder="johndoe@xyz.com"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="border-0" />
//                         </div>
//                         <div>
//                             <Label htmlFor="password">
//                                 Enter Password
//                             </Label>
//                             <div className="flex items-center border-2 rounded-sm overflow-hidden">
//                                 <Input
//                                     id="password"
//                                     type={passwordVisibility ? "text" : "password"}
//                                     value={form.password}
//                                     onChange={handleChange}
//                                     required
//                                     className="grow border-0 focus:outline-none px-3 py-2 focus-visible:outline-none focus-visible:ring-0" />
//                                 <button
//                                     type="button"
//                                     onClick={() => setPasswordVisibility(!passwordVisibility)}
//                                     className="flex items-center justify-center px-3 text-gray-600 hover:text-gray-900"
//                                 aria-label={passwordVisibility ? "Hide password" : "Show password"}
//                                 >
//                                     {passwordVisibility ? <Eye /> : <EyeOff />}
//                                 </button>
//                             </div>
//                         </div>
//                         <Button type="submit" variant="secondary">
//                             Sign In
//                         </Button>
//                     </form>
//                 </CardContent>
//                 <CardFooter>
//                     <p>New on this ship <span onClick={() => navigate("/join")} className="hover:cursor-pointer">Register</span> Fast !!</p>
//                 </CardFooter>
//             </Card>
//         </div>
//     )
// }

import { Chrome, Facebook, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";


export const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive(!isActive);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 font-montserrat"
      style={{
        background: "linear-gradient(to right, hsl(0,0%,89%), hsl(225,73%,88%))"
      }}
    >
      <div
        className={cn(
          "relative rounded-[30px] shadow-2xl overflow-hidden w-full max-w-[768px] min-h-[480px] transition-all duration-600",
          isActive && "active"
        )}
        // no color variables
      >
        {/* Sign In Form */}
        <div
          className={cn(
            "absolute top-0 h-full transition-all duration-600 ease-in-out",
            "left-0 w-1/2 z-[2]",
            isActive && "translate-x-full"
          )}
        >
          <form className="flex items-center justify-center flex-col px-10 h-full bg-[hsl(0,0%,100%)]">
            <h1 className="text-3xl font-bold mb-2 text-[hsl(258,59%,42%)]">Sign In</h1>
            <div className="flex gap-3 my-5">
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Chrome className="w-5 h-5" />
              </Button>
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>

            <span className="text-xs mb-4 text-[hsl(215.4,16.3%,46.9%)]">or use your email password</span>

            <Input
              type="email"
              placeholder="Email"
              className="my-2 px-4 py-3 text-sm rounded-lg w-full outline-none border-none bg-[hsl(240,5%,93%)]"
            />
            <Input
              type="password"
              placeholder="Password"
              className="my-2 px-4 py-3 text-sm rounded-lg w-full outline-none border-none bg-[hsl(240,5%,93%)]"
            />
            
            <a href="#" className="text-xs my-4 hover:underline text-[hsl(258,59%,35%)]">
              Forget Your Password?
            </a>

            <Button
              type="submit"
              className="font-semibold text-xs py-3 px-11 border border-none rounded-lg uppercase tracking-wide mt-2 transition-all
              bg-[hsl(258,59%,42%)] text-[hsl(0,0%,100%)] hover:bg-[hsl(258,59%,35%)]"
            >
              Sign In
            </Button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={cn(
            "absolute top-0 h-full transition-all duration-600 ease-in-out",
            "left-0 w-1/2 opacity-0 z-[1]",
            isActive && "translate-x-full opacity-100 z-[5] animate-fade-slide"
          )}
        >
          <form className="flex items-center justify-center flex-col px-10 h-full bg-[hsl(0,0%,100%)]">
            <h1 className="text-3xl font-bold mb-2 text-[hsl(258,59%,42%)]">Create Account</h1>
            <div className="flex gap-3 my-5">
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Chrome className="w-5 h-5" />
              </Button>
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button type="button" variant="outline" size="icon"
                className="w-10 h-10 rounded-[20%] border border-[hsl(214.3,31.8%,91.4%)] text-[hsl(258,59%,42%)] hover:bg-[hsl(258,47%,60%)] hover:text-[hsl(0,0%,100%)] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>

            <span className="text-xs mb-4 text-[hsl(215.4,16.3%,46.9%)]">or use your email for registration</span>

            <Input
              type="text"
              placeholder="Name"
              className="my-2 px-4 py-3 text-sm rounded-lg w-full outline-none border-none bg-[hsl(240,5%,93%)]"
            />
            <Input
              type="email"
              placeholder="Email"
              className="my-2 px-4 py-3 text-sm rounded-lg w-full outline-none border-none bg-[hsl(240,5%,93%)]"
            />
            <Input
              type="password"
              placeholder="Password"
              className="my-2 px-4 py-3 text-sm rounded-lg w-full outline-none border-none bg-[hsl(240,5%,93%)]"
            />

            <Button
              type="submit"
              className="font-semibold text-xs py-3 px-11 border border-none rounded-lg uppercase tracking-wide mt-2 transition-all
              bg-[hsl(258,59%,42%)] text-[hsl(0,0%,100%)] hover:bg-[hsl(258,59%,35%)]"
            >
              Sign Up
            </Button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={cn(
            "absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out z-[1000]",
            "rounded-tr-[150px] rounded-br-[100px]",
            isActive && "-translate-x-full rounded-tl-[150px] rounded-bl-[100px] rounded-tr-none rounded-br-none"
          )}
        >
          <div
            className={cn(
              "h-full relative -left-full w-[200%] transition-all duration-600 ease-in-out",
              "translate-x-0",
              isActive && "translate-x-1/2"
            )}
            style={{
              background: "linear-gradient(135deg, hsl(258,47%,60%), hsl(258,59%,42%))"
            }}
          >
            {/* Toggle Left Panel */}
            <div
              className={cn(
                "absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-600 ease-in-out",
                "-translate-x-[200%]",
                isActive && "translate-x-0"
              )}
            >
              <h1 className="text-3xl font-bold mb-4 text-[hsl(0,0%,100%)]">Welcome Back!</h1>
              <p className="text-sm leading-5 tracking-wide mb-5 text-[hsl(0,0%,100%)]">
                Enter your personal details to use all of site features
              </p>
              <Button
                type="button"
                onClick={handleToggle}
                variant="outline"
                className="bg-transparent border border-[hsl(0,0%,100%)] text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(258,59%,42%)] font-semibold text-xs py-3 px-11 rounded-lg uppercase tracking-wide transition-all"
              >
                Sign In
              </Button>
            </div>
            {/* Toggle Right Panel */}
            <div
              className={cn(
                "absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 right-0 transition-all duration-600 ease-in-out",
                "translate-x-0",
                isActive && "translate-x-[200%]"
              )}
            >
              <h1 className="text-3xl font-bold mb-4 text-[hsl(0,0%,100%)]">Hello, Friend!</h1>
              <p className="text-sm leading-5 tracking-wide mb-5 text-[hsl(0,0%,100%)]">
                Register with your personal details to use all of site features
              </p>
              <Button
                type="button"
                onClick={handleToggle}
                variant="outline"
                className="bg-transparent border border-[hsl(0,0%,100%)] text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(258,59%,42%)] font-semibold text-xs py-3 px-11 rounded-lg uppercase tracking-wide transition-all"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


