import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, Phone, Lock, User, Utensils } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login logic
    if (phone && password) {
      toast({
        title: "Login Successful!",
        description: `Welcome to ChefMate ${userType} dashboard`,
      });
      
      // Navigate based on user type
      switch (userType) {
        case 'customer':
          navigate('/customer');
          break;
        case 'kitchen':
          navigate('/kitchen');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/customer');
      }
    } else {
      toast({
        title: "เเจ้งเตือน",
        description: "กรุณากรอกข้อมูลให้ครบ",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo & Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
            <ChefHat className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">ChefMate</h1>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">เข้าสู่ระบบ</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <Tabs value={userType} onValueChange={setUserType} className="mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="customer" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Customer
                </TabsTrigger>
                <TabsTrigger value="kitchen" className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Kitchen
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs> */}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="กรอกเบอร์โทรศัพท์ของคุณ"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">รหัสผ่าน</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="กรอกรหัสผ่านของคุณ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                ยืนยัน
                {/* Sign In to {userType.charAt(0).toUpperCase() + userType.slice(1)} */}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <Button variant="link" className="text-sm">
                ลืมรหัสผ่าน?
              </Button>
              <div className="text-sm text-muted-foreground">
                ยังไม่มีบัญชีใช่ไหม?{' '}
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary"
                  onClick={() => navigate('/signup')}
                >
                  สร้างบัญชี
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        {/* <Card className="mt-4 bg-muted/50">
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground text-center">
              Demo: Use any phone number and password to login
            </p>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Login;