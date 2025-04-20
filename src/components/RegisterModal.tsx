
import { useState } from "react";
import { X, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log("Регистрация:", formData);
    // После успешной регистрации
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
            <User size={28} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Регистрация</h2>
          <p className="text-gray-400 mt-2">Создайте аккаунт для доступа ко всем возможностям EpicFix</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Имя пользователя</Label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="username"
                  name="username"
                  placeholder="Введите имя пользователя"
                  className="pl-10 bg-epicfix-gray border-epicfix-gray"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
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
                  placeholder="Минимум 8 символов"
                  className="pl-10 pr-10 bg-epicfix-gray border-epicfix-gray"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
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
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-epicfix-green hover:bg-epicfix-green/90 text-white py-2"
              >
                Создать аккаунт
              </Button>
            </div>
            
            <div className="text-center text-sm text-gray-400 mt-4">
              <p>Уже есть аккаунт? <button type="button" className="text-epicfix-green hover:underline">Войти</button></p>
            </div>
          </div>
        </form>
        
        <div className="mt-6 pt-6 border-t border-epicfix-gray">
          <p className="text-center text-xs text-gray-500">
            Регистрируясь, вы соглашаетесь с <a href="#" className="text-epicfix-green hover:underline">Условиями использования</a> и <a href="#" className="text-epicfix-green hover:underline">Политикой конфиденциальности</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
