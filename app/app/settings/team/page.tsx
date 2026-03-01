'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, MoreHorizontal, Mail, Shield, Clock, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { teamMembers, formatDate } from '@/lib/mock-data';
import { toast } from '@/lib/store/useToastStore';
import type { TeamRole } from '@/types';

const roleConfig = {
  owner: { label: 'Owner', color: 'success' as const },
  admin: { label: 'Admin', color: 'info' as const },
  member: { label: 'Member', color: 'neutral' as const },
  viewer: { label: 'Viewer', color: 'neutral' as const },
};

export default function TeamSettingsPage() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<TeamRole>('member');

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    
    toast.success(`Invitation sent to ${inviteEmail}`);
    setInviteEmail('');
    setShowInviteModal(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[#e8e8f4]">Team Members</h3>
          <p className="text-sm text-[#6b6b9a]">Manage your team and their permissions</p>
        </div>
        <Button onClick={() => setShowInviteModal(true)}>
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#6c47ff]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#6c47ff]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#e8e8f4]">{teamMembers.length}</p>
              <p className="text-sm text-[#6b6b9a]">Total Members</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00c48c]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#00c48c]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#e8e8f4]">
                {teamMembers.filter(m => m.role === 'admin' || m.role === 'owner').length}
              </p>
              <p className="text-sm text-[#6b6b9a]">Admins</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ffab00]/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#ffab00]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#e8e8f4]">10</p>
              <p className="text-sm text-[#6b6b9a]">Seats Available</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Members List */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e1e35]">
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Member</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Role</th>
                  <th className="text-left p-4 text-sm font-medium text-[#6b6b9a]">Joined</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, i) => {
                  const role = roleConfig[member.role];
                  
                  return (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-[#1e1e35]"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#6c47ff] flex items-center justify-center text-white font-medium">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-[#e8e8f4]">{member.name}</p>
                            <p className="text-sm text-[#6b6b9a]">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={role.color}>{role.label}</Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-[#6b6b9a]">{formatDate(member.joinedAt)}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          {member.role !== 'owner' && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toast.info('Edit role coming soon')}
                              >
                                <Shield className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toast.info('Remove member coming soon')}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#e8e8f4] mb-4">Invite Team Member</h3>
                <form onSubmit={handleInvite}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
                        <input
                          type="email"
                          value={inviteEmail}
                          onChange={(e) => setInviteEmail(e.target.value)}
                          placeholder="colleague@company.com"
                          className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] focus:outline-none focus:border-[#6c47ff]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                        Role
                      </label>
                      <div className="flex gap-2">
                        {(['member', 'admin', 'viewer'] as TeamRole[]).map((role) => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => setInviteRole(role)}
                            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              inviteRole === role
                                ? 'bg-[#6c47ff] text-white'
                                : 'bg-[#0f0f1c] text-[#6b6b9a] border border-[#1e1e35] hover:text-[#e8e8f4]'
                            }`}
                          >
                            {roleConfig[role].label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button
                      type="button"
                      variant="secondary"
                      className="flex-1"
                      onClick={() => setShowInviteModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Send Invite
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}
