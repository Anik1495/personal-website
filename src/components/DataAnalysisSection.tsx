
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChartBar, ChartLine, Database, Files } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
} from 'recharts';

const DataAnalysisSection = () => {
  // Data for the tools chart
  const toolsData = [
    { name: 'Python', value: 65 },
    { name: 'R', value: 15 },
    { name: 'MATLAB', value: 15 },
    { name: 'Excel', value: 5 }
  ];
  
  // Data for the project types chart
  const projectTypesData = [
    { name: 'Healthcare', value: 45 },
    { name: 'Signal Processing', value: 25 },
    { name: 'Machine Learning', value: 20 },
    { name: 'Other', value: 10 }
  ];
  
  // Colors for the charts
  const COLORS = ['#1658cd', '#4285F4', '#34A853', '#FBBC05', '#EA4335'];
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <div className="flex items-center justify-center mb-6">
            <ChartBar className="text-cvblue mr-3" size={28} />
            <h2 className="section-heading">Data Analysis Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="col-span-1 lg:col-span-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Files size={20} className="mr-2 text-cvblue" />
                  Data Analysis Projects Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ChartContainer
                    config={{
                      healthcare: { color: "#1658cd" },
                      signalProcessing: { color: "#4285F4" },
                      machineLearning: { color: "#34A853" },
                      other: { color: "#FBBC05" },
                    }}
                  >
                    <BarChart
                      data={projectTypesData}
                      margin={{
                        top: 15,
                        right: 40,
                        left: 30,
                        bottom: 30,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{fontSize: 12}} />
                      <YAxis tick={{fontSize: 12}} />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                      />
                      <Legend wrapperStyle={{fontSize: '12px'}} />
                      <Bar dataKey="value" name="Percentage" barSize={40}>
                        {projectTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ChartLine size={20} className="mr-2 text-cvblue" />
                  Analysis Tools Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      python: { color: "#1658cd" },
                      r: { color: "#4285F4" },
                      matlab: { color: "#34A853" },
                      excel: { color: "#FBBC05" },
                    }}
                  >
                    <PieChart>
                      <Pie
                        data={toolsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {toolsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg text-cvblue flex items-center">
                  <Database className="mr-2" size={18} /> 
                  Data Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Experience in gathering healthcare data from various sources including clinical trials, patient records, and sensor data with proper ethical protocols.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg text-cvblue flex items-center">
                  <ChartBar className="mr-2" size={18} />
                  Data Preprocessing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Skilled in cleaning, normalizing, and transforming biomedical data for analysis, including handling missing values and outliers in healthcare datasets.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg text-cvblue flex items-center">
                  <ChartLine className="mr-2" size={18} />
                  Data Visualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Creating informative visual representations of complex healthcare and biomedical data to communicate insights effectively to both technical and clinical stakeholders.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-cvblue text-cvblue hover:bg-cvblue hover:text-white">
              <Link to="/data-analysis">
                View Data Analysis Portfolio <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisSection;
