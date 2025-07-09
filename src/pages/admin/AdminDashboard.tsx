import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChefHat, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star,
  Brain,
  BarChart3,
  Settings,
  Calendar,
  Target,
  Award,
  Clock
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock analytics data
  const salesData = {
    daily: { revenue: 2840, orders: 47, avgOrder: 60.43 },
    weekly: { revenue: 18650, orders: 312, avgOrder: 59.78 },
    monthly: { revenue: 89340, orders: 1456, avgOrder: 61.38 }
  };

  const topSellingMenus = [
    { name: "Grilled Salmon", sales: 156, revenue: 3899.44, trend: "+12%" },
    { name: "Truffle Pasta", sales: 143, revenue: 3217.50, trend: "+8%" },
    { name: "Beef Wellington", sales: 98, revenue: 3430.00, trend: "+15%" },
    { name: "Caesar Salad", sales: 87, revenue: 1044.00, trend: "+5%" }
  ];

  // AI Promotion Recommendations
  const aiRecommendations = [
    {
      dish: "Chocolate Lava Cake",
      reason: "High profit margin, trending upward in orders",
      expectedIncrease: "25%",
      confidence: "92%"
    },
    {
      dish: "Weekend Brunch Special",
      reason: "Low weekend sales, high customer satisfaction score",
      expectedIncrease: "18%",
      confidence: "87%"
    },
    {
      dish: "Seasonal Soup",
      reason: "Weather trending cold, historical data shows 40% increase",
      expectedIncrease: "40%",
      confidence: "95%"
    }
  ];

  const [activeTab, setActiveTab] = useState("overview");

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
                <h1 className="text-xl font-bold text-foreground">ChefMate Admin</h1>
                <p className="text-xs text-muted-foreground">Business Intelligence & Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Settings className="w-3 h-3" />
                Administrator
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="ai-insights" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Insights
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Management
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Daily Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">${salesData.daily.revenue}</div>
                  <p className="text-xs text-muted-foreground">
                    {salesData.daily.orders} orders today
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Weekly Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">${salesData.weekly.revenue}</div>
                  <p className="text-xs text-muted-foreground">
                    {salesData.weekly.orders} orders this week
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">${salesData.monthly.revenue}</div>
                  <p className="text-xs text-muted-foreground">
                    {salesData.monthly.orders} orders this month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Top Selling Menus */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Top Selling Menus
                </CardTitle>
                <CardDescription>Best performing dishes this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topSellingMenus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.sales} orders</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">${item.revenue}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="ai-insights" className="space-y-6">
            <Card className="bg-gradient-primary text-primary-foreground shadow-glow animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  AI-Powered Promotion Recommendations
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Smart suggestions based on sales trends, weather, and customer behavior
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {aiRecommendations.map((rec, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        {rec.dish}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          +{rec.expectedIncrease} sales
                        </Badge>
                        <Badge variant="default">
                          {rec.confidence} confidence
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{rec.reason}</p>
                    <div className="flex gap-2">
                      <Button variant="default">
                        <Award className="w-4 h-4 mr-2" />
                        Create Promotion
                      </Button>
                      <Button variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Revenue trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Chart visualization coming soon</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Customer Analytics</CardTitle>
                  <CardDescription>Customer behavior insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Customers</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">New This Week</span>
                      <span className="font-semibold text-accent">+23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg. Order Value</span>
                      <span className="font-semibold">${salesData.monthly.avgOrder}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Management Tab */}
          <TabsContent value="management" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-card transition-all duration-300 cursor-pointer animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Manage Staff</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Handle kitchen staff and customer accounts
                    </p>
                    <Button variant="outline" className="w-full">
                      View Staff
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300 cursor-pointer animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Menu Management</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add, edit, and manage menu items and pricing
                    </p>
                    <Button variant="outline" className="w-full">
                      Manage Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300 cursor-pointer animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">System Settings</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure restaurant settings and preferences
                    </p>
                    <Button variant="outline" className="w-full">
                      Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;