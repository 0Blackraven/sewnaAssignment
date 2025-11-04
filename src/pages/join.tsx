import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Join() {
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [activateSubmit, setActivateSubmit] = useState(false);
    const [form, setForm] = useState({ email: "", password: "", fullName: "" });
    const [_submissions, setSubmissions] = useState<{ email: string; password: string; fullName: string }[]>([]);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "password") {
            setForm({ ...form, password: value });
        }
        if (id === "confirmPass") {
            setConfirmPassword(value);
        }

        const mainPass = id === "password" ? value : form.password;
        const confPass = id === "confirmPass" ? value : confirmPassword;

        const match = mainPass === confPass;
        setPasswordsMatch(match);

        setActivateSubmit(match);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!passwordsMatch) {
            return;
        }

        setSubmissions((arr) => [...arr, form]);
        setForm({ email: "", password: "", fullName: "" });
        setConfirmPassword("");
        setActivateSubmit(false);
    };

    return (
        <div className="min-h-dvh flex justify-center items-center p-5">
            <div className="border border-green-300 shadow-2xl shadow-green-300 rounded-xl py-8">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10"
                >

                    <div className="max-w-md w-full mx-auto">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-8 flex flex-col justify-center items-center"
                        >
                            <span className="text-4xl text-gray-900 mb-3">
                                Turning dreams to reality
                            </span>
                            <span className="text-gray-600">
                                Hop in Onboard Wizard
                            </span>
                        </motion.div>
                        <motion.form
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-700">
                                    Enter Full Name
                                </label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        id="fullName"
                                        className="pl-12 h-12 border-2 border-gray-200 focus:border-[#22C55E] rounded-xl"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-700">
                                    Enter Email
                                </label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        id="email"
                                        className="pl-12 h-12 border-2 border-gray-200 focus:border-[#22C55E] rounded-xl"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <Input
                                        type={passwordVisibility ? 'text' : 'password'}
                                        value={form.password}
                                        onChange={handlePasswordInput}
                                        id="password"
                                        className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-[#22C55E] rounded-xl"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {passwordVisibility ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={handlePasswordInput}
                                        id="confirmPass"
                                        className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-[#22C55E] rounded-xl"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-end justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-[#22C55E] hover:text-[#16A34A] transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    disabled = {!activateSubmit}
                                    type="submit"
                                    className="w-full h-12 bg-linear-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#22C55E] text-white rounded-xl text-base shadow-lg"
                                >
                                    Sign Up
                                </Button>
                            </motion.div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="h-12 border-2 border-gray-200 rounded-xl hover:border-[#22C55E] transition-all flex items-center justify-center gap-2 p-6"
                                >
                                    <span className="text-gray-700">Google</span>
                                </motion.button>
                            </div>
                        </motion.form>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 text-center text-gray-600"
                        >
                            Already part of the crew?{' '}
                            <button
                                onClick={() => navigate('/login')}
                                className="text-[#22C55E] hover:text-[#16A34A] transition-colors"
                            >
                                Sign in
                            </button>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
