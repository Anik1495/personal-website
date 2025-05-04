
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { ChartBar, Database, Files, ChartLine, ChartPie, Layers } from 'lucide-react';
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
  Tooltip,
  LineChart,
  Line
} from 'recharts';

const DataAnalysis = () => {
  // Colors for the charts
  const COLORS = ['#1658cd', '#4285F4', '#34A853', '#FBBC05', '#EA4335'];
  
  // Data for data volume by year
  const yearlyDataVolume = [
    { name: '2020', value: 20 },
    { name: '2021', value: 35 },
    { name: '2022', value: 55 },
    { name: '2023', value: 75 },
    { name: '2024', value: 100 }
  ];

  // Data for analysis techniques used
  const analysisTechniques = [
    { name: 'Statistical Analysis', value: 30 },
    { name: 'Machine Learning', value: 25 },
    { name: 'Signal Processing', value: 20 },
    { name: 'Data Mining', value: 15 },
    { name: 'Neural Networks', value: 10 }
  ];
  
  // Data for tools used
  const toolsUsed = [
    { name: 'Python', value: 65 },
    { name: 'R', value: 15 },
    { name: 'MATLAB', value: 15 },
    { name: 'Excel', value: 5 }
  ];

  // Projects data for table
  const projects = [
    {
      name: "Prescription Error Detection System",
      type: "Healthcare",
      techniques: "Statistical Analysis, Rule-Based Systems",
      tools: "Python (Pandas, NumPy)",
      year: "2023-2024"
    },
    {
      name: "ECG & SCG Signal Processing",
      type: "Biomedical",
      techniques: "Signal Processing, Pattern Recognition",
      tools: "MATLAB, Python (SciPy)",
      year: "2022-2023"
    },
    {
      name: "Gestational Diabetes Prediction",
      type: "Healthcare",
      techniques: "Machine Learning, Classification",
      tools: "Python (Scikit-learn, XGBoost)",
      year: "2022"
    },
    {
      name: "Posture Monitoring Data Analysis",
      type: "IoT/Healthcare",
      techniques: "Time Series Analysis, Classification",
      tools: "Python, MATLAB",
      year: "2021-2022"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-8">
            <ChartBar className="text-cvblue mr-3" size={32} />
            <h1 className="text-4xl font-serif font-bold text-cvblue">Data Analysis Portfolio</h1>
          </div>
          
          <p className="text-lg text-gray-600 mb-10">
            As a biomedical engineer with a focus on health informatics, I specialize in analyzing complex healthcare and biomedical data to extract meaningful insights. My expertise spans from signal processing to machine learning applications in healthcare.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ChartLine className="mr-2 text-cvblue" size={20} />
                  Data Volume Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[220px]">
                  <ChartContainer
                    config={{
                      data: { color: "#1658cd" },
                    }}
                  >
                    <LineChart
                      data={yearlyDataVolume}
                      margin={{
                        top: 5,
                        right: 20,
                        left: 10,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{fontSize: 12}} />
                      <YAxis tick={{fontSize: 12}} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend wrapperStyle={{fontSize: '12px'}} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        name="Data Volume (GB)" 
                        stroke="#1658cd" 
                        activeDot={{ r: 6 }} 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ChartPie className="mr-2 text-cvblue" size={20} />
                  Analysis Techniques Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[220px]">
                  <ChartContainer
                    config={{
                      technique: { color: "#1658cd" },
                    }}
                  >
                    <PieChart>
                      <Pie
                        data={analysisTechniques}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                      >
                        {analysisTechniques.map((entry, index) => (
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
          
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2 text-cvblue" size={20} />
                Data Analysis Project History
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Techniques</TableHead>
                    <TableHead>Tools</TableHead>
                    <TableHead>Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.type}</TableCell>
                      <TableCell>{project.techniques}</TableCell>
                      <TableCell>{project.tools}</TableCell>
                      <TableCell>{project.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 text-cvblue" size={20} />
                  Core Data Analysis Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Data Collection & Processing</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Clinical data extraction</li>
                      <li>Biomedical signal acquisition</li>
                      <li>Data cleaning & normalization</li>
                      <li>Feature extraction</li>
                      <li>Handling missing values</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Analysis Techniques</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Statistical hypothesis testing</li>
                      <li>Time-series analysis</li>
                      <li>Machine learning classification</li>
                      <li>Correlation analysis</li>
                      <li>Signal processing algorithms</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Visualization & Reporting</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Interactive dashboards</li>
                      <li>Publication-ready figures</li>
                      <li>Time-series visualizations</li>
                      <li>Clinical data representation</li>
                      <li>Technical report writing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Files className="mr-2 text-cvblue" size={20} />
                Technical Toolset Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ChartContainer
                  config={{
                    tool: { color: "#1658cd" },
                  }}
                >
                  <BarChart
                    data={toolsUsed}
                    margin={{
                      top: 5,
                      right: 20,
                      left: 20,
                      bottom: 5,
                    }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tick={{fontSize: 12}} />
                    <YAxis dataKey="name" type="category" tick={{fontSize: 12}} width={60} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend wrapperStyle={{fontSize: '12px'}} />
                    <Bar 
                      dataKey="value" 
                      name="Usage Percentage" 
                      radius={[0, 4, 4, 0]}
                    >
                      {toolsUsed.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataAnalysis;
