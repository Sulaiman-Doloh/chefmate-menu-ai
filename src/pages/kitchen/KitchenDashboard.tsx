import { useEffect, useState, useRef } from 'react';  // 🔄 เพิ่ม useRef เพื่อเช็คออร์เดอร์ใหม่
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Clock, 
  CheckCircle, 
  Package, 
  Truck, 
  Home,
  AlertCircle,
  Timer,
  Users,
  Filter
} from 'lucide-react';

const API_URL = 'https://script.google.com/macros/s/AKfycbxpAJiAjwxCf9w4LMuYoJWL--FGDQ4LyNgCiw7JaNFwVcnHYqeF1vzreVXqZ6iOuf8G_g/exec';

interface Order {
  orderId: string;
  tableNo: string;
  menu: string;
  status: string;
  type: string;
  timestamp: string;
}

const KitchenDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<string>('ทั้งหมด');
  const prevOrderIds = useRef<string[]>([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const filtered = data.filter((o: Order) => o.status === 'รอรับออร์เดอร์' || o.status === 'กำลังทำ');

      const newIds = filtered.map(o => o.orderId);
      const isNewOrder = newIds.some(id => !prevOrderIds.current.includes(id));
      if (isNewOrder) {
        const audio = new Audio('/notify.mp3');
        audio.play();
      }
      prevOrderIds.current = newIds;
      setOrders(filtered);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    await fetch(API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, status: newStatus })
    });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 8000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'รอรับออร์เดอร์': return AlertCircle;
      case 'กำลังทำ': return Timer;
      case 'พร้อมเสิร์ฟ':
      case 'พร้อมจัดส่ง':
      case 'พร้อมรับอาหาร': return CheckCircle;
      default: return Clock;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'In-store': return Home;
      case 'Delivery': return Truck;
      case 'Takeaway': return Package;
      default: return Home;
    }
  };

  const filteredOrders = filter === 'ทั้งหมด' ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="min-h-screen bg-gradient-warm">
      <header className="bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ChefMate Kitchen</h1>
                <p className="text-xs text-muted-foreground">Real-time Order Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                Kitchen Staff
              </Badge>
              <div className="flex items-center gap-1">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  className="text-sm border rounded px-2 py-1 bg-white"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="ทั้งหมด">ทั้งหมด</option>
                  <option value="รอรับออร์เดอร์">รอรับออร์เดอร์</option>
                  <option value="กำลังทำ">กำลังทำ</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Active Orders</h2>

          {filteredOrders.map((order, index) => {
            const StatusIcon = getStatusIcon(order.status);
            const TypeIcon = getTypeIcon(order.type);

            return (
              <Card
                key={order.orderId}
                className="hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <StatusIcon className="w-5 h-5 text-muted-foreground" />
                        <CardTitle className="text-lg">Order #{order.orderId}</CardTitle>
                      </div>
                      <Badge variant="outline">{order.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TypeIcon className="w-4 h-4" />
                      <span>{order.type}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{new Date(order.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                  <CardDescription>โต๊ะ: {order.tableNo} | เมนู: {order.menu}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex gap-2">
                    {order.status === 'รอรับออร์เดอร์' && (
                      <Button onClick={() => updateOrderStatus(order.orderId, 'กำลังทำ')}>
                        รับออร์เดอร์
                      </Button>
                    )}
                    {order.status === 'กำลังทำ' && (
                      <Button onClick={() => {
                        let finalStatus = 'เสร็จสิ้น';
                        if (order.type === 'In-store') finalStatus = 'พร้อมเสิร์ฟ';
                        else if (order.type === 'Delivery') finalStatus = 'พร้อมจัดส่ง';
                        else if (order.type === 'Takeaway') finalStatus = 'พร้อมรับอาหาร';
                        updateOrderStatus(order.orderId, finalStatus);
                      }}>
                        เสร็จสิ้น
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {filteredOrders.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <ChefHat className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Active Orders</h3>
                <p className="text-muted-foreground">When new orders come in, they'll appear here.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default KitchenDashboard;
