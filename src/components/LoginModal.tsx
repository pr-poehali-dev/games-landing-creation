
import { useState } from "react";
import { X, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика входа
    console.log("Вход:", formData);
    // После успешного входа
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md p-6 rounded-lg bg-epicfix-darkgray border border-epicfix-gray shadow-xl animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-epicfix-green flex items-center justify-center">
            <img src="https://cdn.poehali.dev/files/66777d96-7cbd-4f89-8e6f-96c53af6f6b3.png" alt="Epic Fix Logo" className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-white">Вход в аккаунт</h2>
          <p className="text-gray-400 mt-2">Войдите в свой аккаунт EpicFix</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="pl-10 bg-epicfix-gray border-epicfix-gray"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  className="pl-10 pr-10 bg-epicfix-gray border-epicfix-gray"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="rememberMe" 
                  checked={formData.rememberMe}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-epicfix-green"
                />
                <label 
                  htmlFor="rememberMe" 
                  className="text-sm font-medium text-gray-300 cursor-pointer"
                >
                  Запомнить меня
                </label>
              </div>
              <a href="#" className="text-sm text-epicfix-green hover:underline">
                Забыли пароль?
              </a>
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-epicfix-green hover:bg-epicfix-green/90 text-white py-2"
              >
                Войти
              </Button>
            </div>
            
            <div className="text-center text-sm text-gray-400 mt-4">
              <p>Нет аккаунта? <button type="button" onClick={onSwitchToRegister} className="text-epicfix-green hover:underline">Зарегистрироваться</button></p>
            </div>
          </div>
        </form>
        
        <div className="mt-6 pt-6 border-t border-epicfix-gray">
          <div className="flex items-center justify-center space-x-4">
            <button className="w-12 h-12 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#db4437] flex items-center justify-center hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m2 12 3.36-3.36C6.38 7.6 7.68 7.29 8.91 7.8c1.21.51 2.29 1.6 2.8 2.8l2.47 5.76c.51 1.21 1.6 2.2 2.81 2.74 1.22.53 2.62.3 3.66-.57L22 17"></path>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#00acee] flex items-center justify-center hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
