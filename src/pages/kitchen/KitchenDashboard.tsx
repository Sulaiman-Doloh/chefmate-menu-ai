import { useState } from 'react';
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
  Users
} from 'lucide-react';

const KitchenDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      customer: "John Smith",
      items: ["Grilled Salmon", "Caesar Salad", "Lemon Cake"],
      status: "new",
      orderTime: "2:15 PM",
      type: "dine-in"
    },
    {
      id: "ORD-002", 
      customer: "Sarah Johnson",
      items: ["Truffle Pasta", "Garlic Bread"],
      status: "in-progress",
      orderTime: "2:10 PM",
      type: "delivery"
    },
    {
      id: "ORD-003",
      customer: "Mike Wilson", 
      items: ["Beef Burger", "French Fries", "Coke"],
      status: "in-progress",
      orderTime: "2:05 PM",
      type: "pickup"
    }
  ]);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'destructive';
      case 'in-progress': return 'outline';
      case 'ready': return 'default';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return AlertCircle;
      case 'in-progress': return Timer;
      case 'ready': return CheckCircle;
      default: return Clock;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'dine-in': return Home;
      case 'delivery': return Truck;
      case 'pickup': return Package;
      default: return Home;
    }
  };

  const stats = {
    totalOrders: orders.length,
    newOrders: orders.filter(o => o.status === 'new').length,
    inProgress: orders.filter(o => o.status === 'in-progress').length,
    completed: orders.filter(o => o.status === 'ready').length
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
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
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalOrders}</p>
                </div>
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New Orders</p>
                  <p className="text-2xl font-bold text-destructive">{stats.newOrders}</p>
                </div>
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold text-warning">{stats.inProgress}</p>
                </div>
                <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                  <Timer className="w-4 h-4 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-accent">{stats.completed}</p>
                </div>
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Active Orders</h2>
          
          {orders.map((order, index) => {
            const StatusIcon = getStatusIcon(order.status);
            const TypeIcon = getTypeIcon(order.type);
            
            return (
              <Card key={order.id} className="hover:shadow-card transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <StatusIcon className="w-5 h-5 text-muted-foreground" />
                        <CardTitle className="text-lg">{order.id}</CardTitle>
                      </div>
                      <Badge variant={getStatusColor(order.status)}>
                        {order.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TypeIcon className="w-4 h-4" />
                      <span>{order.type}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{order.orderTime}</span>
                    </div>
                  </div>
                  <CardDescription>Customer: {order.customer}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Order Items:</h4>
                      <div className="flex flex-wrap gap-2">
                        {order.items.map((item, idx) => (
                          <Badge key={idx} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {order.status === 'new' && (
                        <Button 
                          variant="default"
                          onClick={() => updateOrderStatus(order.id, 'in-progress')}
                        >
                          Accept Order
                        </Button>
                      )}
                      
                      {order.status === 'in-progress' && (
                        <div className="flex gap-2">
                          <Button 
                            variant="success"
                            onClick={() => updateOrderStatus(order.id, 'ready')}
                          >
                            Mark as Ready
                          </Button>
                        </div>
                      )}
                      
                      {order.status === 'ready' && (
                        <div className="flex gap-2">
                          {order.type === 'dine-in' && (
                            <Button variant="elegant">
                              <Home className="w-4 h-4 mr-2" />
                              Ready to Serve
                            </Button>
                          )}
                          {order.type === 'delivery' && (
                            <Button variant="elegant">
                              <Truck className="w-4 h-4 mr-2" />
                              Ready for Delivery
                            </Button>
                          )}
                          {order.type === 'pickup' && (
                            <Button variant="elegant">
                              <Package className="w-4 h-4 mr-2" />
                              Ready for Pickup
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {orders.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <ChefHat className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No Active Orders</h3>
              <p className="text-muted-foreground">When new orders come in, they'll appear here.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default KitchenDashboard;