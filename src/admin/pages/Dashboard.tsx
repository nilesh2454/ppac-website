import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Study Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Alumni</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">150+</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard; 