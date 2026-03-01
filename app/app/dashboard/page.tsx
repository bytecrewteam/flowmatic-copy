'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Zap, Clock, CheckCircle2, XCircle, ArrowRight, Plus, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { dashboardStats, recentActivity, upcomingScheduledRuns, formatRelativeTime } from '@/lib/mock-data';
import { toast } from '@/lib/store/useToastStore';

const stats = [
  { label: 'Tasks Automated Today', value: dashboardStats.tasksAutomatedToday, change: dashboardStats.tasksAutomatedChange, icon: Zap, trend: 'up' },
  { label: 'Active Workflows', value: dashboardStats.activeWorkflows, change: dashboardStats.workflowsNewThisWeek, icon: CheckCircle2, trend: 'up' },
  { label: 'Time Saved This Week', value: `${dashboardStats.timeSavedThisWeek} hrs`, change: dashboardStats.timeSavedChange, icon: Clock, trend: 'up' },
  { label: 'Errors / Failed Runs', value: dashboardStats.errorsToday, change: dashboardStats.errorsChange, icon: XCircle, trend: 'down' },
];

const quickActions = [
  { label: 'Create Workflow', description: 'Build a new automation', icon: Plus, action: () => toast.info('Create workflow coming soon') },
  { label: 'Browse Templates', description: 'Start with a preset', icon: Zap, action: () => toast.info('Templates coming soon') },
  { label: 'Invite Teammate', description: 'Add a team member', icon: Users, action: () => toast.info('Invite coming soon') },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#e8e8f4]">Good morning, Alex.</h1>
        <p className="text-[#6b6b9a]">Here's what's happening with your workflows today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#6c47ff]/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#6c47ff]" />
                </div>
                <Badge variant={stat.trend === 'up' ? 'success' : stat.label.includes('Error') ? 'error' : 'neutral'} dot>
                  {stat.trend === 'up' ? '+' : ''}{stat.change}%
                </Badge>
              </div>
              <p className="text-2xl font-bold text-[#e8e8f4]">{stat.value}</p>
              <p className="text-sm text-[#6b6b9a]">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity Row */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-0">
              <div className="p-4 border-b border-[#1e1e35]">
                <h2 className="font-semibold text-[#e8e8f4]">Recent Activity</h2>
              </div>
              <div className="divide-y divide-[#1e1e35]">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4 flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-[#00c48c]' : 'bg-[#f04438]'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#e8e8f4] truncate">{activity.workflowName}</p>
                      <p className="text-xs text-[#6b6b9a]">{activity.trigger} • {formatRelativeTime(activity.timestamp)}</p>
                    </div>
                    <Badge variant={activity.status === 'success' ? 'success' : 'error'}>{activity.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Runs */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="p-4 border-b border-[#1e1e35]">
                <h2 className="font-semibold text-[#e8e8f4]">Upcoming Scheduled Runs</h2>
              </div>
              <div className="divide-y divide-[#1e1e35]">
                {upcomingScheduledRuns.map((run) => (
                  <div key={run.id} className="p-4">
                    <p className="text-sm font-medium text-[#e8e8f4]">{run.workflowName}</p>
                    <p className="text-xs text-[#6b6b9a]">{run.schedule}</p>
                    <p className="text-xs text-[#6c47ff] mt-1">Next: {formatRelativeTime(run.nextRun)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="font-semibold text-[#e8e8f4] mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={action.action}
              className="p-4 bg-[#0f0f1c] border border-[#1e1e35] rounded-xl text-left hover:border-[#2a2a45] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6c47ff]/10 flex items-center justify-center mb-3 group-hover:bg-[#6c47ff]/20 transition-colors">
                <action.icon className="w-5 h-5 text-[#6c47ff]" />
              </div>
              <p className="font-medium text-[#e8e8f4]">{action.label}</p>
              <p className="text-sm text-[#6b6b9a]">{action.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
