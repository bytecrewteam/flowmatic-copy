'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, CheckCheck, X, AlertCircle, AlertTriangle, Info, User, CheckCircle2, XCircle, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useNotificationStore } from '@/lib/store/useNotificationStore';
import { formatRelativeTime } from '@/lib/mock-data';
import type { NotificationType } from '@/types';

const typeConfig = {
  success: { icon: CheckCircle2, color: 'text-[#00c48c]', bg: 'bg-[#00c48c]/10', border: 'border-[#00c48c]/20' },
  error: { icon: XCircle, color: 'text-[#f04438]', bg: 'bg-[#f04438]/10', border: 'border-[#f04438]/20' },
  warning: { icon: AlertTriangle, color: 'text-[#ffab00]', bg: 'bg-[#ffab00]/10', border: 'border-[#ffab00]/20' },
  info: { icon: Info, color: 'text-[#3b82f6]', bg: 'bg-[#3b82f6]/10', border: 'border-[#3b82f6]/20' },
  user: { icon: User, color: 'text-[#6c47ff]', bg: 'bg-[#6c47ff]/10', border: 'border-[#6c47ff]/20' },
};

type FilterType = 'all' | 'unread';

export default function NotificationsPage() {
  const { notifications, markAsRead, markAllAsRead, unreadCount } = useNotificationStore();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredNotifications = notifications.filter((n) => 
    filter === 'all' || (filter === 'unread' && !n.isRead)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e8f4]">Notifications</h1>
          <p className="text-[#6b6b9a]">
            {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'You\'re all caught up!'}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="secondary" onClick={markAllAsRead}>
            <CheckCheck className="w-4 h-4 mr-2" />
            Mark all as read
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(['all', 'unread'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-[#6c47ff] text-white'
                : 'bg-[#0f0f1c] text-[#6b6b9a] hover:text-[#e8e8f4] border border-[#1e1e35]'
            }`}
          >
            {f === 'all' ? 'All' : 'Unread'}
            {f === 'unread' && unreadCount > 0 && (
              <span className="ml-2 px-1.5 py-0.5 bg-[#f04438] text-white text-xs rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredNotifications.map((notification, i) => {
            const config = typeConfig[notification.type];
            const Icon = config.icon;

            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card 
                  className={`${
                    !notification.isRead ? 'border-l-4 border-l-[#6c47ff]' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${config.color}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-medium text-[#e8e8f4]">{notification.title}</h3>
                            {notification.message && (
                              <p className="text-sm text-[#6b6b9a] mt-1">{notification.message}</p>
                            )}
                          </div>
                          {!notification.isRead && (
                            <span className="w-2 h-2 rounded-full bg-[#6c47ff] flex-shrink-0 mt-2" />
                          )}
                        </div>
                        <p className="text-xs text-[#6b6b9a] mt-2">
                          {formatRelativeTime(notification.createdAt)}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {!notification.isRead && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            title="Mark as read"
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => console.log('Delete notification')}
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="w-12 h-12 text-[#6b6b9a] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">
                {filter === 'unread' ? 'No unread notifications' : 'No notifications'}
              </h3>
              <p className="text-[#6b6b9a]">
                {filter === 'unread' 
                  ? 'You\'ve read all your notifications' 
                  : 'You\'re all caught up!'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
