import { useState, useRef } from "react";
import { DemoOne } from "../components/designerProfile";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Users, Briefcase, Award, File } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "500+", label: "Expert Designers" },
  { icon: Briefcase, value: "2,400+", label: "Projects Completed" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export function Waitlist() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="min-h-dvh w-dvw flex flex-col justify-center items-center gap-20 mt-[10%]">
      <motion.div
        className="flex flex-row gap-3 bg-green-100 p-2 rounded-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <Sparkles className="stroke-green-800" />
        <div className="text-green-800 text-sm">Trusted by 500+ companies</div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 justify-center md:min-w-6xl  md:px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="group flex flex-col items-center gap-5 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-wrap p-4 bg-green-100 rounded-3xl">
              <stat.icon className="w-6 h-6 stroke-black group-hover:stroke-green-600" />
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <p className="text-semibold text-2xl">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div className="text-5xl text-bold flex gap-5">
          <div className="text-black">Welcome</div>
          <div className="text-green-500">Dreamer !!!</div>
        </div>
        <div className="text-center text-l">
          Connect with talented designers who can bring your vision to life.
          Browse profiles, <br />
          review portfolios, and start your next project today.
        </div>
      </div>

      <div className="w-[90dvw] gap-7 flex flex-col">
        <div className="flex justify-between items-baseline w-[87dvw] ">
            <h1 className="text-5xl text-center">Our Top Designers : </h1>
            <span onClick={() => navigate("/designerList")} className="text-green-500 hover:cursor-pointer"> See More </span>
        </div>
        <DemoOne />
      </div>
      <div className="w-[60%] rounded-2xl shadow-md space-y-10 p-7">
        <div className="text-3xl">Project Detail / Inspiration</div>
        <div className="text-xl">
          Tell us about your design needs or upload relevant files to get
          started with a perfect match.
        </div>
        <textarea
          className="border w-full h-[] shadow-md h-40 p-3 rounded-xl"
          placeholder="Please Describe your Project or request"
        ></textarea>

        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUploadClick}
              className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-[#22C55E] hover:bg-[#22C55E]/5 transition-all flex items-center justify-center gap-2 group"
            >
              <File className="w-5 h-5 text-gray-600 group-hover:text-[#22C55E] transition-colors" />
              <span className="text-gray-700 group-hover:text-[#22C55E] transition-colors">
                Attach File
              </span>
            </motion.button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>
          <Button variant="default" className="bg-green-500 text-white hover:cursor-pointer">Submit</Button>
        </div>
        {file && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-[#22C55E]/5 border border-[#22C55E]/20 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#22C55E]/10 rounded-lg">
                <File className="w-5 h-5 text-[#22C55E]" />
              </div>
              <span className="text-gray-700">{file.name}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setFile(null)}
              className="text-gray-500 hover:text-red-500 transition-colors text-xl"
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </div>
      <footer className="flex flex-col items-center w-dvw border-t pt-8 mt-8">
            <div className="flex flex-row justify-between w-[90%]">
                <span>Thank You for visiting us. For help do feel free to contact</span>
                <span onClick={()=>navigate('/contact')} className="hover:cursor-pointer text-green-400">Contact</span>
            </div>
            <span className="text-muted-foreground border-t pt-8 mt-8 text-center">© 2025 sewna. All rights reserved.</span>
      </footer>
    </div>
  );
}
