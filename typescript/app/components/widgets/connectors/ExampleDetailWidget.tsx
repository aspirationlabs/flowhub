'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';

export function ExampleDetailWidget() {
  return (
    <Card className="bg-card/30 backdrop-blur-md border-card/50 text-foreground">
      <CardHeader>
        <CardTitle>Example Connector</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-12">
          <p className="text-2xl font-medium text-foreground">Hello, world!</p>
        </div>
      </CardContent>
    </Card>
  );
}
