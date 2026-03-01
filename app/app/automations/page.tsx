'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Plus, Play, Pause, XCircle, MoreHorizontal, Search, Clock, CheckCircle2, X, Calendar, Webhook, Flashlight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { automations, formatRelativeTime } from '@/lib/mock-data';
import { toast } from '@/lib/store/useToastStore';
import type { AutomationStatus, TriggerType } from '@/types';

const statusConfig = {
  active: { color: 'success' as const, icon: CheckCircle2, label: 'Active' },
  paused: { color: 'warning' as const, icon: Pause, label: 'Paused' },
  failed: { color: 'error' as const, icon: XCircle, label: 'Failed' },
};

const triggerConfig = {
  schedule: { icon: Calendar, label: 'Schedule' },
  webhook: { icon: Webhook, label: 'Webhook' },
  manual: { icon: Zap, label: 'Manual' },
  app_event: { icon: Flashlight, label: 'App Event' },
};

export default function AutomationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredAutomations = automations.filter((automation) => {
    const matchesSearch = automation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      automation.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      automation.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || automation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e8f4]">Automations</h1>
          <p className="text-[#6b6b9a]">Manage your automated workflows</p>
        </div>
        <Button onClick={() => toast.info('Create automation coming soon')}>
          <Plus className="w-4 h-4 mr-2" />
          New Automation
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
            <input
              type="text"
              placeholder="Search automations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] placeholder-[#6b6b9a] focus:outline-none focus:border-[#6c47ff]"
            />
          </div>
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'paused', 'failed'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-[#6c47ff] text-white'
                  : 'bg-[#0f0f1c] text-[#6b6b9a] hover:text-[#e8e8f4] border border-[#1e1e35]'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Automations Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e1e35]">
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Automation</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Project</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Trigger</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Runs Today</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Success Rate</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Last Run</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredAutomations.map((automation, i) => {
                  const status = statusConfig[automation.status];
                  const trigger = triggerConfig[automation.trigger];
                  const StatusIcon = status.icon;
                  const TriggerIcon = trigger.icon;

                  return (
                    <motion.tr
                      key={automation.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-[#1e1e35] hover:bg-[#161626]/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#6c47ff]/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-5 h-5 text-[#6c47ff]" />
                          </div>
                          <div>
                            <p className="font-medium text-[#e8e8f4]">{automation.name}</p>
                            <p className="text-sm text-[#6b6b9a] truncate max-w-xs">{automation.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-[#6b6b9a]">{automation.projectName}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <TriggerIcon className="w-4 h-4 text-[#6b6b9a]" />
                          <span className="text-sm text-[#e8e8f4]">{trigger.label}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={status.color}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {status.label}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-[#e8e8f4]">{automation.runsToday.toLocaleString()}</span>
                      </td>
                      <td className="p-4">
                        <span className={`text-sm font-medium ${
                          automation.successRate >= 95 ? 'text-[#00c48c]' :
                          automation.successRate >= 85 ? 'text-[#ffab00]' :
                          'text-[#f04438]'
                        }`}>
                          {automation.successRate}%
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-[#6b6b9a]">{formatRelativeTime(automation.lastRun)}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          {automation.status === 'active' ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toast.info('Pause automation coming soon')}
                            >
                              <Pause className="w-4 h-4" />
                            </Button>
                          ) : automation.status === 'paused' ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toast.info('Resume automation coming soon')}
                            >
                              <Play className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toast.info('Retry automation coming soon')}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toast.info('More options coming soon')}
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredAutomations.length === 0 && (
            <div className="p-12 text-center">
              <Zap className="w-12 h-12 text-[#6b6b9a] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">No automations found</h3>
              <p className="text-[#6b6b9a] mb-6">
                {searchQuery || statusFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Create your first automation to get started'}
              </p>
              {!searchQuery && statusFilter === 'all' && (
                <Button onClick={() => toast.info('Create automation coming soon')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Automation
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
