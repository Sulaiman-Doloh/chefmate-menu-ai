import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Phone, Lock, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: '',
    otp: '',
    name: '',
    lineId: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.password || !formData.confirmPassword) {
      toast({
        title: "เเจ้งเตือน",
        description: "กรุณากรอกข้อมูลให้ครบ",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "เเจ้งเตือน", 
        description: "รหัสผ่านไม่ตรงกัน",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "เเจ้งเตือน OTP!",
      description: "ตรวจสอบรหัส OTP",
    });
    setStep(2);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.otp) {
      toast({
        title: "เเจ้งเตือน",
        description: "กรอกรหัส OTP",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "เเจ้งเตือน!",
      description: "กรุณากรอกข้อมูลให้ครบ",
    });
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name) {
      toast({
        title: "เเจ้งเตือน!",
        description: "กรุณากรอกชื่อของคุณ",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "เเจ้งเตือน",
      description: "ยินดีต้อนรับสู่ ChefMate คุณสามารถเริ่มสั่งซื้อได้แล้ว",
    });
    navigate('/customer');
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
          <p className="text-muted-foreground">สร้างบัญชีของคุณ</p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {step === 1 && "สร้างบัญชี"}
              {step === 2 && "ยืนยันหมายเลขโทรศัพท์"}
              {step === 3 && "สร้างบัญชีเรียบร้อย"}
            </CardTitle>
            <CardDescription className="text-center">
              {step === 1 && "กรอกเบอร์โทรศัพท์และสร้างรหัสผ่าน"}
              {step === 2 && "ป้อนรหัสยืนยันที่ส่งไปยังโทรศัพท์ของคุณ"}
              {step === 3 && "ยินดีต้อนรับ"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Step Indicator */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      stepNum <= step 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-8 h-0.5 transition-all duration-300 ${
                        stepNum < step ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Phone & Password */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="กรอกเบอร์โทรศัพท์ของคุณ"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="pl-10"
                      required
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
                      placeholder="สร้างรหัสผ่าน"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="ยืนยันรหัสผ่านของคุณ"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  ส่งรหัสยืนยัน
                </Button>
              </form>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    เราส่งรหัสยืนยันไปที่ {formData.phone}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otp">รหัส OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="กรอกรหัส OTP"
                    value={formData.otp}
                    onChange={(e) => handleInputChange('otp', e.target.value)}
                    className="text-center text-lg tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                    ย้อนกลับ
                  </Button>
                  <Button type="submit" className="flex-1">
                    ยืนยันหมายเลขโทรศัพท์
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="link" className="text-sm">
                    ไม่ได้รับรหัส? ส่งอีกครั้ง
                  </Button>
                </div>
              </form>
            )}

            {/* Step 3: Profile Completion */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    เกือบเสร็จแล้ว! เหลือรายละเอียดอีกเล็กน้อย
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="กรุณากรอกชื่อ-นามสกุลของคุณ"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lineId">ไลน์ไอดี (ไม่บังคับ)</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lineId"
                      type="text"
                      placeholder="กรอกไลน์ ID ของคุณ"
                      value={formData.lineId}
                      onChange={(e) => handleInputChange('lineId', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>
                    ย้อนกลับ
                  </Button>
                  <Button type="submit" className="flex-1">
                    ลงทะเบียนให้เสร็จสมบูรณ์
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6 text-center">
              <div className="text-sm text-muted-foreground">
                มีบัญชีอยู่แล้ว?{' '}
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary"
                  onClick={() => navigate('/login')}
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;