'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Calendar, Zap, CheckCircle2, XCircle, Clock, Download, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  tasksPerDay, 
  tasksPerDay30Days, 
  topWorkflowsByRuns, 
  runsByDayOfWeek,
  runsByTrigger,
  formatNumber,
  formatPercentage
} from '@/lib/mock-data';

// Note: In a real app, we'd use Recharts here
// For this demo, we'll create visual representations with CSS

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  
  const chartData = timeRange === '7d' ? tasksPerDay : tasksPerDay30Days;
  const maxValue = Math.max(...chartData.map(d => d.value));
  
  // Calculate totals
  const totalRuns = chartData.reduce((acc, d) => acc + d.value, 0);
  const avgDaily = Math.round(totalRuns / chartData.length);
  const successRate = 97.8;
  const totalTimeSaved = 156.4;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e8f4]">Analytics</h1>
          <p className="text-[#6b6b9a]">Track your automation performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-[#0f0f1c] border border-[#1e1e35] rounded-lg p-1">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  timeRange === range
                    ? 'bg-[#6c47ff] text-white'
                    : 'text-[#6b6b9a] hover:text-[#e8e8f4]'
                }`}
              >
                {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
          <Button variant="secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#6c47ff]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#6c47ff]" />
              </div>
              <span className="text-sm text-[#6b6b9a]">Total Runs</span>
            </div>
            <p className="text-2xl font-bold text-[#e8e8f4]">{formatNumber(totalRuns)}</p>
            <p className="text-sm text-[#00c48c] mt-1">{formatPercentage(12)} from last period</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#00c48c]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#00c48c]" />
              </div>
              <span className="text-sm text-[#6b6b9a]">Avg Daily Runs</span>
            </div>
            <p className="text-2xl font-bold text-[#e8e8f4]">{formatNumber(avgDaily)}</p>
            <p className="text-sm text-[#00c48c] mt-1">{formatPercentage(8)} from last period</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#00c48c]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#00c48c]" />
              </div>
              <span className="text-sm text-[#6b6b9a]">Success Rate</span>
            </div>
            <p className="text-2xl font-bold text-[#e8e8f4]">{successRate}%</p>
            <p className="text-sm text-[#00c48c] mt-1">{formatPercentage(2.1)} from last period</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffab00]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#ffab00]" />
              </div>
              <span className="text-sm text-[#6b6b9a]">Time Saved</span>
            </div>
            <p className="text-2xl font-bold text-[#e8e8f4]">{totalTimeSaved} hrs</p>
            <p className="text-sm text-[#00c48c] mt-1">{formatPercentage(15)} from last period</p>
          </Card>
        </motion.div>
      </div>

      {/* Main Chart */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-[#e8e8f4] mb-6">Tasks Automated Over Time</h2>
          <div className="h-64 flex items-end gap-1">
            {chartData.map((point, i) => (
              <motion.div
                key={point.date}
                className="flex-1 flex flex-col items-center gap-2"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                style={{ originY: 1 }}
              >
                <div 
                  className="w-full bg-gradient-to-t from-[#6c47ff] to-[#8b5cf6] rounded-t-sm hover:from-[#7c55ff] hover:to-[#9b6dff] transition-all cursor-pointer group relative"
                  style={{ height: `${(point.value / maxValue) * 100}%`, minHeight: '4px' }}
                >
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0f0f1c] border border-[#1e1e35] px-2 py-1 rounded text-xs text-[#e8e8f4] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {formatNumber(point.value)} tasks
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-[#6b6b9a]">
            <span>{chartData[0]?.date}</span>
            <span>{chartData[chartData.length - 1]?.date}</span>
          </div>
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Workflows */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#e8e8f4] mb-6">Top Workflows by Runs</h2>
            <div className="space-y-4">
              {topWorkflowsByRuns.map((workflow, i) => (
                <motion.div
                  key={workflow.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-[#6b6b9a] w-5">{i + 1}</span>
                      <span className="text-sm text-[#e8e8f4]">{workflow.name}</span>
                    </div>
                    <span className="text-sm font-medium text-[#6c47ff]">{formatNumber(workflow.runs)}</span>
                  </div>
                  <div className="h-1.5 bg-[#1e1e35] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6c47ff] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(workflow.runs / topWorkflowsByRuns[0].runs) * 100}%` }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Runs by Day of Week */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#e8e8f4] mb-6">Runs by Day of Week</h2>
            <div className="flex items-end justify-between h-48 gap-2">
              {runsByDayOfWeek.map((day, i) => (
                <motion.div
                  key={day.day}
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  style={{ originY: 1 }}
                >
                  <span className="text-xs text-[#6b6b9a]">{formatNumber(day.value)}</span>
                  <div 
                    className="w-full bg-[#6c47ff] rounded-t-sm"
                    style={{ height: `${(day.value / Math.max(...runsByDayOfWeek.map(d => d.value))) * 100}%`, minHeight: '8px' }}
                  />
                  <span className="text-xs text-[#6b6b9a]">{day.day}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Runs by Trigger Type */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-[#e8e8f4] mb-6">Runs by Trigger Type</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {runsByTrigger.map((trigger, i) => (
              <motion.div
                key={trigger.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-[#0f0f1c] border border-[#1e1e35] rounded-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#e8e8f4]">{trigger.name}</span>
                  <Badge variant="info">{trigger.value}%</Badge>
                </div>
                <div className="h-2 bg-[#1e1e35] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#6c47ff] to-[#00c48c] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${trigger.value}%` }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
