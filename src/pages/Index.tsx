// หน้า Home chefmate (ภาษาไทย)
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Users, Utensils, TrendingUp, Brain, Clock, BarChart3, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "วิเคราะห์ด้วย AI",
      description: "รู้ว่าเมนูไหนขายดี และแนะนำโปรโมชันที่เหมาะสม"
    },
    {
      icon: TrendingUp,
      title: "ติดตามยอดขายแบบเรียลไทม์",
      description: "ดูยอดขายรายวัน รายสัปดาห์ และรายเดือนแบบละเอียด"
    },
    {
      icon: Users,
      title: "แยกหน้าจอตามบทบาท",
      description: "ลูกค้า พนักงาน และผู้ดูแลระบบมีหน้าจอใช้งานของตัวเอง"
    },
    {
      icon: Clock,
      title: "ติดตามสถานะออเดอร์",
      description: "อัปเดตออเดอร์แบบสด ๆ ตั้งแต่รับถึงเสิร์ฟ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm font-[\'Noto Sans Thai\']">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ChefMate</h1>
                <p className="text-xs text-muted-foreground">ระบบช่วยบริหารร้านอาหารด้วย AI</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate('/login')}>
                เข้าสู่ระบบ
              </Button>
              <Button onClick={() => navigate('/signup')}>
                เริ่มต้นใช้งาน
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-glow">
            <ChefHat className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            ยินดีต้อนรับสู่ <span className="text-primary block">ChefMate</span>
          </h1>
          {/* สินค้าแนะนำ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">สินค้าแนะนำ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
              {/* 8 เมนูอาหาร ตัวอย่าง */}
              {[
                {
                  name: 'ข้าวผัดปู',
                  img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
                  desc: 'ข้าวผัดหอมๆ กับเนื้อปูสดใหม่ รสกลมกล่อม',
                  price: 120
                },
                {
                  name: 'ต้มยำกุ้ง',
                  img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
                  desc: 'ต้มยำรสจัดจ้าน หอมสมุนไพรไทย กุ้งตัวโต',
                  price: 150
                },
                {
                  name: 'ผัดไทยกุ้งสด',
                  img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
                  desc: 'เส้นเหนียวนุ่ม ผัดซอสเข้มข้น กุ้งสดเต็มคำ',
                  price: 90
                },
                {
                  name: 'แกงเขียวหวานไก่',
                  img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
                  desc: 'แกงเขียวหวานรสเข้มข้น ไก่นุ่มละมุน',
                  price: 130
                },
                {
                  name: 'ส้มตำไทย',
                  img: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
                  desc: 'ส้มตำรสแซ่บ กลมกล่อมแบบไทยแท้',
                  price: 60
                },
                {
                  name: 'ลาบหมู',
                  img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
                  desc: 'ลาบหมูรสจัดจ้าน หอมข้าวคั่ว',
                  price: 80
                },
                {
                  name: 'ข้าวมันไก่',
                  img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
                  desc: 'ข้าวมันไก่เนื้อนุ่ม น้ำจิ้มรสเด็ด',
                  price: 70
                },
                {
                  name: 'หมูกรอบผัดพริกเกลือ',
                  img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
                  desc: 'หมูกรอบผัดพริกเกลือรสเข้มข้น',
                  price: 110
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-background border rounded-lg shadow-md p-6 flex flex-col items-center animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                  <img src={item.img} alt={item.name} className="w-32 h-32 object-cover rounded-full mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                  <span className="font-bold text-primary text-xl">฿{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ปุ่มดูเมนูทั้งหมด */}
        <div className="mb-16 flex justify-center">
          <button
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-xl shadow-lg hover:bg-primary/90 transition-all duration-200"
            onClick={() => navigate('/customer')}
          >
            ดูเมนูทั้งหมด
          </button>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-primary text-primary-foreground shadow-glow animate-scale-in">
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">ร้านอาหารทั่วโลกไว้วางใจ ChefMate</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="opacity-90">ร้านที่ใช้งานจริง</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="opacity-90">ความพึงพอใจของลูกค้า</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25%</div>
                  <p className="opacity-90">รายได้เฉลี่ยที่เพิ่มขึ้น</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">ChefMate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ChefMate. สร้างขึ้นเพื่อช่วยร้านอาหารด้วยเทคโนโลยี AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
