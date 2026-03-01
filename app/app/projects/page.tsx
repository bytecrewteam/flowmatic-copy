'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Plus, Play, Pause, MoreHorizontal, Search, Filter, Clock, Zap, Archive, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { projects, formatRelativeTime, formatDate } from '@/lib/mock-data';
import { toast } from '@/lib/store/useToastStore';
import type { Project } from '@/types';

const statusColors = {
  active: 'success' as const,
  archived: 'neutral' as const,
};

const statusLabels = {
  active: 'Active',
  archived: 'Archived',
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e8f4]">Projects</h1>
          <p className="text-[#6b6b9a]">Organize your workflows into projects</p>
        </div>
        <Button onClick={() => toast.info('Create project coming soon')}>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] placeholder-[#6b6b9a] focus:outline-none focus:border-[#6c47ff]"
            />
          </div>
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'archived'].map((status) => (
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

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card hover className="h-full">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6c47ff]/10 flex items-center justify-center">
                    <FolderKanban className="w-6 h-6 text-[#6c47ff]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={statusColors[project.status]}>{statusLabels[project.status]}</Badge>
                    <button
                      onClick={() => toast.info('More options coming soon')}
                      className="p-1 text-[#6b6b9a] hover:text-[#e8e8f4] transition-colors rounded-lg hover:bg-[#161626]"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">{project.name}</h3>
                <p className="text-sm text-[#6b6b9a] mb-4 line-clamp-2">{project.description}</p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-[#6b6b9a]">Progress</span>
                    <span className="text-[#e8e8f4] font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1e1e35] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6c47ff] rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-[#6b6b9a] mb-4">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>{project.workflowCount} workflows</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{formatRelativeTime(project.lastRun)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-[#1e1e35]">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={() => toast.info(`Opening ${project.name}`)}
                  >
                    View Details
                  </Button>
                  {project.status === 'active' ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toast.info('Pause project coming soon')}
                    >
                      <Pause className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toast.info('Archive project coming soon')}
                    >
                      <Archive className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="col-span-full">
            <Card>
              <CardContent className="p-12 text-center">
                <FolderKanban className="w-12 h-12 text-[#6b6b9a] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">No projects found</h3>
                <p className="text-[#6b6b9a] mb-6">
                  {searchQuery || statusFilter !== 'all'
                    ? 'Try adjusting your search or filters'
                    : 'Create your first project to organize your workflows'}
                </p>
                {!searchQuery && statusFilter === 'all' && (
                  <Button onClick={() => toast.info('Create project coming soon')}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Project
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
