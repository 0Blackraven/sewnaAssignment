import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Join() {
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [activateSubmit, setActivateSubmit] = useState(false);
    const [form, setForm] = useState({ email: "", password: "", fullName: "" });
    const [_submissions, setSubmissions] = useState<{ email: string; password: string; fullName: string }[]>([]);

    // State to hold the temporary value of the confirmation field for comparison
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Assume match initially

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        // 1. Update form state for main password
        if (id === "password") {
            setForm({ ...form, password: value });
        }

        // 2. Update local state for confirmation password
        if (id === "confirmPass") {
            setConfirmPassword(value);
        }

        // 3. Comparison Logic (uses updated value for current field, and state for the other)
        const mainPass = id === "password" ? value : form.password;
        const confPass = id === "confirmPass" ? value : confirmPassword;

        const match = mainPass === confPass;
        setPasswordsMatch(match);

        // Update the submit button status
        setActivateSubmit(match);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent form submission if passwords don't match (without displaying an alert)
        if (!passwordsMatch) {
            return;
        }

        setSubmissions((arr) => [...arr, form]);
        setForm({ email: "", password: "", fullName: "" });
        setConfirmPassword("");
        setActivateSubmit(false);
    }

    return (
        <div className="h-dvh flex justify-center items-center">
            <Card className="w-[50%] min-h-[50%]">
                <CardHeader>
                    <h1>So U turn dreams to reality !!!</h1>
                    <h5>Hop In Onboard</h5>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor="fullName">
                            Enter Full Name
                        </Label>
                        <Input
                            id="fullName"
                            placeholder="John Doe"
                            value={form.fullName}
                            onChange={handleChange}
                            required />

                        <Label htmlFor="email">
                            Enter Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="johndoe@xyz.com"
                            value={form.email}
                            onChange={handleChange}
                            required />

                        <Label htmlFor="password">
                            Enter Password
                        </Label>
                        <div className="flex items-center border-2 rounded-sm overflow-hidden">
                            <Input
                                id="password"
                                type={passwordVisibility ? "text" : "password"}
                                value={form.password}
                                onChange={handlePasswordInput}
                                className="grow border-0 focus:outline-none px-3 py-2 focus-visible:outline-none focus-visible:ring-0"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                className="flex items-center justify-center px-3 text-gray-600 hover:text-gray-900"
                                aria-label={passwordVisibility ? "Hide password" : "Show password"}
                            >
                                {passwordVisibility ? <Eye /> : <EyeOff />}
                            </button>
                        </div>


                        <Label htmlFor="confirmPass">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPass"
                            type="password"
                            value={confirmPassword}
                            onChange={handlePasswordInput}
                            required />
                        <Button
                            type="submit"
                            disabled={!activateSubmit}
                        >
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p>Already a wizard <span onClick={() => navigate("/login")} className="hover:cursor-pointer">Login</span>  Fast !!</p>
                </CardFooter>
            </Card>
        </div>
    )
}